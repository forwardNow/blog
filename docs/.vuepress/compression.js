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

  compress() {
    this.compressPlatform();
    this.compressUiTheme();
  },

  compressPlatform() {
    const src = path.join('', 'D:\\dev\\projects\\hlhz_platform');
    const dest = path.join(__dirname, 'public/code/hlhz_platform.zip')
    const excludedFilenames = this.excludedFilenames;

    this.compressToZip(src, dest, excludedFilenames);
  },

  compressUiTheme() {
    const src = path.join('', 'D:\\dev\\projects\\frontend\\ui-theme');
    const dest = path.join(__dirname, 'public/code/ui-theme.zip')
    const excludedFilenames = this.excludedFilenames.concat([
      'lib'
    ]);

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