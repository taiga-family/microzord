import {MicrozordEvent} from './events';

export enum LifecycleEventTypes {
    bootstrapped = 'bootstrapped',
    destroyed = 'destroyed',
}

export class MicrozordLifecycleEvent extends MicrozordEvent {
    public static isLifecycleEvent(
        event: MicrozordEvent,
    ): event is MicrozordLifecycleEvent {
        return (
            event &&
            event.constructor &&
            event.constructor.name === MicrozordLifecycleEvent.name
        );
    }

    public static bootstrapped(): MicrozordLifecycleEvent {
        return new MicrozordLifecycleEvent(LifecycleEventTypes.bootstrapped);
    }

    public static isBootstrappedEvent(event: MicrozordLifecycleEvent): boolean {
        return event.type === LifecycleEventTypes.bootstrapped;
    }

    public static destroyed(): MicrozordLifecycleEvent {
        return new MicrozordLifecycleEvent(LifecycleEventTypes.destroyed);
    }

    public static isDestroyedEvent(event: MicrozordLifecycleEvent): boolean {
        return event.type === LifecycleEventTypes.destroyed;
    }
}
