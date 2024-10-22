(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{373:function(t,s,a){t.exports=a.p+"assets/img/01_nexus_login.31a7732e.png"},374:function(t,s,a){t.exports=a.p+"assets/img/02_neuxs.8d9ebf09.png"},375:function(t,s,a){t.exports=a.p+"assets/img/03_neuxs.85dcd341.png"},547:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"npm-package-开发指南"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-package-开发指南"}},[t._v("#")]),t._v(" npm package 开发指南")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#_1-介绍"}},[t._v("1. 介绍")])]),s("li",[s("a",{attrs:{href:"#_2-npm-包开发"}},[t._v("2. npm 包开发")]),s("ul",[s("li",[s("a",{attrs:{href:"#_2-1-项目结构"}},[t._v("2.1. 项目结构")])]),s("li",[s("a",{attrs:{href:"#_2-2-package-json"}},[t._v("2.2. package.json")])]),s("li",[s("a",{attrs:{href:"#_2-3-webpack-config-js"}},[t._v("2.3. webpack.config.js")])])])]),s("li",[s("a",{attrs:{href:"#_3-私仓上传与下载"}},[t._v("3. 私仓上传与下载")]),s("ul",[s("li",[s("a",{attrs:{href:"#_3-1-打包"}},[t._v("3.1. 打包")])]),s("li",[s("a",{attrs:{href:"#_3-2-上传"}},[t._v("3.2. 上传")])]),s("li",[s("a",{attrs:{href:"#_3-3-安装"}},[t._v("3.3. 安装")])])])]),s("li",[s("a",{attrs:{href:"#_4-离线安装"}},[t._v("4. 离线安装")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"_1-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-介绍"}},[t._v("#")]),t._v(" 1. 介绍")]),t._v(" "),s("p",[t._v("本文介绍 npm 包开发流程：")]),t._v(" "),s("ol",[s("li",[t._v("如何开发 npm 包")]),t._v(" "),s("li",[t._v("npm 包在外网如何使用")]),t._v(" "),s("li",[t._v("npm 包在内网如何使用")])]),t._v(" "),s("h2",{attrs:{id:"_2-npm-包开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-npm-包开发"}},[t._v("#")]),t._v(" 2. npm 包开发")]),t._v(" "),s("blockquote",[s("p",[t._v("以 "),s("code",[t._v("@fe/flowchart-editor")]),t._v(" 开发为例")])]),t._v(" "),s("h3",{attrs:{id:"_2-1-项目结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-项目结构"}},[t._v("#")]),t._v(" 2.1. 项目结构")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("flowchart-editor/     # 项目根目录\n  build/                # 构建相关配置\n  dist/                 # 编译目录\n  dist-zip/             # tgz 目录\n  src/                  # 源码目录\n  package.json          # 项目描述文件\n  webpack.config.js     # webpack 构建脚本\n")])])]),s("h3",{attrs:{id:"_2-2-package-json"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-package-json"}},[t._v("#")]),t._v(" 2.2. package.json")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 项目名称（包的名称），在代码中通过 `import xx from 'flowchart-editor'` 引入")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@fe/flowchart-editor"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0.3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 项目入口文件")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"main"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./dist/index.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"start"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm run serve"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"serve"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cross-env NODE_ENV=development webpack serve"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cross-env NODE_ENV=production webpack"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将项目打包（package, tgz, tarball）到 dist-zip 目录")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pack"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm pack --pack-destination dist-zip"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定项目中哪些文件/目录 会打包到 tgz 里")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"files"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"types"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".eslintignore"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"package.json"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定项目中的前置依赖，避免使用该库的其他项目重复安装")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"peerDependencies"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配 2.x.x 版本的包")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"vue"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^2.6.0"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  \n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定项目的依赖")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dependencies"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jquery"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^3.7.1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lodash.clonedeep"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^4.5.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lodash.debounce"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^4.0.8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lodash.get"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^4.4.2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lodash.merge"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^4.6.2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lodash.template"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^4.5.0"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lodash.throttle"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"^4.1.1"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-3-webpack-config-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-webpack-config-js"}},[t._v("#")]),t._v(" 2.3. webpack.config.js")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MiniCssExtractPlugin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mini-css-extract-plugin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 排除掉第三方依赖")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("externals")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("vue")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("jquery")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jquery'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'lodash.clonedeep'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lodash.clonedeep'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'lodash.debounce'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lodash.debounce'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'lodash.get'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lodash.get'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'lodash.merge'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lodash.merge'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'lodash.template'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lodash.template'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'lodash.throttle'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lodash.throttle'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("，\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出的 bundle 文件的模块类型为 commonjs2")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("output")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("path")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./dist'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出的 js 文件名称")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("filename")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("library")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'commonjs2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("plugins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MiniCssExtractPlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出的 css 文件名称")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("filename")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index.css'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"_3-私仓上传与下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-私仓上传与下载"}},[t._v("#")]),t._v(" 3. 私仓上传与下载")]),t._v(" "),s("blockquote",[s("p",[t._v("以 nexus 搭建的私仓（Type 为 hosted，Format 为 npm）为例")])]),t._v(" "),s("p",[t._v("步骤：")]),t._v(" "),s("ol",[s("li",[t._v("将项目打包成 tgz 的包")]),t._v(" "),s("li",[t._v("将 tgz 上传至 nexus 仓库")]),t._v(" "),s("li",[t._v("配置 .npmrc，指定 该包 的镜像源后 即可安装")])]),t._v(" "),s("h3",{attrs:{id:"_3-1-打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-打包"}},[t._v("#")]),t._v(" 3.1. 打包")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换至项目项目根目录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" flowchart-editor\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将项目打包至 dist-zip 目录")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" pack --pack-destination dist-zip\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成如下包")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ./dist-zip/fe-flowchart-editor-1.0.3.tgz")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-2-上传"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-上传"}},[t._v("#")]),t._v(" 3.2. 上传")]),t._v(" "),s("blockquote",[s("p",[t._v("nexus 地址: http://39.100.38.119:10000/")])]),t._v(" "),s("ol",[s("li",[t._v("登录，并进入 npm 仓库")])]),t._v(" "),s("ul",[s("li",[s("img",{attrs:{src:a(373),alt:""}})])]),t._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[t._v("点击上传")])]),t._v(" "),s("ul",[s("li",[s("img",{attrs:{src:a(374),alt:""}})])]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("上传 fe-flowchart-editor-1.0.3.tgz")])]),t._v(" "),s("ul",[s("li",[s("img",{attrs:{src:a(375),alt:""}})])]),t._v(" "),s("h3",{attrs:{id:"_3-3-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-安装"}},[t._v("#")]),t._v(" 3.3. 安装")]),t._v(" "),s("blockquote",[s("p",[t._v("以项目 demo 为例")])]),t._v(" "),s("p",[t._v("项目结构：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("demo/\n  src/\n  package.json\n  .npmrc\n")])])]),s("p",[t._v(".npmrc:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("@fe:registry=http://39.100.38.119:10000/repository/primeton-npm-product-repository/\n")])])]),s("p",[t._v("安装：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i @fe/flowchart-editor@1.0.3\n")])])]),s("h2",{attrs:{id:"_4-离线安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-离线安装"}},[t._v("#")]),t._v(" 4. 离线安装")]),t._v(" "),s("p",[t._v("步骤：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("获取 fe-flowchart-editor-1.0.3.tgz 文件，并存放到项目 libs 目录")])]),t._v(" "),s("li",[s("p",[t._v("通过 "),s("code",[t._v("npm i ./libs/fe-flowchart-editor-1.0.3.tgz")]),t._v(" 即可安装至项目")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);