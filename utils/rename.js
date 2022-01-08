/**
 * @fileoverview 切换到 utils/ 目录下执行该文件
 */

const fs = require('fs');
const path = require('path');

const docsPath = path.join('../', 'docs', 'others')

const files = [
  '09.nginx.md',
  '10.Git 常用命令.md',
  '01.破解webstorm.md',
  '02.nodejs常用API.md',
  '11.nodejs多版本管理.md',
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