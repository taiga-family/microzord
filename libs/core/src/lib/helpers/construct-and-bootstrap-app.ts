import type {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

import type {Application} from '../models/application';
import {bootstrapApp} from './bootstrap-app';
import {constructApp} from './construct-app';

export function constructAndBootstrapApp<
    T extends Record<string, unknown> = Record<string, unknown>,
>(appName: string, selector: Element | string, props?: T): Observable<Application<T>> {
    return constructApp<T>(appName).pipe(
        switchMap((app) => bootstrapApp(app, selector, props)),
    );
}
