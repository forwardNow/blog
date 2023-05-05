class DebugPlugin {
  constructor() {
  }

  apply(compiler) {
    debugger;
    compiler.hooks.make.tap('DebugPlugin', (compilation) => {
      console.log(compilation);
    });
  }
}

module.exports = DebugPlugin;
