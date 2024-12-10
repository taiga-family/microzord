import { TuiLink } from "@taiga-ui/core";
import { TuiAddonDoc } from "@taiga-ui/addon-doc";
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NativeInstallationComponent} from './native-installation.component';

@NgModule({
    imports: [
        TuiLink,
        ...TuiAddonDoc,
        RouterModule,
    ],
    declarations: [NativeInstallationComponent],
    exports: [NativeInstallationComponent],
})
export class NativeInstallationModule {}
