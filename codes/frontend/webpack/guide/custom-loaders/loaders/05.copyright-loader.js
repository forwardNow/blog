const schema = {
  type: 'object',
  properties: {
    author: {
      type: 'string'
    }
  },
  // 额外的属性
  additionalProperties: false
};

module.exports = function (content, map, meta) {
  const { author } = this.getOptions(schema);

  const copyright = `/* 当前代码归 ${author} 所有 */`;

  const transformedContent = `
    ${copyright}
    ${content}
  `;

  this.callback(null, transformedContent, map, meta);
}
