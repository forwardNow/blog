(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{361:function(a,s,t){a.exports=t.p+"assets/img/nginx_task_manager.30fa58dc.png"},520:function(a,s,t){"use strict";t.r(s);var n=t(14),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx"}},[a._v("#")]),a._v(" Nginx")]),a._v(" "),s("h2",{attrs:{id:"_1-检查配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-检查配置"}},[a._v("#")]),a._v(" 1. 检查配置")]),a._v(" "),s("p",[a._v("命令：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 检查指定的 nginx 配置文件，是否正确")]),a._v("\nnginx "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" /usr/nginx/conf/nginx.conf  \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 检查默认的 nginx 配置文件")]),a._v("\n/usr/nginx/sbin/nginx "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v("\n")])])]),s("p",[a._v("示例：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 默认配置")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /usr/local/nginx/sbin\n./nginx "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 指定配置文件位置")]),a._v("\n/usr/local/nginx/sbin/nginx "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" /usr/local/nginx/conf/nginx.conf\n")])])]),s("h2",{attrs:{id:"_2-启停"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-启停"}},[a._v("#")]),a._v(" 2. 启停")]),a._v(" "),s("h3",{attrs:{id:"_2-1-启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-启动"}},[a._v("#")]),a._v(" 2.1. 启动")]),a._v(" "),s("p",[a._v("命令：")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("nginx -c 配置文件地址")])])]),a._v(" "),s("p",[a._v("示例：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("/usr/local/nginx/sbin/nginx "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" /usr/local/nginx/conf/nginx.conf\n")])])]),s("h3",{attrs:{id:"_2-2-停止"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-停止"}},[a._v("#")]),a._v(" 2.2. 停止")]),a._v(" "),s("p",[a._v("命令：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ef")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" nginx\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 从容停止 Nginx：")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("kill")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-QUIT")]),a._v(" 主进程号\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 快速停止 Nginx：")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("kill")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-TERM")]),a._v(" 主进程号\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("## 强制停止 Nginx：")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("kill")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-9")]),a._v(" nginx\n")])])]),s("p",[a._v("示例：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ef")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" nginx\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# root 2255 .... nginx:master")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("kill")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-9")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2255")]),a._v("\n")])])]),s("h3",{attrs:{id:"_2-3-重启"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-重启"}},[a._v("#")]),a._v(" 2.3. 重启")]),a._v(" "),s("p",[a._v("命令：")]),a._v(" "),s("ul",[s("li",[a._v("方式 1: "),s("code",[a._v("nginx -s reload")])]),a._v(" "),s("li",[a._v("方式 2: "),s("code",[a._v("kill -HUP 主进称号")])])]),a._v(" "),s("p",[a._v("示例：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 方式 1:")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /usr/local/nginx/sbin\n./nginx "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" reload\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 方式 2:")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ef")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" nginx\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# root 2255 .... nginx:master")]),a._v("\n  \n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("kill")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-HUP")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2255")]),a._v("\n")])])]),s("h2",{attrs:{id:"_3-windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-windows"}},[a._v("#")]),a._v(" 3. windows")]),a._v(" "),s("h3",{attrs:{id:"_3-1-启停"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-启停"}},[a._v("#")]),a._v(" 3.1. 启停")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 切换到 nginx 根目录")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /D D:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("dev"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("software"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("nginx-1.18.0\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启动")]),a._v("\nstart nginx\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 启动 时指定配置文件")]),a._v("\nstart nginx "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" ."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("conf"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("nginx_lxw.conf\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 停止")]),a._v("\nnginx "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" stop\n")])])]),s("h3",{attrs:{id:"_3-2-注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-注意"}},[a._v("#")]),a._v(" 3.2. 注意")]),a._v(" "),s("p",[a._v("多次执行 "),s("code",[a._v("start nginx")]),a._v(" 命令 会启动多个 Nginx 实例，可以在 任务管理器 中将其关闭：")]),a._v(" "),s("p",[s("img",{attrs:{src:t(361),alt:"nginx_task_manager.png"}})]),a._v(" "),s("h2",{attrs:{id:"_4-参考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-参考"}},[a._v("#")]),a._v(" 4. 参考")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.jianshu.com/p/3b045336b4b1",target:"_blank",rel:"noopener noreferrer"}},[a._v("【Nginx】启动，重启，关闭命令"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);