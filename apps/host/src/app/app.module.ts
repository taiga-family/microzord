import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {MicrozordHostModule} from '@microzord/angular';
import {TuiAlert, TuiRoot} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';

import {AppComponent} from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([], {initialNavigation: 'enabledBlocking'}),
        HttpClientModule,
        TuiRoot,
        TuiAlert,
        MicrozordHostModule.register({
            modules: [
                {
                    name: 'remote-module',
                    load: () =>
                        import('remote/remote-module').then((m) => m.RemoteModule),
                },
            ],
            apps: [
                {
                    name: 'remote-app',
                    props: {foo: 'bar'},
                    load: () =>
                        import('remote/remote-app-bootstrap').then(
                            (m) => m.remoteAppBootstrap,
                        ),
                },
                {
                    name: 'remote-react',
                    load: () =>
                        import('remote-react/remote-react-app').then((x) => x.default),
                },
            ],
        }),
    ],
    declarations: [AppComponent],
    providers: [{provide: 'some-token', useValue: 'true'}, NG_EVENT_PLUGINS],
    bootstrap: [AppComponent],
})
export class AppModule {}
