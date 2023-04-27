const path = require('path');
const os = require('os');

const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const THREADS = 1; // os.cpus().length - 1;

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
    filename: 'static/js/[name].[contenthash:8].js',
    chunkFilename: 'static/js/[name].[contenthash:8].chunk.js',
    assetModuleFilename: 'static/media/[name].[hash][ext][query]',
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
            // generator: {
            //   filename: 'static/imgs/[hash:8][ext][query]',
            // },
          },
          {
            test: /\.(ttf|woff2?|mp4|mp3|avi)$/,
            type: 'asset/resource',
            // generator: {
            //   filename: 'static/media/[hash:8][ext][query]',
            // },
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
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
    }),

    new PreloadWebpackPlugin({
      rel: 'prefetch',
    }),

    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
  ],

  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),

      new TerserPlugin({
        parallel: THREADS,
      }),

      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['jpegtran', { progressive: true }],
              ['optipng', { optimizationLevel: 5 }],
              [
                'svgo',
                {
                  plugins: [
                    'preset-default',
                    'prefixIds',
                    {
                      name: 'sortAttrs',
                      params: {
                        xmlnsOrder: 'alphabetical',
                      },
                    },
                  ],
                },
              ],
            ],
          },
        },
      }),
    ],

    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}`,
    },
  },
};
