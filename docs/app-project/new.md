## 新建页面 ##


> Bee 提供内置的页面脚手架模板，帮助用户快速创建一个新的 page页面

``` bash
$ bee new [name]
```

## 新建步骤 ##

- 进入 Bee小程序项目 的根目录

``` bash
$ cd ~/your_weapp_project/
```

- 输入指令和新的页面名，home 是新的页面名称

``` bash
$ bee new home
```

- 此时进入新建页面的命令行交互式问答，开发者请按照命令行上的交互式问题来完成具体操作

 - 请设置新页面的英文名称

``` bash
# 当指令 `bee new` 后面没有带上页面名称，Bee 会提示输入页面名称
home  # home 为演示名称，开发者请输入实际的页面英文名称
```

 - 请设置新页面的中文标题

``` bash
主页 # 主页 为演示标题，开发者请输入实际的页面中文标题
```

- 完成上个步骤，Bee 工具将进入自动化生成构建阶段

 - 拷贝脚手架页面模板到 ~/your_weapp_project/pages/page-name 目录下
 - 自动编译 src 源码到 dist 目录下
 - 提示新建完成
- 此时新的页面已创建完成：请在 "微信开发者工具" 中切换到新的页面路径预览

## 目录结构 ##


> 以下是 Bee 设计的目录结构，用户可以按照以上流程新建一个 页面，也可以通过 Bee小程序示例 快速入门

	
	├── dist
	|   └── pages
	|   |   ├── home
	|   |   ├── page-name        经 Bee 的 dev 指令自动编译生成4个文件
	|   |   |   ├── index.js          页面逻辑
	|   |   |   ├── index.wxml        页面结构
	|   |   |   ├── index.wxss        页面样式表
	|   |   |   └── index.json        页面配置
	├── src
	|   ├── pages
	|   |   ├── home
	|   |   ├── page-name
	|   |   |   └── index.wxp     index 单文件页面