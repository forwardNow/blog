(window.webpackJsonp=window.webpackJsonp||[]).push([[350],{813:function(t,a,s){"use strict";s.r(a);var e=s(14),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git-常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-常用命令"}},[t._v("#")]),t._v(" Git 常用命令")]),t._v(" "),a("h2",{attrs:{id:"_1-撤销本地-commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-撤销本地-commit"}},[t._v("#")]),t._v(" 1. 撤销本地 commit")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本地修改不丢失，只是撤销 commit")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--soft")]),t._v(" HEAD^\n")])])]),a("h2",{attrs:{id:"_2-克隆"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-克隆"}},[t._v("#")]),t._v(" 2. 克隆")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 克隆默认分支（master）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@10.88.0.8:hlhz_software/xxx.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 克隆指定分支（dev）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-b")]),t._v(" dev git@10.88.0.8:hlhz_software/xxx.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 克隆到指定目录，默认使用仓库名称（xxx）作为根目录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-b")]),t._v(" dev git@10.88.0.8:hlhz_software/xxx.git ./xyz\n")])])]),a("h2",{attrs:{id:"_3-提交"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-提交"}},[t._v("#")]),t._v(" 3. 提交")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一般使用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"update the README.md"')]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 提交所有文件")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# stage 所有文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-A")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交所有文件，注意 -am 不能写成 -ma")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-am")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"update all"')]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 修改最近一次提交的作者日期和提交者日期 (shell)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GIT_COMMITTER_DATE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2023-05-08T09:51:07"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--amend")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--date")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2023-05-08T09:51:07"')]),t._v("\n")])])]),a("p",[t._v("参考：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/shadow_2011/article/details/120906876",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何修改Git某次commit提交的时间"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"_4-合并分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-合并分支"}},[t._v("#")]),t._v(" 4. 合并分支")]),t._v(" "),a("p",[t._v("说明：")]),t._v(" "),a("ul",[a("li",[t._v("将一个分支合并到当前分支时")])]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当前在 main 分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout main\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将 dev 分支合并到 master 分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge dev\n")])])]),a("p",[t._v("参考：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://juejin.cn/post/7206260789769256997",target:"_blank",rel:"noopener noreferrer"}},[t._v("手把手教你用Git——详解git merge"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"_5-新建分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-新建分支"}},[t._v("#")]),t._v(" 5. 新建分支")]),t._v(" "),a("p",[t._v("示例:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看当前分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看所有分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-a")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout 分支名称\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 基于 当前分支 创建新分支（新建分支后 不会自动切换到新分支）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch 新分支名称\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将本地的新分支推送到远程仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push --set-upstream origin 新分支名称\n")])])]),a("h2",{attrs:{id:"_6-往两个-git-仓库提交代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-往两个-git-仓库提交代码"}},[t._v("#")]),t._v(" 6. 往两个 Git 仓库提交代码")]),t._v(" "),a("h3",{attrs:{id:"_6-1-项目中途增加新仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-项目中途增加新仓库"}},[t._v("#")]),t._v(" 6.1. 项目中途增加新仓库")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看远程仓库的情况")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# origin  https://xxx.com/yyy/blog.git (fetch)")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# origin  https://xxx.com/yyy/blog.git (push) ")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加新仓库的地址")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" gitlab-knowledge-repo git@10.88.0.7:frontend/knowledge-repo.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 新增远程仓库后，查看")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gitlab-knowledge-repo   git@10.88.0.7:frontend/knowledge-repo.git (fetch)")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gitlab-knowledge-repo   git@10.88.0.7:frontend/knowledge-repo.git (push)        ")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# origin  https://xxx.com/yyy/blog.git (fetch)")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# origin  https://xxx.com/yyy/blog.git (push)")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将代码推送到新建的远程仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git push <远程主机名> <本地分支名>:<远程分支名>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push gitlab-knowledge-repo master:master\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push fe-ui-theme dark-theme-v2:master\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push fe-platform refactor-crm:master\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# git pull <远程主机名> <远程分支名>:<本地分支名>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull gitlab-knowledge-repo master\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送所有分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("远程仓库名称"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--all")]),t._v("\n")])])]),a("h3",{attrs:{id:"_6-2-参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-参考"}},[t._v("#")]),t._v(" 6.2. 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.jianshu.com/p/4cd46619b3a5",target:"_blank",rel:"noopener noreferrer"}},[t._v("git 同一项目使用多个远程仓库"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"_7-远程仓库地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-远程仓库地址"}},[t._v("#")]),t._v(" 7. 远程仓库地址")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看远程仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#=> origin")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除远程仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" origin\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加远程仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin git@gitee.com:forwardNow/ui-themes.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本地的分支和远程分支建立联系，“dev”为 当前分支在远程分支对应的名称")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push --set-upstream origin dev\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 推送当前代码到远程主分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# git push -u origin "master"')]),t._v("\n")])])]),a("h2",{attrs:{id:"_8-删除分支的所有历史记录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-删除分支的所有历史记录"}},[t._v("#")]),t._v(" 8. 删除分支的所有历史记录")]),t._v(" "),a("p",[t._v("步骤：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换到一个脱离主分支的另外一条全新主分支，不用太在意叫什么，因为后面还会修改分支名称")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--orphan")]),t._v(" latest_branch\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 暂存所有改动过的文件，内容为当前旧分支的最新版本所有文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-A")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交更改")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-am")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"commit message"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除原始主分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-D")]),t._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 将当前分支重命名为 main")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" main\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最后，强制更新您的存储库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" origin main\n")])])]),a("p",[t._v("参考：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/weixin_40289389/article/details/124269007",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何删除github中的提交历史记录"),a("OutboundLink")],1)])]),t._v(" "),a("h2",{attrs:{id:"_9-参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-参考"}},[t._v("#")]),t._v(" 9. 参考")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/git-guides",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/git-guides"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=n.exports}}]);