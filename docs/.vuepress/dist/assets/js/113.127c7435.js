(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{618:function(t,s,a){"use strict";a.r(s);var n=a(57),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"新语音语法高亮"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新语音语法高亮"}},[t._v("#")]),t._v(" 新语音语法高亮")]),t._v(" "),a("h2",{attrs:{id:"_1-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-介绍"}},[t._v("#")]),t._v(" 1. 介绍")]),t._v(" "),a("p",[t._v("针对 TC Games 宏文件，使其语法高亮")]),t._v(" "),a("p",[t._v("语言名称： tgs (TC Games Scripts)")]),t._v(" "),a("p",[t._v("该扩展项目的名称： tgs-lang-support")]),t._v(" "),a("p",[t._v("需要的功能：")]),t._v(" "),a("ul",[a("li",[t._v("关键字")]),t._v(" "),a("li",[t._v("变量")]),t._v(" "),a("li",[t._v("注释")])]),t._v(" "),a("h2",{attrs:{id:"_2-tgs-基本功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-tgs-基本功能"}},[t._v("#")]),t._v(" 2. tgs 基本功能")]),t._v(" "),a("h3",{attrs:{id:"_2-1-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-命令"}},[t._v("#")]),t._v(" 2.1. 命令")]),t._v(" "),a("p",[a("code",[t._v("Array.from(document.querySelectorAll('div.content > p[id] > b')).map((item) => item.innerText).forEach(item => console.log(item))")])]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("点击 \nClick\n延时 \nDelay\n循环 \nLoop\n长按 \nLongPress\n滑动 \nSlide\n按住 \nPressDown\n按键 \nKey\n准心重置 \nAimreset\n方向键重置 \nDirectionReset\n键盘行走快跑 \nDirectionRun\n键盘行走静步 \nDirectionWalk\n按下键盘按键 \nPressKeyboard\n松开键盘按键 \nReleaseKeyboard\n射击模式开关 \nShotModeSwitch\n进入射击模式 \nEnterShotMode\n退出射击模式 \nExitShotMode\n鼠标左键切换开关 \nLeftMouseSwitch\n进入鼠标左键控制 \nEnterLeftMouseControl\n退出鼠标左键控制 \nExitLeftMouseControl\n托管鼠标左键 \nHostLeftMouse\n准心自动调节 \nAimAutoAdjust\n获取准心动态参数 \nGetAimDynamicAdjustParm\n设置准心动态参数 \nSetAimDynamicAdjustParm\n简单找图 \nSimpleFI\n多点找色 \nMultiplePointsFC\n提示 \ntip\n")])])]),a("h3",{attrs:{id:"_2-2-语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-语法"}},[t._v("#")]),t._v(" 2.2. 语法")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("如果 xxx\n{\n}\n\n如果 xxx\n{\n}\n否则\n{\n}\n\n变量 变量名=xxx\n\n// 这是一个注释\n")])])]),a("h2",{attrs:{id:"_3-依赖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-依赖"}},[t._v("#")]),t._v(" 3. 依赖")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("node -v\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# v16.13.2")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定镜像源")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -g yo generator-code --registry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://repo.huaweicloud.com/repository/npm/\n")])])]),a("h2",{attrs:{id:"_4-创建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-创建项目"}},[t._v("#")]),t._v(" 4. 创建项目")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("W:\\dev\\vscode\\extensions>yo code\n\n     _-----_     ╭──────────────────────────╮\n    |       |    │   Welcome to the Visual  │\n    |--(o)--|    │   Studio Code Extension  │\n   `---------´   │        generator!        │\n    ( _´U`_ )    ╰──────────────────────────╯\n    /___A___\\   /\n     |  ~  |\n   __'.___.'__\n ´   `  |° ´ Y `\n\n? What type of extension do you want to create? New Language Support\n\nEnter the URL (http, https) or the file path of the tmLanguage grammar or press ENTER to start with a new grammar.\n\n? URL or file to import, or none for new:\n \n? What's the name of your extension?            tgs-lang-support\n    \n? What's the identifier of your extension?      tgs-lang-support    // 项目名称\n\n? What's the description of your extension?     TC Games 宏文件语言支持\n                                                                    \nEnter the id of the language. The id is an identifier and is single, lower-case name such as 'php', 'javascript'\n? Language id:      tgs                     \n                                       \nEnter the name of the language. The name will be shown in the VS Code editor mode selector.\n? Language name:    tgs\n                                                                   \nEnter the file extensions of the language. Use commas to separate multiple entries (e.g. .ruby, .rb)\n? File extensions:  tgs     \n                                \nEnter the root scope name of the grammar (e.g. source.ruby)\n? Scope names:      source.tgs\n\n? Initialize a git repository?      Yes\n")])])]),a("h2",{attrs:{id:"_5-项目结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-项目结构"}},[t._v("#")]),t._v(" 5. 项目结构")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("tgs-lang-support/\n    \n    language-configuration.json     // 全局配置、基本配置\n\n    syntaxes/\n        tgs.tmLanguage.json         // 核心文件\n")])])]),a("h2",{attrs:{id:"_6-调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-调试"}},[t._v("#")]),t._v(" 6. 调试")]),t._v(" "),a("p",[t._v("按 F5 即可")]),t._v(" "),a("h2",{attrs:{id:"_7-应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-应用"}},[t._v("#")]),t._v(" 7. 应用")]),t._v(" "),a("h3",{attrs:{id:"_7-1-本地使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-本地使用"}},[t._v("#")]),t._v(" 7.1. 本地使用")]),t._v(" "),a("p",[t._v("打包成 vsix 插件，本地安装")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# W:\\dev\\vscode\\extensions\\tgs-lang-support")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i vsce -g --registry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://repo.huaweicloud.com/repository/npm/\n\nvsce package\n")])])]),a("h3",{attrs:{id:"_7-2-发布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-发布"}},[t._v("#")]),t._v(" 7.2. 发布")]),t._v(" "),a("h2",{attrs:{id:"_8-功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-功能"}},[t._v("#")]),t._v(" 8. 功能")]),t._v(" "),a("p",[a("code",[t._v("tgs-lang-support/syntaxes/tgs.tmLanguage.json")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"$schema"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"tgs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"patterns"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"include"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#keywords"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"include"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#comment"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"repository"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"keywords"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"patterns"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"support.function"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"match"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\\\b点击|Click|延时|Delay|循环|Loop|长按|LongPress|滑动|Slide|按住|PressDown|按键|Key|准心重置|Aimreset|方向键重置|DirectionReset|键盘行走快跑|DirectionRun|键盘行走静步|DirectionWalk|按下键盘按键|PressKeyboard|松开键盘按键|ReleaseKeyboard|射击模式开关|ShotModeSwitch|进入射击模式|EnterShotMode|退出射击模式|ExitShotMode|鼠标左键切换开关|LeftMouseSwitch|进入鼠标左键控制|EnterLeftMouseControl|退出鼠标左键控制|ExitLeftMouseControl|托管鼠标左键|HostLeftMouse|准心自动调节|AimAutoAdjust|获取准心动态参数|GetAimDynamicAdjustParm|设置准心动态参数|SetAimDynamicAdjustParm|简单找图|SimpleFI|多点找色|MultiplePointsFC|提示|tip\\\\b"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"keyword.control.if"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"match"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\\\b如果|否则\\\\b"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"constant.language.boolean"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"match"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(true|false)"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"match"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\\\s*(变量)\\\\s+(\\\\S+?)="')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"captures"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"1"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"keyword.control.var"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"2"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"variable.name"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"keyword.operator.new"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"match"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"!"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"comment"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"begin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"//"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"end"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"comment.line.double-slash"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scopeName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"source.tgs"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_9-参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-参考"}},[t._v("#")]),t._v(" 9. 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/weixin_44151650/article/details/121321503",target:"_blank",rel:"noopener noreferrer"}},[t._v("想让VSCode识别自己的编程语言？立马安排"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/164736736",target:"_blank",rel:"noopener noreferrer"}},[t._v("从零开始为你的自制编程语言写一个专属VSCode插件"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.cn/post/7010765441144455199#heading-11",target:"_blank",rel:"noopener noreferrer"}},[t._v("从0到1开发一款自己的vscode插件"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);