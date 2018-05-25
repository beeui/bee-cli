## 安装组件 ##
在已有小程序项目中使用基于 Bee 开发的组件，首先通过 NPM 来安装 `组件package`，然后再将 `组件package` 里的文件编译到小程序开发目录下。而 Bee 的 install 指令是将二者进行封装可以让开发者快速安装组件

``` bash

	$ bee install <name>
```

## 安装步骤 ##
- 进入进入 已有小程序项目 的根目录的根目录

``` bash

	$ cd ~/your_weapp_project/
```

- 输入指令和组件 NPM 包名称，`@173/wxc-toast` 是组件的 NPM 包名称，这里以 BeeUI 组件库的 toast 组件举例

``` bash

	$ bee install @173/wxc-toast
```

- 首次 在已有小程序项目里安装组件，会进入安装组件的命令行交互式问答，开发者请按照命令行上的交互式问题来完成具体操作

  - 请设置安装路径（ dist/packages 是 Bee 设计的默认安装路径，开发者可按需求修改）

``` bash

	dist/packages
```


  - 是否启用 ES6 转 ES5。了解 Babel 编译配置

``` bash

	- 输入 y 开启
	- 输入 n 关闭
```


- 完成上个步骤，Bee 工具将进入自动化安装阶段

  - 通过 npm install 将组件package 安装到 node_modules/ 目录下
  - Bee 将组件package 进行编译，生成文件放到 dist/ 目录下
  - 提示安装完成
- 此时用户可以在页面或组件里 [使用组件](third-project/using.md)

> 注意
> 
> 首次安装组件时，会提示设置安装路径，请务必将路径设置在 微信开发者工具指定的目录 内