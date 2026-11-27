import type {ModuleFederationConfig} from '@nx/webpack/src/utils/module-federation';

const config: ModuleFederationConfig = {
    name: 'remote-standalone',
    exposes: {
        './standalone-app-bootstrap':
            'apps/remote-standalone/src/app/standalone-app-bootstrap.ts',
    },
};

module.exports = config;
