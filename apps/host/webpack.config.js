const {withModuleFederation} = require('@nx/module-federation/angular');
const config = require('./module-federation.config');
const webpackConfig = withModuleFederation(config, {dts: false});

module.exports = webpackConfig;
