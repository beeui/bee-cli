## Bee 结合 Wepy ##
本节介绍在 wepy 项目中使用 Bee，即在 wepy 项目中使用 beeui 组件。准备工作如下：

### 1、安装 Bee ###

``` bash

	$ npm install -g @173/bee-cli
```



> 如已安装 Bee，则用 `bee -V` 命令查看 bee 的版本号，Bee 结合 wepy 使用要求 bee 的版本在 1.0.17 及以上。

### 2、安装 [wepy](https://tencent.github.io/wepy/) ###

``` bash

	$ npm install wepy-cli -g
```

### 3、创建 wepy 项目`myproject` ###

``` bash

	$ wepy new myproject
```

wepy的官方文档请👇这里：[wepy 官方文档](https://tencent.github.io/wepy/document.html#/)

### 4、了解 BeeUI 组件库 ###

## 安装 BeeUI 组件 ##
下面开始介绍在 wepy 项目中使用 Bee，主要是在 wepy 项目中使用 BeeUI 组件，此处以 BeeUI 组件库的 `wxc-toast` 组件为例。

### 1、新建 min.config.json配置文件 ###

Bee 的执行依赖于配置文件，在项目的根目录下新建 **min.config.json** 文件。由于 wepy 要求在微信开发者工具中关闭 es6=>es5 功能，因此在 **min.config.json** 中需配置 **babel**，用于在 bee 编译组件之后生成 es5 代码。babel 的配置如下所示：

``` bash

	{
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

### 2、安装 wxc-toast 组件： ###

``` bash

	$ bee install @173/wxc-toast
```

执行命令后，会提示 **请设置安装路径 (dist/packages)**，默认的路径为 `dist/packages`，可输入路径也可直接回车使用默认路径。

> wepy 项目编译后的文件保存在 **dist** 目录下，beeui 组件的安装路径应该也设置在 **dist** 目录的某个路径下，如果设置在 **dist** 以外的路径中，在微信开发者工具中会访问不到组件。

安装 wxc-toast 组件后，在 min.config.json 文件中会生成组件编译后的保存路径，如下所示：

``` bash

	{
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
	  },
	  "npm": {
	    "dest": "dist/packages"
	  }
	}
```

`npm.dest` 即为组件编译后的保存路径。打开 `dist/packages` 文件夹查看编译后的 `wxc-toast` 组件，可发现编译后的组件为 `es5` 代码。至此，min.config.json 文件配置完毕。

### 3、在 wpy 文件中使用 wxc-toast ###

在 config 字段中配置 usingComponents 字段，wxc-toast 组件的路径是 dist 目录下 pages/index/index.js 相对于 wxc-toast 组件的路径。

使用wxc-toast组件的示例如下：

``` bash

	<!-- index.wpy -->
	<style lang="less">
	</style>
	<template>
	  <view class="container">
	    <wxc-toast
	        class="J_toast"
	        text="Hello World"></wxc-toast>
	    <button bindtap="showToast">调用 show() 方法显示</button>
	  </view>
	</template>
	
	<script>
	  import wepy from 'wepy'
	  import testMixin from '../mixins/test'
	
	  export default class Index extends wepy.page {
	    config = {
	      navigationBarTitleText: 'test',
	      usingComponents: {
	        'wxc-toast': '../../packages/@173/wxc-toast/dist/index'
	      }
	    }
	    components = {}
	
	    mixins = [testMixin]
	
	    data = {}
	
	    computed = {}
	
	    methods = {
	      showToast() {
	        let $toast = this.$wxpage.selectComponent('.J_toast')
	        $toast && $toast.show()
	      }
	    }
	
	    events = {}
	
	    onLoad() {}
	  }
	</script>
```

> 该示例中，调用了 wxc-toast 组件的 show() 方法。值得注意的是，我们不能直接用 this.selectComponent 来获取 toast 的实例，因为 wepy 的 Page 是内部封装过的，没有 selectComponent 方法，用 this.$wxpage 可获取页面的真实 Page 对象实例，该实例中有selectComponent方法。对于暴露出组件方法的一些组件，比如 loading, dialog等组件，在 wepy 中都应通过这种方法来获取组件实例。