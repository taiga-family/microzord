import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RemoteModule} from './remote-module/remote-module.module';

@NgModule({
    imports: [BrowserModule, RemoteModule],
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
