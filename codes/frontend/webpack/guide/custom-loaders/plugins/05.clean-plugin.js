const path = require('path');
module.exports = class CleanPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap('CleanPlugin', (compilation) => {
      this.fs = compiler.outputFileSystem;
      const outputPath = compiler.options.output.path;

      this.removeDir(outputPath);
    });
  }

  removeDir(absDir) {
    const filenames = this.fs.readdirSync(absDir);

    for (let i = 0, len = filenames.length; i < len; i++) {
      const filename = filenames[i];
      const absPath = path.join(absDir, filename);
      const fileStat = this.fs.statSync(absPath);

      if (fileStat.isDirectory()) {
        this.removeDir(absPath);
        this.fs.rmdirSync(absPath);
        return;
      }

      this.fs.unlinkSync(absPath);
    }
  }


}
