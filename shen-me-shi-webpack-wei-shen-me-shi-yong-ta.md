# 什么是webpack？为什么使用它？



 WebPack可以看做是**模块打包机**：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其转换和打包为合适的格式供浏览器使用；（[https://www.jianshu.com/p/42e11515c10f](https://www.jianshu.com/p/42e11515c10f) 阮一峰）



## 工作方式：

Webpack的工作方式是：把你的项目当做一个整体，通过一个给定的主文件（如：index.js），Webpack将从这个文件开始找到你的项目的所有依赖文件，使用loaders处理它们，最后打包为一个（或多个）浏览器可识别的JavaScript文件 （[https://www.jianshu.com/p/42e11515c10f](https://www.jianshu.com/p/42e11515c10f) 阮一峰）

```text
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js', //入口文件，根据这个文件查找项目中所有的依赖文件，
                                        //并且用相对应的loader对其依赖进行解析
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};
```

