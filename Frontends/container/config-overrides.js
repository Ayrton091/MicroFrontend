const path = require('path');
const { override, addWebpackAlias } = require('customize-cra');

module.exports = override(
  addWebpackAlias({
    RelojApp: path.resolve(__dirname, '../reloj/src/App.js'),
    ClimaApp: path.resolve(__dirname, '../clima/src/App.js')
  })
);
