(window.webpackJsonp=window.webpackJsonp||[]).push([[286],{741:function(t,a,n){"use strict";n.r(a);var s=n(14),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"给u盘或移动硬盘分配固定盘符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#给u盘或移动硬盘分配固定盘符"}},[t._v("#")]),t._v(" 给U盘或移动硬盘分配固定盘符")]),t._v(" "),a("h2",{attrs:{id:"步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[t._v("#")]),t._v(" 步骤")]),t._v(" "),a("p",[t._v("CDM:")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入磁盘管理命令模式")]),t._v("\ndiskpart\n")])])]),a("p",[t._v("管理命令模式：")]),t._v(" "),a("div",{staticClass:"language-text extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Microsoft DiskPart 版本 10.0.19041.964\n\nCopyright (C) Microsoft Corporation.\n在计算机上: LAPTOP-MN5CUJOH\n\n# 列出所有的卷\nDISKPART> list volume\n\n  卷 ###      LTR  标签         FS     类型        大小     状态       信息\n  ----------  ---  -----------  -----  ----------  -------  ---------  --------\n  卷     0     C   Windows-SSD  NTFS   磁盘分区         200 GB  正常         启动\n  卷     1     D   Data         NTFS   磁盘分区         275 GB  正常\n  卷     2         SYSTEM_DRV   FAT32  磁盘分区         260 MB  正常         系统\n  卷     3         WINRE_DRV    NTFS   磁盘分区        1000 MB  正常         已隐藏\n  卷     4     E   PSSD         NTFS   磁盘分区         223 GB  正常\n\n# 选择 卷4\nDISKPART> select volume 4\n\n卷 4 是所选卷。\n\n# 设置 卷4 的盘符为 W\nDISKPART> assign letter=W\n\nDiskPart 成功地分配了驱动器号或装载点。\n\nDISKPART>\n")])])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[t._v("#")]),t._v(" 参考")]),t._v(" "),a("p",[t._v("*"),a("a",{attrs:{href:"https://blog.csdn.net/xygj2013/article/details/108155408",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何给U盘或移动硬盘分配固定盘符"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);