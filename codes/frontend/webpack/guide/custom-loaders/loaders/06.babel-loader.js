const { transform } = require("@babel/core");

const schema = {
  type: 'object',
  properties: {
    presets: {
      type: 'array'
    }
  },
  // 额外的属性
  additionalProperties: false
};

module.exports = function (content, map, meta) {
  const options = this.getOptions(schema);
  const callback = this.async();

  transform(content, options, function(err, result) {
    if (err) {
      callback(err);
      return;
    }
    const { code, map, ast } = result;

    callback(null, code, map, ast);
  });
}
