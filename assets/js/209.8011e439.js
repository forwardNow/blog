(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{644:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"货币格式化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#货币格式化"}},[t._v("#")]),t._v(" 货币格式化")]),t._v(" "),s("h2",{attrs:{id:"_1-format-money-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-format-money-js"}},[t._v("#")]),t._v(" 1. format-money-js")]),t._v(" "),s("p",[t._v("安装：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i format-money-js\n")])])]),s("p",[t._v("使用：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" FormatMoney "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'format-money-js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定默认参数")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fm "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FormatMoney")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("decimals")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 格式化")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" \n  fm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345.67")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 12,345.67")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定参数")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" \n  fm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345.67")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 12,345.670￥")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("symbol")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'￥'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("decimals")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 解析")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" \n  fm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("un")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'$12,345.678'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 12345.678")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("参数：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Name")]),t._v(" "),s("th",[t._v("Default")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Example")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("grouping")]),t._v(" "),s("td",[s("code",[t._v("true")])]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[t._v("1,000 ("),s("code",[t._v("true")]),t._v(") vs 1000 ("),s("code",[t._v("false")]),t._v(")")])]),t._v(" "),s("tr",[s("td",[t._v("separator")]),t._v(" "),s("td",[s("code",[t._v(",")])]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("1,000")])]),t._v(" "),s("tr",[s("td",[t._v("decimalPoint")]),t._v(" "),s("td",[s("code",[t._v(".")])]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("1,234.56")])]),t._v(" "),s("tr",[s("td",[t._v("decimals")]),t._v(" "),s("td",[s("code",[t._v("0")])]),t._v(" "),s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("1,234 ("),s("code",[t._v("0")]),t._v(" - without decimals)")])]),t._v(" "),s("tr",[s("td",[t._v("symbol")]),t._v(" "),s("td",[t._v("None")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("default - 123.45, "),s("code",[t._v("'$'")]),t._v(" - $123.45")])]),t._v(" "),s("tr",[s("td",[t._v("append")]),t._v(" "),s("td",[s("code",[t._v("false")])]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[s("code",[t._v("true")]),t._v(" - 1,234.56$, "),s("code",[t._v("false")]),t._v(" - $1,234.56")])]),t._v(" "),s("tr",[s("td",[t._v("leadZeros")]),t._v(" "),s("td",[s("code",[t._v("true")])]),t._v(" "),s("td",[t._v("Boolean")]),t._v(" "),s("td",[s("code",[t._v("true")]),t._v(" - 1.10, "),s("code",[t._v("false")]),t._v(" - 1.1 (leading zeros)")])])])]),t._v(" "),s("h2",{attrs:{id:"_2-参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-参考"}},[t._v("#")]),t._v(" 2. 参考")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://juejin.cn/post/7028086399601475591",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端金额格式化处理"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);