const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

// const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    main: path.resolve(__dirname, '../src/main.js'),
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(eot|ttf|otf|woff2?)(\?\S*)?$/,
        type: 'asset',
        parser: {
          dataUrlCondition: { maxSize: 1024 * 5 },
        },
        generator: {
          filename: 'font/[name]_[hash:8][ext]',
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type: 'asset',
        parser: {
          dataUrlCondition: { maxSize: 1024 * 5 },
        },
        generator: {
          filename: 'images/[name]_[hash:8][ext]',
        },
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
          // {
          //   loader: 'sass-resources-loader',
          //   options: {
          //     resources: path.resolve(__dirname, '../src/style/variable.scss')
          //   }
          // }
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
        // include: getIncludePaths('src'),
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  resolve: {
    alias: {
      // 'element-ui': path.resolve(__dirname, '../../element-ui'),
      // 'element-ui': path.resolve(__dirname, '../../../project/node_modules/element-ui'),
    },
  },

  cache: {
    type: 'filesystem',
  },
};

// function getIncludePaths(...dirs) {
//   return dirs.map((dir) => path.resolve(__dirname, '../', dir));
// }
