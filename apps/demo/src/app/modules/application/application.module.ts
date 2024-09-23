import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiLink, TuiNotification} from '@taiga-ui/core';

import {ApplicationComponent} from './application.component';

@NgModule({
    imports: [TuiLink, ...TuiAddonDoc, TuiNotification, RouterModule],
    declarations: [ApplicationComponent],
    exports: [ApplicationComponent],
})
export class ApplicationModule {}
