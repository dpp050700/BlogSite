(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{322:function(t,_,v){"use strict";v.r(_);var i=v(14),s=Object(i.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"常见-css-面试题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常见-css-面试题"}},[t._v("#")]),t._v(" 常见 CSS 面试题")]),t._v(" "),_("h2",{attrs:{id:"_1-聊一聊-css-的重排和重绘"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-聊一聊-css-的重排和重绘"}},[t._v("#")]),t._v(" 1. 聊一聊 CSS 的重排和重绘 "),_("a",{attrs:{href:"https://juejin.cn/post/6844904083212468238",target:"_blank",rel:"noopener noreferrer"}},[_("OutboundLink")],1)]),t._v(" "),_("p",[_("strong",[t._v("引发重排：")])]),t._v(" "),_("ol",[_("li",[t._v("添加/删除可见的DOM元素")]),t._v(" "),_("li",[t._v("改变元素位置")]),t._v(" "),_("li",[t._v("改变元素尺寸，比如边距、填充、边框、宽度和高度等")]),t._v(" "),_("li",[t._v("改变元素内容，比如文字数量，图片大小等")]),t._v(" "),_("li",[t._v("改变元素字体大小")]),t._v(" "),_("li",[t._v("改变浏览器窗口尺寸，比如resize事件发生时")]),t._v(" "),_("li",[t._v("设置 style 属性的值，因为通过设置style属性改变结点样式的话，每一次设置都会触发一次reflow")]),t._v(" "),_("li",[t._v("查询某些属性或调用某些计算方法：offsetWidth、offsetHeight等，除此之外，当我们调用 getComputedStyle方法，或者IE里的 currentStyle 时，也会触发重排，原理是一样的，都为求一个“即时性”和“准确性”。")])]),t._v(" "),_("p",[_("strong",[t._v("引发重绘：")])]),t._v(" "),_("ol",[_("li",[t._v("颜色变化")]),t._v(" "),_("li",[t._v("visibility")]),t._v(" "),_("li",[t._v("opacity")]),t._v(" "),_("li",[t._v("border-radius")])]),t._v(" "),_("p",[t._v("重排比重绘大，重排一定会导致重绘，但重绘不一定导致重排。")]),t._v(" "),_("p",[t._v("重排影响的范围：重排可以分为全局范围（从根节点html开始对整个渲染树进行重新布局）和局部范围（对渲染树的某部分或某一个渲染对象进行重新布局），当把一个 dom 元素的几何信息固定，在 dom 内部触发重排，就只会重新渲染 dom 内部的元素， 而不会影响到外界。")]),t._v(" "),_("p",[_("strong",[t._v("重排优化建议：")])]),t._v(" "),_("ol",[_("li",[t._v("减少重排的范围")]),t._v(" "),_("li",[t._v("减少重排次数\n"),_("ol",[_("li",[t._v("样式集中改变")]),t._v(" "),_("li",[t._v("分离读写操作")]),t._v(" "),_("li",[t._v("使用 absolute 或 fixed 脱离文档流")])])])]),t._v(" "),_("h2",{attrs:{id:"_2-聊聊你对-position-的理解"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-聊聊你对-position-的理解"}},[t._v("#")]),t._v(" 2. 聊聊你对 position 的理解")]),t._v(" "),_("p",[t._v("position 的可选值包括：static/absolute/relative/fixed/sticky")]),t._v(" "),_("ol",[_("li",[t._v("static 默认值")]),t._v(" "),_("li",[t._v("relative 相对定位，元素相对于其正常位置进行定位。")]),t._v(" "),_("li",[t._v("absolute 绝对定位，相对于 static 定位以外的第一个父元素进行定位，如果没有定位的祖先元素，则一直回溯到body元素。")]),t._v(" "),_("li",[t._v("fixed 固定定位，元素相对于视口定位。")]),t._v(" "),_("li",[t._v("sticky 粘性定位， 元素根据用户的滚动位置进行定位。")])])])}),[],!1,null,null,null);_.default=s.exports}}]);