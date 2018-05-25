# Bee Cli

> 令小程序组件的开发和使用变得愉悦

## 介绍

Bee 是一款微信小程序组件化解决方案，通过预编译的手段让开发者可以选择自己喜欢的开发风格去开发小程序和组件库。而Bee与其他组件化框架最大的区别在于是开发真正意义上的小程序组件，通过增强特性能让开发小程序项目变得更加优雅，高效。

同时Bee也是一款成长中的小程序组件化方案，大量吸收借鉴了一些优化前端工具以及框架的设计理念和思想。如果Bee有不足地方，或者你有更好的想法，欢迎提交ISSUE或者PR。

## 特性

- 提供丰富的[UI组件库](http://ued.local.17173.com/gitlab/wxc/beeui)，组件重用方便二次开发
- [单文件]开发模式，类Vue开发风格
- 支持[自定义组件]开发
- 支持[加载海量NPM包]
- 支持[ES2015+特性、Promise]，使用async/await能够有效避免回调地狱
- 支持多种[编译器]，Less/PostCss、Babel
- 完善[小程序]和[组件库]开发流程，快速建立私有的小程序组件库
- 支持[全局模板]、[可配置化]，减少维护成本和差异化

## 最佳实践

[BeeUI](http://ued.local.17173.com/gitlab/wxc/beeui.git)，是基于 Bee 产出的一套 UI 组件库，同时也是17173小程序在应用的 UI 组件库。通过下面的小程序二维码，可以在手机中体验 BeeUI（微信基础库版本 1.6.3 以上支持）：

![](https://ue.17173cdn.com/a/beeui/2018/img/mp-beeui.jpg)

## 环境安装
``` bash
$ npm config set @173:registry http://npm.local.17173.com
```

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

## Bee 使用交流群

请扫码加好友，并与群助手对话发送验证码 `beeui` 按照指引进群。

![微信群](https://ue.17173cdn.com/a/beeui/2018/img/wechatInfo.jpg)


## 开源协议

本项目基于 [MIT](http://opensource.org/licenses/MIT) License，请自由的享受、参与开源。
