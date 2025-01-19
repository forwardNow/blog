(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{696:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"ts-在-node-项目中使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ts-在-node-项目中使用"}},[t._v("#")]),t._v(" TS 在 node 项目中使用")]),t._v(" "),s("h2",{attrs:{id:"_1-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-介绍"}},[t._v("#")]),t._v(" 1. 介绍")]),t._v(" "),s("p",[t._v("node.js 项目中引入 TS")]),t._v(" "),s("h2",{attrs:{id:"_2-快速开始"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-快速开始"}},[t._v("#")]),t._v(" 2. 快速开始")]),t._v(" "),s("h3",{attrs:{id:"_2-1-环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-环境"}},[t._v("#")]),t._v(" 2.1. 环境")]),t._v(" "),s("p",[t._v("node:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("node")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# v16.14.2")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-2-typescript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-typescript"}},[t._v("#")]),t._v(" 2.2. typescript")]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("基础配置")])]),t._v(" "),s("p",[t._v("安装：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v(" typescript\n\nnpx tsc "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--version")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Version 5.3.3")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v(" @tsconfig/node-lts\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# "@tsconfig/node-lts": "^20.1.1"')]),t._v("\n")])])]),s("p",[t._v("配置：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("创建 "),s("code",[t._v("tsconfig.json")]),t._v(" 文件")])]),t._v(" "),s("li",[s("p",[t._v("内容：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"extends"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@tsconfig/node-lts/tsconfig.json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compilerOptions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 默认是将文件编译到 ts 文件所在的目录")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可指定编译目录")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outDir"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"include"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"exclude"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node_modules"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("p",[t._v("编译：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("npx tsc\n")])])]),s("h3",{attrs:{id:"_2-3-ts-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-ts-node"}},[t._v("#")]),t._v(" 2.3. ts-node")]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("直接执行 ts 文件")])]),t._v(" "),s("p",[t._v("安装：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v(" ts-node\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# "ts-node": "^10.9.2"')]),t._v("\n")])])]),s("p",[t._v("使用：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("npx ts-node src/index.ts\n")])])]),s("h3",{attrs:{id:"_2-4-ts-node-dev"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-ts-node-dev"}},[t._v("#")]),t._v(" 2.4. ts-node-dev")]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("侦听文件的变化，自动执行 ts 文件")])]),t._v(" "),s("p",[t._v("安装：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v(" ts-node-dev\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# "ts-node-dev": "^2.0.0"')]),t._v("\n")])])]),s("p",[t._v("使用：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("npx ts-node-dev "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--respawn")]),t._v(" ./src/index.ts\n")])])]),s("h3",{attrs:{id:"_2-5-eslint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-eslint"}},[t._v("#")]),t._v(" 2.5. eslint")]),t._v(" "),s("p",[t._v("安装：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v(" eslint eslint-config-airbnb-typescript @typescript-eslint/parser@^6.0.0 @typescript-eslint/eslint-plugin@^6.0.0\n")])])]),s("p",[t._v("配置：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v(".eslintrc.js:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("parser")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@typescript-eslint/parser'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("parserOptions")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ecmaVersion")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'latest'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Allows the use of modern ECMAScript features")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("sourceType")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'module'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Allows for the use of imports")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("project")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./tsconfig.json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'airbnb-base'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'airbnb-typescript/base'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("node")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Enable Node.js global variables")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("tsconfig.json:")])])]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"include"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('".eslintrc.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 包含 此文件")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"_3-参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-参考"}},[t._v("#")]),t._v(" 3. 参考")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://blog.appsignal.com/2022/01/19/how-to-set-up-a-nodejs-project-with-typescript.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to Set Up a Node.js Project with TypeScript"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://blog.logrocket.com/configuring-nodemon-with-typescript/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Configuring nodemon with TypeScript"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);