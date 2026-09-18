import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    standalone: false,
    selector: 'react-child',
    templateUrl: './react-child.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactChildComponent {}
