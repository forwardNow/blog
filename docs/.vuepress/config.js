const path = require('path');
const fs = require('fs');
const moment = require('moment')

module.exports = {
  port: 60000,
  // base: '/blog/docs/.vuepress/dist',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],

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

  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          moment.locale(lang);
          const lastUpdateTime = moment(timestamp);
          const fromNow = lastUpdateTime.fromNow();
          const date = lastUpdateTime.format('YYYY-MM-DD HH:mm:ss')
          return `${date} ( ${fromNow} )`;
        }
      }
    ],
    [
      '@vuepress/medium-zoom',
       {
        selector: 'img',
        // medium-zoom options here
        // See: https://github.com/francoischalifour/medium-zoom#options
        options: {
          margin: 16,
          scrollOffset: 1000,
        }
      }
    ],
    '@vuepress/plugin-nprogress',
    'vuepress-plugin-smooth-scroll',
  ]
}

function getGroups() {
  const getFileNameList = (dir) => {
    const pagesDirPath = path.join(__dirname, dir);

    return fs.readdirSync(pagesDirPath).sort();
  }

  const groupList = [];
  const rootPath = '../';

  let groupDirList = getFileNameList(rootPath).filter((dir) => {
    if (dir.startsWith('.')) {
      return false;
    }

    if (dir === 'README.md') {
      return false;
    }

    return true;
  });

  groupDirList = [
    'framework',
    'specs',
    'style-library',
    'component-library',
    'frontend',
    'webpack',
    'nodejs',
    'others',
    'win10',
  ];

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
