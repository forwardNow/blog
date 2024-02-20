(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{555:function(t,a,s){"use strict";s.r(a);var n=s(14),r=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"刷新-关闭页面之前发送请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#刷新-关闭页面之前发送请求"}},[t._v("#")]),t._v(" 刷新/关闭页面之前发送请求")]),t._v(" "),a("h2",{attrs:{id:"_1-说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-说明"}},[t._v("#")]),t._v(" 1. 说明")]),t._v(" "),a("p",[t._v("页面卸载（刷新/关闭）之前发送异步Ajax，很可能在它即将发送的时候，页面已经卸载了，从而导致发送取消或者发送失败。")]),t._v(" "),a("p",[t._v("解决方式如下：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onunload")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("e")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方式 1: 发送同步 Ajax 请求")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方式 2：使用 navigator.sendBeacon")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"_2-同步-ajax-请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-同步-ajax-请求"}},[t._v("#")]),t._v(" 2. 同步 Ajax 请求")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("jQuery"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ajax")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("url")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:5000/saveAll'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'post'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zhangsan'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("async")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("contentType")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("缺点：")]),t._v(" "),a("ul",[a("li",[t._v("阻塞页面卸载进程")])]),t._v(" "),a("h2",{attrs:{id:"_3-navigator-sendbeacon"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-navigator-sendbeacon"}},[t._v("#")]),t._v(" 3. navigator.sendBeacon")]),t._v(" "),a("p",[t._v("语法：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("navigator.sendBeacon(url: string, data?: FormData | URLSearchParams): boolean")])])]),t._v(" "),a("p",[t._v("说明：")]),t._v(" "),a("ul",[a("li",[t._v("异步 POST 请求")]),t._v(" "),a("li",[t._v("Content-Type: text/plain;charset=UTF-8")]),t._v(" "),a("li",[t._v("没有 response")])]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("navigator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendBeacon")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:5000/saveStore'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stringify")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zhangsan'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"_4-参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-参考"}},[t._v("#")]),t._v(" 4. 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://usefulangle.com/post/62/javascript-send-data-to-server-on-page-exit-reload-redirect",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sending AJAX Data when User Moves Away / Exits from Page"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1731066",target:"_blank",rel:"noopener noreferrer"}},[t._v("刷新/关闭页面之前发送请求"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/sendBeacon",target:"_blank",rel:"noopener noreferrer"}},[t._v("Navigator.sendBeacon() —— MDN"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.bookstack.cn/read/javascript-tutorial/spilt.5.docs-bom-xmlhttprequest.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Navigator.sendBeacon() —— 阮一峰 JavaScript 教程"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://stackoverflow.com/questions/31355128/how-to-receive-data-posted-by-navigator-sendbeacon-on-node-js-server",target:"_blank",rel:"noopener noreferrer"}},[t._v('How to receive data posted by "navigator.sendbeacon" on node.js server?'),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);