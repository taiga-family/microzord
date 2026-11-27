import type {ApplicationRef, EnvironmentProviders, Provider, Type} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {Router} from '@angular/router';
import type {ApplicationConstructor, MicrozordMessageEvent} from '@microzord/core';
import {Application, MicrozordLifecycleEvent} from '@microzord/core';

export function createStandaloneApp<
    Props extends Record<string, unknown> = Record<string, unknown>,
>(
    rootComponent: Type<unknown>,
    rootSelector: string,
    providers: Array<EnvironmentProviders | Provider> = [],
): ApplicationConstructor {
    class AngularStandaloneApp<
        T extends Record<string, unknown> = Props,
    > extends Application<T> {
        private appRef: ApplicationRef | null = null;
        private router: Router | null = null;
        private rootElement: HTMLElement | null = null;

        public destroy() {
            super.destroy();

            if (this.appRef) {
                this.appRef.destroy();
                this.appRef = null;
            }

            this.rootElement?.remove();
            this.rootElement = null;

            this.emitHook(MicrozordLifecycleEvent.destroyed());
        }

        public async bootstrap(container: Element | string, props?: T): Promise<void> {
            const containerElement =
                typeof container === 'string'
                    ? document.querySelector(container)
                    : container;

            if (!containerElement) {
                throw new Error(`No container found for ${container}`);
            }

            this.rootElement = document.createElement(rootSelector);

            containerElement.appendChild(this.rootElement);

            // Angular picks the mount node by matching the root component's selector
            // against the DOM, so the element must be attached before bootstrapping.
            this.appRef = await bootstrapApplication(rootComponent, {
                providers: [...providers],
            });

            this.router = this.appRef.injector.get(Router, null);

            await super.bootstrap(container, props);

            this.emitHook(MicrozordLifecycleEvent.bootstrapped());
        }

        public async navigate(url: string, _props: unknown | undefined): Promise<void> {
            if (this.router) {
                await this.router.navigateByUrl(url);
            }
        }

        public async send(_msg: MicrozordMessageEvent | string): Promise<void> {
            //
        }
    }

    return AngularStandaloneApp;
}
