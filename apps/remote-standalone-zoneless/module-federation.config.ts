import type {ModuleFederationConfig} from '@nx/webpack/src/utils/module-federation';

const config: ModuleFederationConfig = {
    name: 'remote-standalone-zoneless',
    exposes: {
        './standalone-app-bootstrap':
            'apps/remote-standalone-zoneless/src/app/standalone-app-bootstrap.ts',
    },
};

module.exports = config;
