const {composePlugins, withNx} = require('@nx/webpack');
const {withReact} = require('@nx/react');
const {withModuleFederation} = require('@nx/module-federation/webpack');

const baseConfig = require('./module-federation.config');

const config = {
    ...baseConfig,
};

// The Angular host build consumes remotes as ES modules (remoteEntry.mjs),
// while @nx/module-federation/webpack defaults to a classic-script remoteEntry.js.
// Emit an ESM remote entry so the host can init/get modules from this remote.
const webpackConfig = composePlugins(
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

module.exports = webpackConfig;
