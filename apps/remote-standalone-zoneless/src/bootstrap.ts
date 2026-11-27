import {enableProdMode, provideExperimentalZonelessChangeDetection} from '@angular/core';
import {bootstrapApplication} from '@angular/platform-browser';
import {provideRouter} from '@angular/router';

import {AppComponent} from './app/app.component';
import {environment} from './environments/environment';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [provideRouter([]), provideExperimentalZonelessChangeDetection()],
}).catch((err) => console.error(err));
