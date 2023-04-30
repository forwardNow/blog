const path = require("path");

const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { DefinePlugin } = require("webpack");
const { VueLoaderPlugin } = require('vue-loader');

const getStyleLoaders = (preProcessor) => {
  return [
    'vue-style-loader',
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
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    host: 'localhost',
    port: '3000',
    open: true,
    hot: true,
    historyApiFallback: true,
  },

  entry: path.resolve(__dirname, '../src/main.js'),

  output: {
    path: path.resolve('../dist'),
    filename: 'static/js/[name].js',
    chunkFilename: 'static/js/[name].chunk.js',
    assetModuleFilename: 'static/media/[name].[hash][ext][query]',
  },

  resolve: {
    extensions: ['.js', '.vue', '.json', '.wasm'],
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
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

    new VueLoaderPlugin(),

    new DefinePlugin({
      // 解决 vue3 页面警告的问题
      __VUE_OPTIONS_API__: true,    // 选项式 API
      __VUE_PROD_DEVTOOLS__: false, // 生产环境是否启用 devtools
    }),
  ],

  optimization: {
    splitChunks: {
      chunks: "all",
    },
    runtimeChunk: {
      name: (entrypoint) => `runtime~${entrypoint.name}.js`,
    },
  },
};
