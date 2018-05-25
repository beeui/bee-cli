## 单文件模式 ##
使用单文件模式开发，让目录结构更清晰，开发更方便

## 原生小程序要求 ##
原生小程序要求 app实例 必须有 `app.js`、`app.json`、`app.wxss` 3个文件组件；一个 page页面 一般有 `page.js`、`page.wxml`、`page.wxss`、`page.json` 4个文件组件组成；一个 **自定义组件** 必须有 `com.js`、`com.wxml`、`com.wxss`、`com.json` 4个文件组成。并且要求 **app实例** 的3个文件，**page页面** 的4个文件以及 **自定义组件** 的4个文件 **除后缀名外必须同名**，具体可参看官方目录结构。

## Bee 设计单文件 ##
Bee 设计使用了单文件模式，将原生小程序 **app实例** 的3个文件统一为 app.wxa，**page页面** 的4个文件统一为 page.wxp，**自定义组件** 的4个文件统一为 com.wxc。

## 单文件定义 ##
- **wxa** 是 weixin app 的缩写，定义是个微信小程序app实例，了解.wxa文件说明
- **wxp** 是 weixin page 的缩写，定义是个微信小程序page页面，了解.wxp文件说明
- **wxc** 是 weixin component 的缩写，定义是个微信小程序自定义组件，了解.wxc文件说明
举例
使用 Bee 开发前后的开发目录结构对比如下：



- 原生小程序的目录结构：

``` bash

	project
	├── pages
	|   ├── index
	|   |   ├── index.js    index 页面逻辑
	|   |   ├── index.wxml  index 页面结构
	|   |   ├── index.wxss  index 页面样式
	|   |   └── index.json  index 页面配置
	|   └── log
	|       ├── log.js      log 页面逻辑
	|       ├── log.wxml    log 页面结构
	|       ├── log.wxss    log 页面样式
	|       └── log.json    log 页面配置
	├── app.js              小程序逻辑
	├── app.json            小程序公共配置
	└── app.wxss            小程序公共样式
```

- 使用 Bee 后的开发目录结构(主要为src目录的结构，dist目录除外)：

``` bash

	project
	└── src
	    ├── pages
	    |   ├── index
	    |   |   ├── index.wxp        index 页面逻辑、配置、结构、样式
	    |   ├── log
	    |   |   └── index.wxp        log 页面逻辑、配置、结构、样式
	    └──app.wxa               小程序逻辑、公共配置、公共样式、公共模板
```


> 注：dist 目录为 Bee 通过 dev 指令生成的目录，除额外增加的 packages 目录外，其目录结构与原生小程序的目录结构类似。