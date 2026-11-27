import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    standalone: true,
    selector: 'remote-standalone-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
    public counter = 1;

    public click(): void {
        this.counter++;
    }
}
