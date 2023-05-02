const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: resolve(__dirname, './dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      // { test: /\.js$/, loader: './loaders/my-first-loader.js' }
      {
        test: /\.js$/,
        use: ['./loaders/01.sync-loader.js', './loaders/02.async-loader.js']
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'public/index.html'),
    }),
  ]
};
