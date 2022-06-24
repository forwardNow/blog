/**
 * @fileOverview 切换到 utils/ 目录下执行该文件
 */

const fs = require('fs');
const path = require('path');

const targetDir = 'frontend';
const docsPath = path.join(__dirname, '../docs', targetDir);

const files = [
  '02.自定义ElementUI的主题.md',
  '03.vue2.md',
  '04.lable标签触发两次click事件.md',
  '05.Vue调试工具.md',
  '06.TypeScript.md',
  '07.控制台错误记录.md',
  '09.markdown-it.md',
  '10.vue-router.md',
  '11.低代码.md',
  '13.关闭页面之前发送请求.md',
  '14.dnd.md',
  '15.monaco-editor.md',
  '16.ejs.md',
  '17.yeoman.md',
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
