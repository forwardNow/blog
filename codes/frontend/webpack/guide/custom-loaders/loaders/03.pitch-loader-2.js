module.exports = function (content) {
  console.log('loader-2')
  return content;
};

module.exports.pitch = function () {
  console.log('loader-2 ~ pitch method')
  // return 'something';
};
