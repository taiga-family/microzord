import type {Observable} from 'rxjs';
import {of} from 'rxjs';

import type {EntityConstructor} from '../models/entity';
import {loadedEntityRegistry} from '../registry';

export function getEntity<T, K>(
    entityName: string,
): Observable<EntityConstructor<T, K> | null> {
    return of(loadedEntityRegistry.get(entityName) || null);
}
