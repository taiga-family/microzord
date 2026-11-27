import {provideRouter} from '@angular/router';
import {createStandaloneApp} from '@microzord/angular/child';

import {AppComponent} from './app.component';

export const standaloneAppBootstrap = createStandaloneApp(
    AppComponent,
    'remote-standalone-app',
    [provideRouter([])],
);
