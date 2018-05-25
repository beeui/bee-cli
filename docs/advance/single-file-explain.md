## 单文件说明 ##
任意一个 `.wxa`、`.wxp`、`.wxc` 文件可分为三大部分，各自对应于一个标签：

**脚本部分**，即 `<script></script>` 标签中的内容，又可分为两个部分：

- 逻辑部分，除了config对象之外的部分，对应于原生的 `.js` 文件。
- 
- 配置部分，即config对象，对应于原生的 `.json` 文件。

**结构部分**，即 `<template></template>` 模板部分，对应于原生的 `.wxml` 文件。

**样式部分**，即 `<style></style>` 样式部分，对应于原生的 `.wxss` 文件。

style 支持 lang 属性，lang 决定了其代码编译过程，对应的lang值是 `less` 和 `pcss`

## .wxa文件说明 ##
**wxa** 是 weixin app 的缩写，**.wxa** 是微信小程序app实例的文件后缀名

app.wxa 文件结构
``` bash

	<template>
	  <view>
	    <view>Header</view>
	    <page></page>
	    <view>Footer</view>
	  </view>
	</template>
	
	<script>
	  export default {
	    config: { ... },
	    properties: { ... },
	    data: { ... }
	  }
	</script>
	
	<style>
	</style>
```


- 脚本部分，即 `<script></script>` 标签中的内容。


  - 逻辑部分，除了config对象之外的部分，经编译后在 export default 对象外部嵌套 App() 构造器来注册一个小程序，对应于原生的 `app.js` 文件。
 
``` bash

	export default App({ ... })
```

  - 配置部分，即config对象，对应于原生的 app.json 文件。
- 结构部分，即 `<template></template>` 模板部分，对应于 [全局公共模板](advance/global-layout.md)

- 样式部分，即 `<style></style>` 样式部分，对应于原生的 `app.wxss` 文件。

## .wxp文件说明 ##
**wxp** 是 weixin page 的缩写，**.wxp** 是微信小程序page页面的文件后缀名



- page.wxp 文件结构

``` bash

	<template>
	  <view class="page"></view>
	</template>
	
	<script>
	  export default {
	    config: { ... },
	    properties: { ... },
	    data: { ... }
	  }
	</script>
	
	<style>
	  .page { }
	</style>

```

- 脚本部分，即 `<script></script>` 标签中的内容。

  - 逻辑部分，除了config对象之外的部分，经编译后在 export default 对象外部嵌套 Page() 构造器来注册一个页面，对应于原生的 page.js 文件。

``` bash

	export default Page({ ... })
```
  - 配置部分，即config对象，对应于原生的 `page.json` 文件。
- 结构部分，即 `<template></template>` 模板部分，对应于原生的 `page.wxml` 文件。

- 样式部分，即 `<style></style>` 样式部分，对应于原生的 `page.wxss` 文件。

## .wxc文件说明 ##
**wxc** 是 weixin component 的缩写，**.wxc** 是微信小程序自定义组件的文件后缀名。

- com.wxc 文件结构
- 
``` bash

	<template>
	  <view class="toast"></view>
	</template>
	
	<script>
	  export default {
	    config: { ... },
	    properties: { ... },
	    data: { ... }
	  }
	</script>
	
	<style>
	  .toast { }
	</style>
```
- 脚本部分，即 `<script></script>` 标签中的内容。

  - 逻辑部分，除了config对象之外的部分，经编译后在 export default 对象外部嵌套 Component() 构造器来注册一个自定义组件，对应于原生的 com.js 文件。

``` bash

	export default Component({ ... })
```

  - 配置部分，即config对象，经编译后新增 component 字段进行自定义组件声明，对应于原生的 `com.json` 文件。

``` bash

	{
	  "component": true
	}
```

- 结构部分，即 `<template></template>` 模板部分，对应于原生的 `com.wxml` 文件。

- 样式部分，即 `<style></style>` 样式部分，对应于原生的 `com.wxss` 文件。