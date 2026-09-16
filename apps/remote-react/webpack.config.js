const {composePlugins, withNx} = require('@nx/webpack');
const {withReact} = require('@nx/react');
const {withModuleFederation} = require('@nx/module-federation/webpack');

const baseConfig = require('./module-federation.config');

const config = {
    ...baseConfig,
};

// Nx plugins for webpack to build config object from Nx options and context.
const webpackConfig = composePlugins(
    withNx(),
    withReact(),
    withModuleFederation(config, {dts: false}),
);

module.exports = webpackConfig;
