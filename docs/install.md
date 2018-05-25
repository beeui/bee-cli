## 安装 ##

> 本文档展示命令，如果是 Windows 请打开 cmd 输入命令执行，如果是类 Unix 系统，请打开任意终端输入命令执行。安装 Bee 请先确定你的计算机上安装了[Node.js](https://nodejs.org/en/)以及[npm](https://www.npmjs.com/package/npm)，如已安装，请直接阅读 **安装 Bee**。

## 安装 Bee ##

``` bash
    npm install -g @173/bee-cli
```

- `-g` 安装到全局目录，必须使用全局安装，当全局安装后才能在命令行（cmd或者终端）找到 `bee` 命令

安装完成后执行 `bee -V` 判断是否安装成功，如果安装成功，则显示类似如下信息：
    
    $ bee -V
     1.0.17

## 升级 Bee ##

``` bash
    npm update -g @173/bee-cli
```

或重装

``` bash
	npm install -g @173/bee-cli
```