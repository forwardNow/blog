(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{703:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"typescript-类型声明文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typescript-类型声明文件"}},[t._v("#")]),t._v(" TypeScript 类型声明文件")]),t._v(" "),s("h2",{attrs:{id:"_1-概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-概述"}},[t._v("#")]),t._v(" 1. 概述")]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("类型声明文件：用来为已存在的 JS 库提供类型信息")]),t._v(" "),s("li",[t._v("在 TS 中使用这些库时，就像 TS 一样，会有代码提示、类型保护等")])]),t._v(" "),s("p",[t._v("示例：")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" axios "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"axios"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// node_modules/axios/index.d.ts")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("axios")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"_2-ts-中的两种文件类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-ts-中的两种文件类型"}},[t._v("#")]),t._v(" 2. TS 中的两种文件类型")]),t._v(" "),s("p",[t._v("分别为：")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v(".ts")]),t._v(" 文件")]),t._v(" "),s("li",[s("strong",[t._v(".d.ts")]),t._v(" 文件，类型声明文件")])]),t._v(" "),s("p",[t._v("比较：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("文件")]),t._v(" "),s("th",[t._v("内容")]),t._v(" "),s("th",[t._v("编译")]),t._v(" "),s("th",[t._v("用途")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v(".ts")]),t._v(" "),s("td",[t._v("类型信息、可执行代码")]),t._v(" "),s("td",[t._v("编译为 .js 文件")]),t._v(" "),s("td",[t._v("编写程序代码")])]),t._v(" "),s("tr",[s("td",[t._v(".d.ts")]),t._v(" "),s("td",[t._v("类型信息")]),t._v(" "),s("td",[t._v("不会生成 .js 文件")]),t._v(" "),s("td",[t._v("为 JS 提供类型信息")])])])]),t._v(" "),s("p",[t._v("总结：")]),t._v(" "),s("ul",[s("li",[t._v(".ts 是 implementation（代码实现文件）")]),t._v(" "),s("li",[t._v(".d.ts 是 declaration （类型声明文件）")])]),t._v(" "),s("h2",{attrs:{id:"_3-类型声明文件的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-类型声明文件的使用"}},[t._v("#")]),t._v(" 3. 类型声明文件的使用")]),t._v(" "),s("p",[t._v("在使用 TS 开发项目时，类型声明文件的使用有以下两种方式：")]),t._v(" "),s("ol",[s("li",[t._v("使用已有的类型声明文件")]),t._v(" "),s("li",[t._v("创建自己的类型声明文件")])]),t._v(" "),s("h3",{attrs:{id:"_3-1-使用已有的类型声明文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-使用已有的类型声明文件"}},[t._v("#")]),t._v(" 3.1. 使用已有的类型声明文件")]),t._v(" "),s("p",[t._v("已有的类型声明文件，有两种情况：")]),t._v(" "),s("ol",[s("li",[t._v("内置类型声明文件")]),t._v(" "),s("li",[t._v("第三方库的类型声明文件")])]),t._v(" "),s("h4",{attrs:{id:"_3-1-1-内置类型声明文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-内置类型声明文件"}},[t._v("#")]),t._v(" 3.1.1. 内置类型声明文件")]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("TS 为 JS 运行时可用的所有标准化内置 API 都提供了声明文件")]),t._v(" "),s("li",[t._v("比如：\n"),s("ul",[s("li",[t._v("lib.es5.d.ts")]),t._v(" "),s("li",[t._v("lib.dom.d.ts")])])])]),t._v(" "),s("h4",{attrs:{id:"_3-1-2-第三方库的类型声明文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-第三方库的类型声明文件"}},[t._v("#")]),t._v(" 3.1.2. 第三方库的类型声明文件")]),t._v(" "),s("p",[t._v("第三方库的类型声明文件有两种存在方式：")]),t._v(" "),s("ol",[s("li",[t._v("库自带类型声明文件")]),t._v(" "),s("li",[t._v("由 DefinitelyTyped 提供")])]),t._v(" "),s("h5",{attrs:{id:"_3-1-2-1-库自带类型声明文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-1-库自带类型声明文件"}},[t._v("#")]),t._v(" 3.1.2.1. 库自带类型声明文件")]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("导入该库时，TS 自动加载库的类型声明文件")]),t._v(" "),s("li",[t._v("通过 package.json 中的 "),s("code",[t._v("types")]),t._v(" 字段指定类型声明文件的位置")])]),t._v(" "),s("p",[t._v("示例：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("目录：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("proj/\n    node_modules/\n        axios/\n            index.js\n            index.d.ts\n            package.json\n")])])])]),t._v(" "),s("li",[s("p",[t._v("package.json:")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"types"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"index.d.ts"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("h5",{attrs:{id:"_3-1-2-2-definitelytyped"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-2-definitelytyped"}},[t._v("#")]),t._v(" 3.1.2.2. DefinitelyTyped")]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("DefinitelyTyped 是一个 github 仓库，提供高质量的第三方库类型声明文件，"),s("a",{attrs:{href:"https://github.com/DefinitelyTyped/DefinitelyTyped",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("安装某个库（包名为 xyz）的类型声明包："),s("code",[t._v("npm i -D @types/xyz")]),t._v("。TS 会自动加载该类型声明包")])]),t._v(" "),s("p",[t._v("示例：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("安装：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i lodash\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v(" @types/lodash\n")])])])]),t._v(" "),s("li",[s("p",[t._v("使用：")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" lodash "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lodash'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" num"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" lodash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"_3-2-创建自己的类型声明文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-创建自己的类型声明文件"}},[t._v("#")]),t._v(" 3.2. 创建自己的类型声明文件")]),t._v(" "),s("p",[t._v("有两种情况需要自己创建类型文件：")]),t._v(" "),s("ol",[s("li",[t._v("项目内共享类型")]),t._v(" "),s("li",[t._v("为已有 JS 文件提供类型声明")])]),t._v(" "),s("h4",{attrs:{id:"_3-2-1-项目内共享类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-项目内共享类型"}},[t._v("#")]),t._v(" 3.2.1. 项目内共享类型")]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("多个 "),s("code",[t._v(".ts")]),t._v(" 文件使用同一个类型，可以将该类型抽取到 "),s("code",[t._v(".d.ts")]),t._v(" 文件中")]),t._v(" "),s("li",[s("code",[t._v(".d.ts")]),t._v(" 文件，定义并导出 类型；"),s("code",[t._v(".ts")]),t._v(" 文件，导入并使用 "),s("code",[t._v(".d.ts")]),t._v(" 文件定义好的类型")]),t._v(" "),s("li",[t._v("导入 "),s("code",[t._v(".d.ts")]),t._v(" 文件时，"),s("code",[t._v(".d.ts")]),t._v(" 后缀要省略")])]),t._v(" "),s("p",[t._v("示例：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("目录：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("proj/\n  main.ts\n  index.d.ts\n")])])])]),t._v(" "),s("li",[s("p",[t._v("index.d.ts:")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Props")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("main.ts:")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Props "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./index"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Props "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("h4",{attrs:{id:"_3-2-2-为已有-js-文件提供类型声明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-2-为已有-js-文件提供类型声明"}},[t._v("#")]),t._v(" 3.2.2. 为已有 JS 文件提供类型声明")]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("类型声明文件的编写与模块化方式有关")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.typescriptlang.org/docs/handbook/2/modules.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS 中的模块化方案"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("declaration-files 文档"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("在 TS 项目中使用 "),s("code",[t._v(".js")]),t._v(" 文件：")]),t._v(" "),s("ul",[s("li",[t._v("TS 项目中也可以使用 "),s("code",[t._v(".js")]),t._v(" 文件")]),t._v(" "),s("li",[t._v("导入 "),s("code",[t._v(".js")]),t._v(" 文件时，TS 会自动加载与 "),s("code",[t._v(".js")]),t._v(" 同名的 "),s("code",[t._v(".d.ts")]),t._v(" 文件，以提供类型声明")])]),t._v(" "),s("p",[t._v("declare 关键字：")]),t._v(" "),s("ul",[s("li",[t._v("用于类型声明，为其他地方（如 .js 文件）已存在的变量声明类型，而不是创建一个新的类型")]),t._v(" "),s("li",[t._v("对于 type、interface 等 TS 独有的类型，可以省略 declare 关键字")]),t._v(" "),s("li",[t._v("对于 let、function 等 TS、JS 都可以使用的，应该使用 declare 关键字，明确指出为类型声明")])]),t._v(" "),s("p",[t._v("示例：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("utils.js:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" count "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" position "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("x")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("y")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("changePosition")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("point")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  position "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" point"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'当前坐标点'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" num1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" num2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  changePosition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("utils.d.ts:")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" count"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Point")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  x"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  y"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" position"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Point"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("changePosition")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("point"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Point"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" num2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  changePosition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"_4-自定义第三方库类型声明文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-自定义第三方库类型声明文件"}},[t._v("#")]),t._v(" 4. 自定义第三方库类型声明文件")]),t._v(" "),s("h3",{attrs:{id:"_4-1-在-window-对象上自定义属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-在-window-对象上自定义属性"}},[t._v("#")]),t._v(" 4.1. 在 window 对象上自定义属性")]),t._v(" "),s("p",[t._v("类型文件：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("shims-window.d.ts")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Window")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  lw_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("lw_sayHello")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"_4-2-click-outside-vue3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-click-outside-vue3"}},[t._v("#")]),t._v(" 4.2. click-outside-vue3")]),t._v(" "),s("p",[t._v("类型文件：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("click-outside.d.ts")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* eslint-disable no-var,vars-on-top */")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("declare")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click-outside-vue3'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" directive"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])]),t._v(" "),s("p",[t._v("使用：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" vClickOutside "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click-outside-vue3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  directives"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    clickOutside"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" vClickOutside"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("directive"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);