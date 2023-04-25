const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',

  entry: {
    home: './src/home/home.js',
    'about-us': './src/about-us/about-us.js'
  },

  output: {
    path: resolve(__dirname, './dist'),
    filename: 'js/[name].js',
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './public/home.html'),
      filename: 'home.html',
      chunks: ['home'],
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, './public/about-us.html'),
      filename: 'about-us.html',
      chunks: ['about-us'],
    }),
  ],

  optimization: {
    splitChunks: {
      //#region default for group
      chunks: 'all',  // 'async', 'all', 'initial'
      // minSize: 20000, // 小于 20KB，就会分一个新 chunk
      // minRemainingSize: 0, // 被拆后的 main.js 大小，开发为0，生成为 minSize
      // minChunks: 1, // 在拆之前，被引用的次数
      // maxAsyncRequests: 30, // 按需加载时的最大并行请求数。
      // maxInitialRequests: 30, // 入口的最大并行请求数。
      // enforceSizeThreshold: 50000, // 大于 50KB 就强制拆
      //#endregion

      cacheGroups: {  // 缓存组
        commons: {
          priority: 1, // 优先级，默认 0
          reuseExistingChunk: true,
          test: /[\\/]node_modules[\\/]/,
          // cacheGroupKey here is `commons` as the key of the cacheGroup
          name(module, chunks, cacheGroupKey) {
            const moduleFileName = module
              .identifier()
              .split(/[/\\]/)
              .reduceRight((item) => item);

            console.log(moduleFileName)

            const allChunksNames = chunks.map((item) => item.name).join('~');
            return `${cacheGroupKey}-${allChunksNames}-${moduleFileName}`;
          },
        },

        default: {
          priority: -20,
          minSize: 0,
          reuseExistingChunk: true,
        }
      }
    }
  },

}
