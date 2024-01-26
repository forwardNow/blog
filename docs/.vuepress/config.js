/*
  BUG: 在目录（dir）里创建 readme.md 文件，会导致侧边栏 dir 为空
 */
const path = require('path');
const fs = require('fs');
const moment = require('moment')

const ROOTS = [
  'front-end',
  'back-end',
  'ui',
  'vcs',
  'algorithm',
  'software',
  'os',
  'books',
  'health',
  'character',
  'others',
].map((dir) => path.resolve(__dirname, '../', dir));

const EXCLUDED_FILES = [
  'images',
  'codes',
  '.gitignore',
];

const COLLAPSED_GROUPS = [
  // 'echarts',
  // 'guide',
];

const IS_ALL_COLLAPSED = true;

const IS_ALL_EXPAND = false;

module.exports = {
  port: 60000,
  head: [
    ['script', { src: 'https://cdn.bootcdn.net/ajax/libs/echarts/5.4.2/echarts.min.js', defer: 'defer' }],
  ],

  title: 'Blog',
  description: 'Blog',

  markdown: {
    lineNumbers: false,
    toc: {
      includeLevel: [2, 3]
    }
  },
  themeConfig: {
    logo: '/logo.png',

    nav: [
      // { text: 'GitHub', link: 'https://github.com/forwardNow', target:'_blank' }
    ],

    searchPlaceholder: 'Search',

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
    '@vuepress/plugin-nprogress',
    // 'vuepress-plugin-smooth-scroll',

    [
      'vuepress-plugin-sitemap',
      {
        hostname: 'https://forwardnow.github.io'
      }
    ]

  ]
}

function buildMenus(filePaths) {
  const menus = [];

  filePaths.forEach((filePath) => {
    const menu = buildMenu(filePath);

    if (!menu) {
      return;
    }

    menus.push(menu);

    if (isDirectory(filePath)) {
      const childFilePaths = getFilePathsOfDir(filePath);
      menu.children = buildMenus(childFilePaths);
    }
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
      _collapsed: isGroupCollapsable(filename),
      collapsable: true,
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
  if (IS_ALL_COLLAPSED) {
    return true;
  }

  if (IS_ALL_EXPAND) {
    return false;
  }

  return COLLAPSED_GROUPS.includes(filename);
}

function isDirectory(filePath) {
  return fs.lstatSync(filePath).isDirectory();
}

function getFilePathsOfDir(dirPath) {
  const filenames = fs.readdirSync(dirPath, { encoding: 'utf8' })
  sortFilenames(filenames, dirPath);
  return filenames.map((filename) => path.join(dirPath, filename))
}

function sortFilenames(filenames, dirPath) {
  sortFilenamesByNum(filenames);
  sortFilenamesByDir(filenames, dirPath);
}

function sortFilenamesByNum(filenames) {
  const regex = /[a-zA-Z]*([0-9]+)\./;

  const getNumFromFilename = (filename) => {
    const results = regex.exec(filename);

    if (!results) {
      return null;
    }

    return parseInt(results[1]);
  };

  filenames.sort((name1, name2) => {
    const num1 = getNumFromFilename(name1);
    const num2 = getNumFromFilename(name2);

    if (!num1) {
      return 0;
    }

    return num1 - num2;
  });
}

function sortFilenamesByDir(filenames, dirPath) {
  filenames.sort((filename1, filename2) => {
    const isDirOfFile1 = isDirectory(path.join(dirPath, filename1));
    const isDirOfFile2 = isDirectory(path.join(dirPath, filename2));

    if (isDirOfFile1 && isDirOfFile2) {
      return 0;
    }

    if (!isDirOfFile1 && !isDirOfFile2) {
      return 0;
    }

    if (isDirOfFile1) {
      return -1;
    }

    if (isDirOfFile2) {
      return 1
    }
  });
}

function getDocPath(filePath) {
  const paths = filePath.split(path.sep);
  const indexOfDocs = paths.findIndex((item) => item === 'docs');
  const docPath = paths.slice(indexOfDocs + 1).join('/');
  return docPath;
}

// console.log(JSON.stringify(buildMenus(ROOTS), null, 4));
