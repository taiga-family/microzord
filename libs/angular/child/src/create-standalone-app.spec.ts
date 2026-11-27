import {Component} from '@angular/core';
import {LifecycleEventTypes, MicrozordLifecycleEvent} from '@microzord/core';

import {createStandaloneApp} from './create-standalone-app';

@Component({
    standalone: true,
    selector: 'test-standalone-app',
    template: '<span class="probe">standalone</span>',
})
class TestStandaloneComponent {}

describe('createStandaloneApp', () => {
    let container: HTMLElement;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        container.remove();
    });

    it('bootstraps a standalone component into the container', async () => {
        const App = createStandaloneApp(TestStandaloneComponent, 'test-standalone-app');
        const app = new App('test-app');
        const hooks: MicrozordLifecycleEvent[] = [];

        app.onHook((event) => hooks.push(event));

        await app.bootstrap(container);

        const root = container.querySelector('test-standalone-app');

        expect(root?.querySelector('.probe')?.textContent).toContain('standalone');
        expect(app.isBootstrapped).toBe(true);

        app.destroy();

        expect(container.querySelector('test-standalone-app')).toBeNull();
        expect(hooks.some(MicrozordLifecycleEvent.isBootstrappedEvent)).toBe(true);
    });

    it('destroys the application and removes the root element', async () => {
        const App = createStandaloneApp(TestStandaloneComponent, 'test-standalone-app');
        const app = new App('test-app');
        const hooks: MicrozordLifecycleEvent[] = [];

        app.onHook((event) => hooks.push(event));

        await app.bootstrap(container);
        app.destroy();

        expect(container.querySelector('test-standalone-app')).toBeNull();
        expect(app.isBootstrapped).toBe(false);
        expect(app.isDestroyed).toBe(true);
        expect(hooks.some(MicrozordLifecycleEvent.isBootstrappedEvent)).toBe(true);
    });

    it('uses LifecycleEventTypes values for hook events', async () => {
        const App = createStandaloneApp(TestStandaloneComponent, 'test-standalone-app');
        const app = new App('test-app');
        const types: string[] = [];

        app.onHook((event) => types.push(event.type));

        await app.bootstrap(container);
        app.destroy();

        expect(types).toContain(LifecycleEventTypes.bootstrapped);
    });

    it('throws when the container is missing', async () => {
        const App = createStandaloneApp(TestStandaloneComponent, 'test-standalone-app');
        const app = new App('test-app');

        await expect(app.bootstrap('#no-such-container')).rejects.toThrow(
            'No container found for #no-such-container',
        );
    });
});
