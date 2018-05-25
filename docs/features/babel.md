## 支持 ES6/7 新特性 ##
Bee 默认使用 babel 编译 JavaScript 模块、从而可以支持 ES6/7 的一些新特性



> 从 Bee Cli v1.0.17 版本开始，用户可以通过修改 min.config.json 配置文件，配置自己熟悉的 babel 环境进行开发。

## 在 Bee 中使用 async/await ##


- 示例代码

``` bash

	export default {
	  getData() {
	    return new Promise((resolve, reject) => {
	      setTimeout(() => {
	        resolve({
	          status: 'resolve'
	        });
	      }, 3000);
	    });
	  };
	
	  async onLoad() {
	    let data = await this.getData();
	    console.log(data.status);
	  };
	}
```



- 配置介绍

在 Bee 中使用 async/await，请先在项目中启用 ES6/7 新特性配置，安装Babel插件和runtime包，如果项目还未进行配置请移步到 [在 Bee 中使用 async/await 的配置介绍](features/async-function.md)