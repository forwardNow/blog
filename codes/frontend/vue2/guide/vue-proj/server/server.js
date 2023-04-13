const path = require('path');
const express = require('express');
const history = require('connect-history-api-fallback');

const app = express();

app.use(history());

const STATIC_DIR = path.join(__dirname, '../dist');

app.use(express.static(STATIC_DIR));

app.listen(3000, (err) => {
  if (!err) console.log('服务器启动成功了！');
});
