import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    standalone: false,
    selector: 'application',
    templateUrl: './application.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationComponent {}
