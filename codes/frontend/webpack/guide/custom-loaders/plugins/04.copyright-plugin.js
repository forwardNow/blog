module.exports = class CopyrightPlugin {
  constructor(options = {}) {
    this.options = options;
  }

  apply(compiler) {
    compiler.hooks.emit.tap('CopyrightPlugin', (compilation) => {
      const { webpack } = compiler;
      const { RawSource } = webpack.sources;
      const { author, extensions } = this.options;

      /*
        {
          'js/main.js': Proxy{ RawSource },
          'index.html': Proxy{ RawSource },
        }
       */
      const { assets } = compilation;

      const scriptAssetKeys = Object.keys(assets)
        .filter((filename) => {
          const matched = extensions.some((extension) => filename.endsWith(extension));
          return matched;
        });

      scriptAssetKeys.forEach((key) => {
        const asset = assets[key];
        const content = asset.source();

        const newContent = `\
/**
 * @author ${author}
 */
${content}`;

        assets[key] = new RawSource(newContent);
      })
    });
  }
}
