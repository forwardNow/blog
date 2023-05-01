/**
 * @param {string|Buffer} content Content of the resource file
 * @param {object} map SourceMap data consumable by https://github.com/mozilla/source-map
 * @param {any} meta Meta data, could be anything
 * @return {string}
 */
function myFirstLoader(content, map, meta) {
  console.log('hello, my first loader!');
  return content;
}

module.exports = myFirstLoader;
