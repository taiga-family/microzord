import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    standalone: false,
    selector: 'angular-installation',
    templateUrl: './angular-installation.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularInstallationComponent {}
