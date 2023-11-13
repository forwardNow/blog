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
  await execCommand('git pull', { cwd: GITHUB_IO_PATH }).catch((e) => console.log(e));

  const addCommand = 'git config core.autocrlf false && git add -A';

  await execCommand(addCommand, { cwd: GITHUB_IO_PATH })
          .catch((e) => execCommand(addCommand, { cwd: GITHUB_IO_PATH }));

  const comment = moment().format('vYYYYMMDDHHmmss');
  await execCommand(`git commit -am "${comment}"`, { cwd: GITHUB_IO_PATH });

  await execCommand('git push', { cwd: GITHUB_IO_PATH });
}

const Log = {
  chalk: null,

  info(message) {
    this.log(message);
  },
  warn(message) {
    this.log(message, 'warn');
  },
  error(message) {
    this.log(message, 'error');
  },
  log(message, level = 'info') {
    const time = moment().format('YYYY-MM-DD HH:mm:ss');

    const colour = ({
      info: this.chalk.white,
      warn: this.chalk.yellow,
      error: this.chalk.red,

      green: this.chalk.green,
    })[level];

    console.log(colour(`[${time}] [${level}] ${message}`));
  }
};

async function execCommand(command, options = {}) {
  ({ default: Log.chalk } = await import('chalk'));

  Log.info(`[${command}] start executing`);

  return new Promise((resolve, reject) => {
    exec(command, options, (error, stdout, stderr) => {
        if (error) {
          Log.error(`[${command}] error:\n${error.message}`);
          reject(error);
          return;
        }

        if (stderr) {
          Log.warn(`[${command}] stderr:\n${stderr}`);
        }
        
        if (stdout) {
          Log.info(`[${command}] stdout:\n${stdout}`);
        }

        resolve(stdout);
      }, 
    );
  }).finally(() => {
    Log.info(`[${command}] finish executing`);
  });
}


//-- 
const start = Date.now();

run()
  .finally(() => {
    const deltaSeconds = (Date.now() - start) / 1000;
    Log.log(`[execution time] ${deltaSeconds} seconds`, 'green');
  });