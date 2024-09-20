import {Injectable} from '@angular/core';
import {AppRegistrationOptions, registerEntity} from '@microzord/core';

import {NgModuleRegistrationOptions} from '../types/ng-module';

@Injectable({
    providedIn: 'root',
})
export class RegistryService {
    public registerMany(
        apps: ReadonlyArray<AppRegistrationOptions | NgModuleRegistrationOptions>,
    ) {
        apps.forEach((app) => this.register(app));
    }

    public register(options: AppRegistrationOptions | NgModuleRegistrationOptions) {
        registerEntity(options);
    }
}
