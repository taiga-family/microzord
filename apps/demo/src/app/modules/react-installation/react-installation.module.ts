import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiLink} from '@taiga-ui/core';

import {ReactInstallationComponent} from './react-installation.component';

@NgModule({
    imports: [TuiLink, ...TuiAddonDoc, RouterModule],
    declarations: [ReactInstallationComponent],
    exports: [ReactInstallationComponent],
})
export class ReactInstallationModule {}
