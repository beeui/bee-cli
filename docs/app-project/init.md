## 初始化项目 ##

> bee 提供内置的小程序项目脚手架模板，帮助用户快速创建一个新的小程序项目

    $ bee init [name]


## 初始化步骤 ##



> 请将 Bee 指令运行在你最熟悉的 `命令行终端` 工具上

- 进入准备创建新项目的工作目录下

``` bash
	$ cd YOUR_CURRNT_WORK_DIR/
```

- 输入指令和新的项目名称，your_weapp_project 是项目名称

``` bash
	$ bee init your_weapp_project
```


- 此时进入`初始化项目`的命令行交互式问答，开发者请按照命令行上的交互式问题来完成具体操作

 - 请设置项目目录

``` bash
	YOUR_CURRNT_WORK_DIR/your_weapp_project # 请确认或更换其他目录
```

 - 请选择项目类型，此时请选择 新建小程序

``` bash
	- 新建小程序
	- 新建组件库
```

 - 是否继续高级设置

``` bash
	- y 进入自定义配置流程
	- n 跳过流程并使用默认配置
```

- 完成以上步骤，Bee 工具将进入自动化生成构建阶段

 - 创建并生成小程序项目到 `YOUR_CURRNT_WORK_DIR/your_weapp_project` 目录下
 - 自动安装 NPM 包依赖
 - 自动编译 src 源码到 dist 目录下
 - 提示初始化完成
 - 此时新的小程序项目已创建完成：请在 "微信开发者工具" 中新建一个小程序项目，项目目录指向新建工程里的 dist/ 文件夹

## 目录结构 ##


> 以下是 Bee 设计的目录结构，用户可以通过以上流程初始化一个新的 Bee小程序项目，也可以通过 Bee小程序示例 快速入门

	
	├── dist                   微信开发者工具指定的目录（该目录由 Bee 的 dev 指令自动编译生成，请不要直接修改该目录下的文件）
	├── node_modules
	├── src                    代码编写的目录（该目录为使用 Bee 后的开发目录）
	|   ├── common             Bee 公共目录
	|   |   ├── components         组件目录（组件不属于完整页面，仅供完整页面或其他组件引用）
	|   |   |   ├── com_a.wxc          可复用的 Bee 组件a
	|   |   |   └── com_b.wxc          可复用的 Bee 组件b
	|   |   ├── layout             模板目录（模板不属于完整页面，仅供app.wxa引用）
	|   |   |   ├── head.wxc           公共模板的 Bee 组件head
	|   |   |   └── foot.wxc           公共模板的 Bee 组件foot
	|   |   ├── assets             静态资源目录（图片、样式、类库等静态文件）
	|   ├── pages              Bee 页面目录（属于完整页面）
	|   |   ├── home
	|   |   |   └── index.wxp      home 页面
	|   |   ├── other
	|   |   |   └── index.wxp      other 页面
	|   └── app.wxa            小程序配置项（全局数据、全局模板、样式等；经build后，会在dist目录下生成app.js、app.json和app.wxss文件）
	├── Bee.config.json        Bee 配置文件
	└── package.json           项目的package配置