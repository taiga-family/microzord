import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {MicrozordHostModule} from '@microzord/angular';
import {provideTaiga, TuiNotification, TuiRoot} from '@taiga-ui/core';

import {AppComponent} from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([], {initialNavigation: 'enabledBlocking'}),
        TuiRoot,
        ...TuiNotification,
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
    providers: [
        {provide: 'some-token', useValue: 'true'},
        provideHttpClient(withInterceptorsFromDi()),
        provideTaiga(),
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
