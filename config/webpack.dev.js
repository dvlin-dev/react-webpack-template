const webpackMerge = require('webpack-merge');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const baseConfig = require('./webpack.base');

const config = {
  mode: 'development',
  stats: 'errors-only',
  output: {
    publicPath: '/',
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: 9000,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  plugins: [new ReactRefreshWebpackPlugin()].filter(Boolean),
  watchOptions: {
    aggregateTimeout: 500,
    poll: 1000,
    ignored: /node_modules/,
  },
  devtool: 'eval-cheap-module-source-map',
};
const mergedConfig = webpackMerge.merge(baseConfig, config);
module.exports = mergedConfig;
