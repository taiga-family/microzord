import type {DefaultPropsType} from './default-props-type';
import type {EntityConstructor} from './entity';
import type {
    MicrozordEvent,
    MicrozordMessageEvent,
    MicrozordNavigationEvent,
} from './events';
import {MicrozordLifecycleEvent} from './lifecycle';

export type Listener<T extends MicrozordEvent> = (event: T) => void;

export abstract class Application<T extends DefaultPropsType = DefaultPropsType> {
    public isBootstrapped = false;
    public isDestroyed = true;
    public container: Element | string = '';

    protected readonly hook = new Set<Listener<MicrozordLifecycleEvent>>();
    protected readonly message = new Set<Listener<MicrozordMessageEvent>>();
    protected readonly navigationEvent = new Set<Listener<MicrozordNavigationEvent>>();

    constructor(
        public readonly name: string,
        public props?: T,
    ) {}

    public onMessage(fn: Listener<MicrozordMessageEvent>): () => void {
        this.message.add(fn);

        return () => {
            this.message.delete(fn);
        };
    }

    public emitMessage(event: MicrozordMessageEvent) {
        this.callListeners(this.message, event);
    }

    public onRouteChange(fn: Listener<MicrozordNavigationEvent>): () => void {
        this.navigationEvent.add(fn);

        return () => {
            this.navigationEvent.delete(fn);
        };
    }

    public emitRouteChange(event: MicrozordNavigationEvent) {
        this.callListeners(this.navigationEvent, event);
    }

    public onHook(fn: Listener<MicrozordLifecycleEvent>): () => void {
        this.hook.add(fn);

        return () => {
            this.hook.delete(fn);
        };
    }

    public emitHook(event: MicrozordLifecycleEvent) {
        this.callListeners(this.hook, event);
    }

    public destroy() {
        this.emitHook(MicrozordLifecycleEvent.destroyed());

        this.hook.clear(); // todo: в этот поток перед комплитом нужен евент дестроя
        this.message.clear();
        this.navigationEvent.clear();

        this.isBootstrapped = false;
        this.isDestroyed = true;
    }

    public async bootstrap(container: Element | string, _props?: T): Promise<void> {
        this.isBootstrapped = true;
        this.container = container;
    }

    abstract send(msg: MicrozordMessageEvent | string): Promise<void>;

    // todo: шо за пропс? Надо придумать
    abstract navigate(url: string, props?: unknown): Promise<void>;

    protected callListeners<K extends MicrozordEvent>(
        listeners: Set<Listener<K>>,
        event: K,
    ) {
        event.target = this;

        [...listeners].forEach((fn) => {
            fn(event);
        });
    }
}

export type ApplicationConstructor<
    T extends Record<string, unknown> = Record<string, unknown>,
> = EntityConstructor<T, Application<T>>;
