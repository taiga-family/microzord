import { TuiLink } from "@taiga-ui/core";
import { TuiAddonDoc } from "@taiga-ui/addon-doc";
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactChildComponent} from './react-child.component';

@NgModule({
    imports: [
        TuiLink,
        ...TuiAddonDoc,
        RouterModule,
    ],
    declarations: [ReactChildComponent],
    exports: [ReactChildComponent],
})
export class ReactChildModule {}
