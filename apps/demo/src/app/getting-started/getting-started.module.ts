import { TuiIslandDirective } from "@taiga-ui/legacy";
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { TuiAddonDoc } from '@taiga-ui/addon-doc';
import { TuiNotification, TuiLink } from '@taiga-ui/core';
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
