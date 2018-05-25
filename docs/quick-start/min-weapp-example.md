## Bee小程序示例 ##
- 示例项目是放在 bee-cli 工程下的，首先需要通过 git 将仓库 clone 下来

``` bash

	$ git clone http://ued.local.17173.com/gitlab/wxc/bee-cli.git
```

- 进入小程序示例项目，在工程的 example/bee-weapp 目录下

``` bash

	$ cd ~/bee-cli/example/bee-weapp
```

- 安装项目依赖

``` bash

$ npm install
```

开启本地调试。未安装 bee 命令行工具？点击这里查看 安装教程

``` bash

$ bee dev
```

- 打开微信开发者工具，选择 dist 文件夹，浏览项目。

示例里默认有个首页 

![](https://ue.17173cdn.com/a/beeui/2018/img/app-img/demo-home.png)

- 接下来进一步了解 Bee设计的目录结构 与 原生小程序的目录结构 是如何关联生成的

首先我们看下 Bee的目录结构

``` bash

  bee-weapp
  ├── dist                              微信开发者工具指定的目录
  ├── node_modules
  └── src                               代码编写的目录（该目录为使用 Bee 后的开发目录）
      ├── pages                           Bee 页面目录（属于完整页面）
      |   ├── home
      |   |   └── index.wxp                   home 页面
      └── app.wxa                         小程序配置项
用户通过 bee dev 指令执行转换成原生小程序的目录结构


  bee-weapp
  ├── dist                              微信开发者工具指定的目录
      ├── pages                           Bee 页面目录（属于完整页面）
      |   ├── home
      |   |   ├── index.js                   页面逻辑
      |   |   ├── index.wxml                 页面结构
      |   |   ├── index.wxss                 页面样式
      |   |   └── index.json                 页面配置
      ├── app.js                         小程序逻辑
      ├── app.json                       小程序公共配置
      └── app.wxss                       小程序公共样式
  ├── node_modules
  └── src
```

> 注： dist目录 是微信开发者工具指定的目录，该目录由 Bee 的 dev 指令自动编译生成，请不要直接修改该目录下的文件

- 请尝试修改首页代码

打开首页 `~/bee-weapp/pages/home/index.wxp` 文件

``` bash

	<template>
	  <view>
	    ...
	    <view class="index-bd">
	      Hello World
	    </view>
	
	    <!-- 修改此处 -start -->
	    <view class="index-bd">
	      这部分是刚刚新增的
	    </view>
	    <!-- 修改此处 -end -->
	    ...
	  </view>
	</template>
	<script> ... </script>
	<style> ... </style>
```

修改保存后，切换到微信开发者工具，预览首页 

![](http://ue.17173cdn.com/a/beeui/2018/img/app-img/demo-home-add.png)

- 请尝试新建一个页面

  - 进入到示例项目目录下

``` bash

	$ cd ~/bee-weapp
```

  - 使用 Bee 设计的 new 指令，快速新增一个页面

``` bash

	$ bee new about
```
  - 请按照 Bee 的交互式问答进行新建页面，你也可以点击这里了解更多 新建页面 使用说明

  - 新建完成，在首页上增加一个跳转 about页面 的链接

打开首页 `~/bee-weapp/pages/home/index.wxp` 文件

``` bash
	<template>
	  <view>
	    ...
	    <view class="index-bd">
	      Hello World
	    </view>
	
	    <view class="index-bd">
	      这部分是刚刚新增的
	    </view>
	
	    <!-- 修改此处 -start -->
	    <navigator class="index-bd" url="/pages/about/index">点击跳转到 about页面</navigator>
	    <!-- 修改此处 -end -->
	    ...
	  </view>
	</template>
	<script> ... </script>
	<style> ... </style>
```

修改保存后，切换到微信开发者工具，预览首页。此时用户点击 点击跳转到 about页面 按钮将打开 about页面。

![](http://ue.17173cdn.com/a/beeui/2018/img/app-img/demo-home-nav.png)
![](http://ue.17173cdn.com/a/beeui/2018/img/app-img/demo-about.png)


- 此时，您是否已经了解 Bee设计的小程序开发方式呢? 有任何疑问或问题请提交 [issues](http://ued.local.17173.com/gitlab/dashboard/issues?assignee_id=12) 或加入到微信群 Bee 使用交流群 讨论，请描述您的问题并提供具体的异常截图，以便bee-team快速判断解决。

接下来请进一步了解在 Bee小程序项目 里常用的功能

[新建页面](app-project/new.md)
[调试页面](app-project/dev.md)
[编译项目](app-project/build.md)
如果您想要在已有的小程序里使用，请移步到 [已有小程序项目](third-project/index.md) 的使用介绍