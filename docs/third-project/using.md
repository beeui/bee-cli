## 使用组件 ##


> 在已有小程序项目中使用基于 Bee 开发的组件，请按照微信小程序组件化文档所示，引入组件并使用即可。

## 使用步骤 ##
- 进入进入 已有小程序项目 的根目录的根目录

``` bash

	$ cd ~/your_weapp_project/

```

- 安装 toast 组件，这里以 BeeUI 组件库的 toast 组件举例。了解安装组件，如已安装可跳过此步骤


``` bash

	your_weapp_project
	├──dist
	|   ├──packages
	|   |   ├── @173
	|   |   |   ├── wxc-toast
	|   |   |   |   ├── dist
	|   |   |   |   |   ├── index.js
	|   |   |   |   |   ├── index.wxml
	|   |   |   |   |   ├── index.wxss
	|   |   |   |   |   ├── index.json

```

- 准备在 pages 目录下的 home 页面使用自定义组件（下面都是以 home 页面举例）


``` bash

	your_weapp_project
	├──pages
	|   ├── home
	|   ├── index.js
	|   |   ├── index.wxml
	|   |   ├── index.wxss
	|   |   ├── index.json

```

- 进入 pages/home/index.json 文件中进行引用声明，此时需要提供每个自定义组件的标签名和对应的自定义组件文件路径：
- 

``` bash

	{
	  "usingComponents": {
	    "wxc-toast": "../../dist/packages/@173/wxc-toast/dist/index"
	  }
	}

```

进入 pages/home/index.wxml 文件中就可以像使用内置组件一样使用自定义组件。节点名即自定义组件的标签名，节点属性即传递给组件的属性值。

``` bash

	<view>
	  <!-- 以下是对一个自定义组件的引用 -->
	  <wxc-toast is-show="{{true}}" text="提示成功!"></wxc-toast>
	</view>

```

自定义组件的 wxml 节点结构在与数据结合之后，将被插入到引用位置内。