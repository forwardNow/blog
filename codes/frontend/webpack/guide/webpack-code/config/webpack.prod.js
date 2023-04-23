const path = require('path');
const os = require('os');

const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const THREADS = os.cpus().length - 1;

const ROOT_PATH = path.join(__dirname, '../');

const getStyleLoaders = (preProcessor) => {
  return [
    MiniCssExtractPlugin.loader,
    'css-loader',
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [
            'postcss-preset-env',
          ],
        },
      },
    },
    preProcessor,
  ].filter(Boolean);
};

module.exports = {
  mode: 'production',

  devtool: 'source-map',

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
            use: [
              {
                loader: 'thread-loader',
                options: { workers: THREADS },
              },
              {
                loader: 'babel-loader',
                options: {
                  cacheDirectory: true,
                  cacheCompression: false,
                }
              }
            ],
            
          },
          { test: /\.css$/, use: getStyleLoaders() },
          { test: /\.less$/, use: getStyleLoaders('less-loader') },
          { test: /\.s[ac]ss$/, use: getStyleLoaders('sass-loader') },
          { test: /\.styl$/, use: getStyleLoaders('stylus-loader') },
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
      threads: THREADS,
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(ROOT_PATH, './public/index.html'),
    }),

    new MiniCssExtractPlugin({
      // 指定输出文件名
      filename: 'static/css/main.css',
    }),

  ],

  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),

      new TerserPlugin({
        parallel: THREADS,
      }),
    ],
  },
};