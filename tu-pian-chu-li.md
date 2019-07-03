# 图片处理

## url-loader

`npm install -D url-loader     安装`

```javascript
module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: "[path][name].[ext]",// 生成图片的名字
                        limit: 200000 // 图片大小小于200000的，使用base64内联在html中
                    }
                }]
            },
            ]
        }
```

