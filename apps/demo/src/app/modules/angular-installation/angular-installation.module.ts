import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiLink} from '@taiga-ui/core';

import {HostChildWarningModule} from '../../shared/host-child-warning/host-child-warning.module';
import {AngularInstallationComponent} from './angular-installation.component';

@NgModule({
    imports: [TuiLink, ...TuiAddonDoc, HostChildWarningModule, RouterModule],
    declarations: [AngularInstallationComponent],
    exports: [AngularInstallationComponent],
})
export class AngularInstallationModule {}
