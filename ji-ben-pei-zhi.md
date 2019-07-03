# 基本配置

### 安装

```text
npm install --save-dev -D webpack
npm install --save-dev -D webpack-cli运行
```

### 配置



```text
const path = require('path');

module.exports = {
 mode: 'production'// development production  生产环境和开发环境 （启用不同插件，开发环境代码可读，生产环境代码不可读）
  entry: './path/to/my/entry/file.js',//入口配置
  output: {//出口配置
    path: path.resolve(__dirname, 'dist'),///打包后的文件存放的地方
    filename: 'my-first-webpack.bundle.js'//打包后的文件名称
  }

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // 根据正则匹配不同格式文件类容，使用对应的loader解析
        use: 'babel-loader'
      }
    ]
  },
    plugins:[],// 插件功能需求使用不同功能插件 如:webpack-dev-server
};
```

### 运行

```text
webpack  （默认运行webpack.config.js 或者 webpackfile.js）
webpack  --config build.js // --config 后面可以根上参数  指定webpack读取的配置文件  

```

