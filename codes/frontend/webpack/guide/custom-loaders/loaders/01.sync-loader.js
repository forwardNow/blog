module.exports = function (content, map, meta) {
  console.log('01.sync-loader.js');
  this.callback(null, content, map, meta);
  // return; // always return undefined when calling callback()
};
