# 在 Bee 中使用 async/await 的配置介绍 #
## 安装 ##


- async-function

``` bash

	$ npm install @173/bee-async-function --save
```

- babel

``` bash

	$ npm install babel-preset-env --save-dev
	$ npm install babel-plugin-syntax-export-extensions --save-dev
	$ npm install babel-plugin-transform-export-extensions --save-dev
```

## 引用 ##


- 在 app.wxa 文件中引入runtime包

``` bash
	import '@173/bee-async-function';
```

## 配置babel编译器 ##
修改 min.config.json 配置文件

``` bash

	{
	  "compilers": {
	    "babel": {
	      "presets": [
	        "env"
	      ],
	      "plugins": [
	        "syntax-export-extensions",
	        "transform-export-extensions"
	      ]
	    }
	  }
	}
```

## 配置小程序开发者工具 ##

关闭 es6 转 es5
## 重启编译 ##

$ bee dev