const path = require('path');
const { exec } = require("child_process");
const express = require('express');

const app = new express();

app.listen(8001, () => {
  console.log('server is started');
});

const staticPath = path.join(__dirname, '..', 'docs/.vuepress/dist/');

app.use('/', express.static(staticPath));

app.get('/_build', async (req, res) => {
  await execCommand('git pull');
  await execCommand('npm run docs:build');

  res.send('build finished!')
});

function execCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        console.log(`[ ${command} ] error: ${error.message}`);
        return;
      }
      if (stderr) {
        reject(new Error(stderr));
        console.log(`[ ${command} ] stderr: ${stderr}`);
        return;
      }

      resolve(stdout);
      console.log(`[ ${command} ] stdout: ${stdout}`);
    });
  });
}