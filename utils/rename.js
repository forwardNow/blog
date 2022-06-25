/**
 * @fileOverview 切换到 utils/ 目录下执行该文件
 */

const fs = require('fs');
const path = require('path');

const targetDir = 'nodejs';
const docsPath = path.join(__dirname, '../docs', targetDir);

const files = [
  '01.nodejs常用API.md',
  '02.npm常用工具包.md',
  '04.npm安装私有git包.md',
  '05.npm常用命令.md',
  '06.node应用打包.md',
  '07.在Linux上安装node.js.md',
  '08.npm私有仓.md',
  '09.SQL.md',
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
