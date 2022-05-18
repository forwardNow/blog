const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./webpack.base.config');

module.exports = merge(baseConfig, {
  mode: 'development',

  devtool: 'eval-source-map',

  devServer: {
    hot: true,
    compress: true,
    open: ['index.html'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, '../src', 'index.html'),
      chunks: ['main'],
    }),
  ],
});
