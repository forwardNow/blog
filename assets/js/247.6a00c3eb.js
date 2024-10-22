(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{688:function(t,e,s){"use strict";s.r(e);var a=s(14),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"json-特殊字符的处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#json-特殊字符的处理"}},[t._v("#")]),t._v(" JSON 特殊字符的处理")]),t._v(" "),e("h2",{attrs:{id:"_1-介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-介绍"}},[t._v("#")]),t._v(" 1. 介绍")]),t._v(" "),e("p",[t._v("概念：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("名词")]),t._v(" "),e("th",[t._v("说明")]),t._v(" "),e("th",[t._v("示例")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("JSON 对象")]),t._v(" "),e("td",[t._v("由键值对组成，值的类型只能为 数字、字符串、布尔值、"),e("code",[t._v("null")])]),t._v(" "),e("td",[e("code",[t._v("{ key: 'hello'}")])])]),t._v(" "),e("tr",[e("td",[t._v("JSON 字符串")]),t._v(" "),e("td",[t._v("JSON 对象序列化后的字符串文本")]),t._v(" "),e("td",[e("code",[t._v('\'{ "key": "hello" }\'')])])])])]),t._v(" "),e("p",[t._v("转化：")]),t._v(" "),e("ul",[e("li",[t._v("JSON 对象 --\x3e JSON 字符串: "),e("code",[t._v("JSON.stringify({ key: 'hello' })")])]),t._v(" "),e("li",[t._v("JSON 字符串 --\x3e JSON 对象: "),e("code",[t._v('JSON.parse(\'{ "key": "hello" }\')')])])]),t._v(" "),e("h2",{attrs:{id:"_2-字符串类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-字符串类型"}},[t._v("#")]),t._v(" 2. 字符串类型")]),t._v(" "),e("p",[t._v("分类：")]),t._v(" "),e("ul",[e("li",[t._v("普通字符")]),t._v(" "),e("li",[t._v("转义字符")])]),t._v(" "),e("p",[t._v("转义字符：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v('\\"')]),t._v("：双引号")]),t._v(" "),e("li",[e("code",[t._v("\\\\")]),t._v(": 反斜线")]),t._v(" "),e("li",[e("code",[t._v("\\b")]),t._v(": 退格符")]),t._v(" "),e("li",[e("code",[t._v("\\f")]),t._v(": 换页符")]),t._v(" "),e("li",[e("code",[t._v("\\t")]),t._v(": 制表符")]),t._v(" "),e("li",[e("code",[t._v("\\n")]),t._v(": 换行符")]),t._v(" "),e("li",[e("code",[t._v("\\r")]),t._v(": 回车符")]),t._v(" "),e("li",[e("code",[t._v("\\u")]),t._v(": 特殊字符，如 "),e("code",[t._v("\\u263A")]),t._v(" 笑脸符号")])]),t._v(" "),e("p",[t._v("转义字符在 JSON 对象及 JSON 字符串中的表现形式：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("转义字符")]),t._v(" "),e("th",[t._v("JSON 对象")]),t._v(" "),e("th",[t._v("JSON 字符串")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("双引号")]),t._v(" "),e("td",[e("code",[t._v("{ key: '\\\"' }")])]),t._v(" "),e("td",[e("code",[t._v('\'{ "key": "\\\\"" }\'')])])]),t._v(" "),e("tr",[e("td",[t._v("反斜线")]),t._v(" "),e("td",[e("code",[t._v("{ key: '\\\\' }")])]),t._v(" "),e("td",[e("code",[t._v('\'{ "key": "\\\\\\\\" }\'')])])]),t._v(" "),e("tr",[e("td",[t._v("退格符")]),t._v(" "),e("td",[e("code",[t._v("{ key: '\\b' }")])]),t._v(" "),e("td",[e("code",[t._v('\'{ "key": "\\\\b" }\'')])])]),t._v(" "),e("tr",[e("td",[t._v("换页符")]),t._v(" "),e("td",[e("code",[t._v("{ key: '\\f' }")])]),t._v(" "),e("td",[e("code",[t._v('\'{ "key": "\\\\f" }\'')])])]),t._v(" "),e("tr",[e("td",[t._v("制表符")]),t._v(" "),e("td",[e("code",[t._v("{ key: '\\t' }")])]),t._v(" "),e("td",[e("code",[t._v('\'{ "key": "\\\\t" }\'')])])]),t._v(" "),e("tr",[e("td",[t._v("换行符")]),t._v(" "),e("td",[e("code",[t._v("{ key: '\\n' }")])]),t._v(" "),e("td",[e("code",[t._v('\'{ "key": "\\\\n" }\'')])])]),t._v(" "),e("tr",[e("td",[t._v("回车符")]),t._v(" "),e("td",[e("code",[t._v("{ key: '\\r' }")])]),t._v(" "),e("td",[e("code",[t._v('\'{ "key": "\\\\r" }\'')])])]),t._v(" "),e("tr",[e("td",[t._v("特殊字符")]),t._v(" "),e("td",[e("code",[t._v("{ key: '\\u263A' }")]),t._v(" (笑脸字符)")]),t._v(" "),e("td",[e("code",[t._v('\'{ "key": "\\\\u263A" }\'')])])])])]),t._v(" "),e("h2",{attrs:{id:"_3-json-字符串中转义字符的处理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-json-字符串中转义字符的处理"}},[t._v("#")]),t._v(" 3. JSON 字符串中转义字符的处理")]),t._v(" "),e("p",[t._v("说明：")]),t._v(" "),e("ul",[e("li",[t._v("当 JSON 字符串中，转义字符的错误处理会导致 JSON 字符串转化为 JSON 对象 失败。")])]),t._v(" "),e("p",[t._v("比如：")]),t._v(" "),e("ul",[e("li",[t._v("JSON 对象："),e("code",[t._v("{ key: '\\n' }")])]),t._v(" "),e("li",[t._v("正确的 JSON 字符串："),e("code",[t._v('\'{ "key": "\\\\n" }\'')])]),t._v(" "),e("li",[t._v("错误的 JSON 字符串："),e("code",[t._v('\'{ "key": "\\n" }\'')])])]),t._v(" "),e("p",[t._v("处理：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("brokenJsonString.replace(/\\n/g, '\\\\n')")])])]),t._v(" "),e("p",[t._v("注意：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("只能处理如下转义字符：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("\\f")]),t._v(": 换页符")]),t._v(" "),e("li",[e("code",[t._v("\\t")]),t._v(": 制表符")]),t._v(" "),e("li",[e("code",[t._v("\\n")]),t._v(": 换行符")]),t._v(" "),e("li",[e("code",[t._v("\\r")]),t._v(": 回车符")])])])]),t._v(" "),e("p",[t._v("代码：")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("fixSpecialChar")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("brokenJsonString")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" brokenJsonString "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'string'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" brokenJsonString"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n    \\f: 换页符\n    \\t: 制表符\n    \\n: 换行符\n    \\r: 回车符\n  */")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fixedJsonString "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" brokenJsonString\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\f")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\f'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\t")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\t'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\n")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\n'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token regex"}},[e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\r")]),e("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),e("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\\\r'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" fixedJsonString"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);