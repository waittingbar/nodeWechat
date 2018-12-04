# Node.js 微信公众号设置
# 项目结构
<pre>
.
├── README.md           
├── package.json               // 构建项目与工具包依赖
├── config.json               // 项目配置文件
├── app.js                   // 项目启动入口
├── wechat                 // 微信模块文件夹
│   ├── access_token.json // accessToken存储文件
│   ├── menus.json       // 菜单配置文件
│   ├── msg.js          // 消息模块
│   └── wechat.js      // 微信模块
</pre>

# 构建项目
 1. 将项目 clone 到本地
    ```
    git clone https://github.com/waittingbar/nodeWechant.git
    ```

 2. 打开项目配置文件 config.json
 
    修改文件的 token、appID 以及 appScrect 配置参数。其中 token、appID 与 appScrect 两个参数位于 [微信公众平台](https://mp.weixin.qq.com/) 左侧菜单的基本配置中

 3. 进入 wechatByNode 文件并运行 app.js
    ```
    cd wechatByNode && node app.js  // Server runs at localhost:3001
    ```

 4. 将服务地址映射外网，或部署到服务器。这里我使用内网穿透演示。


