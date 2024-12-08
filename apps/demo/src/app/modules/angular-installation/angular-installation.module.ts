import { TuiLink } from "@taiga-ui/core";
import { TuiAddonDoc } from "@taiga-ui/addon-doc";
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HostChildWarningModule} from '../../shared/host-child-warning/host-child-warning.module';
import {AngularInstallationComponent} from './angular-installation.component';

@NgModule({
    imports: [
        TuiLink,
        ...TuiAddonDoc,
        HostChildWarningModule,
        RouterModule,
    ],
    declarations: [AngularInstallationComponent],
    exports: [AngularInstallationComponent],
})
export class AngularInstallationModule {}
