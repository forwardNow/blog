module.exports = {
  /*
    Babel presets can act as sharable set of Babel plugins and/or config options.

    Official Presets:
      @babel/preset-env for compiling ES2015+ syntax
      @babel/preset-typescript for TypeScript
      @babel/preset-react for React
      @babel/preset-flow for Flow
  */
  presets: [
    [
      '@babel/preset-env',
      { useBuiltIns: 'usage', corejs: { version: '3', proposals: true } },
    ]
  ],
  plugins: [ '@babel/plugin-transform-runtime' ]
};
