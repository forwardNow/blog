module.exports = function (content) {
  console.log('loader-3')
  return content;
};

module.exports.pitch = function () {
  console.log('loader-3 ~ pitch method')
};
