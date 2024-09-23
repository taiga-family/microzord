import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiAddonDoc} from '@taiga-ui/addon-doc';
import {TuiLink} from '@taiga-ui/core';

import {NativeInstallationComponent} from './native-installation.component';

@NgModule({
    imports: [TuiLink, ...TuiAddonDoc, RouterModule],
    declarations: [NativeInstallationComponent],
    exports: [NativeInstallationComponent],
})
export class NativeInstallationModule {}
