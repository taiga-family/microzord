import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    standalone: false,
    selector: 'host-child-warning',
    templateUrl: './host-child-warning.template.html',
    styleUrls: ['./host-child-warning.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HostChildWarningComponent {}
