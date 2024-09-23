import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {Application, MicrozordLifecycleEvent} from '@microzord/core';
import {TuiAlertService} from '@taiga-ui/core';
import {BehaviorSubject} from 'rxjs';

@Component({
    selector: 'host-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    public moduleName$$ = new BehaviorSubject<string | null>('remote-module');
    public apps$ = new BehaviorSubject<string[]>(['remote-app', 'remote-react']);

    constructor(
        private readonly cdr: ChangeDetectorRef,
        private readonly alertService: TuiAlertService,
    ) {}

    public toggleApps(): void {
        this.apps$.next(this.apps$.value.length ? [] : ['remote-app', 'remote-react']);
    }

    public appLoaded(event: Application<Record<string, unknown>> | null): void {
        console.log(`${event?.name}: loaded`);
    }

    public appHook(event: MicrozordLifecycleEvent) {
        console.log(`${event.target?.name}: ${event.type}`);
        this.alertService
            .open(event.type, {
                icon: '',
                label: event.target?.name,
                appearance: 'info',
            })
            .subscribe();
        this.cdr.detectChanges();
    }
}
