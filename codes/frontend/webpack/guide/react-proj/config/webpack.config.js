const path = require('path');

const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

const getStyleLoaders = (preProcessor) => {
  return [
    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
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
    preProcessor && {
      loader: preProcessor,
      options: preProcessor === 'less-loader' ?
        {
          lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly
            modifyVars: {
              'primary-color': '#1DA57A',
              'link-color': '#1DA57A',
              'border-radius-base': '2px',
            },
            javascriptEnabled: true,
          },
        } : {}
    },
  ].filter(Boolean);
};

module.exports = {
  mode: isProd ? 'production' : 'development',
  devtool: isProd ? 'source-map' : 'cheap-module-source-map',

  devServer: {
    host: 'localhost',
    port: '3000',
    open: true,
    hot: true,
    historyApiFallback: true,
  },

  entry: path.resolve(__dirname, '../src/main.js'),

  output: {
    path: isProd ? path.resolve(__dirname, '../dist') : undefined,
    filename: isProd ? 'static/js/[name].[contenthash:8].js' : 'static/js/[name].js',
    chunkFilename: isProd ? 'static/js/[name].[contenthash:8].chunk.js' : 'static/js/[name].chunk.js',
    assetModuleFilename: 'static/media/[name].[hash][ext][query]',
    clean: isProd,
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.wasm'],
  },

  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  cacheDirectory: true,
                  cacheCompression: false,
                  plugins: [
                    !isProd && 'react-refresh/babel'
                  ].filter(Boolean),
                }
              }
            ],
          },
          {test: /\.css$/, use: getStyleLoaders()},
          {test: /\.less$/, use: getStyleLoaders('less-loader')},
          {test: /\.s[ac]ss$/, use: getStyleLoaders('sass-loader')},
          {test: /\.styl$/, use: getStyleLoaders('stylus-loader')},
          {
            test: /\.(png|jpe?g|gif|webp|svg)$/,
            type: 'asset',
            parser: {
              dataUrlCondition: {
                maxSize: 10 * 1024
              }
            },
          },
          {
            test: /\.(ttf|woff2?|mp4|mp3|avi)$/,
            type: 'asset/resource',
          },
        ]
      },
    ]
  },

  plugins: [
    !isProd && new ReactRefreshWebpackPlugin(),

    new ESLintWebpackPlugin({
      context: path.resolve(__dirname, '../src'),
    }),

    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'),
    }),

    isProd && new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
    }),

    isProd && new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'),
          to: path.resolve(__dirname, '../dist'),
          globOptions: {
            ignore: [
              // 不拷贝 index.html, 避免与 HtmlWebpackPlugin 冲突
              '**/index.html',
            ]
          }
        },
      ],
    }),

  ].filter(Boolean),

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}.js`,
    },

    // 控制是否要进行压缩
    minimize: isProd,

    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugins: [
              ['gifsicle', {interlaced: true}],
              ['jpegtran', {progressive: true}],
              ['optipng', {optimizationLevel: 5}],
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
  },
};
