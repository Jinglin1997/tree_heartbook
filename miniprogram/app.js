// app.js
let globalData = {
  // 是否隐藏登录信息
  loginIsHide:true,
  checkLogin:false
}
App({
  onLaunch () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力');
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        traceUser: true,
      });


      let _this = this;
      // 登录
    wx.login({
      success: res => {
        // 登录
        wx.cloud.callFunction({
        name: 'getuserinfo',
        success: res => {
          //由于这里是网络请求，可能会在 Page.onLoad 之后才返回
          // 所以此处加入 callback 以防止这种情况
          if (_this.checkLoginReadyCallback){
            if(res.result.returncode==201){
              _this.globalData.checkLogin = true;
              }
              _this.checkLoginReadyCallback(res);
          }
        }
      })
      }
    })
      
    }
  },globalData
});
