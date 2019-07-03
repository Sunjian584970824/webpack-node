# 转化es6语法



```text
npm install -D babel-loader @babel/core @babel/preset-env  //安装 3个babel
```



## 用法

```javascript
module: {
  rules: [
    {
      test: /\.m?js$/, // 匹配js文件
      exclude: /(node_modules|bower_components)/,//排除 node_modules|bower_components 这两个文件的js
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
```



