import {Inject, ModuleWithProviders, NgModule} from '@angular/core';
import {AppRegistrationOptions} from '@microzord/core';

import {MicrozordAppModule} from './microzord-app/microzord-app.module';
import {MicrozordNgModuleModule} from './microzord-module/microzord-ng-module.module';
import {RegistryService} from './services/registry.service';
import {MICROZORD_APPS, MICROZORD_NG_MODULES} from './tokens/microzord-apps';
import {MicrozordHostOptions, NgModuleRegistrationOptions} from './types/ng-module';

@NgModule({
    exports: [MicrozordAppModule, MicrozordNgModuleModule],
})
export class MicrozordHostModule {
    constructor(
        @Inject(MICROZORD_APPS) allApps: AppRegistrationOptions[][],
        @Inject(MICROZORD_NG_MODULES) allModules: NgModuleRegistrationOptions[][],
        registry: RegistryService,
    ) {
        allApps.forEach((apps) => registry.registerMany(apps));
        allModules.forEach((modules) => registry.registerMany(modules));
    }

    public static register({
        apps,
        modules,
    }: MicrozordHostOptions): ModuleWithProviders<MicrozordHostModule> {
        return {
            ngModule: MicrozordHostModule,
            providers: [
                apps
                    ? {
                          provide: MICROZORD_APPS,
                          useValue: apps,
                          multi: true,
                      }
                    : [],
                modules
                    ? {
                          provide: MICROZORD_NG_MODULES,
                          useValue: modules,
                          multi: true,
                      }
                    : [],
            ],
        };
    }
}
