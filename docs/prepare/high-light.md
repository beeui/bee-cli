## 代码高亮 ##
Min 提供单文件开发方式，单文件的类型有wxc, wxp, wxa 分别对应为组件单文件方式，页面单文件方式，以及 app 单文件方式(即对应 app.js，app.json，app.wxss)。

下面将介绍各大常用编辑器如何设置单文件代码高亮。

## VS Code 代码高亮 ##

- 在 Code 里先安装 Vue 的语法高亮插件 Vetur
- 打开任意 .wxc 或 .wxp 或 .wxa 文件
- 点击右下角的选择语言模式，默认为纯文本
- 在弹出的窗口中选择 .wxc 或 .wxp 或 .wxa的配置文件关联。
- 在选择要与 .wxc 或 .wxp 或 .wxa 关联的语言模式 中选择 Vue
## Sublime 代码高亮 ##

- 文件后缀为 .wxc 或 .wxp 或 .wxa，可共用vue高亮，但需要手动安装。
- 打开 Sublime > Preferences > Browse Packages.. 进入用户包文件夹。
- 在此文件夹下打开 cmd，运行 git clone git@github.com:vuejs/vue-syntax-highlight.git，无 git 用户可以直接下载 zip包，解压至当前文件夹。
- 关闭 .wxc 或 .wxp 或 .wxa文件重新打开即可高亮。
## WebStorm 代码高亮 ##

- 打开 Preferences，搜索 Plugins，搜索 Vue.js 插件并安装。
- 打开 Preferences，搜索 File Types，找到 Vue.js Template，在 Registered Patterns 添加 *.wxc 或 *.wxp 或 .wxa，即可高亮。
## Atom 代码高亮 ##

- 在 Atom 里先安装 vue 的语法高亮 language-vue，如装过就忽略此步。
- 
- 打开 Atom > Config 菜单。在 core 键下添加：

``` bash

	customFileTypes:
	  "text.html.vue": [
	    "wxc",
	    "wxp",
	    "wxa"
	  ]
```​

## VIM 代码高亮 ##

- 安装 vue 的 VIM 高亮插件，如 posva/vim-vue。
- 配置 .wxc 或 .wxp 或 .wxa后缀名的文件使用 vue 语法高亮

``` bash

	au BufRead,BufNewFile *.wxc setlocal filetype=vue.html.javascript.css
	au BufRead,BufNewFile *.wxp setlocal filetype=vue.html.javascript.css
	au BufRead,BufNewFile *.wxa setlocal filetype=vue.html.javascript.css
```