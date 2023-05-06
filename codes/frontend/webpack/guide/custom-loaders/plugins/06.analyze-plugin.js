module.exports = class AnalyzePlugin {
  apply(compiler) {
    compiler.hooks.emit.tap('AnalyzePlugin', (compilation) => {
      /*
        {
          'js/main.js': Proxy { RawSource },
          'index.html': Proxy { RawSource },
        }
       */
      const { assets } = compilation;

      /*
        [
          [ 'js/main.js', Proxy { RawSource } ],
          [ 'index.html', Proxy { RawSource } ],
        ]
       */
      const assetEntries = Object.entries(assets);

      const mdFileName = 'analyze.md';
      let mdFileContent =
        '| asset name | asset size (KB) |\n' +
        '| ---------- | --------------- |\n';

      assetEntries.forEach(([filename, rawSource]) => {
        const size = Math.ceil(rawSource.size() / 1023);
        mdFileContent += `| ${filename} | ${size} | \n`
      });

      const { webpack } = compiler;
      const { RawSource } = webpack.sources;

      compilation.assets[mdFileName] = new RawSource(mdFileContent);
    });
  }
}
