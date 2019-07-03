# 样式处理

## loader

```text

style-loader、css-loader 、postcss-loader

style-loader:将引入的css通过<style>标签插入dom中
css-loader ：解析外部样式中的引用关系
postcss-loader：给样式添加浏览器前缀






```



```text
需要注意是：
loader是有顺序的，webpack肯定是先将所有css模块依赖解析完得到计算结果再创建style标签。
因此应该把style-loader放在css-loader的前面（webpack loader的执行顺序是从右到左）。
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { insertAt: 'top' } }, //  在给定位置处插入 <style></style> 默认 botttom
          'postcss-loader'
        ]
      }
    ]
  }
}
```



```text
index.js

require('../css/index.css')   
import '../css/index.css'
```

## plugins



```text
mini-css-extract-plugin  //CSS 代码块提取单独的css文件

npm install --save-dev  mini-css-extract-plugin 安装
--save-dev(自动写入package.json文件)

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

  plugins: [
        new MiniCssExtractPlugin({ 
            filename: 'bunild.css',//生产css文件名称
        }),
    ]
```





