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
  console.log(`~~~~~~~~~~~~ [ ${command} ] start executing ~~~~~~~~`);
  console.log(`\n\n`);

  return new Promise((resolve, reject) => {
    exec(command, options, (error, stdout, stderr) => {
        if (error) {
          console.error(`~~~~~~~~~~~~ [ ${command} ] error start ~~~~~~~~~~~~`);
          console.error(error.message);
          console.error(`~~~~~~~~~~~~ [ ${command} ] error end ~~~~~~~~~~~~~~`);
          console.log(`\n\n`);
          reject(error);
          return;
        }

        if (stderr) {
          console.warn(`~~~~~~~~~~~~ [ ${command} ] stderr start ~~~~~~~~~~~~`);
          console.warn(stderr);
          console.warn(`~~~~~~~~~~~~ [ ${command} ] stderr end ~~~~~~~~~~~~~~`);
          console.log(`\n\n`);
        }
        
        if (stdout) {
          console.log(`~~~~~~~~~~~~ [ ${command} ] stdout start ~~~~~~~~~~~~`);
          console.log(stdout);
          console.log(`~~~~~~~~~~~~ [ ${command} ] stdout end ~~~~~~~~~~~~~~`);
          console.log(`\n\n`);
        }

        resolve(stdout);
      }, 
    );
  });
}

//-- 

run();
