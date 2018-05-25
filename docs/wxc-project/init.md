## 初始化项目 ##


> Bee 提供内置的组件库项目脚手架模板，帮助用户快速创建一个新的小程序组件库项目

``` bash
$ bee init [name]
```

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

  - 请选择项目类型，此时请选择 新建组件库

``` bash
- 新建小程序
- 新建组件库
```

  - 是否继续高级设置

``` bash
- y 进入自定义配置流程
- n 跳过流程并使用默认配置
```

- 完成以上步骤，Bee 将创建并生成组件库项目到 `YOUR_CURRNT_WORK_DIR/your_weapp_project` 目录下

- 此时，Bee 会提示创建一个新的组件，开始进入`新建组件`的选项界面，开发者请按照命令行上的交互式问题来完成具体操作

  - 请设置新组件的英文名称

``` bash
toast # toast 为演示名称，开发者请输入实际的组件英文名称
```

  - 请设置新组件的中文标题

``` bash
提示 # 提示 为演示标题，开发者请输入实际的组件中文标题
```

- 完成以上步骤，Bee 工具将进入自动化生成构建阶段

  - 创建并生成 组件package 到 YOUR_CURRNT_WORK_DIR/your_weapp_project/packages/wxc-toast 目录下
  - 创建并生成组件示例页面 到 YOUR_CURRNT_WORK_DIR/your_weapp_project/pages/toast 目录下
  - 自动安装 NPM 包依赖
  - 自动编译 src 源码到 dist 目录下
  - 提示初始化完成
- 此时新的小程序项目已创建完成：请在 "微信开发者工具" 中新建一个小程序项目，项目目录指向新建工程里的 dist/ 文件夹

## 目录结构 ##


> 以下是 Bee 设计的目录结构，用户可以通过以上流程初始化一个新的 Bee组件库项目，也可以通过 Bee组件库示例 快速入门


	├── dist                       微信开发者工具指定的目录（该目录由 Bee 的 dev 指令自动编译生成，请不要直接修改该目录下的文件）
	├── node_modules
	├── packages                   代码编写的目录（该目录为使用 Bee 后的开发目录，用于管理各个 组件package 的主目录）
	|   ├── wxc-toast                组件的 package 目录
	|   |   ├── src
	|   |   |   ├── index.wxc              组件的源码编写文件（组件入口文件必须为index.wxc）
	|   |   ├── package.json           组件的 package 配置
	|   |   └── README.md             组件的 README 文档
	├── src                        代码编写的目录（该目录为使用 Bee 后的开发目录）
	|   ├── pages                  Bee 页面目录（属于完整页面）
	|   |   ├── toast                  toast 组件示例示例 目录
	|   |   |   ├── demos                  组件示例编写目录（该目录为组件示例代码，每个示例代表一个组件的使用场景介绍）
	|   |   |   |   ├── demo-default.wxc       默认示例
	|   |   |   |   └── demo-other.wxc         其他示例
	|   |   |   └── index.wxp              index 页面（该页面用于承载组件的 Demo 示例、API 文档 和 changelog 日志）
	|   └── app.wxa                小程序配置项（全局数据、样式等；经build后，会在dist目录下生成app.js、app.json和app.wxss文件）
	├── bee.config.json            Bee 配置文件
	└── package.json               项目的package配置