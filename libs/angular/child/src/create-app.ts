import type {CompilerOptions, NgModuleRef} from '@angular/core';
import {InjectFlags, InjectionToken} from '@angular/core';
import {Router} from '@angular/router';
import type {ApplicationConstructor, MicrozordMessageEvent} from '@microzord/core';
import {Application, MicrozordLifecycleEvent} from '@microzord/core';

export const APP_NAME = new InjectionToken<string>('[APP_NAME]: App name');
export const ROOT_SELECTOR = new InjectionToken<string>('[ROOT_SELECTOR]: Root selector');

// todo: очень грубая имплементация
export function createApp<
    TModule,
    Props extends Record<string, unknown> = Record<string, unknown>,
>(
    bootstrapFn: (props?: CompilerOptions) => Promise<NgModuleRef<TModule>>,
    rootSelector: string,
): ApplicationConstructor {
    // todo: не хватает имплементации хуков, сообщений и навигации
    class AngularApp<T extends Record<string, unknown> = Props> extends Application<T> {
        private router: Router | null = null;
        private ngModule: NgModuleRef<TModule> | null = null;

        public destroy() {
            super.destroy();

            if (this.ngModule) {
                this.ngModule.destroy();
                this.ngModule = null;
            }

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

            const rootElement = document.createElement(rootSelector);

            containerElement.appendChild(rootElement);

            this.ngModule = await bootstrapFn(props);
            this.router = this.ngModule.injector.get(Router, null, InjectFlags.Optional);

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

    return AngularApp;
}
