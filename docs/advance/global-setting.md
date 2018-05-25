## 全局可配置化 ##
通过全局配置中心解决不同小程序间的差异化

## CSS样式 ##
Bee 设计了CSS样式可配置化，默认可配置品牌色、控件色、主标题色、副标题色、提示色、分割线色和背景色，不仅便于代码维护、也便于解决 Bee自定义组件 应用在不同小程序样式无法继承问题

## 举例 ##
用户使用 Bee 的 init 指令初始化一个小程序项目后，项目里默认使用了 **全局可配置化**，同时在项目根目录下自动生成一个 **min.config.json** 的配置文件，**style** 就是CSS样式的可配置化部分，用户可以新增或修改。

``` bash
	
	{
	  "style": {
	    "brandColor": "#FF0077",
	    "controlColor": "#FF5777",
	    "mainHeadingColor": "#333333",
	    "subHeadingColor": "#666666",
	    "darkPromptColor": "#999999",
	    "splitLineColor": "#ECECEC",
	    "backgroundColour": "#EFEFEF"
	  },
	  ...
	}
```

用户可以在 less 预编译的代码里使用其变量

``` bash

	<style lang="less">
	  body {
	    background-color: @backgroundColour; // 使用背景色
	  }
	</style>
```

用户可以在 postcss 预编译的代码里使用其变量

``` bash

	<style lang="pcss">
	  body {
	    background-color: $backgroundColour; // 使用背景色
	  }
	</style>
```