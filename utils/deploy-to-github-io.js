const path = require('path');
const fs = require('fs');
const { exec } = require('child_process');
const moment = require('moment');

/**
 * 配置选项
 *
 * @typedef {object} DeploymentOptions
 *
 * @property {string} projectRootAbsPath - 项目根路径
 * @property {string} projectDistAbsPath - 项目 dist 目录的路径
 * @property {string} gitHubPagesProjectRootAbsPath - gh-pages 项目的路径
 * @property {string} buildCmd - 构建 npm script
 */


class GitHubPagesDeployment {
  /**
   * @type {DeploymentOptions}
   */
  options;

  timeConsume = {
    build: 0,
    copy: 0,
    push: 0,
  };

  /**
   * @param { DeploymentOptions } options
   */
  constructor(options) {
    this.options = options;
  }


  async run()  {
    await this.build();

    this.copyDistToGitHubPagesProject();

    await this.pushToGitHub();
  }

  async build() {
    const start = Date.now();
    try {
      const {
        buildCmd: command,
        projectRootAbsPath: cwd,
      } = this.options;

      await this.execCommand(command, { cwd });
    } finally {
      this.timeConsume.build = Date.now() - start;
    }
  }

  copyDistToGitHubPagesProject() {
    const {
      projectDistAbsPath: srcRootPath,
      gitHubPagesProjectRootAbsPath: destRootPath,
    } = this.options;

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
          traverse(filePath, callback);
        }
      }
    };

    const start = Date.now();

    traverse(srcRootPath, ({ filePath, isDir}) => {
      if (isDir) {
        copyDir(filePath);
        return;
      }

      copyFile(filePath);
    });

    this.timeConsume.copy = Date.now() - start;
  }

  async pushToGitHub() {
    const start = Date.now();

    try {
      const cwd = this.options.gitHubPagesProjectRootAbsPath;

      await this.execCommand('git pull', { cwd }).catch((e) => console.error(e));

      const addCommand = 'git config core.autocrlf false && git add -A';

      await this.execCommand(addCommand, { cwd })
        .catch(() => this.execCommand(addCommand, { cwd }));

      const comment = moment().format('vYYYYMMDDHHmmss');

      await this.execCommand(`git commit -am "${comment}"`, { cwd });

      await this.execCommand('git push', { cwd });
    } finally {
      this.timeConsume.push = Date.now() - start;
    }
  }

  execCommand(command, options = {}) {
    console.info(`[${command}] start executing`);

    return new Promise((resolve, reject) => {
      exec(command, options, (error, stdout) => {
        if (error) {
          console.error(`[${command}] error:\n${error.message}`);
          reject(error);
          return;
        }

        resolve(stdout);
      });
    });
  }

  getTimeConsume() {
    const { timeConsume } = this;
    const format = (durationInMs) => {
      return Math.round(durationInMs / 1000);
    };

    return {
      build: format(timeConsume.build),
      copy: format(timeConsume.copy),
      push: format(timeConsume.push),
    };
  }
}

// --

const CURRENT_PROJECT_PATH = path.resolve(__dirname, '../');
const CURRENT_PROJECT_DIST_PATH = path.resolve(CURRENT_PROJECT_PATH, './docs/.vuepress/dist');
const GITHUB_PAGES_PROJECT_PATH = path.resolve(CURRENT_PROJECT_PATH, '../forwardNow.github.io/blog');
const BUILD_CMD = 'npm run docs:build';

const instance = new GitHubPagesDeployment({
  projectRootAbsPath: CURRENT_PROJECT_PATH,
  projectDistAbsPath: CURRENT_PROJECT_DIST_PATH,
  gitHubPagesProjectRootAbsPath: GITHUB_PAGES_PROJECT_PATH,
  buildCmd: BUILD_CMD,
});

instance.run()
  .finally(() => {
    const { build, copy, push } = instance.getTimeConsume();
    console.log(`time consume: build, ${build}s; copy, ${copy}s; push, ${push}s.`);
  });
