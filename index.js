module.exports = function(options, workspace) {
  var path = require('path');
  var webpackConfig = workspace.get('webpack').webpackConfig;
  var HtmlWebpackPlugin = require('html-webpack-plugin');

  var opts = workspace.util.defaults(options || {}, {
    template: path.join(workspace.config.dir_src, 'index.html'),
    inject: false
  });

  webpackConfig.plugins.push(new HtmlWebpackPlugin(opts));
};