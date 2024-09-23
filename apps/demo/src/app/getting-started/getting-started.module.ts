import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiLink, TuiNotification} from '@taiga-ui/core';
import {TuiIslandDirective} from '@taiga-ui/legacy';

import {HostChildWarningModule} from '../shared/host-child-warning/host-child-warning.module';
import {GettingStartedComponent} from './getting-started.component';

@NgModule({
    imports: [
        CommonModule,
        ...TuiAddonDoc,
        TuiLink,
        RouterModule,
        TuiNotification,
        TuiIslandDirective,
        HostChildWarningModule,
    ],
    declarations: [GettingStartedComponent],
    exports: [GettingStartedComponent],
})
export class GettingStartedModule {}
