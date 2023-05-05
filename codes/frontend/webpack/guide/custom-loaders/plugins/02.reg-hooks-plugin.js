/*
  webpack 编译流程：

    1. 加载 webpack.config.js 配置，此时 `new MyFirstPlugin()` 执行
    2. 创建 compiler 对象
    3. 挨个执行 plugin 中的 apply() 方法
 */
class RegHooksPlugin {
  constructor() {
    console.log('RegHooksPlugin - constructor()');
  }

  apply(compiler) {
    console.log('RegHooksPlugin - apply()');

    compiler.hooks.initialize.tap('RegHooksPlugin', () => {
      console.log('RegHooksPlugin - compiler.hooks.initialize - SyncHook - tap')
    });

    compiler.hooks.beforeCompile.tap('RegHooksPlugin', () => {
      console.log('RegHooksPlugin - compiler.hooks.beforeCompile - AsyncSeriesHook - tap - 111')
    });
    compiler.hooks.beforeCompile.tapAsync('RegHooksPlugin', (compilationParams, callback) => {
      setTimeout(() => {
        console.log('RegHooksPlugin - compiler.hooks.beforeCompile - AsyncSeriesHook - tapAsync - 222')
        callback(); // callback() 执行后才会继续执行
      }, 2000);
    });
    compiler.hooks.beforeCompile.tapPromise('RegHooksPlugin', () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('RegHooksPlugin - compiler.hooks.beforeCompile - AsyncSeriesHook - tapPromise - 333')
          resolve();
        }, 2000);
      });
    });

    compiler.hooks.make.tap('RegHooksPlugin', (compilation) => {
      console.log('RegHooksPlugin - compiler.hooks.make - AsyncParallelHook - tap - 111')
    });
    compiler.hooks.make.tapAsync('RegHooksPlugin', (compilation, callback) => {
      setTimeout(() => {
        console.log('RegHooksPlugin - compiler.hooks.make - AsyncParallelHook - tapAsync - 222')
        callback(); // callback() 执行后才会继续执行
      }, 2000);
    });
    compiler.hooks.make.tapPromise('RegHooksPlugin', (compilation) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('RegHooksPlugin - compiler.hooks.make - AsyncParallelHook - tapPromise - 333')
          resolve();
        }, 1000);
      });
    });
  }
}

module.exports = RegHooksPlugin;
