(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{710:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"第-1-章-权衡的艺术"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第-1-章-权衡的艺术"}},[t._v("#")]),t._v(" 第 1 章 权衡的艺术")]),t._v(" "),s("h2",{attrs:{id:"_1-命令式和声明式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令式和声明式"}},[t._v("#")]),t._v(" 1. 命令式和声明式")]),t._v(" "),s("p",[t._v("视图层框架按范式分为：")]),t._v(" "),s("ul",[s("li",[t._v("命令式：关注过程，与自然语音一一对应")]),t._v(" "),s("li",[t._v("声明式：关注结果，由框架来实现过程")])]),t._v(" "),s("h2",{attrs:{id:"_2-性能和可维护性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-性能和可维护性"}},[t._v("#")]),t._v(" 2. 性能和可维护性")]),t._v(" "),s("p",[t._v("框架封装了命令式代码，以实现面向用户的命令式")]),t._v(" "),s("p",[t._v("声明式代码的性能不优于命令式代码的性能")]),t._v(" "),s("h2",{attrs:{id:"_3-虚拟-dom-的性能到底如何"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-虚拟-dom-的性能到底如何"}},[t._v("#")]),t._v(" 3. 虚拟 DOM 的性能到底如何")]),t._v(" "),s("p",[t._v("声明式代码的更新性能消耗 = 找出差异的性能消耗 + 直接修改的性能消耗")]),t._v(" "),s("p",[t._v("虚拟 DOM 就是为了最小化找出差异才出现的")]),t._v(" "),s("p",[t._v("新建页面：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("运算")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("innerHTML(模板)")]),t._v(" "),s("th",[t._v("虚拟DOM")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("JS运算")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("渲染 HTML 字符串")]),t._v(" "),s("td",[t._v("创建JS对象（虚拟DOM）")])]),t._v(" "),s("tr",[s("td",[t._v("DOM运算")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("新建所有新 DOM 元素")]),t._v(" "),s("td",[t._v("新建所有新 DOM 元素")])])])]),t._v(" "),s("p",[t._v("更新页面：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("运算")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("innerHTML(模板)")]),t._v(" "),s("th",[t._v("虚拟DOM")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("JS运算")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("渲染 HTML 字符串")]),t._v(" "),s("td",[t._v("创建新的虚拟DOM对象 + diff")])]),t._v(" "),s("tr",[s("td",[t._v("DOM运算")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("销毁所有旧 DOM 元素，新建所有新 DOM 元素")]),t._v(" "),s("td",[t._v("必要的 DOM 更新")])])])]),t._v(" "),s("h2",{attrs:{id:"_4-运行时和编译时"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-运行时和编译时"}},[t._v("#")]),t._v(" 4. 运行时和编译时")]),t._v(" "),s("p",[t._v("纯 运行时 框架：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("源码：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// obj -> DOM ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" root")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" el "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" text "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createTextNode")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("children"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("child")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("child"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("使用：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tag")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("children")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tag")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'span'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("children")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello world'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("p",[t._v("编译时 + 运行时 框架：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("源码")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// htmlStr -> obj")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("htmlStr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// obj -> DOM ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("使用")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" htmlStr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\n  <div>\n    <span>hello world</span>\n  </div>\n")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("htmlStr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])]),t._v(" "),s("p",[t._v("纯 编译时 框架：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("源码")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// htmlStr -> DOM")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("htmlStr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DOM")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("使用")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" htmlStr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\n  <div>\n    <span>hello world</span>\n  </div>\n")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dom "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("compile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("htmlStr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dom"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);