const path = require('path');
const fs = require('fs');
const moment = require('moment')

const roots = [
  'front-end',

  'back-end',

  'software',

  'os',

  'others',

  // 'css',
  // 'vue',
  // 'echarts',
  // 'webpack',
  // 'fe-libs',
  //
  // 'frontend',
  //
  // 'nodejs',
  // 'koa',
  //
  // 'software',
  // 'books',
  // 'win10',
  // 'others',

  // 'framework',
  // 'specs',
  // 'style-library',
].map((dir) => path.resolve(__dirname, '../', dir));

module.exports = {
  port: 60000,
  // base: '/blog/docs/.vuepress/dist',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    // ['link', { rel: 'stylesheet', href: '/bootstrap-utilities.css' }],
    ['link', { rel: 'stylesheet', href: '/base.css' }],
    ['script', { src: '/echarts/echarts.min.js' }],
  ],

  title: '知识库',
  description: '知识库',
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    sidebar: [
      // ['/', '介绍'],

      // {
      //   title: 'backend',
      //   collapsable: false,
      //   children: [
      //     {
      //       title: 'koa',
      //       collapsable: false,
      //       children: [
      //         [ 'backend/koa/1.md', '111' ]
      //       ]
      //     }
      //   ]
      // },

      ...buildMenus(roots),
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

function buildMenus(filePaths) {
  const menus = [];

  filePaths.forEach((filePath) => {
    const menu = buildMenu(filePath);

    if (isDirectory(filePath)) {
      const childFilePaths = getFilePathsOfDir(filePath);
      menu.children = buildMenus(childFilePaths);
    }

    menus.push(menu);
  });

  return menus;
}

function buildMenu(filePath) {
  const filename = path.basename(filePath);
  const isDir = isDirectory(filePath);

  if (isDir) {
    return {
      title: filename,
      collapsable: false,
    };
  }

  const title = filename.replace('.md', '');
  const docPath = getDocPath(filePath);

  return [ docPath, title ];
}

function isDirectory(filePath) {
  return fs.lstatSync(filePath).isDirectory();
}

function getFilePathsOfDir(dirPath) {
  const filenames = fs.readdirSync(dirPath, { encoding: 'utf8' })
  return filenames.map((filename) => path.join(dirPath, filename))
}

function getDocPath(filePath) {
  const paths = filePath.split(path.sep);
  const indexOfDocs = paths.findIndex((item) => item === 'docs');
  const docPath = paths.slice(indexOfDocs + 1).join('/');
  return docPath;
}

console.log(JSON.stringify(buildMenus(roots), null, 4));
