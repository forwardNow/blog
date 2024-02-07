/**
 * @fileOverview 切换到 utils/ 目录下执行该文件
 */

const fs = require('fs');
const path = require('path');

const targetDir = 'front-end/libs/ui';
const docsPath = path.join(__dirname, '../docs', targetDir);


const files = [
  '04.monaco-editor.md',
  '13.viewerjs-图片预览.md',
  '15.nprogress-进度条.md',
  '18.swiper-轮播图.md',
  '19.vue-qr-二维码.md',
  '20.clipboard.js-复制到剪贴板.md',
  '21.sweetalert2-弹出层基本使用.md',
  '22.maker.js-svg库.md',
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
