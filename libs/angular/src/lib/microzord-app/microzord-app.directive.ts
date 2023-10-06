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
  MicrozordLifecycleEvent,
  bootstrapApp,
  constructApp,
} from '@microzord/core';
import {NEVER, Observable, Subject, of} from 'rxjs';
import {catchError, shareReplay, switchMap, takeUntil, tap} from 'rxjs/operators';
import {complete} from '../operators/complete';

@Directive({
  selector: '[microzordApp]:not(ng-container)',
})
export class MicrozordAppDirective implements OnDestroy {
  @Output()
  hook: Observable<MicrozordLifecycleEvent>;

  @Output()
  application: Observable<Application | null>;

  @Input('microzordApp')
  set name(appName: string) {
    this.ngZone.runOutsideAngular(() => this.name$.next(appName));
  }

  private destroy$ = new Subject<void>();
  private name$ = new Subject<string>();

  constructor(
    private elementRef: ElementRef,
    private ngZone: NgZone,
    private errorHandler: ErrorHandler,
  ) {
    const app$ = this.name$.pipe(
      tap(() => NgZone.assertNotInAngularZone()),
      switchMap(name =>
        name
          ? constructApp(name).pipe(
              complete(app => {
                app.destroy();
              }),
            )
          : of(null),
      ),
      catchError(error => this.handleError(error)),
      shareReplay(1),
      takeUntil(this.destroy$),
    );

    this.application = app$.pipe(
      switchMap(name =>
        name
          ? bootstrapApp(name, this.elementRef.nativeElement).pipe(
              catchError(error => this.handleError(error)),
            )
          : of(null),
      ),
      takeUntil(this.destroy$),
    );

    this.hook = app$.pipe(
      switchMap(app =>
        app
          ? new Observable<MicrozordLifecycleEvent>(subscriber =>
              app.onHook(event => subscriber.next(event)),
            )
          : NEVER,
      ),
    );

    app$.subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private handleError(error: unknown): Observable<null> {
    this.errorHandler.handleError(error);
    return of(null);
  }
}
