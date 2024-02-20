(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{624:function(t,e,v){"use strict";v.r(e);var _=v(14),a=Object(_.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"交互api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#交互api"}},[t._v("#")]),t._v(" 交互API")]),t._v(" "),e("p",[t._v("关于 全局charts对象 和 echarts实例对象 的方法")]),t._v(" "),e("h2",{attrs:{id:"_1-全局charts对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-全局charts对象"}},[t._v("#")]),t._v(" 1. 全局charts对象")]),t._v(" "),e("p",[e("code",[t._v("echarts.init(dom?: HTMLDivElement|HTMLCanvasElement, theme?: Object|string, opts?)")]),t._v(":")]),t._v(" "),e("ul",[e("li",[t._v("创建echarts实例对象")]),t._v(" "),e("li",[t._v("使用主题")])]),t._v(" "),e("p",[e("code",[t._v("echarts.registerTheme(themeName: string, theme: Object)")]),t._v(":")]),t._v(" "),e("ul",[e("li",[t._v("注册主题，用于初始化实例的时候指定。")])]),t._v(" "),e("p",[e("code",[t._v("echarts.registerMap(mapName: string, geoJSON: Object | string)")]),t._v(":")]),t._v(" "),e("ul",[e("li",[t._v("注册可用的地图，只在 geo 组件或者 map 图表类型中使用。")])]),t._v(" "),e("p",[e("code",[t._v("connect([ echartsIns_1, echartsIns_2, ... ])")]),t._v(":")]),t._v(" "),e("ul",[e("li",[t._v("多个图表实例实现联动")]),t._v(" "),e("li",[t._v("保存，拼接关联的图表")]),t._v(" "),e("li",[t._v("刷新按钮")]),t._v(" "),e("li",[t._v("重置按钮")]),t._v(" "),e("li",[t._v("提示框联动、图例选择、数据范围修改等")])]),t._v(" "),e("h2",{attrs:{id:"_2-echarts实例对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-echarts实例对象"}},[t._v("#")]),t._v(" 2. echarts实例对象")]),t._v(" "),e("p",[e("code",[t._v("setOption(option: Object, notMerge?: boolean, lazyUpdate?: boolean)")]),t._v(":")]),t._v(" "),e("ul",[e("li",[t._v("设置图表实例的配置项以及数据")]),t._v(" "),e("li",[t._v("万能接口，所有参数和数据的修改都可以通过 setOption 完成")]),t._v(" "),e("li",[t._v("ECharts 会合并新的参数和数据，然后刷新图表")]),t._v(" "),e("li",[t._v("如果开启动画的话，ECharts 找到两组数据之间的差异然后通过合适的动画去表现数据的变化")])]),t._v(" "),e("p",[e("code",[t._v("resize(width?: number|string, height?: number|string, silent?: boolean, animation?)")]),t._v(":")]),t._v(" "),e("ul",[e("li",[t._v("改变图表尺寸，在容器大小发生改变时需要手动调用。")])]),t._v(" "),e("p",[e("code",[t._v("on()")]),t._v(":")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("( eventName: string, handler: Function, context?: Object )")])]),t._v(" "),e("li",[e("code",[t._v("( eventName: string, query: string|Object, handler: Function, context?: Object )")])]),t._v(" "),e("li",[t._v("绑定事件处理函数。")]),t._v(" "),e("li",[t._v("查看 "),e("a",{attrs:{href:"https://echarts.apache.org/zh/api.html#events",target:"_blank",rel:"noopener noreferrer"}},[t._v("events"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("鼠标事件： "),e("code",[t._v("click")]),t._v(" 、"),e("code",[t._v("dblclick")]),t._v("、"),e("code",[t._v("mousedown")]),t._v("、"),e("code",[t._v("mousemove")]),t._v("、"),e("code",[t._v("mouseup")]),t._v(" 等")]),t._v(" "),e("li",[t._v("echarts事件： "),e("code",[t._v("legendselectchanged")]),t._v("、"),e("code",[t._v("datazoom")]),t._v("、"),e("code",[t._v("geoselected")]),t._v(" 等")])]),t._v(" "),e("p",[e("code",[t._v("off(eventName: string, handler?: Function)")]),t._v(":")]),t._v(" "),e("ul",[e("li",[t._v("解绑事件处理函数。")])]),t._v(" "),e("p",[e("code",[t._v("dispatchAction(payload: Object)")]),t._v(":")]),t._v(" "),e("ul",[e("li",[t._v("触发图表行为")]),t._v(" "),e("li",[t._v("触发 "),e("a",{attrs:{href:"https://echarts.apache.org/zh/api.html#action",target:"_blank",rel:"noopener noreferrer"}},[t._v("action"),e("OutboundLink")],1),t._v(" 中的行为")]),t._v(" "),e("li",[t._v("触发 "),e("a",{attrs:{href:"https://echarts.apache.org/zh/api.html#events",target:"_blank",rel:"noopener noreferrer"}},[t._v("events"),e("OutboundLink")],1),t._v(" 中的 echarts事件")])]),t._v(" "),e("p",[e("code",[t._v("clear()")]),t._v(":")]),t._v(" "),e("ul",[e("li",[t._v("清空当前实例，会移除实例中所有的组件和图表。")]),t._v(" "),e("li",[t._v("相当于把 option 清空")]),t._v(" "),e("li",[t._v("可重新设置 option")])]),t._v(" "),e("p",[e("code",[t._v("dispose()")]),t._v(":")]),t._v(" "),e("ul",[e("li",[t._v("销毁实例，销毁后实例无法再被使用。")])]),t._v(" "),e("p",[t._v("其他：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("方法")]),t._v(" "),e("th",[t._v("说明")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("getWidth()")]),t._v(" "),e("td",[t._v("获取 ECharts 实例容器的宽度")])]),t._v(" "),e("tr",[e("td",[t._v("getHeight()")]),t._v(" "),e("td",[t._v("获取 ECharts 实例容器的高度")])]),t._v(" "),e("tr",[e("td",[t._v("getDom()")]),t._v(" "),e("td",[t._v("获取 ECharts 实例容器的 dom 节点。")])]),t._v(" "),e("tr",[e("td",[t._v("getOption()")]),t._v(" "),e("td",[t._v("获取当前实例中维护的 option 对象")])]),t._v(" "),e("tr",[e("td",[t._v("getDataURL()")]),t._v(" "),e("td",[t._v("导出图表图片，返回一个 base64 的 URL")])]),t._v(" "),e("tr",[e("td",[t._v("getConnectedDataURL()")]),t._v(" "),e("td",[t._v("导出联动的图表图片，返回一个 base64 的 url")])]),t._v(" "),e("tr",[e("td",[t._v("isDisposed()")]),t._v(" "),e("td",[t._v("当前实例是否已经被释放。")])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);