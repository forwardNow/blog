const path = require('path');
const fs = require('fs');
const { exec } = require("child_process");
const moment = require('moment');

const BLOG_PATH = path.resolve(__dirname, '../');
const GITHUB_IO_PATH = path.resolve(BLOG_PATH, '../forwardNow.github.io');

const BLOG_DIST_PATH = path.resolve(BLOG_PATH, './docs/.vuepress/dist');

async function run()  {
  // build: blog
  await buildBlog();

  // copy: blog/docs/.vuepress/dist/** -> forwardNow.github.io/
  copyDistToGithubIo();

  // push: forwardNow.github.io
  await pushGithubIo();
}

function buildBlog() {
  return execCommand('npm run docs:build', { cwd: BLOG_PATH });
}

function copyDistToGithubIo() {
  const srcRootPath = BLOG_DIST_PATH;
  const destRootPath = GITHUB_IO_PATH;

  const copyFile = (filePath) => {
    const srcFilePath = filePath;
    const destFilePath = filePath.replace(srcRootPath, destRootPath);

    fs.copyFileSync(srcFilePath, destFilePath);
  };

  const copyDir = (srcDir) => {
    const destDir = srcDir.replace(srcRootPath, destRootPath);
    fs.mkdirSync(destDir, { recursive: true });
  };

  const traverse = (dir, callback) => {
    const filenameList = fs.readdirSync(dir);

    for (let i = 0; i < filenameList.length; i++) {
      const filename = filenameList[i];

      const filePath = path.join(dir, filename);

      const isDir = fs.lstatSync(filePath).isDirectory();

      callback({filename, filePath, isDir, parentDir: dir});

      if (isDir) {
        const subDirPath = filePath;
        traverse(subDirPath, callback);
      }
    }
  };

  traverse(srcRootPath, ({ filePath, isDir}) => {
    if (isDir) {
      copyDir(filePath);
      return;
    }

    copyFile(filePath);
  });
}

async function pushGithubIo() {
  await execCommand('git pull', { cwd: GITHUB_IO_PATH });

  const addCommand = 'git config core.autocrlf false && git add -A';

  await execCommand(addCommand, { cwd: GITHUB_IO_PATH })
          .catch((e) => execCommand(addCommand, { cwd: GITHUB_IO_PATH }));

  const comment = moment().format('vYYYYMMDDHHmmss');
  await execCommand(`git commit -am "${comment}"`, { cwd: GITHUB_IO_PATH });

  await execCommand('git push', { cwd: GITHUB_IO_PATH });
}

function execCommand(command, options = {}) {
  printFormattedLog(command, 'executing begin', 'log');

  return new Promise((resolve, reject) => {
    exec(command, options, (error, stdout, stderr) => {
        if (error) {
          printFormattedLog(command, 'error begin', 'error');
          console.error(error.message);
          printFormattedLog(command, 'error end', 'error');
          reject(error);
          return;
        }

        if (stderr) {
          printFormattedLog(command, 'stderr begin', 'warn');
          console.warn(stderr);
          printFormattedLog(command, 'stderr end', 'warn');
        }
        
        if (stdout) {
          printFormattedLog(command, 'stdout begin', 'log');
          console.log(stdout);
          printFormattedLog(command, 'stdout end', 'log');
        }

        resolve(stdout);
      }, 
    );
  }).finally(() => {
    printFormattedLog(command, 'executing end', 'log');
  });
}

function printFormattedLog(command, message, level = 'log') {
  const log = console[level];

  const time = getNowTime();

  log(`\n[${time}] [${level}] [${command}] ${message} \n`);
}

function getNowTime() {
  const time = moment().format('YYYY-MM-DD HH:mm:ss');
  return time;
}

//-- 

run();
