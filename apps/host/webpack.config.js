const {withModuleFederation} = require('@nx/angular/module-federation');
const config = require('./module-federation.config');
const webpackConfig = withModuleFederation(config, {dts: false});

module.exports = webpackConfig;
