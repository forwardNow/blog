/**
 * @fileOverview 切换到 utils/ 目录下执行该文件
 */

const fs = require('fs');
const path = require('path');

const targetDir = 'vue';
const docsPath = path.join(__dirname, '../docs', targetDir);

const files = [
  '02.vue2.md',
  '04.Vue调试工具.md',
  '08.vue-router.md',
];

files.forEach((originFilename, index) => {
  // '01.xxx' --> 'xxx'
  const unnumberedFilename = originFilename.replace(/^[0-9]{2}\./, '');

  // '01' --> '01' ;  '010' --> '10'
  const num = `0${index + 1}`.substr(-2);

  const newNumberedFilename = `${num}.${unnumberedFilename}`;

  const oldPath = path.join(docsPath, originFilename);
  const newPath = path.join(docsPath, newNumberedFilename);

  fs.renameSync(oldPath, newPath);
});
