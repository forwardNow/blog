(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{429:function(e,t,s){e.exports=s.p+"assets/img/power_shell_exec_script.1114cdf8.png"},766:function(e,t,s){"use strict";s.r(t);var a=s(14),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"powershell-禁止运行脚本的问题-md"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#powershell-禁止运行脚本的问题-md"}},[e._v("#")]),e._v(" PowerShell 禁止运行脚本的问题.md")]),e._v(" "),t("h2",{attrs:{id:"说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[e._v("#")]),e._v(" 说明")]),e._v(" "),t("p",[e._v("在执行脚本时，突然遇到如下问题：")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("vue : 无法加载文件 C:\\Users\\wuqinfei\\AppData\\Roaming\\npm\\vue.ps1，因为在此系统上禁止运行脚本。\n有关详细信息，请参阅 https:/go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。\n所在位置 行:1 字符: 1\n+ vue create test-eslint-airbnb-ts-vue\n+ ~~~\n    + CategoryInfo          : SecurityError: (:) []，PSSecurityException\n    + FullyQualifiedErrorId : UnauthorizedAccess\n")])])]),t("p",[e._v("在计算机上启动 Windows PowerShell 时，执行策略很可能是 Restricted（默认设置）。")]),e._v(" "),t("p",[e._v("Restricted 执行策略不允许任何脚本运行。")]),e._v(" "),t("p",[e._v("可以重新设置策略。")]),e._v(" "),t("h2",{attrs:{id:"步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[e._v("#")]),e._v(" 步骤")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 查看当前策略")]),e._v("\nget-executionpolicy\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Restricted")]),e._v("\n  \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# 设置策略")]),e._v("\nset-executionpolicy remotesigned\n\nget-executionpolicy\n  \n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# RemoteSigned")]),e._v("\n")])])]),t("p",[t("img",{attrs:{src:s(429),alt:"power_shell_exec_script"}})]),e._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.jianshu.com/p/4eaad2163567",target:"_blank",rel:"noopener noreferrer"}},[e._v("PowerShell：因为在此系统上禁止运行脚本，解决方法"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);