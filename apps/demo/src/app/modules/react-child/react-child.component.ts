import {ChangeDetectionStrategy, Component} from '@angular/core';

const CODE = `import {createApp} from '@microzord/react';
import {App} from './app';

export default createApp('my-remote-app', <App />);
`;

const EXPOSE_CODE = `// module-federation.config.js
module.exports = {
  name: 'remoteReact',
  exposes: {
    './remote-react-app': 'apps/remote-react/src/app/remote-react-app',
  },
};
`;

const WEBPACK_CODE = `module.exports = composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(config, {
    dts: false,
    filename: 'remoteEntry.mjs',
    library: {type: 'module'},
    remoteType: 'module',
  }),
  (mergedConfig) => ({
    ...mergedConfig,
    experiments: {...(mergedConfig.experiments ?? {}), outputModule: true},
    output: {...mergedConfig.output, scriptType: 'module'},
  }),
);
`;

const HOST_CODE = `{
  name: 'remote-react',
  load: () => import('remote-react/remote-react-app').then((x) => x.default),
}`;

@Component({
    standalone: false,
    selector: 'react-child',
    templateUrl: './react-child.template.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactChildComponent {
    public readonly code = CODE;

    public readonly exposeCode = EXPOSE_CODE;

    public readonly webpackCode = WEBPACK_CODE;

    public readonly hostCode = HOST_CODE;
}
