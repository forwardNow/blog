const path = require('path');
const fs = require('fs');
const archiver = require('archiver');

const compression = {
  excludedFilenames: [
    '.git',
    '.idea',
    '.cache',
    'dist',
    'dist-zip',
    'node_modules',
  ],

  workspacePath: 'D:/dev/projects/frontend',

  targetDirPath: path.join(__dirname, '../docs/.vuepress/public/code'),

  compress() {
    this.compressPlatform();
    this.compressUiTheme();
  },

  compressPlatform() {
    const { src, dest } = this.getCompressPaths('hlhz_platform');

    const excludedFilenames = this.excludedFilenames;

    this.compressToZip(src, dest, excludedFilenames);
  },

  getCompressPaths(projectName) {
    const src = path.join(this.workspacePath,  projectName);
    const dest = path.join(this.targetDirPath, `${projectName}.zip`);

    return { src, dest };
  },

  compressUiTheme() {
    const { src, dest } = this.getCompressPaths('ui-theme');

    const excludedFilenames = this.excludedFilenames.concat(['lib']);

    this.compressToZip(src, dest, excludedFilenames);
  },

  compressToZip(src, dest, excludedFilenames) {
    const filenames = fs.readdirSync(src);

    const filteredFilenames = filenames.filter((filename) => !excludedFilenames.includes(filename));

    const output = fs.createWriteStream(dest);

    const archive = archiver('zip', {
      zlib: { level: 9 } // Sets the compression level.
    });

    archive.on('error', function(err) {
      throw err;
    });

    archive.pipe(output);

    filteredFilenames.forEach((filename) => {
      const filepath = path.join(src, filename);
      const fileState = fs.lstatSync(filepath);

      if (fileState.isDirectory()) {
        archive.directory(filepath, filename, {});
        return;
      }

      archive.file(filepath, { name: filename });
    });

    archive.finalize();
  },
};

module.exports = compression;

compression.compress();