const path = require('path');
const fs = require('fs');
const moment = require('moment')


module.exports = {
  title: '知识库',
  description: '知识库',
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    sidebar: [
      ['/', 'Introduction'],
      // {
      //   title: '2021/12',
      //   collapsable: false,
      //   children: [
      //     '/2021/12/01.nginx.md'
      //   ]
      // },
      ...getGroups(),
    ]
  },

  plugins: ['@vuepress/last-updated']
}

function getGroups() {
  const getFileNameList = (dir) => {
    const pagesDirPath = path.join(__dirname, dir);

    return fs.readdirSync(pagesDirPath);
  }

  const groupList = [];
  const rootPath = '../';

  const groupDirList = getFileNameList(rootPath).filter((dir) => {
    if (dir.startsWith('.')) {
      return false;
    }

    if (dir === 'README.md') {
      return false;
    }

    return true;
  });

  groupDirList.forEach((groupDir) => {
    const markdownFileNames = getFileNameList(path.join(rootPath, groupDir))
      .filter(filename => filename.endsWith('.md'));

    const menu = markdownFileNames.map((filename) => {
      const path = `/${groupDir}/${filename}`;
      const name = filename.replace('.md', '');
      return [path, name];
    })

    const group = {
      title: groupDir,
      collapsable: false,
      children: [
        ...menu
      ]
    };

    groupList.push(group);
  });

  return groupList;
}

// console.log('groupList', groupList);
