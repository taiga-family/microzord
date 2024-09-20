import type {ApplicationConstructor, MicrozordMessageEvent} from '@microzord/core';
import {Application, MicrozordLifecycleEvent} from '@microzord/core';
import type {ReactElement} from 'react';
import type {Root} from 'react-dom/client';
import {createRoot} from 'react-dom/client';

export function createApp<P>(name: string, element: ReactElement<P>): ApplicationConstructor {
    class ReactApplication extends Application {
        private root: Root | undefined;
        public async bootstrap(container: Element | string, props?: Record<string, unknown>) {
            container = typeof container === 'string' ? document.querySelector(container)! : container;

            this.root = createRoot(container);
            await super.bootstrap(container, props);

            this.root.render(element);
            // https://github.com/reactwg/react-18/discussions/5#discussioncomment-796012
            requestIdleCallback(() => {
                this.emitHook(MicrozordLifecycleEvent.bootstrapped());
            });
        }

        public destroy() {
            super.destroy();

            if (this.root) {
                this.root.unmount();
            }

            this.container = '';

            this.emitHook(MicrozordLifecycleEvent.destroyed());
        }

        public async navigate(_url: string, _props: unknown | undefined): Promise<void> {
            return undefined;
        }

        public async send(_msg: MicrozordMessageEvent | string): Promise<void> {
            return undefined;
        }
    }

    document.dispatchEvent(
        new CustomEvent('microzord:load', {
            detail: {name, appConstructor: ReactApplication},
        }),
    );

    return ReactApplication;
}
