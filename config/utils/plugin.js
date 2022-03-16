const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const DotenvPlugin = require('dotenv-webpack');
const glob = require('glob');
const variable = require('./variable');

const { PUBLIC_PATH, SRC_PATH, ENV_CONFIG_PATH } = variable;

const getPlugins = () => {
  const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(PUBLIC_PATH, 'index.html'),
    filename: 'index.html',
    minify: {
      html5: true,
      collapseWhitespace: true,
      preserveLineBreaks: true,
      minifyCSS: true,
      minifyJS: true,
    },
  });
  const cleanWebpackPlugin = new CleanWebpackPlugin();
  const miniCssExtractPlugin = new MiniCssExtractPlugin({
    filename: 'css/[name]_[contenthash:8].css',
  });
  const cssMinimizerPlugin = new CssMinimizerPlugin();
  // new BundleAnalyzerPlugin(),
  const purgeCSSPlugin = new PurgeCSSPlugin({
    paths: glob.sync(`${SRC_PATH}/**/*`, { nodir: true }),
  });
  const friendlyErrorsWebpackPlugin = new FriendlyErrorsWebpackPlugin();
  const dotenvPlugin = new DotenvPlugin({
    path: ENV_CONFIG_PATH,
  });
  return [
    cleanWebpackPlugin,
    miniCssExtractPlugin,
    cssMinimizerPlugin,
    purgeCSSPlugin,
    htmlWebpackPlugin,
    friendlyErrorsWebpackPlugin,
    dotenvPlugin,
  ];
};
module.exports = {
  getPlugins,
};
