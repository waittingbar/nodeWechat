# Node.js 微信公众号设置
## 此项目通过SilenceHVK大神 https://github.com/SilenceHVK/wechatByNode.git 的项目修改而来，在此感谢！
## 应朋友需求，要将公众号中的会员卡开通刷卡支付，后台不能实现，需调用接口修改，通过原作者的代码可取到token，用正确的token调用修改会员卡接口便可实现。
### 注意事项： 花生壳设置映射后要诊断下，看是否连通；本机ip需加入到微信后台的白名单中；
# 项目结构
<pre>
.
├── README.md
├── package.json          // 构建项目与工具包依赖
├── config.json           // 项目配置文件
├── app.js                // 项目启动入口
├── .gitignore            // git提交过滤
├── wechat                // 微信模块文件夹
│   ├── access_token.json // accessToken存储文件
│   ├── menus.json        // 菜单配置文件
│   ├── cardId.json       // 获取会员卡详情的参数（会员卡id）
│   ├── cardInfo.json     // 修改会员卡1信息的参数（需先获取到原会员卡的详情，增加字段）
│   ├── cardInfo2.json    // 修改会员卡2信息的参数（需先获取到原会员卡的详情，增加字段）
│   ├── msg.js            // 消息模块
│   └── wechat.js         // 微信模块
</pre>

# 构建项目
 1. 将项目 clone 到本地
    ```
    git clone https://github.com/waittingbar/nodeWechant.git
    ```

 2. 打开项目配置文件 config.json

    修改文件的 token、appID 以及 appScrect 配置参数。其中 token、appID 与 appScrect 两个参数位于 [微信公众平台](https://mp.weixin.qq.com/) 左侧菜单的基本配置中

 3. 进入 nodeWechat 文件并运行 app.js
    ```
    cd nodeWechat && node app.js  // Server runs at localhost:3001
    ```
 4. 将服务地址映射外网，或部署到服务器。这里我使用内网穿透，需下载个花生壳客户端，现在要开通个会员才能内网穿透。
 
 5. 项目启动成功后，设置花生壳的内网穿透，成功后再去微信后台设置“服务器配置” 服务器地址(URL)填写花生壳提供的外网访问地址，设置成功后务必启用
 
 6. 服务起配置能够修改成功，说明已经连接成功，接下来就可以调接口了，访问花生壳提供的地址加app.js中自己的方法便可实现改菜单，查/改卡券等功能
   
   * /getAccessToken  手动获取token
   * /creatMenus 创建菜单
   * /getCardInfo 获取卡券详情
   * /setCardInfo 设置卡券信息



