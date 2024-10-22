(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{503:function(t,a,s){"use strict";s.r(a);var n=s(14),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"nc68-跳台阶"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nc68-跳台阶"}},[t._v("#")]),t._v(" NC68 跳台阶")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.nowcoder.com/practice/8c82a5b80378478f9484d87d1c5f12a4",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.nowcoder.com/practice/8c82a5b80378478f9484d87d1c5f12a4"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),a("p",[t._v("一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个 n 级的台阶总共有多少种跳法（先后次序不同算不同的结果）。")]),t._v(" "),a("h2",{attrs:{id:"解答"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解答"}},[t._v("#")]),t._v(" 解答")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("下面是过程分析。\n\n已知：\n\n1. 爬到第 1 阶，只可能也只用爬 1 阶就能完成，共 1 种爬法\n2. 爬到第 2 阶，可能是从先爬 1 阶到第 1 阶，然后再爬 1 阶到第 2 阶；也可能是直接爬 2 阶到第 2 阶，一共 2 种爬法\n3. 爬到第 3 阶，可能直接来自于第 1 阶（一共 2 阶的距离），也可能来自于第 2 阶（一共 1 阶的距离），而如何爬到第 1 阶和第 2 阶？有多少种爬法？则回到了步骤 1 和 2\n\n归纳一下：在第 n 阶时，可能是由从第 n-2 阶爬 2 阶达到，也可能由从第 n-1 阶爬 1 阶达到（n>2）\n\n\n用 f(n) 记录 爬到第 n 阶时可能有多少种爬法，则：\n\nf(1)=1\nf(2)=2\nf(n)=f(n−2)+f(n−1),n>2\n")])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("jumpFloor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("jumpFloor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("jumpFloor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("jumpFloor")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" jumpFloor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.nowcoder.com/discuss/380367014609657856?sourceSSR=search",target:"_blank",rel:"noopener noreferrer"}},[t._v("题解 | #NC68 跳台阶#"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);