module.exports = function (content, map, meta) {
  const transformedContent = content.replace(/console\.log\(.*\);?/g, '');

  this.callback(null, transformedContent, map, meta);
}
