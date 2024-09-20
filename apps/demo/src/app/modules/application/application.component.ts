import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'application',
    templateUrl: './application.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationComponent {}
