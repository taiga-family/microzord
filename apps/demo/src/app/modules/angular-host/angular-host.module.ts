import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiLink} from '@taiga-ui/core';

import {AngularHostComponent} from './angular-host.component';

@NgModule({
    imports: [TuiLink, ...TuiAddonDoc, RouterModule],
    declarations: [AngularHostComponent],
    exports: [AngularHostComponent],
})
export class AngularHostModule {}
