const webpackMerge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const config = {
  stats: 'errors-only',
  devServer: {
    open: true,
    host: 'localhost',
    port: 9000,
    hot: true,
    // gzip compression
    compress: true,
  },
}
const mergedConfig = webpackMerge.merge(baseConfig, config)
module.exports = mergedConfig
