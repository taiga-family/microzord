import {ChangeDetectionStrategy, Component} from '@angular/core';

const CODE = `import {createApp} from '@microzord/angular/child';
import {platformBrowser} from '@angular/platform-browser';
import {AppModule} from './app.module';

export const myRemoteApp = createApp(
  opts => platformBrowser().bootstrapModule(AppModule, opts),
  'my-remote-app',
);
`;

const STANDALONE_CODE = `import {provideRouter} from '@angular/router';
import {createStandaloneApp} from '@microzord/angular/child';
import {AppComponent} from './app.component';

export const myRemoteApp = createStandaloneApp(AppComponent, 'my-remote-app', [
  provideRouter([]),
]);
`;

const ZONELESS_CODE = `import {provideExperimentalZonelessChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {createStandaloneApp} from '@microzord/angular/child';
import {AppComponent} from './app.component';

export const myRemoteApp = createStandaloneApp(AppComponent, 'my-remote-app', [
  provideRouter([]),
  provideExperimentalZonelessChangeDetection(),
]);
`;

const EXPOSE_CODE = `// module-federation.config.js
module.exports = {
  name: 'my-remote-app',
  exposes: {
    './my-remote-app': 'apps/my-remote-app/src/app/my-remote-app.ts',
  },
};
`;

const MODULE_CODE = `export {RemoteModule} from './remote.module';
`;

const MODULE_HOST_CODE = `MicrozordHostModule.register({
  modules: [
    {
      name: 'remote-module',
      load: () => import('my-remote-app/remote-module').then((m) => m.RemoteModule),
    },
  ],
})`;

const MODULE_TEMPLATE_CODE = '<ng-container [microzordNgModule]="moduleName" />';

@Component({
    standalone: false,
    selector: 'angular-child',
    templateUrl: './angular-child.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularChildComponent {
    public readonly code = CODE;

    public readonly exposeCode = EXPOSE_CODE;

    public readonly moduleCode = MODULE_CODE;

    public readonly moduleHostCode = MODULE_HOST_CODE;

    public readonly moduleTemplateCode = MODULE_TEMPLATE_CODE;

    public readonly standaloneCode = STANDALONE_CODE;

    public readonly zonelessCode = ZONELESS_CODE;
}
