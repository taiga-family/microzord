import { TuiAddonDoc } from "@taiga-ui/addon-doc";
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import { TuiNotification, TuiLink } from '@taiga-ui/core';

import {ApplicationComponent} from './application.component';

@NgModule({
    imports: [
        TuiLink,
        ...TuiAddonDoc,
        TuiNotification,
        RouterModule,
    ],
    declarations: [ApplicationComponent],
    exports: [ApplicationComponent],
})
export class ApplicationModule {}
