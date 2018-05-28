## Bee组件库示例 ##


- 示例项目是放在 bee-cli 工程下的，首先需要通过 git 将仓库 clone 下来

``` bash

	$ git clone http://ued.local.17173.com/gitlab/wxc/bee-cli.git
```

- 进入组件库示例项目，在工程的 example/bee-ui 目录下

``` bash

	$ cd ~/bee-cli/example/bee-ui
```

- 安装项目依赖

``` bash

	$ npm install
```

- 开启本地调试。未安装 bee 命令行工具？点击这里查看 安装教程

``` bash

	$ bee dev
```

- 打开微信开发者工具，选择 dist 文件夹，浏览项目。

![](https://ue.17173cdn.com/a/beeui/2018/img/app-img/demo-wxc-home.png)

示例里默认有个 toast 组件，通过微信开发者工具预览可以看到这个样子：
组件库首页

用户可以点击首页的导航进入到 toast 组件的示例页面，可以看到组件的示例代码展示、API文档 和 Changelog 版本日志：

![](https://ue.17173cdn.com/a/beeui/2018/img/app-img/demo-wxc-toast.png)

- 接下来进一步了解 组件package、Demo示例、API文档 这三者是怎么通过示例页面呈现出来的。

首先我们看下目录结构

``` bash

	  bee-ui
	  ├── dist                              微信开发者工具指定的目录
	  ├── node_modules
	  ├── packages                          代码编写的目录（该目录为使用 Bee 后的开发目录，用于管理各个 组件package 的主目录）
	  |   ├── wxc-toast                       组件的 package 目录
	  |   |   ├── src
	  |   |   |   └── index.wxc                   组件的源码编写文件（组件入口文件必须为index.wxc）
	  |   |   ├── package.json                  组件的 package 配置
	  |   |   └── README.md                     组件的 README 文档
	  └── src                               代码编写的目录（该目录为使用 Bee 后的开发目录）
	      ├── pages
	      |   ├── home
	      |   |   ├── index.wxp                   home 页面
	      |   ├── toast                         toast组件示例
	      |   |   ├── demos                       示例目录列表
	      |   |   |   └── demo-default.wxc          示例代码
	      |   |   └── index.wxp                   示例入口页面
	      └──app.wxa                        小程序配置项
```

小程序的页面放在pages目录下，而每一个组件应该是一个完整独立的NPM包而不是一个完整页面。所以 Bee 设计了这样的目录结构，将组件package 和展示组件的示例页面是放在不同目录下。即 组件package 放在 packages 目录下，示例页面放在 src/pages 目录下。有序组织页面和组件的引用关系，将 示例入口页面 引用多个 示例代码 和一个 组件文档 ，再由每个 示例代码 引用 组件源码 ，用户通过 bee dev 指令执行转换成原生小程序的目录结构



> 注： dist目录 是微信开发者工具指定的目录，该目录由 Bee 的 dev 指令自动编译生成，请不要直接修改该目录下的文件

- 请尝试修改组件代码

打开组件 `~/bee-ui/packages/wxc-toast/src/index.wxc` 文件

``` bash

	<template>
	  <view class="wxc-toast">
	    <view>WxcToast Component</view>
	    <!-- 修改此处 - start -->
	    <view class="text">这是一行新增的代码</view>
	    <!-- 修改此处 - end -->
	  </view>
	</template>
	
	<script>
	export default {
	  config: {
	    usingComponents: { }
	  },
	  behaviors: [ ],
	  properties: { },
	  data: { },
	  methods: { }
	}
	</script>
	
	<style>
	.wxc-toast {
	}
	/* 修改此处 - start */
	.text {
	  color: red;
	}
	/* 修改此处 - end */
	</style>

```

修改保存后，切换到 微信开发者工具 再进入到 taost组件的示例页面 


![toast组件示例页面](http://ue.17173cdn.com/a/beeui/2018/img/app-img/demo-wxc-toast-add.png)

- 请尝试为组件新增一个Demo示例

  - 进入 ~/bee-ui/pages/toast/demos 示例目录
  - 创建一个示例文件 demo-custom.wxc （示例文件名以demo-开始） 或复制已有的文件（为了方便，这里直接采用复制的方式）

``` bash
	
	<template>
	  <wxc-toast></wxc-toast>
	</template>
	
	<script>
	export default {
	  config: {
	    usingComponents: {
	      'wxc-toast': 'wxc-toast'
	    }
	  },
	  data: { },
	  methods: { }
	}
	</script>
	
	<style>
	</style>
```

  - 打开示例页面 `~/bee-ui/pages/toast/index.wxp` 文件，把刚新增的示例加进来

``` bash
	
	<template>
	  <example title="wxc-toast" desc="提示">
	
	    <example-demo title="请填写示例名称" desc="请填写示例描述">
	      <demo-default></demo-default>
	    </example-demo>
	
	    <!-- 修改此处 - start -->
	    <example-demo title="请填写示例名称" desc="请填写示例名称">
	      <demo-custom></demo-custom>
	    </example-demo>
	    <!-- 修改此处 - end -->
	
	  </example>
	</template>
	
	<script>
	export default {
	  config: {
	    usingComponents: {
	      'example': '@173/wxc-example',
	      'example-demo': '@173/wxc-example-demo',
	      'example-md': '@173/wxc-example-md',
	      'demo-default': './demos/demo-default',
	      // 修改此处 - start
	      'demo-custom': './demos/demo-custom' // 注册一个新的组件（每个示例代码都是一个组件来输出）
	      // 修改此处 - end
	    }
	  },
	  data: { }
	}
	</script>
	
	<style>
	</style>
```

  - 修改保存后，切换到 微信开发者工具，进入到 toast 组件示例页面，看到新增了一个示例 

![toast组件示例页面](http://ue.17173cdn.com/a/beeui/2018/img/app-img/demo-wxc-toast-add2.png)

- 此时，您是否已经了解 Bee设计的组件库开发方式呢? 有任何疑问或问题请提交 [issues](http://ued.local.17173.com/gitlab/dashboard/issues?assignee_id=12) 或加入到微信群 Bee 使用交流群 讨论，请描述您的问题并提供具体的异常截图，以便bee-team快速判断解决。

接下来请进一步了解在 Bee组件库项目 里常用的功能

  -  [新建组件](wxc-project/new.md)
  -  [调试组件](wxc-project/dev.md)
  -  [发布组件](wxc-project/publish.md)

如果您想要在已有的小程序里使用，请移步到 [已有小程序项目](third-project/index.md) 的使用介绍