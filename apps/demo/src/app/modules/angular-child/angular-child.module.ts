import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiLink} from '@taiga-ui/core';

import {AngularChildComponent} from './angular-child.component';

@NgModule({
    imports: [
        TuiLink,
        ...TuiAddonDoc,
        RouterModule.forChild([{path: '', component: AngularChildComponent}]),
    ],
    declarations: [AngularChildComponent],
    exports: [AngularChildComponent],
})
export class AngularChildModule {}
