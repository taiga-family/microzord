import {Component} from '@angular/core';

import {CounterComponent} from './counter.component';

@Component({
    standalone: true,
    selector: 'remote-standalone-app',
    imports: [CounterComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent {}
