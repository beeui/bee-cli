## 调试页面 ##


> 通过设置一个页面名 name，来开启页面的调试。任何页面的改动，都会触发实时编译，并在 "微信开发者" 工具中显示改动后的效果。

``` bash
$ bee dev [name]
```

## 调试步骤 ##
- 进入 Bee小程序项目 的根目录

``` bash
$ cd ~/your_weapp_project/
```


- 调试整个项目

``` bash
$ bee dev
```

- 调试单个页面。以 pages 目录下的 home 页面举例

``` bash
$ bee dev home
```

- 调试多个页面，请使用英文逗号分隔。以 pages 目录下的 home 和 about 页面举例

``` bash
$ bee dev home,about
```



> 注意：调试单个或多个页面，Bee 工具只会按需编译当前页面和依赖的模块

## 设置小程序首页 ##

> 调试整个工程，默认将 Tabbar 第一个选项设置为小程序首页，缺省值为 pages/home/index
> 
> 调试单个页面，默认将当前调试页面设置为小程序首页
> 
> 调试多个页面，默认将当前第一个调试页面设置为小程序首页