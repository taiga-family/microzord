import type {EntityConstructor} from './models/entity';
import type {EntityRegistrationOptions} from './models/registration-options';

export class MicrozordRegistry<K, V> {
    private readonly _map = new Map<K, V>();

    public clear(): void {
        this._map.clear();
    }

    public get<E extends V = V>(key: K): E | undefined {
        return this._map.get(key) as E;
    }

    public set<E extends V = V>(key: K, value: E): void {
        this._map.set(key, value);
    }
}

export const entityOptionsRegistry = new MicrozordRegistry<
    string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    EntityRegistrationOptions<any>
>();

export const loadedEntityRegistry = new MicrozordRegistry<
    string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    EntityConstructor<any, any>
>();
