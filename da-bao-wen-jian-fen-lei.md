# 打包文件分类

1、可以在有目标出口的的地方加入自定义的分类文件名；

```javascript
    plugins: [
        new MiniCssExtractPlugin({ //CSS 代码块提取单独的css文件
            filename: 'css/[name].[hash].css', // 在提取单独的css文件名前加上css文件名，
            //生成相对应的css文件下面的该css文件
        }),
    ]
```

2、在output：中定义指定输出目录

```text
 rules: [{
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: "img/[name].[ext]", // 1、在目标名称前加入相对应的目录文件
                        limit: 200000,
                        output: 'img/'  // 2、在该loader对图片解析后加入相对应的目录文件
                    }
                }]
            },]
```

### publicPath

1、在出口文件中定义publicPath，可在所有的引入资源中统一加上该前缀

```text
module.exports = {
    mode: 'development', // production development
    entry: './src/index.js',
    output: {
        filename: 'bundl.[hash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'www.baidu.com' // 给所有的引入资源前面加上公用的前缀 （除了在html文件中直接用img标签引入的图片）
    },
    }
```

打包后的html

```markup
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
<link href="www.baidu.com/css/main.6b525b7d10661dc547d2.css?6b525b7d10661dc547d2" rel="stylesheet"></head>

<body>
    <div class="a"></div>
    <div class="b"></div>
    <div class="t"></div>
<script type="text/javascript" src="www.baidu.com/bundl.6b525b7d10661dc547d2.js?6b525b7d10661dc547d2"></script></body>

</html>
```

2、在指定的loader下面指定 publicPath，

```javascript
   rules: [{
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: "[path][name].[ext]",
                        limit: 200000,
                        output: 'img/',
                        publicPath: 'www.baidu.com' // 给所有图片资源前面加上公用的前缀 （除了在html文件中直接用img标签引入的图片）

                    }
                }]
            },]
```

