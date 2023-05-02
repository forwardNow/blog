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
      // { test: /\.js$/, loader: './loaders/my-first-loader.js' },
      // {
      //   test: /\.js$/,
      //   use: ['./loaders/01.sync-loader.js', './loaders/02.async-loader.js']
      // },
      // {
      //   test: /\.js$/,
      //   use: ['./loaders/03.pitch-loader-1.js', './loaders/03.pitch-loader-2.js', './loaders/03.pitch-loader-3.js']
      // }
      // { test: /\.js$/, loader: './loaders/04.clean-log-loader.js' },
      {
        test: /\.js$/,
        loader: './loaders/05.copyright-loader.js',
        options: {
          author: '吴钦飞',
        }
      },

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'public/index.html'),
    }),
  ]
};
