(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{568:function(t,a,s){"use strict";s.r(a);var e=s(14),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"webpack-编译时内存溢出处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-编译时内存溢出处理"}},[t._v("#")]),t._v(" webpack 编译时内存溢出处理")]),t._v(" "),a("h2",{attrs:{id:"_1-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-介绍"}},[t._v("#")]),t._v(" 1. 介绍")]),t._v(" "),a("p",[t._v("错误提示：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("JavaScript heap out of memory\n")])])]),a("p",[t._v("内存溢出：")]),t._v(" "),a("ul",[a("li",[t._v("nodejs 使用的内存超过限制")]),t._v(" "),a("li",[t._v("nodejs V8 引擎在 64 位机器上默认限制使用内存最大不超过 1.7GB")])]),t._v(" "),a("p",[t._v("原因分析：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("项目比较大")]),t._v(" "),a("ul",[a("li",[t._v("依赖的第三方库比较多")]),t._v(" "),a("li",[t._v("同时编译多个页面（多出口的情况）")])])]),t._v(" "),a("li",[a("p",[t._v("在 src 目录下存放并引入第三方库，编译时开启了 ESLint，导致 ESLint 校验第三方库占用非常高的内存")])])]),t._v(" "),a("h2",{attrs:{id:"_2-解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-解决方案"}},[t._v("#")]),t._v(" 2. 解决方案")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("手动设置 nodejs 可以使用的最大内存")]),t._v(" "),a("ul",[a("li",[t._v("通过 "),a("code",[t._v("cross-env")]),t._v(" 设置临时环境变量 "),a("code",[t._v("NODE_OPTIONS=--max_old_space_size=4096")])])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"serve"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cross-env NODE_OPTIONS=--max_old_space_size=4096 NODE_ENV=development webpack serve"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("将第三方库添加进 .eslintignore")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("libs/my-lib\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"_3-参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-参考"}},[t._v("#")]),t._v(" 3. 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/weixin_42233789/article/details/110198024",target:"_blank",rel:"noopener noreferrer"}},[t._v("nodejs 执行失败报错 “JavaScript heap out of memory”"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);