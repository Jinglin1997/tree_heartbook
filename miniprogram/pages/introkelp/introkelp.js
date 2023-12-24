// logs.js


Page({
  data: {
    logs: [],
    fontFamily: 'Bitstream Vera Serif Bold',
    loaded: false
  },
  
  
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })

      this.setData({
        loaded: false
      })
  
      const self = this
      wx.loadFontFace({
        family: this.data.fontFamily,
        source: 'url("https://6b65-kelpcloudenvironment-3bb91f1ee75-1317303536.tcb.qcloud.la/Hbimages/%E5%85%B6%E4%BB%96/SourceHanSerifCN-VF-subset.ttf?sign=5c22ee946d453efff5ddc234f410281f&t=1697102378")',
        // source: 'url("https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E5%85%B6%E4%BB%96/SourceHanSerifCN-VF-subset.ttf?sign=b295c1c0c6005149b6b655341b2ec610&t=1671942747")',
        //https://spkf-zsxn-prod.s3.cn-north-1.amazonaws.com.cn/pic/livecenter/kaiti.ttf" 
        //https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/SourceHanSerifCN-VF-subset.ttf?sign=7dca92fd37e50adc25cb9a659a59281a&t=1669884925
        
        success(res) {
          console.log(res.status)
          self.setData({ loaded: true })
        },
        fail: function(res) {
          console.log(res.status)
        },
        complete: function(res) {
          console.log(res.status)
        }
      });
      console.log(loaded)
    },
  
})

