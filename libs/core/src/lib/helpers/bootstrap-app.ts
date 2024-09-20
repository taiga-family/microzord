import type {Observable} from 'rxjs';
import {defer, of} from 'rxjs';
import {mapTo, switchMap} from 'rxjs/operators';

import type {Application} from '../models/application';

export function bootstrapApp<T extends Record<string, unknown>>(
    app: Application<T>,
    selector: Element | string,
    props?: T,
): Observable<Application<T>> {
    return of(app).pipe(
        switchMap((app) =>
            defer(async () => app.bootstrap(selector, props)).pipe(mapTo(app)),
        ),
    );
}
