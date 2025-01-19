(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{540:function(s,e,n){"use strict";n.r(e);var a=n(14),t=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"node-sass-的安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-sass-的安装"}},[s._v("#")]),s._v(" node-sass 的安装")]),s._v(" "),e("h2",{attrs:{id:"_1-介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-介绍"}},[s._v("#")]),s._v(" 1. 介绍")]),s._v(" "),e("p",[s._v("环境：")]),s._v(" "),e("ul",[e("li",[s._v("node v12.22.12")]),s._v(" "),e("li",[s._v("node-sass@4.13.1")]),s._v(" "),e("li",[s._v("win10")])]),s._v(" "),e("p",[s._v("目录：")]),s._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("test-2023-12-25/\n  package.json\n  .npmrc\n")])])]),e("p",[s._v("文件：")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("package.json")]),s._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"dependencies"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"node-sass"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"4.13.1"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])])])]),s._v(" "),e("h2",{attrs:{id:"_2-失败的原因"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-失败的原因"}},[s._v("#")]),s._v(" 2. 失败的原因")]),s._v(" "),e("p",[s._v("安装：")]),s._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("W:\\dev\\test\\test-2023-12-25>npm i\n\n> node-sass@4.13.1 install W:\\dev\\test\\test-2023-12-25\\node_modules\\node-sass\n> node scripts/install.js\n\nDownloading binary from https://github.com/sass/node-sass/releases/download/v4.13.1/win32-x64-72_binding.node\n\nDownload complete:\n\nBinary saved to W:\\dev\\test\\test-2023-12-25\\node_modules\\node-sass\\vendor\\win32-x64-72\\binding.node\n\nCaching binary to C:\\Users\\wuqinfei\\AppData\\Roaming\\npm-cache\\node-sass\\4.13.1\\win32-x64-72_binding.node\n")])])]),e("p",[s._v("原因：")]),s._v(" "),e("ul",[e("li",[e("code",[s._v("https://github.com/sass/node-sass/releases/download/v4.13.1/win32-x64-72_binding.node")]),s._v(" 下载失败导致 node-sass 安装失败")])]),s._v(" "),e("p",[s._v("分析：")]),s._v(" "),e("ul",[e("li",[s._v("解决 "),e("code",[s._v("win32-x64-72_binding.node")]),s._v(" 文件的下载问题")])]),s._v(" "),e("h2",{attrs:{id:"_3-外网安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-外网安装"}},[s._v("#")]),s._v(" 3. 外网安装")]),s._v(" "),e("p",[s._v("说明：")]),s._v(" "),e("ul",[e("li",[s._v("指定 "),e("code",[s._v("win32-x64-72_binding.node")]),s._v(" 下载 URL")])]),s._v(" "),e("p",[s._v("方式：")]),s._v(" "),e("ol",[e("li",[s._v("在 "),e("code",[s._v(".npmrc")]),s._v(" 文件里指定 "),e("code",[s._v("sass_binary_site")])]),s._v(" "),e("li",[s._v("设置临时环境变量 "),e("code",[s._v("SASS_BINARY_SITE")])])]),s._v(" "),e("p",[s._v("示例：")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("在项目根目录创建 "),e("code",[s._v(".npmrc")]),s._v(" 文件")])]),s._v(" "),e("li",[e("p",[s._v("在 "),e("code",[s._v(".npmrc")]),s._v(" 文件添加如下内容：")]),s._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# 指定淘宝镜像源里的 node-sass\nsass_binary_site=https://registry.npmmirror.com/node-sass/\n")])])])]),s._v(" "),e("li",[e("p",[s._v("切换至项目根目录，执行 "),e("code",[s._v("npm i")]),s._v(" 即可")])])]),s._v(" "),e("h2",{attrs:{id:"_4-内网安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-内网安装"}},[s._v("#")]),s._v(" 4. 内网安装")]),s._v(" "),e("p",[s._v("说明：")]),s._v(" "),e("ul",[e("li",[s._v("查看安装失败时，日志里记录里的 "),e("code",[s._v(".node")]),s._v(" 文件名称（如 "),e("code",[s._v("win32-x64-72_binding.node")]),s._v("）")]),s._v(" "),e("li",[s._v("将 "),e("code",[s._v("win32-x64-72_binding.node")]),s._v(" 下载到本地，然后放入缓存")])]),s._v(" "),e("p",[s._v("缓存：")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("本地缓存: "),e("code",[s._v("test-2023-12-25\\node_modules\\node-sass\\vendor\\win32-x64-72\\binding.node")])])]),s._v(" "),e("li",[e("p",[s._v("全局缓存:")]),s._v(" "),e("ul",[e("li",[s._v("查看缓存位置")])]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" config get cache\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## C:\\Users\\wuqinfei\\AppData\\Roaming\\npm-cache")]),s._v("\n")])])]),e("ul",[e("li",[e("code",[s._v("C:\\Users\\wuqinfei\\AppData\\Roaming\\npm-cache\\node-sass\\4.13.1\\win32-x64-72_binding.node")])])])])]),s._v(" "),e("p",[s._v("示例：")]),s._v(" "),e("ol",[e("li",[s._v("下载 "),e("a",{attrs:{href:"https://registry.npmmirror.com/-/binary/node-sass/v4.13.1/win32-x64-72_binding.node",target:"_blank",rel:"noopener noreferrer"}},[s._v("win32-x64-72_binding.node"),e("OutboundLink")],1)]),s._v(" "),e("li",[s._v("将 "),e("code",[s._v("win32-x64-72_binding.node")]),s._v(" 拷贝至 "),e("code",[s._v("C:\\Users\\wuqinfei\\AppData\\Roaming\\npm-cache\\node-sass\\4.13.1")])]),s._v(" "),e("li",[s._v("切换至项目根目录，执行 "),e("code",[s._v("npm i")])])]),s._v(" "),e("h2",{attrs:{id:"_5-其它情况"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-其它情况"}},[s._v("#")]),s._v(" 5. 其它情况")]),s._v(" "),e("p",[s._v("说明：")]),s._v(" "),e("ul",[e("li",[e("code",[s._v('"sass-loader": "^9.0.2"')]),s._v(" 依赖 "),e("code",[s._v('"node-sass": "^4.0.0"')])])]),s._v(" "),e("p",[s._v("方案:")]),s._v(" "),e("ol",[e("li",[s._v("使用 node v14")]),s._v(" "),e("li",[s._v("删除 "),e("code",[s._v("package-lock.json")]),s._v("、 清缓存 等")]),s._v(" "),e("li",[s._v("如果卡在 从 github 下载包，则使用 SwitchHosts 指定 github 服务器地址即可")])]),s._v(" "),e("p",[s._v("示例:")]),s._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Delete package-lock.json")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" cache clean "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--force")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" rebuild node-sass\n")])])]),e("h2",{attrs:{id:"_6-参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-参考"}},[s._v("#")]),s._v(" 6. 参考")]),s._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/lmk123/blog/issues/28",target:"_blank",rel:"noopener noreferrer"}},[s._v("安装 node-sass 的正确姿势"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/sass/node-sass/tree/v4.14.1?tab=readme-ov-file#binary-configuration-parameters",target:"_blank",rel:"noopener noreferrer"}},[s._v("binary-configuration-parameters"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://newsn.net/say/npm-cache.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("npm如何查看缓存目录？如何强制清除缓存？"),e("OutboundLink")],1)]),s._v(" "),e("li",[e("a",{attrs:{href:"https://stackoverflow.com/questions/46515077/unable-to-install-node-sass-in-my-project",target:"_blank",rel:"noopener noreferrer"}},[s._v("unable-to-install-node-sass-in-my-project"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=t.exports}}]);