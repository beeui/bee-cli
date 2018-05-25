## 新建组件 ##


> Bee 提供内置的 组件package 脚手架模板，帮助用户快速创建一个新的 组件package 和 组件示例页面

$ bee new [name]
## 新建步骤 ##
- 进入 Bee组件库项目 的根目录

``` bash
$ cd ~/your_weapp_project/
```

- 输入指令和新的组件名，toast 是新的组件名称

``` bash
$ bee new toast
```

- 此时进入`新建组件`的命令行交互式问答，开发者请按照命令行上的交互式问题来完成具体操作

  - 第一步：请选择新建类型，此时请选择 新建组件

``` bash
- 新建组件
- 新建页面
```

  - 第二步：请设置新组件的英文名称

``` bash
# 当指令 `bee new` 后面没有带上组件名称，Bee 会提示输入组件名称
toast  # toast 为演示名称，开发者请输入实际的组件英文名称
```

  - 第三步：请设置新组件的中文标题

``` bash
提示 # 提示 为演示标题，开发者请输入实际的组件中文标题
```


- 完成上个步骤，Bee 工具将进入自动化生成构建阶段

  - 创建并生成 组件package 到 ~/your_weapp_project/packages/wxc-toast 目录下
  - 创建并生成组件示例页面 到 ~/your_weapp_project/pages/toast 目录下
  - 自动编译 src 源码到 dist 目录下
  - 提示新建完成
- 此时新的页面已创建完成：请在 "微信开发者工具" 中切换到新的组件示例页面路径预览
## 目录结构 ##


> 以下是 Bee 设计的目录结构，用户可以按照以上流程新建一个 组件，也可以通过 Bee组件库示例 快速入门


	├── dist                       微信开发者工具指定的目录（该目录由 Bee 的 dev 指令自动编译生成，请不要直接修改该目录下的文件）
	|   ├── packages
	|   |   ├── wxc-toast
	|   |   |   ├── dist
	|   |   |   |   ├── index.js
	|   |   |   |   ├── index.wxml
	|   |   |   |   ├── index.wxss
	|   |   |   |   └── index.json
	|   └── pages
	|   |   ├── toast
	|   |   |   ├── demos
	|   |   |   |   ├── demo-default.js
	|   |   |   |   ├── demo-default.wxml
	|   |   |   |   ├── demo-default.wxss
	|   |   |   |   └── demo-default.json
	|   |   |   ├── index.js
	|   |   |   ├── index.wxml
	|   |   |   ├── index.wxss
	|   |   |   └── index.json
	├── src
	|   ├── packages               Bee 组件库目录（属于管理各个 组件package 的主目录）
	|   |   ├── wxc-toast              toast 组件的 package 目录
	|   |   |   ├── src                    组件源码编写目录
	|   |   |   |   ├── index.wxc              index 组件（index 文件默认为组件的入口文件）
	|   |   |   └── package.json           组件的 package 配置
	|   ├── pages                  Bee 页面目录（属于完整页面）
	|   |   ├── toast                  toast 组件示例页面
	|   |   |   ├── demos                  组件示例编写目录（该目录为组件示例代码，每个示例代表一个组件的使用场景介绍）
	|   |   |   |   └── demo-default.wxc       组件示例代码
	|   |   |   └── index.wxp              index 页面（该页面用于承载组件的 Demo 示例、API 文档 和 changelog 日志）