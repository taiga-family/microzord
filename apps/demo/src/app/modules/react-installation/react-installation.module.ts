import { TuiLink } from "@taiga-ui/core";
import { TuiAddonDoc } from "@taiga-ui/addon-doc";
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactInstallationComponent} from './react-installation.component';

@NgModule({
    imports: [
        TuiLink,
        ...TuiAddonDoc,
        RouterModule,
    ],
    declarations: [ReactInstallationComponent],
    exports: [ReactInstallationComponent],
})
export class ReactInstallationModule {}
