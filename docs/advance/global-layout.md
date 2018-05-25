## 全局公共模板 ##
用户可以将各个页面中相同部分抽离成公共模块，通过全局公共模板的方式将这些模块进行统一维护和套用生成，以便于在各个页面中复用起来，也有助于代码维护。

## 举例 ##
用户使用 Bee 的 init 指令初始化一个 [Bee小程序项目](app-project/init.md) ，项目里默认使用了 **全局公共模板**。通过小程序开发者工具里预览项目，我们可以在图示上看到标识着 **头部模板** 和 **底部模板** 的两个公共模块，所有的页面都会直接套用它，而中间这部分才是页面真正的内容。

![](https://ue.17173cdn.com/a/beeui/2018/img/app-img/demo-home.png)

此时，如果你新建一个页面，将会发现新的页面也已经直接套用公共模板。(这里假设新建一个about页面举例) 关于
![](https://ue.17173cdn.com/a/beeui/2018/img/app-img/demo-about.png)

## 如何使用 ##
在 app.wxa 小程序配置项文件，template 标签里的内容定义为全局公共模板，用于生成页面套用的模板，而模板内的 `<page></page>` 标签就是页面内容占位符。模板内容可以是任意的原生或自定义组件，自定义组件支持引用外部NPM包。

app.wxa 文件结构

``` bash


	<template>
	  <!-- 公共模板 - start -->
	  <view>
	    <layout-head></layout-head>
	
	    <!-- page页面占位符 -->
	    <page></page>
	
	    <layout-foot></layout-foot>
	  </view>
	  <!-- 公共模板 - end -->
	</template>
	<script>
	  export default {
	    config: {
	      // 公共组件
	      usingComponents: {
	        'layout-head': 'layout/head',
	        'layout-foot': 'layout/foot'
	      },
	      ...
	    },
	    onLaunch () { },
	    onShow () { },
	    onHide () { }
	  }
	</script>
	<style> ... </style>

```
page.wxp 页面文件

``` bash

	<template>
	  <wxc-toast></wxc-toast>
	</template>
	
	<script>
	  export default {
	    config: {
	      usingComponents: {
	        'wxc-toast': '@173/wxc-toast'
	      },
	      ...
	    }
	  }
	</script>
	
	<style></style>
```

经 Bee 的 dev 指令编译后，page.wxp 文件将会生成4个原生小程序文件（.js、.wxml、.wxss、.json），而其中的 **page.wxml 结构文件** 是由 page.wxp 和 app.wxa 的 `<template></template>` 标签进行模板套用后生成的

``` bash

	<view>
	  <layout-head></layout-head>
	
	  <wxc-toast></wxc-toast>
	
	  <layout-foot></layout-foot>
	</view>
```
同时 **page.json 配置文件** 是由 page.wxp 与 app.wxa 的 `<script></script>` 标签中 config 对象的 usingComponents 字段合并生成的

``` bash

	{
	  "usingComponents": {
	    "layout-head": "./you/path/layout/head",
	    "layout-foot": "./you/path/layout/foot",
	    "wxc-toast": "./you/path@beeui/wxc-toast"
	  }
	}
```