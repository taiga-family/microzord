import {NgModule} from '@angular/core';
import {TuiNotification} from '@taiga-ui/core';

import {HostChildWarningComponent} from './host-child-warning.component';

@NgModule({
    imports: [TuiNotification],
    declarations: [HostChildWarningComponent],
    exports: [HostChildWarningComponent],
})
export class HostChildWarningModule {}
