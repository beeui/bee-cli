## 发布组件 ##


> Bee组件库项目 下的每个组件是独立完整的 npm package，用户可以将 组件package 发布到 NPM 仓库

``` bash
$ bee publish
```

## 为什么使用，她与 npm publish 有什么区别 ##
- 支持批量发布
- 基于语义化版本控制规范（SemVer）
- 自动更新version版本号
- 自动打标签并推送tag到托管服务器
- 全自动化流程操作，轻松管理组件版本发布
## 发布步骤 ##
  - 进入 Bee组件库项目 的根目录

``` bash
$ cd ~/your_weapp_project/
```

  - 发布组件，以 BeeUI 组件库的 toast 组件举例

``` bash
$ bee publish toast
```

  - 此时，进入发布流程的选项界面，开发者请按照命令行上的交互式问题来完成具体操作

    - 选择组件新版本号。（假设当前 toast 组件版本号为1.0.0，Bee 工具将会基于语义化版本控制规范 SemVer 输出以下可选版本列表）

``` bash
- Patch (1.0.1)
- Beeor (1.1.0)
- Major (2.0.0)
- Prepatch (1.0.1-0)
- Prebeeor (1.1.0-0)
- Premajor (2.0.0-0)
- Prerelease
- Custom
```


    - 选择新版本号后，会看到以下确认信息。（假设新版号选择 Patch (1.0.1)）

``` bash
Changes:
- wxc-toast: 1.0.0 => 1.0.1

Are you sure you want to publish the above changes? (ynH)
```

    - 确认是否发布

``` bash
- 输入 y 确认发布
- 输入 n 退出发布
- 输入 h 显示帮助
```



  - 完成上个步骤，Bee 工具将进入自动化发布阶段
    - 更新组件 version 版本号
    - 发布 组件package 到 NPM 仓库
    - 生成 tag @beeui/wxc-toast@1.0.1 并推到 git 仓库
## 批量发布 ##
  - 开发者也可以直接执行指令，用于选择单个或批量发布方式

``` bash
$ bee publish
```


  - 此时，进入选择发布方式 的选项界面，开发者请按照命令行上的交互式问题来完成具体操作

    - 请选择发布方式，此时请选择 发布项目里的每个组件


``` bash
- 手动选择要发布的组件
- 发布项目里的每个组件
```


  - 选择 发布项目里的每个组件 ，将进入【发布步骤 - 发布流程】环节

  - 选择 手动选择要发布的组件 （与 `bee publish [name]` 用法相同，都是用于发布单个组件），此时将进入选择组件的交互式问答，再进入【发布步骤 - 发布流程】环节

> 注意：
> 
> 在发布组件前，开发者需要确认当前 Bee组件库项目 里是否具备以下几点
> 
> 要求 packages 组件库目录下里至少有一个 组件package
> 要求当前项目已使用 git 源代码管理，且代码已提交