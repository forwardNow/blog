const express = require('express');
const path = require('path');

const app = new express();

app.listen(8001, () => {
  console.log('server is started');
});

const staticPath = path.join(__dirname, '..', 'docs/.vuepress/dist/');

app.use('/', express.static(staticPath));
