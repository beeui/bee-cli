## 环境安装

``` bash
$ npm install -g @173/bee-cli
```

## 组件开发

- **初始化项目**

``` bash
$ bee init
```

- **新建组件**

``` bash
$ bee new *name
```

- **开发实时编译**

``` bash
$ bee dev
```

- **发布组件**

``` bash
$ bee publish
```

## 组件应用

- **安装组件**

在小程序项目中安装一个组件，这里用 [BeeUI](http://ued.local.17173.com/gitlab/wxc/beeui) 的 loading 组件举例：

``` bash
$ bee install @173/wxc-loading
```

- **更新组件**

``` bash
$ bee update @173/wxc-loading
```