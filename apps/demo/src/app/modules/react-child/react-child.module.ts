import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiLink} from '@taiga-ui/core';

import {ReactChildComponent} from './react-child.component';

@NgModule({
    imports: [TuiLink, ...TuiAddonDoc, RouterModule],
    declarations: [ReactChildComponent],
    exports: [ReactChildComponent],
})
export class ReactChildModule {}
