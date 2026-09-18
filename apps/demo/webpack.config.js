const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const mf = require('@angular-architects/module-federation/webpack');
const path = require('path');

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, '../../tsconfig.json'), [
    /* mapped paths to share */
]);

module.exports = (config) => {
    const isProduction = config.mode === 'production';

    config.output = {
        ...config.output,
        uniqueName: 'demo',
        // 'auto' resolves lazy chunks under deploy sub-paths (e.g. GitHub Pages); '/' avoids import.meta issues in dev.
        publicPath: isProduction ? 'auto' : '/',
    };

    config.optimization = {
        ...config.optimization,
        runtimeChunk: false,
        minimize: false,
    };

    config.resolve = {
        ...config.resolve,
        alias: {
            ...config.resolve?.alias,
            ...sharedMappings.getAliases(),
        },
    };

    config.plugins = [
        ...(config.plugins ?? []),
        new ModuleFederationPlugin({
            name: 'demo',
            filename: 'remoteEntry.js',
            exposes: {},
            shared: mf.share({
                '@angular/core': {
                    singleton: true,
                    strictVersion: true,
                    requiredVersion: 'auto',
                },
                '@angular/common': {
                    singleton: true,
                    strictVersion: true,
                    requiredVersion: 'auto',
                },
                '@angular/common/http': {
                    singleton: true,
                    strictVersion: true,
                    requiredVersion: 'auto',
                },
                '@angular/router': {
                    singleton: true,
                    strictVersion: true,
                    requiredVersion: 'auto',
                },
                ...sharedMappings.getDescriptors(),
            }),
        }),
        sharedMappings.getPlugin(),
    ];

    return config;
};
