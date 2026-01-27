import type {Type} from '@angular/core';
import type {AppRegistrationOptions, EntityRegistrationOptions} from '@microzord/core';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface EntryPoint {
    //
}

export interface MicrozordNgModule<T extends EntryPoint = EntryPoint> {
    getEntryPoint(): Type<T>;
}

export type NgModuleRegistrationOptions = EntityRegistrationOptions<
    Type<MicrozordNgModule>
>;

/**
 * @deprecated use `MicrozordHostModuleOptions` instead
 */
export interface MicrozordHostModuleOptions {
    apps?: AppRegistrationOptions[];
    modules?: Array<EntityRegistrationOptions<Type<unknown>>>;
}

export type MicrozordOptions = MicrozordHostModuleOptions;
