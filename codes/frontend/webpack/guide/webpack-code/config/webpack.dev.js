const path = require('path');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.join(__dirname, '../');

module.exports = {
  mode: 'development',

  devtool: 'cheap-module-source-map',

  devServer: {
    host: 'localhost',
    port: '3000',
    open: true, // 自动打开浏览器
  },

  entry: path.resolve(ROOT_PATH, './src/main.js'),

  output: {
    path: path.resolve(ROOT_PATH, './dist'),
    filename: 'static/js/main.js', 
    clean: true,
  },

  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              cacheCompression: false,
            }
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader'],
          },
          {
            test: /\.s[ac]ss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
          {
            test: /\.styl$/,
            use: ['style-loader', 'css-loader', 'stylus-loader'],
          },
          {
            test: /\.(png|jpe?g|gif|webp|svg)$/,
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: 10 * 1024
              }
            },
            generator: {
              filename: 'static/imgs/[hash:8][ext][query]',
            },
          },
          {
            test: /\.(ttf|woff2?|mp4|mp3|avi)$/,
            type: 'asset/resource',
            generator: {
              filename: 'static/media/[hash:8][ext][query]',
            },
          },
        ]
      },
    ],
  },
  
  plugins: [
    new ESLintWebpackPlugin({
      context: path.resolve(ROOT_PATH, './src'),
      failOnError: false,
      cache: true, // default true
    }),
    
    new HtmlWebpackPlugin({
      template: path.resolve(ROOT_PATH, './public/index.html'),
    }),
  ],
};