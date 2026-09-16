import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    standalone: false,
    selector: 'react-installation',
    templateUrl: './react-installation.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactInstallationComponent {}
