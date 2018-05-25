## 支持加载外部 NPM 包 ##
在编译过程当中，会递归遍历代码中的 require 依赖模块，将对应依赖文件从 node_modules 当中拷贝出来，并且修改 require 为相对路径，从而实现对外部 NPM 包的支持。

## 举例 ##
index.wxp 页面，使用第三方NPM包，这里以 chance 举例

``` bash

	<template> ... </template>
	
	<script>
	  import 'chance'
	  export default {
	    ...
	  }
	</script>
	
	<style> ... </style>
```

经 Bee 的 dev 指令编译，输出以下日志 resolveDep
![](https://s10.mogucdn.com/mlcdn/c45406/171214_37540el397kjakb127lhg3l7ljl07_1100x310.jpg)


生成 index.js 逻辑文件

``` bash

	import '../../packages/chance/chance';
	export default Page({});
```