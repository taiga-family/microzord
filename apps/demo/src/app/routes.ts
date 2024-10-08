import type {Route} from '@angular/router';

import {GettingStartedComponent} from './getting-started/getting-started.component';

export const ROUTES: Route[] = [
    {
        path: 'getting-started',
        component: GettingStartedComponent,
        data: {
            title: 'Getting started',
        },
    },
    {
        path: 'application',
        loadChildren: () =>
            import('./modules/application/application.module').then(
                (m) => m.ApplicationModule,
            ),
        data: {
            title: 'Application entity',
        },
    },
    {
        path: 'native-installation',
        loadChildren: () =>
            import('./modules/native-installation/native-installation.module').then(
                (m) => m.NativeInstallationModule,
            ),
        data: {
            title: 'Native Installation',
        },
    },
    {
        path: 'react-installation',
        loadChildren: () =>
            import('./modules/react-installation/react-installation.module').then(
                (m) => m.ReactInstallationModule,
            ),
        data: {
            title: 'React Installation',
        },
    },
    {
        path: 'react-child',
        loadChildren: () =>
            import('./modules/react-child/react-child.module').then(
                (m) => m.ReactChildModule,
            ),
        data: {
            title: 'React Child',
        },
    },
    {
        path: 'angular-installation',
        loadChildren: () =>
            import('./modules/angular-installation/angular-installation.module').then(
                (m) => m.AngularInstallationModule,
            ),
        data: {
            title: 'Angular Installation',
        },
    },
    {
        path: 'angular-host',
        loadChildren: () =>
            import('./modules/angular-host/angular-host.module').then(
                (m) => m.AngularHostModule,
            ),
        data: {
            title: 'Angular Host',
        },
    },
    {
        path: 'angular-child',
        loadChildren: () =>
            import('./modules/angular-child/angular-child.module').then(
                (m) => m.AngularChildModule,
            ),
        data: {
            title: 'Angular Child',
        },
    },
    {path: '**', redirectTo: 'getting-started'},
];
