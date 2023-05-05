/*
  webpack 编译流程：

    1. 加载 webpack.config.js 配置，此时 `new MyFirstPlugin()` 执行
    2. 创建 compiler 对象
    3. 挨个执行 plugin 中的 apply() 方法
 */
class MyFirstPlugin {
  constructor() {
    console.log('MyFirstPlugin - constructor()');
  }

  apply(compiler) {
    console.log("MyFirstPlugin - apply()");
  }
}

module.exports = MyFirstPlugin;
