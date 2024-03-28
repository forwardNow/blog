(window.webpackJsonp=window.webpackJsonp||[]).push([[241],{677:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"typescript-在-react-中的使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#typescript-在-react-中的使用"}},[t._v("#")]),t._v(" TypeScript 在 React 中的使用")]),t._v(" "),s("h2",{attrs:{id:"_1-使用-cra-创建支持-ts-的项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用-cra-创建支持-ts-的项目"}},[t._v("#")]),t._v(" 1. 使用 CRA 创建支持 TS 的项目")]),t._v(" "),s("h3",{attrs:{id:"_1-1-创建项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-创建项目"}},[t._v("#")]),t._v(" 1.1. 创建项目")]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("React 脚手架工具 "),s("code",[t._v("create-react-app")]),t._v("(简称 CRA) 默认支持 TypeScript")])]),t._v(" "),s("p",[t._v("示例：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# "react-ts-basic" 为项目名称')]),t._v("\nnpx create-react-app react-ts-basic "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--template")]),t._v(" typescript\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# We suggest that you begin by typing:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   cd react-ts-basic")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   npm start")]),t._v("\n")])])]),s("p",[t._v("参考：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://create-react-app.dev/docs/adding-typescript#installation",target:"_blank",rel:"noopener noreferrer"}},[t._v("adding-typescript#installation"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"_1-2-目录结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-目录结构"}},[t._v("#")]),t._v(" 1.2. 目录结构")]),t._v(" "),s("p",[t._v("与 JS 项目对比，发现：")]),t._v(" "),s("ol",[s("li",[t._v("新增 tsconfig.json 文件")]),t._v(" "),s("li",[t._v("组件的文件扩展名变为 .tsx")]),t._v(" "),s("li",[t._v("新增 react-app-env.d.ts 文件 （React 项目默认的类型声明文件）")])]),t._v(" "),s("h3",{attrs:{id:"_1-3-react-app-env-d-ts"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-react-app-env-d-ts"}},[t._v("#")]),t._v(" 1.3. react-app-env.d.ts")]),t._v(" "),s("p",[t._v("tsconfig.json 中的 include 配置：")]),t._v(" "),s("ul",[s("li",[t._v("指定包含哪些 ts 文件，参考 "),s("a",{attrs:{href:"https://www.typescriptlang.org/tsconfig#include",target:"_blank",rel:"noopener noreferrer"}},[t._v("tsconfig#include"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("其中 "),s("code",[t._v(".d.ts")]),t._v(" 文件会自动加载，无须额外导出和导入")])]),t._v(" "),s("p",[t._v("自动导入 "),s("code",[t._v(".d.ts")]),t._v(" 文件的示例：")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* common.d.ts */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyCommonType")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* common.d.ts */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" MyCommonType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("同样 "),s("code",[t._v("src/react-app-env.d.ts")]),t._v(" 文件也会自动加载，其内容为：")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/// <reference types="react-scripts" />')]),t._v("\n")])])]),s("p",[s("code",[t._v('/// <reference types="react-scripts" />')]),t._v(" 为三斜线指令：")]),t._v(" "),s("ul",[s("li",[t._v("类似于 import，表示依赖哪个（包的）类型声明文件")]),t._v(" "),s("li",[t._v("告诉 TS 加载 react-scripts 这个包提供的类型声明文件")])]),t._v(" "),s("p",[t._v("react-scripts 的类型声明文件包含：")]),t._v(" "),s("ol",[s("li",[t._v("react、react-dom、node 的类型")]),t._v(" "),s("li",[t._v("图片、样式等模块的类型（允许在 TS 代码中 import 图片、样式等）")])]),t._v(" "),s("h2",{attrs:{id:"_2-tsconfig-json-配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-tsconfig-json-配置文件"}},[t._v("#")]),t._v(" 2. tsconfig.json 配置文件")]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("tsconfig.json 文件可以通过 "),s("code",[t._v("tsc --init")]),t._v(" 命令生成")]),t._v(" "),s("li",[t._v("tsconfig.json 文件所在目录为项目的根目录")]),t._v(" "),s("li",[t._v("官方文档："),s("a",{attrs:{href:"https://www.typescriptlang.org/tsconfig",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.typescriptlang.org/tsconfig"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("顶层属性：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("include\ncompilerOptions\n\nfiles\nextends\nexclude\nreferences\n")])])]),s("h3",{attrs:{id:"_2-1-include"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-include"}},[t._v("#")]),t._v(" 2.1. include")]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("Specifies an array of filenames or patterns to include in the program.")]),t._v(" "),s("li",[t._v("These filenames are resolved relative to the directory containing the tsconfig.json file.")])]),t._v(" "),s("p",[t._v("示例：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"include"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src/**/*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tests/**/*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-2-compileroptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-compileroptions"}},[t._v("#")]),t._v(" 2.2. compilerOptions")]),t._v(" "),s("h4",{attrs:{id:"_2-2-1-target"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-target"}},[t._v("#")]),t._v(" 2.2.1. target")]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("编译后的 JS 代码的版本")])]),t._v(" "),s("p",[t._v("可选值:")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("es3         (default)\nes5\nes6/es2015\nes2016\nes2017\nes2018\nes2019\nes2020\nes2021\nes2022\nesnext\n")])])]),s("p",[t._v("参考："),s("a",{attrs:{href:"https://www.typescriptlang.org/tsconfig#target",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.typescriptlang.org/tsconfig#target"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"_2-2-2-lib"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-lib"}},[t._v("#")]),t._v(" 2.2.2. lib")]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("包含哪些库的类型声明")]),t._v(" "),s("li",[t._v("相当于指定代码运行的环境")])]),t._v(" "),s("p",[t._v("示例：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compilerOptions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lib"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dom"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dom.iterable"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"esnext"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("参考："),s("a",{attrs:{href:"https://www.typescriptlang.org/tsconfig#lib",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.typescriptlang.org/tsconfig#lib"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"_2-2-3-allowjs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-3-allowjs"}},[t._v("#")]),t._v(" 2.2.3. allowJs")]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("允许在 ts 代码中导入 js 文件")]),t._v(" "),s("li",[t._v("推荐开启")])]),t._v(" "),s("p",[t._v("参考："),s("a",{attrs:{href:"https://www.typescriptlang.org/tsconfig#allowJs",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.typescriptlang.org/tsconfig#allowJs"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"_2-2-4-skiplibcheck"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-4-skiplibcheck"}},[t._v("#")]),t._v(" 2.2.4. skipLibCheck")]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("跳过声明文件的类型检查")]),t._v(" "),s("li",[t._v("常用于，当 node_modules 有多份同一个库的类型时")]),t._v(" "),s("li",[t._v("推荐开启")])]),t._v(" "),s("p",[t._v("参考："),s("a",{attrs:{href:"https://www.typescriptlang.org/tsconfig#skipLibCheck",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.typescriptlang.org/tsconfig#skipLibCheck"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"_2-2-5-esmoduleinterop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-5-esmoduleinterop"}},[t._v("#")]),t._v(" 2.2.5. esModuleInterop")]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("屏蔽 ESModule、CommonJS 之间的差异")]),t._v(" "),s("li",[t._v("建议开启，通常也会开启 compilerOptions.allowSyntheticDefaultImports")])]),t._v(" "),s("p",[t._v("示例：")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n  关闭\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFileSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file.txt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" lodash "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'loadash'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlodash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chunk")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* ... */")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要加上 default")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n  开启\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" fs "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" lodash "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lodash"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nfs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFileSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file.txt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nlodash"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chunk")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"d"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("参考："),s("a",{attrs:{href:"https://www.typescriptlang.org/tsconfig#esModuleInterop",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.typescriptlang.org/tsconfig#esModuleInterop"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"_2-2-6-allowsyntheticdefaultimports"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-6-allowsyntheticdefaultimports"}},[t._v("#")]),t._v(" 2.2.6. allowSyntheticDefaultImports")]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("简化默认导入的代码")]),t._v(" "),s("li",[t._v("建议开启")])]),t._v(" "),s("p",[t._v("示例：")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n  关闭\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" fs "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nfs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFileSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file.txt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n  开启，\n    如果没有默认导出，babel 会自动创建\n    \n      module.exports = allFunctions;\n      module.exports.default = allFunctions; // 自动创建的\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" fs "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fs"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nfs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFileSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file.txt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf8"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"_2-2-7-strict"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-7-strict"}},[t._v("#")]),t._v(" 2.2.7. strict")]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("开启一系列的严格选项")]),t._v(" "),s("li",[t._v("建议开启")])]),t._v(" "),s("p",[t._v("参考："),s("a",{attrs:{href:"https://www.typescriptlang.org/tsconfig#strict",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.typescriptlang.org/tsconfig#strict"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"_2-2-8-forceconsistentcasinginfilenames"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-8-forceconsistentcasinginfilenames"}},[t._v("#")]),t._v(" 2.2.8. forceConsistentCasingInFileNames")]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("区分文件名大小写")]),t._v(" "),s("li",[t._v("默认开启。建议开启")])]),t._v(" "),s("p",[t._v("参考："),s("a",{attrs:{href:"https://www.typescriptlang.org/tsconfig#forceConsistentCasingInFileNames",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.typescriptlang.org/tsconfig#forceConsistentCasingInFileNames"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"_2-2-9-nofallthroughcasesinswitch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-9-nofallthroughcasesinswitch"}},[t._v("#")]),t._v(" 2.2.9. noFallthroughCasesInSwitch")]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("switch 语句不能有空 case")]),t._v(" "),s("li",[t._v("也就是不能匹配多个 case")]),t._v(" "),s("li",[t._v("建议开启。")])]),t._v(" "),s("p",[t._v("示例：")]),t._v(" "),s("div",{staticClass:"language-typescript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个 case 里没有 break、return、throw")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"even"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("console")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"odd"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("参考："),s("a",{attrs:{href:"https://www.typescriptlang.org/tsconfig#noFallthroughCasesInSwitch",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.typescriptlang.org/tsconfig#noFallthroughCasesInSwitch"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"_2-2-10-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-10-module"}},[t._v("#")]),t._v(" 2.2.10. module")]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("生成的 JS 代码的模块化方案")])]),t._v(" "),s("p",[t._v("可选值：")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("none\ncommonjs            (default, if target is ES3 or ES5)\namd\numd\nsystem\nes6/es2015          (default, if target is not ES3 or ES5)\nes2020\nes2022\nesnext\nnode16\nnodenext\n")])])]),s("p",[t._v("参考："),s("a",{attrs:{href:"https://www.typescriptlang.org/tsconfig#module",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.typescriptlang.org/tsconfig#module"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"_2-2-11-moduleresolution"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-11-moduleresolution"}},[t._v("#")]),t._v(" 2.2.11. moduleResolution")]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("模块解析（查找）策略")])]),t._v(" "),s("p",[t._v("参考："),s("a",{attrs:{href:"https://www.typescriptlang.org/tsconfig#moduleResolution",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.typescriptlang.org/tsconfig#moduleResolution"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"_2-2-12-resolvejsonmodule"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-12-resolvejsonmodule"}},[t._v("#")]),t._v(" 2.2.12. resolveJsonModule")]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("解析 json 模块")]),t._v(" "),s("li",[t._v("开启后，允许导入 "),s("code",[t._v(".json")]),t._v(" 后缀的文件")])]),t._v(" "),s("p",[t._v("参考："),s("a",{attrs:{href:"https://www.typescriptlang.org/tsconfig#resolveJsonModule",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.typescriptlang.org/tsconfig#resolveJsonModule"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"_2-2-13-isolatedmodules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-13-isolatedmodules"}},[t._v("#")]),t._v(" 2.2.13. isolatedModules")]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("独立的模块")]),t._v(" "),s("li",[t._v("开启后，非模块化（没有导入导出关键字）的文件会报错")])]),t._v(" "),s("p",[t._v("参考："),s("a",{attrs:{href:"https://www.typescriptlang.org/tsconfig#isolatedModules",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.typescriptlang.org/tsconfig#isolatedModules"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"_2-2-14-noemit"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-14-noemit"}},[t._v("#")]),t._v(" 2.2.14. noEmit")]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("只进行类型检查，不生成任何文件")]),t._v(" "),s("li",[t._v("将编译工作交给 babel 来做")])]),t._v(" "),s("p",[t._v("参考："),s("a",{attrs:{href:"https://www.typescriptlang.org/tsconfig#noEmit",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.typescriptlang.org/tsconfig#noEmit"),s("OutboundLink")],1)]),t._v(" "),s("h4",{attrs:{id:"_2-2-15-jsx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-15-jsx"}},[t._v("#")]),t._v(" 2.2.15. jsx")]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("ul",[s("li",[t._v("指定将 jsx 编译成什么样的 js")])]),t._v(" "),s("p",[t._v("参考："),s("a",{attrs:{href:"https://www.typescriptlang.org/tsconfig#jsx",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.typescriptlang.org/tsconfig#jsx"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"_3-命令行指定配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-命令行指定配置"}},[t._v("#")]),t._v(" 3. 命令行指定配置")]),t._v(" "),s("p",[t._v("说明：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行 tsc 命令，启用 tsconfig.json，并编译整个项目")]),t._v("\ntsc\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 编译单个文件，且指定编译配置")]),t._v("\ntsc hello.ts "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--target")]),t._v(" es6\n")])])]),s("h2",{attrs:{id:"_4-react-中的常用类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-react-中的常用类型"}},[t._v("#")]),t._v(" 4. react 中的常用类型")]),t._v(" "),s("p",[t._v("react 开发主要任务就是写组件，有两种组件：")]),t._v(" "),s("ol",[s("li",[t._v("函数组件")]),t._v(" "),s("li",[t._v("class 组件")])]),t._v(" "),s("h3",{attrs:{id:"_4-1-函数组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-函数组件"}},[t._v("#")]),t._v(" 4.1. 函数组件")]),t._v(" "),s("p",[t._v("包括：")]),t._v(" "),s("ul",[s("li",[t._v("组件的类型")]),t._v(" "),s("li",[t._v("组件的属性")]),t._v(" "),s("li",[t._v("组件属性的默认值")]),t._v(" "),s("li",[t._v("事件绑定、事件对象")])])])}),[],!1,null,null,null);s.default=e.exports}}]);