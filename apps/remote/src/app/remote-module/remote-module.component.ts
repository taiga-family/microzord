import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    standalone: false,
    selector: 'microzord-remote-module',
    templateUrl: './remote-module.component.html',
    styleUrls: ['./remote-module.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoteModuleComponent {
    public counter = 1;

    public click(): void {
        this.counter++;
    }
}
