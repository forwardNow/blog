const path = require('path');
const fs = require('fs');
const moment = require('moment')

const ROOTS = [
  'front-end',
  'back-end',
  'database',
  'server',
  'os',
  'software',
  'hardware',
  'others',
].map((dir) => path.resolve(__dirname, '../', dir));

const EXCLUDED_FILES = [
  'images',
  'codes',
];

const COLLAPSED_GROUPS = [
  'echarts',
  'guide',
];

module.exports = {
  port: 60000,
  // base: '/blog/docs/.vuepress/dist',
  head: [
    ['link', { rel: 'stylesheet', href: '/theme.css' }],
    ['script', { src: '/echarts/echarts.min.js' }],
  ],

  title: 'Blog',
  description: 'Blog',
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

      ...buildMenus(ROOTS),
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

    if (!menu) {
      return;
    }

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

  if (isExcludedFile(filename)) {
    return null;
  }

  const isDir = isDirectory(filePath);

  if (isDir) {
    return {
      title: filename,
      collapsable: isGroupCollapsable(filename),
      sidebarDepth: 0,
    };
  }

  const title = filename.replace('.md', '');
  const docPath = getDocPath(filePath);

  return [ docPath, title ];
}

function isExcludedFile(filename) {
  return EXCLUDED_FILES.includes(filename);
}

function isGroupCollapsable(filename) {
  return COLLAPSED_GROUPS.includes(filename);
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

// console.log(JSON.stringify(buildMenus(ROOTS), null, 4));
