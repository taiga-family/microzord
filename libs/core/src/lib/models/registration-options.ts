import type {Observable} from 'rxjs';

import type {ApplicationConstructor} from './application';
import type {DefaultPropsType} from './default-props-type';

export interface EntityRegistrationOptions<T> {
    name: string;
    load: () => Observable<T> | PromiseLike<T> | T;
}

export interface AppRegistrationOptions<T extends DefaultPropsType = DefaultPropsType>
    extends EntityRegistrationOptions<ApplicationConstructor<T>> {
    props?: T;
}
