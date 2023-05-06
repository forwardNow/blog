const path = require('path');
module.exports = class CleanPlugin {
  apply(compiler) {
    compiler.hooks.emit.tap('CleanPlugin', (compilation) => {
      const fs = compiler.outputFileSystem;
      const outputPath = compiler.options.output.path;

      fs.rmSync(outputPath, { recursive: true });
      // this.removeDir(outputPath);
    });
  }

  removeDir(absDir, fs) {
    const filenames = fs.readdirSync(absDir);

    for (let i = 0, len = filenames.length; i < len; i++) {
      const filename = filenames[i];
      const absPath = path.join(absDir, filename);
      const fileStat = fs.statSync(absPath);

      if (fileStat.isDirectory()) {
        this.removeDir(absPath, fs);
        fs.rmdirSync(absPath);
        return;
      }

      fs.unlinkSync(absPath);
    }
  }


}
