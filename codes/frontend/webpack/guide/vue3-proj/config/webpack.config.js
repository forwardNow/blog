const path = require("path");

const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const { DefinePlugin } = require("webpack");
const { VueLoaderPlugin } = require('vue-loader');

const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const ElementPlus = require('unplugin-element-plus/webpack')

const isProd = process.env.NODE_ENV === 'production';

const getStyleLoaders = (preProcessor) => {
  return [
    isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader',
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
      options: preProcessor === "sass-loader" ?
        {
          additionalData: `@use "@/styles/element/index.scss" as *;`,
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
    extensions: ['.js', '.vue', '.json', '.wasm'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          cacheDirectory: path.resolve(__dirname, "../node_modules/.cache/vue-loader"),
        },
      },
      {
        oneOf: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
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

    new VueLoaderPlugin(),

    new DefinePlugin({
      // 解决 vue3 页面警告的问题
      __VUE_OPTIONS_API__: true,    // 选项式 API
      __VUE_PROD_DEVTOOLS__: false, // 生产环境是否启用 devtools
    }),

    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    ElementPlus({
      useSource: true,
    }),
  ].filter(Boolean),

  optimization: {
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vue: {
          test: /[\\/]node_modules[\\/]vue(.*)?[\\/]/,
          name: "lib-vue",
          priority: 40,
        },
        elementPlus: {
          test: /[\\/]node_modules[\\/]element-plus[\\/]/,
          name: "lib-element-plus",
          priority: 30,
        },
        others: {
          test: /[\\/]node_modules[\\/]/,
          name: "lib-others",
          priority: 20,
        },
      },
    },
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}.js`,
    },

    minimize: isProd,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminGenerate,
          options: {
            plugins: [
              ['gifsicle', { interlaced: true }],
              ['jpegtran', { progressive: true }],
              ['optipng', { optimizationLevel: 5 }],
              ['svgo', { plugins: [ 'preset-default', 'prefixIds', { name: 'sortAttrs', params: { xmlnsOrder: 'alphabetical' } } ] }],
            ],
          },
        },
      }),

    ],
  },
};
