module.exports = function (content, map, meta) {
  const callback = this.async();

  setTimeout(() => {
    console.log('02.async-loader.js');
    callback(null, content, map, meta);
  }, 3000)
};
