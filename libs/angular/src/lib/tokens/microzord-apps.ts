import {InjectionToken} from '@angular/core';
import type {AppRegistrationOptions} from '@microzord/core';

import type {NgModuleRegistrationOptions} from '../types/ng-module';

export const MICROZORD_APPS = new InjectionToken<AppRegistrationOptions[][]>(
    '[MICROZORD_APPS]: Microzord apps',
    {
        factory: () => [],
    },
);

export const MICROZORD_NG_MODULES = new InjectionToken<NgModuleRegistrationOptions[][]>(
    '[MICROZORD_NG_MODULES]: Microzord Angular modules',
    {
        factory: () => [],
    },
);
