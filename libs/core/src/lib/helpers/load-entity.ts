import type {Observable} from 'rxjs';
import {defer, isObservable, of} from 'rxjs';
import {switchMap, tap} from 'rxjs/operators';

import type {EntityConstructor} from '../models/entity';
import type {EntityRegistrationOptions} from '../models/registration-options';
import {entityOptionsRegistry, loadedEntityRegistry} from '../registry';
import {getEntity} from './get-entity';

export function loadEntity<T, K>(
    entityName: string,
): Observable<EntityConstructor<T, K>> {
    return getEntity<T, K>(entityName).pipe(
        switchMap((entity) =>
            entity
                ? of(entity)
                : defer<Observable<EntityConstructor<T, K>>>(() => {
                      const options =
                          entityOptionsRegistry.get<
                              EntityRegistrationOptions<EntityConstructor<T, K>>
                          >(entityName);

                      if (!options) {
                          throw `Microzord entity "${entityName}" has not been registered. Check the spelling or register an app.`;
                      }

                      if (!options.load) {
                          throw `Microzord entity "${entityName}" is registered but it has no "load" function. Please, provide it`;
                      }

                      const result = options.load();

                      return result &&
                          (isObservable(result) ||
                              ('then' in result && typeof result.then === 'function'))
                          ? defer(() => result)
                          : of(result as EntityConstructor<T, K>);
                  }),
        ),
        tap((entity) => loadedEntityRegistry.set(entityName, entity)),
    );
}
