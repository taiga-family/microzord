import {
    Directive,
    ElementRef,
    ErrorHandler,
    Input,
    NgZone,
    OnDestroy,
    Output,
} from '@angular/core';
import {
    Application,
    bootstrapApp,
    constructApp,
    MicrozordLifecycleEvent,
} from '@microzord/core';
import {NEVER, Observable, of, Subject} from 'rxjs';
import {catchError, shareReplay, switchMap, takeUntil, tap} from 'rxjs/operators';

import {complete} from '../operators/complete';

@Directive({
    selector: '[microzordApp]:not(ng-container)',
})
export class MicrozordAppDirective implements OnDestroy {
    @Output()
    public hook: Observable<MicrozordLifecycleEvent>;

    @Output()
    public application: Observable<Application | null>;

    @Input('microzordApp')
    public set name(appName: string) {
        this.ngZone.runOutsideAngular(() => this.name$.next(appName));
    }

    private readonly destroy$ = new Subject<void>();
    private readonly name$ = new Subject<string>();

    constructor(
        private readonly elementRef: ElementRef,
        private readonly ngZone: NgZone,
        private readonly errorHandler: ErrorHandler,
    ) {
        const app$ = this.name$.pipe(
            tap(() => NgZone.assertNotInAngularZone()),
            switchMap((name) => (name ? constructApp(name) : of(null))),
            catchError((error) => this.handleError(error)),
            takeUntil(this.destroy$),
            shareReplay(1),
        );

        this.application = app$.pipe(
            complete((app) => {
                app?.destroy();
            }),
            switchMap((name) =>
                name
                    ? bootstrapApp(name, this.elementRef.nativeElement).pipe(
                          catchError((error) => this.handleError(error)),
                      )
                    : of(null),
            ),
            takeUntil(this.destroy$),
            shareReplay(1),
        );

        this.hook = app$.pipe(
            switchMap((app) =>
                app
                    ? new Observable<MicrozordLifecycleEvent>((subscriber) =>
                          app.onHook((event) => subscriber.next(event)),
                      )
                    : NEVER,
            ),
        );

        this.application.subscribe();
    }

    public ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    private handleError(error: unknown): Observable<null> {
        this.errorHandler.handleError(error);

        return of(null);
    }
}
