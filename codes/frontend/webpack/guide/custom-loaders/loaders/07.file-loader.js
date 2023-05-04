const { interpolateName } = require('loader-utils');

module.exports = function (buffer) {
  // 根据文件内容生成 hash，并格式化文件名
  const interpolatedName = interpolateName(
    this,
    `images/[name].[hash:8].[ext][query]`,
    { content: buffer }
  );

  // 生成文件
  this.emitFile(interpolatedName, buffer);

  // 暴露出去，交给 webpack 使用
  // 注意：使用 export default 会出问题
  const content = `module.exports = '${interpolatedName}'`

  return content;
}

module.exports.raw = true;
