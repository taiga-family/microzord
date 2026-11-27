import type {ModuleFederationConfig} from '@nx/webpack/src/utils/module-federation';

const config: ModuleFederationConfig = {
    name: 'host',
    remotes: [
        'remote',
        'remote-standalone',
        'remote-standalone-zoneless',
        ['remote-react', 'http://localhost:4203/remoteEntry.mjs'],
    ],
};

module.exports = config;
