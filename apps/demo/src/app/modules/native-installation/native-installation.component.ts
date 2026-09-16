import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    standalone: false,
    selector: 'native-installation',
    templateUrl: './native-installation.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NativeInstallationComponent {}
