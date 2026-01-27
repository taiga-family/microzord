import type {EnvironmentProviders} from '@angular/core';
import {ENVIRONMENT_INITIALIZER, inject, makeEnvironmentProviders} from '@angular/core';

import {RegistryService} from './services/registry.service';
import {MICROZORD_APPS, MICROZORD_NG_MODULES} from './tokens/microzord-apps';
import type {MicrozordHostOptions} from './types/ng-module';

export function provideMicrozord({
    apps,
    modules,
}: MicrozordHostOptions = {}): EnvironmentProviders {
    return makeEnvironmentProviders([
        ...(apps
            ? [
                  {
                      provide: MICROZORD_APPS,
                      useValue: apps,
                      multi: true,
                  },
              ]
            : []),

        ...(modules
            ? [
                  {
                      provide: MICROZORD_NG_MODULES,
                      useValue: modules,
                      multi: true,
                  },
              ]
            : []),

        {
            provide: ENVIRONMENT_INITIALIZER,
            multi: true,
            useValue: () => {
                const allApps = inject(MICROZORD_APPS, {optional: true}) ?? [];
                const allModules = inject(MICROZORD_NG_MODULES, {optional: true}) ?? [];
                const registry = inject(RegistryService);

                allApps.forEach((apps) => registry.registerMany(apps));
                allModules.forEach((modules) => registry.registerMany(modules));
            },
        },
    ]);
}
