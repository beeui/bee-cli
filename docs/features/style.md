## 支持多种样式预编译 ##
Bee 提供 postcss、less 预编译支持

> 使用 css 预编译语言，务必先在 .wxa、.wxp、.wxc单文件的 style 标签上增加 lang 属性，可选值分别为 less 和 pcss（pcss 是 postcss 的缩写）

## 使用 less 预编译： ##

``` bash

	<style lang="less">
	  @size: 12px;
	  body {
	    font-size: @size;
	  }
	</style>
```

使用 postcss 预编译：

``` bash

	<style lang="pcss">
	  $size: 12px;
	  body {
	    font-size: $size;
	  }
	</style>
```


## 使用 BEM 命名规范 ##
Bee 基于 postcss-bem 插件通过缩写和嵌套方式便于使用 
`bem` 命名方法书写，分别以`@b`、`@e`、`@m`来定义块(block)、元素(element)、修饰符(modifier)。请设置 `lang = "pcss"` 后再使用bem命名规范

``` bash

	<style lang="pcss">
	@b search {
	  padding: 0;
	
	  @e submit{
	    padding: 1rem;
	
	    @m button{
	      border: 1px solid #ccc;
	    }
	  }
	}
	</style>
```
转换后
``` bash

	search {
	    padding: 0;
	}
	.search__submit {
	    padding: 100rpx;
	}
	.search__submit--button {
	    border: 1rpx solid #ccc;
	}
```
## @import 外部文件 ##
在未使用任何css预编译，即 `<style></style>` 的 lang 属性为空。代码中 `@import *.wxss` 将会原始保留下来，非 `.wxss` 后缀文件将拷贝一份并更改后缀名为 `.wxss`

``` bash

	<style>
	  @import './a.wxss';
	  @import './b.css';
	</style>
```
转换后
``` bash
	@import './a.wxss';
	@import './b.wxss';
```



- 在使用css预编译，即 `<style></style>` 的 lang 属性为 `less` 或 `pcss`。代码中 `@import` 外部文件都会通过编译器解析转换