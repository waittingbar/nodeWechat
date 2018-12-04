const express = require('express'), //express 框架 
      wechat  = require('./wechat/wechat'),
       configs = require('./config'); //引入配置文件
       
var app = express();//实例express框架

var wechatApp = new wechat(configs); //实例wechat 模块

//用于处理所有进入 3000 端口 get 的连接请求
app.get('/',function(req,res){
    wechatApp.auth(req,res);
});

// // 用于处理所有进入 3000 端口 post 的连接请求
// app.post('/',function(req,res){
//     wechatApp.handleMsg(req,res);
// });

// 用于请求获取 access_token
app.get('/getAccessToken',function(req,res){
    wechatApp.getAccessToken().then(function(data){
        res.send(data);
    });    
});

// // 创建菜单
// app.get('/creatMenus',function (req,res) {
//     console.log(1);
//     wechatApp.creatMenus(req,res)
// });

// 获取菜单
app.get('/getMenus', function (req, res) {
    wechatApp.getMenus(req,res);
});

// 获取卡券详情
app.get('/getCardInfo',function (req,res) {
    wechatApp.getCardInfo(req,res);
});

// 更改会员卡信息
app.get('/setCardInfo',function(req,res) {
    wechatApp.setCardInfo(req,res);
})

//监听3001端口
app.listen(3001)
console.log('端口3001监听中~');