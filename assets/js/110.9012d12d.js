(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{539:function(t,a,s){"use strict";s.r(a);var e=s(14),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_1-npm-常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-npm-常用命令"}},[t._v("#")]),t._v(" 1. npm 常用命令")]),t._v(" "),a("h2",{attrs:{id:"_1-1-npm-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-npm-install"}},[t._v("#")]),t._v(" 1.1. npm install")]),t._v(" "),a("p",[t._v("作用：")]),t._v(" "),a("ul",[a("li",[t._v("安装依赖")])]),t._v(" "),a("p",[t._v("问题：")]),t._v(" "),a("ul",[a("li",[t._v("通过 "),a("code",[t._v("npm install")]),t._v(" 安装依赖会导致 "),a("code",[t._v("package-lock.json")]),t._v(" 发生变化")]),t._v(" "),a("li",[t._v("不同人不同时间点使用 "),a("code",[t._v("npm install")]),t._v(" 安装相同的包 也会产生不同的 "),a("code",[t._v("package-lock.json")])]),t._v(" "),a("li",[t._v("而 "),a("code",[t._v("package-lock.json")]),t._v(" 又属于公共文件，多人同时更改会导致代码冲突")])]),t._v(" "),a("p",[t._v("应用：")]),t._v(" "),a("ul",[a("li",[t._v("安装未在 "),a("code",[t._v("package.json")]),t._v(" 声明的依赖")])]),t._v(" "),a("h3",{attrs:{id:"_1-1-1-版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-版本"}},[t._v("#")]),t._v(" 1.1.1. 版本")]),t._v(" "),a("p",[t._v("包的版本：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("语法")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("示例")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("~version")]),t._v(" "),a("td",[t._v("Approximately equivalent to version")]),t._v(" "),a("td",[a("code",[t._v("~1.2.3")]),t._v(" == "),a("code",[t._v("[1.2.3, 1.3.0)")])])]),t._v(" "),a("tr",[a("td",[t._v("^version")]),t._v(" "),a("td",[t._v("Compatible with version")]),t._v(" "),a("td",[a("code",[t._v("^1.2.3")]),t._v(" == "),a("code",[t._v("[1.2.3, 2.0.0)")])])]),t._v(" "),a("tr",[a("td",[t._v("version")]),t._v(" "),a("td",[t._v("Must match version exactly")]),t._v(" "),a("td",[a("code",[t._v("1.2.3")])])]),t._v(" "),a("tr",[a("td",[t._v(">version")]),t._v(" "),a("td",[t._v("Must be greater than version")]),t._v(" "),a("td",[a("code",[t._v(">1.2.3")]),t._v(" == "),a("code",[t._v("(1.2.3, ∞)")])])]),t._v(" "),a("tr",[a("td",[t._v(">=version")]),t._v(" "),a("td",[t._v("greater than or equal to")]),t._v(" "),a("td",[a("code",[t._v(">=1.2.3")]),t._v(" == "),a("code",[t._v("[1.2.3, ∞)")])])]),t._v(" "),a("tr",[a("td",[t._v("<version")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("<1.2.3")]),t._v(" == "),a("code",[t._v("[0.0.0, 1.2.3)")])])]),t._v(" "),a("tr",[a("td",[t._v("<=version")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("<=1.2.3")]),t._v(" == "),a("code",[t._v("[0.0.0, 1.2.3]")])])]),t._v(" "),a("tr",[a("td",[t._v("x")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("1.2.x")]),t._v(" == "),a("code",[t._v("[1.2.0, 1.3.0)")])])]),t._v(" "),a("tr",[a("td",[t._v("*")]),t._v(" "),a("td",[t._v("Matches any version")]),t._v(" "),a("td",[a("code",[t._v("*")]),t._v(" == "),a("code",[t._v("[0.0.0, ∞)")])])]),t._v(" "),a("tr",[a("td",[t._v("latest")]),t._v(" "),a("td",[t._v("Obtains latest release")]),t._v(" "),a("td",[a("code",[t._v("latest")])])])])]),t._v(" "),a("p",[t._v("参考：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json",target:"_blank",rel:"noopener noreferrer"}},[t._v("What's the difference between tilde(~) and caret(^) in package.json?"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"_1-1-2-registry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-registry"}},[t._v("#")]),t._v(" 1.1.2. --registry")]),t._v(" "),a("p",[t._v("说明：")]),t._v(" "),a("ul",[a("li",[t._v("安装时指定仓库")])]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i express "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--registry")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://registry.npm.taobao.org\n")])])]),a("h2",{attrs:{id:"_1-2-npm-ci"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-npm-ci"}},[t._v("#")]),t._v(" 1.2. npm ci")]),t._v(" "),a("p",[t._v("作用：")]),t._v(" "),a("ul",[a("li",[t._v("基于 "),a("code",[t._v("package-lock.json")]),t._v(" 安装依赖")])]),t._v(" "),a("p",[t._v("应用：")]),t._v(" "),a("ul",[a("li",[t._v("安装已在 "),a("code",[t._v("package.json")]),t._v(" 声明的依赖")]),t._v(" "),a("li",[t._v("也就是说，别人安装了新依赖，你拉取了 "),a("code",[t._v("package.json")]),t._v(" 和 "),a("code",[t._v("package-lock.json")]),t._v(" 后，使用 "),a("code",[t._v("npm ci")]),t._v(" 安装依赖")])]),t._v(" "),a("p",[t._v("参考：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.npmjs.com/cli/v8/commands/npm-ci",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm-ci —— NPM Docs"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"_1-3-npm-link"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-npm-link"}},[t._v("#")]),t._v(" 1.3. npm link")]),t._v(" "),a("p",[t._v("作用：")]),t._v(" "),a("ul",[a("li",[t._v("将模块安装到全局 node_modules 中")]),t._v(" "),a("li",[t._v("将（全局的）模块安装当前项目中")])]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("全局安装")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#=> D:\\dev\\my-module")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在全局 node_modules 中创建符号链接（D:\\dev\\my-module）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看全局安装的位置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" root "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-g")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#=> C:\\Program Files\\nodejs\\node_modules")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" uni "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-g")]),t._v(" my-module\n")])])])]),t._v(" "),a("li",[a("p",[t._v("项目安装（先要全局安装）")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#=> D:\\project\\my-proj")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v(" my-module\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在当前项目的 node_modules 中创建符号链接（D:\\dev\\my-module）")]),t._v("\n")])])])])]),t._v(" "),a("p",[t._v("参考：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://javascript.ruanyifeng.com/nodejs/npm.html#toc18",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm模块管理器 - 来自《JavaScript 标准参考教程（alpha）》，by 阮一峰"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"_1-4-npm-view-查看包的所有版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-npm-view-查看包的所有版本"}},[t._v("#")]),t._v(" 1.4. npm view 查看包的所有版本")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" view less-loader versions \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   '0.1.0',  '0.1.1',  '0.1.2',  '0.1.3',  '0.2.0',")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   ......")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   '10.0.0', '10.0.1', '10.1.0', '10.2.0', '11.0.0',")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   '11.1.0'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ]")]),t._v("\n")])])]),a("h2",{attrs:{id:"_1-5-npm-pack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-npm-pack"}},[t._v("#")]),t._v(" 1.5. npm pack")]),t._v(" "),a("p",[t._v("说明：")]),t._v(" "),a("ul",[a("li",[t._v("将项目打包成 npm 包，创建一个 tarball（.tgz 文件）—— "),a("code",[t._v("my-project-x.y.z.tgz")])]),t._v(" "),a("li",[t._v("别人可以通过 "),a("code",[t._v("npm i my-project-x.y.z.tgz")]),t._v(" 安装")])]),t._v(" "),a("p",[t._v("语法：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm pack --pack-destination dist-zip\n\n  --pack-destination dist-zip : 指定 tarball 的存放的位置，注意 dist-zip 目录要存在\n")])])]),a("p",[t._v("示例：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("目录：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("D:/\n  flowchart-editor/\n  proj/\n")])])])]),t._v(" "),a("li",[a("p",[t._v("命令:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" flowchart-editor\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" pack --pack-destination dist-zip\n\n\ncopy dist-zip/flowchart-editor-1.0.3.tgz "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/proj/libs\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/proj\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i ./libs/flowchart-editor-1.0.3.tgz\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" uni flowchart-editor\n")])])])])]),t._v(" "),a("p",[t._v("参考：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.cn/s/npm%20pack%20%E4%BD%9C%E7%94%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm pack 作用 —— 稀土掘金 "),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"_1-6-npm-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-npm-update"}},[t._v("#")]),t._v(" 1.6. npm update")]),t._v(" "),a("p",[t._v("说明：")]),t._v(" "),a("ul",[a("li",[t._v("更新依赖的版本")])]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 按照版本规则，更新指定依赖")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" update jquery\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更新所有的依赖")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" update\n")])])]),a("h2",{attrs:{id:"_1-7-npm-version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-npm-version"}},[t._v("#")]),t._v(" 1.7. npm version")]),t._v(" "),a("p",[t._v("说明：")]),t._v(" "),a("ul",[a("li",[t._v("版本号格式: major.minor.patch (主版本号.次版本号.修订号)")]),t._v(" "),a("li",[t._v("示例: 1.2.3")])]),t._v(" "),a("p",[t._v("升级版本号：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 升级主版本号")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" version major\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 升级次版本号")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" version minor\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 升级修订号")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" version patch\n")])])]),a("p",[t._v("注意：")]),t._v(" "),a("ul",[a("li",[t._v("执行 npm version 指令会修改 package.json 中 version")])]),t._v(" "),a("h2",{attrs:{id:"_1-8-npm-cache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-npm-cache"}},[t._v("#")]),t._v(" 1.8. npm cache")]),t._v(" "),a("p",[t._v("说明：")]),t._v(" "),a("ul",[a("li",[t._v("缓存相关")])]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看本机缓存目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config get cache\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## C:\\Users\\wuqinfei\\AppData\\Roaming\\npm-cache")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 清空缓存 （删除 C:\\Users\\wuqinfei\\AppData\\Roaming\\npm-cache\\_cacache 目录）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" cache clean "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v("\n")])])]),a("h2",{attrs:{id:"_1-9-npm-ls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-9-npm-ls"}},[t._v("#")]),t._v(" 1.9. npm ls")]),t._v(" "),a("p",[t._v("说明：")]),t._v(" "),a("ul",[a("li",[t._v("查看本地包的（版本）信息")])]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("W:\\proj\\11-image-control\\code\\image-control>npm ls typescript   \n\n@ma/image-control@1.0.0 W:\\proj\\11-image-control\\code\\image-control\n+-- @ma/ma-js-api@1.0.0 -> .\\..\\ma-js-api\n| +-- @typescript-eslint/eslint-plugin@6.15.0\n| | `-- ts-api-utils@1.0.3\n| |   `-- typescript@5.3.3 deduped\n| +-- postcss-loader@7.3.3\n| | `-- cosmiconfig@8.3.6\n| |   `-- typescript@5.3.3 deduped\n| +-- ts-loader@9.5.1\n| | `-- typescript@5.3.3 deduped\n| `-- typescript@5.3.3\n+-- @ma/ma-proxy@1.0.0 -> .\\..\\ma-proxy\n| `-- typescript@5.3.3\n+-- @typescript-eslint/eslint-plugin@6.15.0\n| `-- ts-api-utils@1.0.3\n|   `-- typescript@5.3.3 deduped\n+-- postcss-loader@7.3.3\n| `-- cosmiconfig@8.3.6\n|   `-- typescript@5.3.3 deduped\n+-- ts-loader@9.5.1\n| `-- typescript@5.3.3 deduped\n`-- typescript@5.3.3\n")])])]),a("p",[t._v("参考：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/cvper/article/details/79543262",target:"_blank",rel:"noopener noreferrer"}},[t._v("npm 如何查看一个包的版本信息？"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"_1-10-npm-root"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-10-npm-root"}},[t._v("#")]),t._v(" 1.10. npm root")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查询 Node.js 的安装目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" root "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-g")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);