module.exports = function (content) {
  console.log('loader-1')
  return content;
};

module.exports.pitch = function () {
  console.log('loader-1 ~ pitch method')
};
