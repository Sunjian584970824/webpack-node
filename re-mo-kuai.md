# 热模块

  webpack-dev-server 

`npm install - -save-dev webpack-dev-server  //安装`                                                    

#### webpack.config.js

```javascript
var  path =require('path')
module.exports = {
 
    devServer: {
        port: 3000, // 端口号
        open: true,//是否自动打开浏览器 
        contentBase: path.join(__dirname, "dist"), // 从哪里提供更新内容
        host: 'localhost',
        hot: true,
       // proxy: { 
         //     "/api": "www.baidu.com"  // 代理目标地址到本地同域
           // }
            proxy: {
            "/api": {
              target: "http://localhost:3000",
              pathRewrite: {"^/api" : ""} //此方法可以省略在请求中对api的
            }
          }
    },
    }
    
   //  代理 http://localhost:3000/api/users
      //  代理 http://localhost:3000/users 不写api
    
```



