/**
 * @fileOverview 切换到 utils/ 目录下执行该文件
 */

const fs = require('fs');
const path = require('path');

const targetDir = 'back-end/nodejs/npm';
const docsPath = path.join(__dirname, '../docs', targetDir);


const files = [
  '01.npm安装私有git包.md',
  '02.npm安装本地电脑的包.md',
  '02.npm常用命令.md',
  '03.npx的使用.md',
  '04.npm镜像源管理-nrm.md',
  '05.限制项目的node版本.md',
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
