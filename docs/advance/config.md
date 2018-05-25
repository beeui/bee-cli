## bee.config.json 配置文件说明 ##
初始化一个 Bee小程序项目 或 Bee组库项目 后，在项目根目录下会生成类似下面这样的配置文件。

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
	  "prefix": "wxc",
	  "dest": "dist",
	  "npm": {
	    "dest": "dist/packages",
	    "scope": ""
	  },
	  "compilers": {
	    "babel": {
	      "sourceMaps": "inline",
	      "presets": [
	        "env"
	      ],
	      "plugins": [
	        "syntax-export-extensions",
	        "transform-class-properties",
	        "transform-decorators-legacy",
	        "transform-export-extensions"
	      ]
	    }
	  }
	}
```

## style ##
style：是一个CSS样式全局可配置化，详细了解请移步 [全局可配置化](advance/global-setting.md)

## dest ##
dest：缺省值为 `dist`, 是 **Bee小程序项目** 或 **Bee组件库项目** 经 `bee build` 指令执行编译后自动生成的目录

## npm.dest ##
npm.dest：缺省值为 `dist/packages`, 是将依赖的第三方 NPM 模块经 `bee build` 指令执行编译后自动生成的目录

## npm.scope ##
npm.scope：缺省值为空，是组件 package.json 中 name 字段的 scope 名

## prefix ##
prefix：缺省值为 `wxc`，是新建一个 Bee 组件的前缀，通过横杆 - 与组件名链接起来。即新建一个 toast 组件，组件名称为 `wxc-toast`

## compilers ##
compilers：为 v1.0.17 版本之后的功能，支持 babel 编译自定义配置，目前准备将 less、postcss 的默认配置项提升到用户可自定义配置，其他 compiler 持续开发中......