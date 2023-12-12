// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  // const wxContext = cloud.getWXContext()
  const point = event.point
  const num_positive = event.num_positive
  const num_zero = event.num_zero
  const num_negative = event.num_negative

  // 单元素 case：火
  if (point[0]>0 && num_positive == 1)//喜火，有无抗拒
  { bookrand = Math.ceil(Math.random(0,1)*2)

    if (bookrand==1){
      fourstarbook = "酝酿之道: 当漫画遇见葡萄酒", 
      fourstarbookcontent="酒液滋滋作响，泡沫浮出，酵母工作，酒沫满溢。这是全年中葡萄酒最像一头活物的时刻。它精力充沛，汁液饱满，酒窖中充满了它的情绪。",
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E7%81%AB.png?sign=378ae551248b2e6c2af7c0dcb108104e&t=1674821896"//火

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "酝酿之道: 当漫画遇见葡萄酒"}
      // }).then(res=>{
      //   console.log(res.result.data)
      // })
    }

    if (bookrand==2){
      fourstarbook = "先知·沙与沫", 
      fourstarbookcontent="学者与诗人之间相隔着一片土地，学者走过去便成为大智。诗人走过来便成为先知。",
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E7%81%AB.png?sign=378ae551248b2e6c2af7c0dcb108104e&t=1674821896"

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "先知·沙与沫"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }
  }

  
  // 单元素 case：土 有无抗拒
  if (point[1]>0 && num_positive == 1)
  { bookrand = Math.ceil(Math.random(0,1)*3)

    if (bookrand == 1){
      fourstarbook = "杂草的故事", //赳赳说千字文
      fourstarbookcontent="有些植物被贬为杂草，只是因为我们在道德层面不赞许它们的行为。",//fourstarintro="书籍的100字介绍",
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E5%9C%9F.png?sign=871a15b4e4abe3276aaf9bcb9fdbdb31&t=1677249623"

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{
      //     bookname: "杂草的故事"
      //   }
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].name,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }

    if (bookrand == 2){
      fourstarbook = "乞力马扎罗的雪",
      fourstarbookcontent="就在前方，他看到的，是如整个世界一般的广阔，宏大、高耸，在阳光下闪耀着不可思议的洁白光芒，那是乞力马扎罗的方形雪山。", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E5%9C%9F.png?sign=871a15b4e4abe3276aaf9bcb9fdbdb31&t=1677249623"

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "乞力马扎罗的雪"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }

    if (bookrand == 3){
      fourstarbook = "南北极", 
      fourstarbookcontent="简介",
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E5%9C%9F.png?sign=871a15b4e4abe3276aaf9bcb9fdbdb31&t=1677249623"

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "南北极"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }

  }


  // 单元素 case: 风
  if (point[2]>0 && num_zero == 3)//喜风，无抗拒
  { fourstarbook = "赳赳说千字文", 
    fourstarbookcontent="一个人想要做到称心如意，有两种方式，一种方式是提高你的行动力。另外一种是降低你的欲望和目标。",
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E9%A3%8E.png?sign=ba21545bbe8019993417ec7da82ddc6d&t=1677250780"

    // wx.cloud.callFunction({
    //   name: "queryresultbook",
    //   data:{bookname: "赳赳说千字文"}
    // }).then(res=>{
    //   console.log(res.result.data)
    //   this.setData({
    //     fourstarbook: res.result.data[0].bookname,
    //     fourbookcontent: res.result.data[0].picture,
    //     fourstarintro: res.result.data[0].introduce,
    //     bookpic: res.result.data[0].bookpic
    //   })
    // })
  }

  if (point[2]>0 && num_positive == 1 && num_negative > 0)//喜风，有抗拒
  { fourstarbook = "幻灭三部曲", 
    fourstarbookcontent="死亡在虚无的永恒中散布了一小撮尘土便越过主宰死亡的时光。任何恢复青春的泉水此时也不能与朴实的怀念相比拟。",
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E9%A3%8E.png?sign=ba21545bbe8019993417ec7da82ddc6d&t=1677250780"

    // wx.cloud.callFunction({
    //   name: "queryresultbook",
    //   data:{bookname: "幻灭三部曲"}
    // }).then(res=>{
    //   console.log(res.result.data)
    //   this.setData({
    //     fourstarbook: res.result.data[0].bookname,
    //     fourbookcontent: res.result.data[0].picture,
    //     fourstarintro: res.result.data[0].introduce,
    //     bookpic: res.result.data[0].bookpic
    //   })
    // })
  }

  // 单元素 case:水
  if (point[3]>0 && num_positive == 1)//喜水，有无抗拒
  { bookrand = Math.ceil(Math.random(0,1)*4)
    console.log(bookrand);

    if (bookrand == 1){
    fourstarbook = "新月集", //"喜水，无抗拒"
    fourstarbookcontent="他没有什么事情急着要做，他没有哪条街一定要走，他没有什么地方一定要去，他没有什么时间一定要回家。",
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359"

    // wx.cloud.callFunction({
    //   name: "queryresultbook",
    //   data:{bookname: "新月集"}
    // }).then(res=>{
    //   console.log(res.result.data)
    //   this.setData({
    //     fourstarbook: res.result.data[0].bookname,
    //     fourbookcontent: res.result.data[0].picture,
    //     fourstarintro: res.result.data[0].introduce,
    //     bookpic: res.result.data[0].bookpic
    //   })
    // })
    }

    if (bookrand == 2){
    fourstarbook = "心: 和盛稻夫的一生嘱托", //心: 和盛稻夫的寄托
    fourstarbookcontent="全身心投入工作，精益求精，从中获得乐趣，就能抑制怠惰之心。同时，聚精会神，专注于工作，私心杂念自然就会消退。这是最有效的修行。",
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359"

    // wx.cloud.callFunction({
    //   name: "queryresultbook",
    //   data:{bookname: "心: 和盛稻夫的一生嘱托"}
    // }).then(res=>{
    //   console.log(res.result.data)
    //   this.setData({
    //     fourstarbook: res.result.data[0].bookname,
    //     fourbookcontent: res.result.data[0].picture,
    //     fourstarintro: res.result.data[0].introduce,
    //     bookpic: res.result.data[0].bookpic
    //   })
    // })
    }

  if (bookrand == 3){//4
    fourstarbook = "次第花开", 
    fourstarbookcontent="你永远得不到你想要的，因为没有什么是你真正想要的。",
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359"

    // wx.cloud.callFunction({
    //   name: "queryresultbook",
    //   data:{bookname: "次第花开"}
    // }).then(res=>{
    //   console.log(res.result.data)
    //   this.setData({
    //     fourstarbook: res.result.data[0].bookname,
    //     fourbookcontent: res.result.data[0].picture,
    //     fourstarintro: res.result.data[0].introduce,
    //     bookpic: res.result.data[0].bookpic
    //   })
    // })
  }

  if (bookrand == 4){ //6
    fourstarbook = "蜘蛛女之吻", 
    fourstarbookcontent="一个不想获得他人东西的人也是一个...小气鬼，因为他也不喜欢给他人任何东西。",
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359"

    // wx.cloud.callFunction({
    //   name: "queryresultbook",
    //   data:{bookname: "蜘蛛女之吻"}
    // }).then(res=>{
    //   console.log(res.result.data)
    //   this.setData({
    //     fourstarbook: res.result.data[0].bookname,
    //     fourbookcontent: res.result.data[0].picture,
    //     fourstarintro: res.result.data[0].introduce,
    //     bookpic: res.result.data[0].bookpic
    //   })
    // })
  }
}
  
  // 双元素情况  case: 火土
  if (point[0]>0 && point[1]>0 && num_positive == 2 && point[0]>point[1])  //火土偏火  有无抗拒
  { bookrand = Math.ceil(Math.random(0,1)*4)
    //bookrand = 1
    
    if (bookrand == 1){
      fourstarbook = "德米安", //狮60% 牛40%
      fourstarbookcontent="可是我们是由世界的整个存在所组成，每一个人都是，正如我们背负了进化的家谱，一直可以追溯到鱼类，以及更多更久远之前，在我们的心灵中，也同样拥有所有曾居住过人类心灵的一切。",//德米安简介
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E7%81%AB.png?sign=378ae551248b2e6c2af7c0dcb108104e&t=1674821896"

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "德米安"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }


    if (bookrand == 2){
      fourstarbook = "哲学人生问答", //射手60% 金牛40%
      fourstarbookcontent="哲学人生问答简介",
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E7%81%AB.png?sign=378ae551248b2e6c2af7c0dcb108104e&t=1674821896"

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "哲学人生问答"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }

    if (bookrand == 3){
      fourstarbook = "空中有苍鹰", //白羊80% 处女20%
      fourstarbookcontent="空中有苍鹰简介",
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E7%81%AB.png?sign=378ae551248b2e6c2af7c0dcb108104e&t=1674821896"

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "空中有苍鹰"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }


    if (bookrand == 4){
      fourstarbook = "人生拼图版", //射手55% 处女45%
      fourstarbookcontent="人生拼图版简介",//人生拼图版简介
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E7%81%AB.png?sign=378ae551248b2e6c2af7c0dcb108104e&t=1674821896"

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "人生拼图版"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }

  }

  if (point[0]>0 && point[1]>0 && num_zero == 2 && point[0]<point[1])//火土偏土 无抗拒
  { bookrand = Math.ceil(Math.random(0,1)*2)

    if (bookrand == 1){
      fourstarbook = "花衣魔笛手", // 摩羯70% 狮子30% 
      fourstarbookcontent="花衣魔笛手简介",
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E5%9C%9F.png?sign=871a15b4e4abe3276aaf9bcb9fdbdb31&t=1677249623" // 书图连接 网页版

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "花衣魔笛手"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }

    if (bookrand == 2){
      fourstarbook = "让感受自由", // 处女70% 狮子30% （禁狮子 处女）
      fourstarbookcontent="让感受自由简介",
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E5%9C%9F.png?sign=871a15b4e4abe3276aaf9bcb9fdbdb31&t=1677249623" // 书图连接 网页版

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "让感受自由"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }
    
  }


  if (point[0]>0 && point[1]>0 && num_negative == 1 && num_zero == 1 && point[0]<point[1])  //火土偏土  有抗拒 //num_positive == 2
  { fourstarbook = "下沉年代", // 金牛65% 射手35% （禁狮子 处女）
    fourstarbookcontent="一旦道路成型，要想换一条路走，就得耗费巨大的精神和力气。因为你已经接受了那一套思维模式，它会一代又一代地传递下去。",
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E5%9C%9F.png?sign=871a15b4e4abe3276aaf9bcb9fdbdb31&t=1677249623" // 书图连接 网页版
    
    // wx.cloud.callFunction({
    //   name: "queryresultbook",
    //   data:{bookname: "下沉年代"}
    // }).then(res=>{
    //   console.log(res.result.data)
    //   this.setData({
    //     fourstarbook: res.result.data[0].bookname,
    //     fourbookcontent: res.result.data[0].picture,
    //     fourstarintro: res.result.data[0].introduce,
    //     bookpic: res.result.data[0].bookpic
    //   })
    // })
  }


  if (point[0]>0 && point[1]>0 && num_zero == 2 && point[0]==point[1])//喜火土，平均，无抗拒
  { bookrand = Math.ceil(Math.ceil(0,1)*3)

    if (bookrand == 1){
      fourstarbook = "德米安"
      fourstarbookcontent = "可是我们是由世界的整个存在所组成，每一个人都是，正如我们背负了进化的家谱，一直可以追溯到鱼类，以及更多更久远之前，在我们的心灵中，也同样拥有所有曾居住过人类心灵的一切。"
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E7%81%AB.png?sign=378ae551248b2e6c2af7c0dcb108104e&t=1674821896"

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "德米安"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }


    if (bookrand == 2){
      fourstarbook = "哲学人生问答"
      fourstarbookcontent = "哲学人生问答简介"
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E7%81%AB.png?sign=378ae551248b2e6c2af7c0dcb108104e&t=1674821896"

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "哲学人生问答"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }

    if (bookrand == 3){
      fourstarbook = "人生拼图版"
      fourstarbookcontent = ""
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E7%81%AB.png?sign=378ae551248b2e6c2af7c0dcb108104e&t=1674821896"

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "人生拼图版"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }

  }

  if (point[0]>0 && point[1]>0 && num_negative == 1 && num_zero == 1 && point[0]==point[1])//喜火土，平均，有抗拒  （平均可以达到 6.5: 3.5）
  { 
    fourstarbook = "下沉年代", //
    fourstarbookcontent="一旦道路成型，要想换一条路走，就得耗费巨大的精神和力气。因为你已经接受了那一套思维模式，它会一代又一代地传递下去。",
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E5%9C%9F.png?sign=871a15b4e4abe3276aaf9bcb9fdbdb31&t=1677249623"
    
    // wx.cloud.callFunction({
    //   name: "queryresultbook",
    //   data:{bookname: "下沉年代"}
    // }).then(res=>{
    //   console.log(res.result.data)
    //   this.setData({
    //     fourstarbook: res.result.data[0].bookname,
    //     fourbookcontent: res.result.data[0].picture,
    //     fourstarintro: res.result.data[0].introduce,
    //     bookpic: res.result.data[0].bookpic
    //   })
    // })
  }

  // 双元素情况  case: 火风
  if (point[0]>0 && point[2]>0 && num_zero == 1 && num_negative == 1 && point[0]>point[2])//喜火风，偏火，有抗拒 num_positive == 2
  { fourstarbook = "歌德谈话录", //喜火风，偏火，有无抗拒 狮子55% 双子45%（禁摩羯 水瓶）
    fourstarbookcontent="诗人的本领，正在于他有足够的智慧，能从惯见的平凡事物中见出引人入胜的一个侧面。",
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E7%81%AB.png?sign=378ae551248b2e6c2af7c0dcb108104e&t=1674821896"//链接

    // wx.cloud.callFunction({
    //   name: "queryresultbook",
    //   data:{bookname: "歌德谈话录"}
    // }).then(res=>{
    //   console.log(res.result.data)
    //   this.setData({
    //     fourstarbook: res.result.data[0].bookname,
    //     fourbookcontent: res.result.data[0].picture,
    //     fourstarintro: res.result.data[0].introduce,
    //     bookpic: res.result.data[0].bookpic
    //   })
    // })
    
    /*this.setData({
    fourstarcontent: "",
    fourstarbook: "歌德谈话录",
    fourstarintro:"歌德谈话录书籍的100字介绍",
    bookpic:"cloud://cloud1-2gx6xlsu0ca67a99.636c-cloud1-2gx6xlsu0ca67a99-1311762654/书道具-设计稿-火.png"
  })*/
  }

  if (point[0]>0 && point[2]>0 && num_zero == 2 && point[0]>point[2])//喜火风，偏火，无抗拒
  {
    fourstarbook = "不受掌控", //喜火风，偏火，无抗拒 射手60% 双子40%
    fourstarbookcontent="",
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E7%81%AB.png?sign=378ae551248b2e6c2af7c0dcb108104e&t=1674821896"//链接

    // wx.cloud.callFunction({
    //   name: "queryresultbook",
    //   data:{bookname: "不受掌控"}
    // }).then(res=>{
    //   console.log(res.result.data)
    //   this.setData({
    //     fourstarbook: res.result.data[0].bookname,
    //     fourbookcontent: res.result.data[0].picture,
    //     fourstarintro: res.result.data[0].introduce,
    //     bookpic: res.result.data[0].bookpic
    //   })
    // })
  }

  if (point[0]>0 && point[2]>0 && num_positive == 2 && point[0]<point[2])//喜火风，偏风，有无抗拒
  {
    fourstarbook = "何故为敌", //喜火风，偏风，无抗拒 射手40% 水瓶60%
    fourstarbookcontent="",
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E9%A3%8E.png?sign=ba21545bbe8019993417ec7da82ddc6d&t=1677250780"//链接

    // wx.cloud.callFunction({
    //   name: "queryresultbook",
    //   data:{bookname: "何故为敌"}
    // }).then(res=>{
    //   console.log(res.result.data)
    //   this.setData({
    //     fourstarbook: res.result.data[0].bookname,
    //     fourbookcontent: res.result.data[0].picture,
    //     fourstarintro: res.result.data[0].introduce,
    //     bookpic: res.result.data[0].bookpic
    //   })
    // })

  }

  
  // if (point[0]>0 && point[2]>0 && num_zero == 1  && num_negative == 1 && point[0]<point[2])//喜火风，偏风，有抗拒
  // {}

  //
  if (point[0]>0 && point[2]>0 && num_zero == 1 && num_negative == 1 && point[0]==point[2])//喜火风，平均，有抗拒
  {
    fourstarbook = "歌德谈话录", //
    fourstarbookcontent="诗人的本领，正在于他有足够的智慧，能从惯见的平凡事物中见出引人入胜的一个侧面。",
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E7%81%AB.png?sign=378ae551248b2e6c2af7c0dcb108104e&t=1674821896"

    // wx.cloud.callFunction({
    //   name: "queryresultbook",
    //   data:{bookname: "歌德谈话录"}
    // }).then(res=>{
    //   console.log(res.result.data)
    //   this.setData({
    //     fourstarbook: res.result.data[0].bookname,
    //     fourbookcontent: res.result.data[0].picture,
    //     fourstarintro: res.result.data[0].introduce,
    //     bookpic: res.result.data[0].bookpic
    //   })
    // })
  }

  if (point[0]>0 && point[2]>0 && num_zero == 2 && point[0]==point[2])//喜火风，平均，无抗拒
  {
    bookrand = Math.ceil(Math.random(0,1)*2)

    if (bookrand == 1){
    fourstarbook = "不受掌控", //喜火风，偏火，无抗拒 射手60% 双子40%
    fourstarbookcontent="",
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E7%81%AB.png?sign=378ae551248b2e6c2af7c0dcb108104e&t=1674821896"

    // wx.cloud.callFunction({
    //   name: "queryresultbook",
    //   data:{bookname: "不受掌控"}
    // }).then(res=>{
    //   console.log(res.result.data)
    //   this.setData({
    //     fourstarbook: res.result.data[0].bookname,
    //     fourbookcontent: res.result.data[0].picture,
    //     fourstarintro: res.result.data[0].introduce,
    //     bookpic: res.result.data[0].bookpic
    //   })
    // })
    }

    if (bookrand == 2){
    fourstarbook = "何故为敌", //喜火风，偏风，无抗拒 射手40% 水瓶60%
    fourstarbookcontent="",
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E9%A3%8E.png?sign=ba21545bbe8019993417ec7da82ddc6d&t=1677250780"

    // wx.cloud.callFunction({
    //   name: "queryresultbook",
    //   data:{bookname: "何故为敌"}
    // }).then(res=>{
    //   console.log(res.result.data)
    //   this.setData({
    //     fourstarbook: res.result.data[0].bookname,
    //     fourbookcontent: res.result.data[0].picture,
    //     fourstarintro: res.result.data[0].introduce,
    //     bookpic: res.result.data[0].bookpic
    //   })
    // })
    }
    
  }


  // 双元素情况  case: 火水 // [bookrand is not defined]
  if (point[0]>0 && point[3]>0 && num_positive == 2 && point[0]>point[3]) // 火水偏火 有无抗拒
  { bookrand = Math.ceil(Math.random(0,1)*2)
    
    if (bookrand == 1){//bandrand
    fourstarbook = "安徒生自传: 我的童话人生", //喜火风，偏火，无抗拒  鱼40% 羊40% 狮20%
    fourstarbookcontent="国内还有一些人早就期望着从我这里了解点什么，他们并未想到，即使幕布拉开了，也不会立即看到戏，或者一眼就把一出戏看完。",
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E7%81%AB.png?sign=378ae551248b2e6c2af7c0dcb108104e&t=1674821896"

    // wx.cloud.callFunction({
    //   name: "queryresultbook",
    //   data:{bookname: "安徒生自传: 我的童话人生"}
    // }).then(res=>{
    //   console.log(res.result.data)
    //   this.setData({
    //     fourstarbook: res.result.data[0].bookname,
    //     fourbookcontent: res.result.data[0].picture,
    //     fourstarintro: res.result.data[0].introduce,
    //     bookpic: res.result.data[0].bookpic
    //   })
    // })
    }

  if (bookrand== 2){//bandrand
    fourstarbook = "上帝与黄金", //射手50% 天蝎50% 无抗拒
    fourstarbookcontent="",
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E7%81%AB.png?sign=378ae551248b2e6c2af7c0dcb108104e&t=1674821896"

    // wx.cloud.callFunction({
    //   name: "queryresultbook",
    //   data:{bookname: "上帝与黄金"}
    // }).then(res=>{
    //   console.log(res.result.data)
    //   this.setData({
    //     fourstarbook: res.result.data[0].bookname,
    //     fourbookcontent: res.result.data[0].picture,
    //     fourstarintro: res.result.data[0].introduce,
    //     bookpic: res.result.data[0].bookpic1
    //   })
    // })
  }

  // if (bookrand == 3){//bandrand
  // }

  }

  if (point[0]>0 && point[3]>0 && num_positive == 2 && point[0]<point[3])
  {//火水偏水 有无抗拒
    bookrand = Math.ceil(Math.random(0,1)*2)
    
    if (bookrand == 1){
    fourstarbook = "昨日的世界: 一个欧洲人的回忆", //巨蟹60%  狮子30% 射手10%
    fourstarbookcontent="命运总是有办法找到它需要的那个人，要他完成那秘密的使命，哪怕这个人自己想躲起来也无济于事。",
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359"

    // wx.cloud.callFunction({
    //   name: "queryresultbook",
    //   data:{bookname: "昨日的世界: 一个欧洲人的回忆"}
    // }).then(res=>{
    //   console.log(res.result.data)
    //   this.setData({
    //     fourstarbook: res.result.data[0].bookname,
    //     fourbookcontent: res.result.data[0].picture,
    //     fourstarintro: res.result.data[0].introduce,
    //     bookpic: res.result.data[0].bookpic
    //   })
    // })
    }

    if (bookrand == 2){
    fourstarbook = "上帝与黄金", //巨蟹60%  狮子30% 射手10%
    fourstarbookcontent="",
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359"

    // wx.cloud.callFunction({
    //   name: "queryresultbook",
    //   data:{bookname: "上帝与黄金"}
    // }).then(res=>{
    //   console.log(res.result.data)
    //   this.setData({
    //     fourstarbook: res.result.data[0].bookname,
    //     fourbookcontent: res.result.data[0].picture,
    //     fourstarintro: res.result.data[0].introduce,
    //     bookpic: res.result.data[0].bookpic2
    //   })
    // })
    }
    
  }

  if (point[0]>0 && point[3]>0 && num_positive == 2 && point[0]==point[3])//喜火水，平均，有无抗拒
  { bookrand = Math.ceil(Math.random(0,1)*3)
    elementrand = Math.ceil(Math.random(0,1)*2)

    if (bookrand==1){
      fourstarbook = "安徒生自传：我的童话人生", //
      fourstarbookcontent="国内还有一些人早就期望着从我这里了解点什么，他们并未想到，即使幕布拉开了，也不会立即看到戏，或者一眼就把一出戏看完。",
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E7%81%AB.png?sign=378ae551248b2e6c2af7c0dcb108104e&t=1674821896"

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "安徒生自传: 我的童话人生"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }

    if (bookrand==2){
      fourstarbook = "昨日的世界: 一个欧洲人的回忆", //
      fourstarbookcontent="命运总是有办法找到它需要的那个人，要他完成那秘密的使命，哪怕这个人自己想躲起来也无济于事。",
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359"

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "昨日的世界: 一个欧洲人的回忆"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }

    if (bookrand == 3 && elementrand == 1){
      fourstarbook = "上帝与黄金", //
      fourstarbookcontent="",
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E7%81%AB.png?sign=378ae551248b2e6c2af7c0dcb108104e&t=1674821896"

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "上帝与黄金"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic1
      //   })
      // })
    }

    if (bookrand == 3 && elementrand == 2){
      fourstarbook = "上帝与黄金", //
      fourstarbookcontent="",
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359"

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "上帝与黄金"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic2
      //   })
      // })
    }

  }


  // 双元素情况  case :土风
  if (point[2]>0 && point[1]>0 && num_zero == 1 && num_negative == 1 && point[2]>point[1])//喜风土，偏风，有抗拒
  { bookrand = Math.ceil(Math.random(0,1)*2)

    if (bookrand==1){
      fourstarbook = "呼兰河传", // 双子65% 金牛35%（禁 天蝎 射手）
      fourstarbookcontent="天空是发灰的，云彩也失了形状，好像被洗过砚台的水盆，有深有浅，混洞洞的。这样的云彩，有的带来了雨点，有时带来了细雪。",
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E9%A3%8E.png?sign=ba21545bbe8019993417ec7da82ddc6d&t=1677250780"

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "呼兰河传"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }

    if (bookrand==2){
      fourstarbook = "判断力批判",  //双子60% 金牛40%（禁 天秤）
      fourstarbookcontent="要说一个对象是美的并证明我有品味，这取决于我怎样评价自己心中的这个表相，而不是取决于我在哪方面依赖于该对象的实存。",
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E9%A3%8E.png?sign=ba21545bbe8019993417ec7da82ddc6d&t=1677250780"
      
      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "判断力批判"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }
  }

  if (point[2]>0 && point[1]>0 && num_zero == 2 && point[2]>point[1])//喜风土，偏风，无抗拒
  {
    fourstarbook = "狂人日记", //天秤60% 处女 40%（风土）
    fourstarbookcontent="凡是愚弱的国民，即使体格如何健全，如何茁壮，也只能做毫无意义的示众材料和看客，病死多少是不必以为不幸的。",
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E9%A3%8E.png?sign=ba21545bbe8019993417ec7da82ddc6d&t=1677250780"

    // wx.cloud.callFunction({
    //   name: "queryresultbook",
    //   data:{bookname: "狂人日记"}
    // }).then(res=>{
    //   console.log(res.result.data)
    //   this.setData({
    //     fourstarbook: res.result.data[0].bookname,
    //     fourbookcontent: res.result.data[0].picture,
    //     fourstarintro: res.result.data[0].introduce,
    //     bookpic: res.result.data[0].bookpic
    //   })
    // })
  }

  if (point[2]>0 && point[1]>0 && num_zero == 1 && num_negative==1 && point[2]<point[1])//喜风土，偏土，有抗拒 // 名字太长，这个要专门看一下效果
  { fourstarbook = "在深渊里仰望星空: 魏晋名士的卑微与骄傲", // 处女70% 天秤30% （禁 白羊 双鱼）
    fourstarbookcontent="人之所以为人, 并不因为完美, 恰恰是因为那些无法用理智约束的部分, 无法约束, 就无法预测到它的走向。",
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E5%9C%9F.png?sign=871a15b4e4abe3276aaf9bcb9fdbdb31&t=1677249623"

    // wx.cloud.callFunction({
    //   name: "queryresultbook",
    //   data:{bookname: "在深渊里仰望星空: 魏晋名士的卑微与骄傲"}
    // }).then(res=>{
    //   console.log(res.result.data)
    //   this.setData({
    //     fourstarbook: res.result.data[0].bookname,
    //     fourbookcontent: res.result.data[0].picture,
    //     fourstarintro: res.result.data[0].introduce,
    //     bookpic: res.result.data[0].bookpic
    //   })
    // })
  }

  if (point[2]>0 && point[1]>0 && num_zero == 2 && point[2]<point[1])//喜风土，偏土，无抗拒
  { bookrand = Math.ceil(Math.random(0,1)*2)
    
    if (bookrand == 1){
    fourstarbook = "阿赞德人的巫术，神谕和魔法", // 处60% 牛30% 秤10%
    fourstarbookcontent="他们就某个人是否是巫师而请教毒药神谕，神谕说他是巫师，病人的亲属就会给这个人一只鸡翅膀，如果这个人会给鸡翅膀喷水，那么这个人就是巫师。",
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E5%9C%9F.png?sign=871a15b4e4abe3276aaf9bcb9fdbdb31&t=1677249623"

    // wx.cloud.callFunction({
    //   name: "queryresultbook",
    //   data:{bookname: "阿赞德人的巫术，神谕和魔法"}
    // }).then(res=>{
    //   console.log(res.result.data)
    //   this.setData({
    //     fourstarbook: res.result.data[0].bookname,
    //     fourbookcontent: res.result.data[0].picture,
    //     fourstarintro: res.result.data[0].introduce,
    //     bookpic: res.result.data[0].bookpic
    //   })
    // })
    }

    if (bookrand == 2){
    fourstarbook = "这世上的偶然", // 摩80% 双20%
    fourstarbookcontent="观察是对他人抱有关心，仔细观看和聆听其世界的行为，同时也使人重新审视自身。观察，说到底是观察包括自己在内的世界（参与观察）。",
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E5%9C%9F.png?sign=871a15b4e4abe3276aaf9bcb9fdbdb31&t=1677249623"

    // wx.cloud.callFunction({
    //   name: "queryresultbook",
    //   data:{bookname: "这世上的偶然"}
    // }).then(res=>{
    //   console.log(res.result.data)
    //   this.setData({
    //     fourstarbook: res.result.data[0].bookname,
    //     fourbookcontent: res.result.data[0].picture,
    //     fourstarintro: res.result.data[0].introduce,
    //     bookpic: res.result.data[0].bookpic
    //   })
    // })
    }
  }

  if (point[1]>0 && point[2]>0 && num_zero == 2 && point[1]==point[2])//土风平均，无抗拒
  {
    fourstarbook = "狂人日记", 
    fourstarbookcontent="凡是愚弱的国民，即使体格如何健全，如何茁壮，也只能做毫无意义的示众材料和看客，病死多少是不必以为不幸的。",
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E9%A3%8E.png?sign=ba21545bbe8019993417ec7da82ddc6d&t=1677250780"

    // wx.cloud.callFunction({
    //   name: "queryresultbook",
    //   data:{bookname: "狂人日记"}
    // }).then(res=>{
    //   console.log(res.result.data)
    //   this.setData({
    //     fourstarbook: res.result.data[0].bookname,
    //     fourbookcontent: res.result.data[0].picture,
    //     fourstarintro: res.result.data[0].introduce,
    //     bookpic: res.result.data[0].bookpic
    //   })
    // })
  }

  if (point[1]>0 && point[2]>0 && num_zero == 1 && num_negative == 1 && point[1]== point[2])//土风平均，有抗拒
  { bookrand =  Math.ceil(Math.random(0,1)*2)
    if (bookrand==1){
      fourstarbook = "呼兰河传", 
      fourstarbookcontent="天空是发灰的，云彩也失了形状，好像被洗过砚台的水盆，有深有浅，混洞洞的。这样的云彩，有的带来了雨点，有时带来了细雪。",
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E9%A3%8E.png?sign=ba21545bbe8019993417ec7da82ddc6d&t=1677250780"

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "呼兰河传"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }

    if (bookrand==2){
      fourstarbook = "判断力批判", 
      fourstarbookcontent="要说一个对象是美的并证明我有品味，这取决于我怎样评价自己心中的这个表相，而不是取决于我在哪方面依赖于该对象的实存。",
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E9%A3%8E.png?sign=ba21545bbe8019993417ec7da82ddc6d&t=1677250780"

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "判断力批判"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    } //bopk
  }

  // 双元素情况：土水
  if (point[3]>0 && point[1]>0 && num_zero == 2 && point[3]>point[1])//喜水土，偏水，无抗拒
  { fourstarbook = "骆驼祥子", // 蟹60% 摩40%
    fourstarbookcontent="人间的真话本来不多，一个女子的脸红胜过一大片话。", 
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359"//小书人网页链接

    // wx.cloud.callFunction({
    //   name: "queryresultbook",
    //   data:{bookname: "骆驼祥子"}
    // }).then(res=>{
    //   console.log(res.result.data)
    //   this.setData({
    //     fourstarbook: res.result.data[0].bookname,
    //     fourbookcontent: res.result.data[0].picture,
    //     fourstarintro: res.result.data[0].introduce,
    //     bookpic: res.result.data[0].bookpic
    //   })
    // })
  }

  if (point[3]>0 && point[1]>0 && num_zero == 1 && num_negative == 1 && point[3]>point[1])//喜水土，偏水，有抗拒
  { bookrand = Math.ceil(Math.random(0,1)*3)
    if (bookrand == 1){
      fourstarbook = "背德者", // 巨蟹60% 金牛30% 天蝎10%（禁 射手）
      fourstarbookcontent=" 我不喜欢往后看，我把过去远远抛开，就像小鸟为了高飞必须离开它的影子。",
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359"

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "背德者"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }

    if (bookrand == 2){
      fourstarbook = "人子", // 天蝎65% 摩羯35%（禁 金牛 巨蟹）
      fourstarbookcontent="莫非这就是乌托邦的真谛？浪子归家，家不在的乌托邦，那些渴望回到家乡的人或被剥夺土地、被驱逐、被隔离的流放者的乌托邦。",
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359"

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "人子"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }

    // 【细雪是直接放在水土平均里，还是也都放在偏土/偏水里？都放。】
    if (bookrand == 3){
      fourstarbook = "细雪",  // 金牛50% 双鱼30% 巨蟹20%（禁 射手 狮子） 用水元素
      fourstarbookcontent="悲痛固然悲痛，不过那是超越个人关系、惋惜美好事物离开尘世的一种悲痛，是一种伴有音乐妙味的悲痛。",
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359"

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "细雪"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic2
      //   })
      // })
    }
  }

  if (point[3]>0 && point[1]>0 && num_zero == 1 && num_negative==1 && point[3]<point[1])//喜水土，偏土，有抗拒
  { bookrand = Math.ceil(Math.random(0,1)*2)//3
    
    if (bookrand == 1){
    fourstarbook = "斯通纳", //处女85% 巨蟹15%（禁 射手 水瓶）
    fourstarbookcontent="他有过一份憧憬，一直锁在内心某个地方的憧憬，就像一个见不得人的秘密，这个憧憬表面上是一个地方，其实就是他自己。",
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E5%9C%9F.png?sign=871a15b4e4abe3276aaf9bcb9fdbdb31&t=1677249623"

    // wx.cloud.callFunction({
    //   name: "queryresultbook",
    //   data:{bookname: "斯通纳"}
    // }).then(res=>{
    //   console.log(res.result.data)
    //   this.setData({
    //     fourstarbook: res.result.data[0].bookname,
    //     fourbookcontent: res.result.data[0].picture,
    //     fourstarintro: res.result.data[0].introduce,
    //     bookpic: res.result.data[0].bookpic
    //   })
    // })
    }

    if (bookrand == 2){//3
    fourstarbook = "细雪",  // 金牛50% 双鱼30% 巨蟹20%（禁 射手 狮子）
    fourstarbookcontent="他有过一份憧憬，一直锁在内心某个地方的憧憬，就像一个见不得人的秘密，这个憧憬表面上是一个地方，其实就是他自己。",
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E5%9C%9F.png?sign=871a15b4e4abe3276aaf9bcb9fdbdb31&t=1677249623"

    // wx.cloud.callFunction({
    //   name: "queryresultbook",
    //   data:{bookname: "细雪"}
    // }).then(res=>{
    //   console.log(res.result.data)
    //   this.setData({
    //     fourstarbook: res.result.data[0].bookname,
    //     fourbookcontent: res.result.data[0].picture,
    //     fourstarintro: res.result.data[0].introduce,
    //     bookpic: res.result.data[0].bookpic1
    //   })
    // })
    }
  }

  if (point[3]>0 && point[1]>0 && num_zero == 2 && point[3]<point[1])//喜水土，偏土，无抗拒
  { bookrand = Math.ceil(Math.random(0,1)*1)//3
    
    if (bookrand == 1){
      fourstarbook = "西方的智慧", // 处55% 蟹45% 
      fourstarbookcontent="就像一个人不可能设想一条没有下坡路的上坡路一样，我们也不可能在不理解恶的情况下去理解善的概念。",
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E5%9C%9F.png?sign=871a15b4e4abe3276aaf9bcb9fdbdb31&t=1677249623"

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "西方的智慧"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }
  }

  if (point[1]>0 && point[3]>0 && num_zero == 2 && point[1]==point[3])//土水平均，无抗拒
  { bookrand = Math.ceil(Math.random(0,1)* 2) // X

    if (bookrand == 1) {
      fourstarbook = "西方的智慧", 
      fourstarbookcontent="就像一个人不可能设想一条没有下坡路的上坡路一样，我们也不可能在不理解恶的情况下去理解善的概念。", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E5%9C%9F.png?sign=871a15b4e4abe3276aaf9bcb9fdbdb31&t=1677249623"

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "西方的智慧"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }

    if (bookrand == 2) {
      fourstarbook = "骆驼祥子", 
      fourstarbookcontent="人间的真话本来不多，一个女子的脸红胜过一大片话。", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359"
      
      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "骆驼祥子"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }
    
  }

  if (point[1]>0 && point[2]>0 && num_zero == 1 && num_negative == 1 && point[1]== point[2])//土水平均，有抗拒
  { bookrand = Math.ceil(Math.random(0,1)* 2),
    elementrand = Math.ceil(Math.random(0,1)*2)

    if (bookrand == 1){
      fourstarbook = "人子", 
      fourstarbookcontent="莫非这就是乌托邦的真谛？浪子归家，家不在的乌托邦，那些渴望回到家乡的人或被剥夺土地、被驱逐、被隔离的流放者的乌托邦。", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359"//[平均时的bookpic怎么出现？]
      
      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "人子"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }

    if (bookrand == 2 && elementrand == 1){//土
      fourstarbook = "细雪", 
      fourstarbookcontent="悲痛固然悲痛，不过那是超越个人关系、惋惜美好事物离开尘世的一种悲痛，是一种伴有音乐妙味的悲痛。",
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E5%9C%9F.png?sign=871a15b4e4abe3276aaf9bcb9fdbdb31&t=1677249623"

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "细雪"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic1
      //   })
      // })
    }

    if (bookrand == 2 && elementrand == 2){//水
      fourstarbook = "细雪", 
      fourstarbookcontent="悲痛固然悲痛，不过那是超越个人关系、惋惜美好事物离开尘世的一种悲痛，是一种伴有音乐妙味的悲痛。",
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359"

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "细雪"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic2
      //   })
      // })
    }
  }

  // 双元素情况  case: 水风
  if (point[3]>0 && point[2]>0 && num_zero == 2 && point[3]>point[2])//喜水风，偏水，无抗拒
  { bookrand = Math.ceil(Math.random(0,1)*4)

    if (bookrand == 1){
      fourstarbook = "园圃之乐", // 蟹65% 双35%
      fourstarbookcontent="一棵树说：我的力量是信念我深信上帝在我心中，出于这样的信念我生活着。", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359"
      
      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "园圃之乐"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }

    if (bookrand == 2){
      fourstarbook = "头上的星空和心中的道德法则",  // 鱼60% 瓶40%  前世今生：生命轮回的启示 // 天蝎80% 天秤20%
      fourstarbookcontent="头上的星空和心中的道德法则简介", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359"

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "头上的星空和心中的道德法则"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }

    if (bookrand == 3){
      fourstarbook = "大唐西域记",  // 蝎50% 秤50%
      fourstarbookcontent="幼日王母亲说：“国家兴随时变化，存在灭亡各有运数。若对万物荣辱等同视之，得失就会记；若被荣辱左右你心，则毁誉相继产生。", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359"
      
      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "大唐西域记"}//在深渊里仰望星空: 魏晋名士的卑微与骄傲
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic2
      //   })
      // })
    }

    if (bookrand == 4){
      fourstarbook = "骑驴找马——让子弹飞",  // 蝎50% 秤50%
      fourstarbookcontent="真正的革命是你真正能够按人的精神世界去表达我们精神上的感受，那个时候恐怕是真正能追上人的需求了。", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359"
      
      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "骑驴找马——让子弹飞"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic2
      //   })
      // })
    }

  }

  if (point[3]>0 && point[2]>0 && num_zero == 1 && num_negative == 1 && point[3]>point[2])//喜水风，偏水，有抗拒
  { bookrand = Math.ceil(Math.random(0,1)*2)
    
    if (bookrand == 1){
      fourstarbook = "叫魂: 1768年中国妖术大恐慌", // 巨蟹55% 双子45%（禁 水瓶 摩羯）
      fourstarbookcontent = "毫不奇怪，冤冤相报（这是“受困扰社会”中最为普遍的社会进攻方式）仍然是中国社会生活的一个显著特点。",
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359"// 图片地址
      
      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "叫魂: 1768年中国妖术大恐慌"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }

    if (bookrand == 2){
      fourstarbook = "东京贫困女子", // 天蝎60% 天秤40%（禁 双子 金牛）
      fourstarbookcontent="贫困会造就贫困，苦难会跨越世代持续传递，如果逃不出来，甚至会让人看见死亡。", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359"
      
      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "东京贫困女子"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }
    
  }

  // if (point[3]>0 && point[2]>0 && num_zero == 1 && num_negative==1 && point[3]<point[2])//喜水风，偏风，有抗拒
  // { 

  // }

  if (point[3]>0 && point[2]>0 && num_positive == 2 && point[3]<point[2])//喜水风，偏风，有无抗拒
  { bookrand = Math.ceil(Math.random(0,1)*2)
    
    if (bookrand==1){ //bookrang
      fourstarbook = "大唐西域记", // 蝎50% 秤50%
      fourstarbookcontent="幼日王母亲说：“国家兴随时变化，存在灭亡各有运数。若对万物荣辱等同视之，得失就会记；若被荣辱左右你心，则毁誉相继产生。", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E9%A3%8E.png?sign=ba21545bbe8019993417ec7da82ddc6d&t=1677250780"
      
      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "大唐西域记"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic1
      //   })
      // })
    }

    if (bookrand==2){
      fourstarbook = "骑驴找马——让子弹飞", // 蝎50% 秤50%
      fourstarbookcontent="真正的革命是你真正能够按人的精神世界去表达我们精神上的感受，那个时候恐怕是真正能追上人的需求了。", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E9%A3%8E.png?sign=ba21545bbe8019993417ec7da82ddc6d&t=1677250780"
      
      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "骑驴找马——让子弹飞"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic1
      //   })
      // })
    }
  }

  if (point[3]>0 && point[2]>0 && num_zero == 2 && point[3]==point[2])//喜水风，平均，无抗拒 【前世今生这本书要不要放入？不要。】
  { bookrand = Math.ceil(Math.random(0,1)*3),//2
    elementrand = Math.ceil(Math.random(0,1)*2)

    if (bookrand == 1){
      fourstarbook = "园圃之乐", //
      fourstarbookcontent="一棵树说：我的力量是信念我深信上帝在我心中，出于这样的信念我生活着。", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359"
    
      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "园圃之乐"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }

    if (bookrand == 2 && elementrand == 1){//风
      fourstarbook = "大唐西域记", //
      fourstarbookcontent="幼日王母亲说：“国家兴随时变化，存在灭亡各有运数。若对万物荣辱等同视之，得失就会记；若被荣辱左右你心，则毁誉相继产生。", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E9%A3%8E.png?sign=ba21545bbe8019993417ec7da82ddc6d&t=1677250780"
      
      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "大唐西域记"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic1
      //   })
      // })
    }

    if (bookrand == 2 && elementrand == 2){//水
      fourstarbook = "大唐西域记", //
      fourstarbookcontent="幼日王母亲说：“国家兴随时变化，存在灭亡各有运数。若对万物荣辱等同视之，得失就会记；若被荣辱左右你心，则毁誉相继产生。", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359"
      
      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "大唐西域记"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic2
      //   })
      // })
    }
    

    if (bookrand == 3 && elementrand == 1){//风
      fourstarbook = "骑驴找马——让子弹飞", //
      fourstarbookcontent="真正的革命是你真正能够按人的精神世界去表达我们精神上的感受，那个时候恐怕是真正能追上人的需求了。", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E9%A3%8E.png?sign=ba21545bbe8019993417ec7da82ddc6d&t=1677250780"
    
      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "骑驴找马——让子弹飞"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic1
      //   })
      // })
    }

    if (bookrand == 3 && elementrand == 2){//水
      fourstarbook = "骑驴找马——让子弹飞", //
      fourstarbookcontent="真正的革命是你真正能够按人的精神世界去表达我们精神上的感受，那个时候恐怕是真正能追上人的需求了。", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359"
      
      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "骑驴找马——让子弹飞"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic2
      //   })
      // })
    }
    
  }

  if (point[3]>0 && point[2]>0 && num_negative == 1 && num_zero == 1 && point[3]==point[2])//喜水风，平均，有抗拒
  { bookrand = Math.ceil(Math.random(0,1)*2)
    
    if (bookrand == 1){
      fourstarbook = "叫魂: 1768年中国妖术大恐慌", //
      fourstarbookcontent="毫不奇怪，冤冤相报（这是“受困扰社会”中最为普遍的社会进攻方式）仍然是中国社会生活的一个显著特点。", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359"
    
      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "叫魂: 1768年中国妖术大恐慌"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }

    if (bookrand == 2){
      fourstarbook = "东京贫困女子", //
      fourstarbookcontent="贫困会造就贫困，苦难会跨越世代持续传递，如果逃不出来，甚至会让人看见死亡。", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359"
      
      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "东京贫困女子"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }
  }


  // 三类元素
  if (point[0]>0 && point[1]>0 && point[2]>0 && num_zero == 1)//喜火-土-风
  { bookrand = Math.ceil(Math.random(0,1)*3)

    if (bookrand==1){
      fourstarbook = "人类群星闪耀时", //"喜火-土-风"
      fourstarbookcontent="人生中最大的幸事，莫过于在富于创造力的壮年发现了自己的使命。", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E7%81%AB.png?sign=378ae551248b2e6c2af7c0dcb108104e&t=1674821896" //待定 火

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "人类群星闪耀时"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }

    if (bookrand==2){
      fourstarbook = "雕刻时光", //"喜火-土-风"
      fourstarbookcontent="电影创作工作的实质是什么？一定程度上可以界定为雕刻时光。", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E7%81%AB.png?sign=378ae551248b2e6c2af7c0dcb108104e&t=1674821896" //待定 火

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "雕刻时光"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }

    if (bookrand == 3){
      fourstarbook = "白云之道", //"喜火-土-风"
      fourstarbookcontent="白云之道简介", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E7%81%AB.png?sign=378ae551248b2e6c2af7c0dcb108104e&t=1674821896"

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "白云之道"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }
    
  }

  if (point[0]>0 && point[1]>0 && point[3]>0 && num_zero == 1)//喜火-土-水
  { bookrand = Math.ceil(Math.random(0,1)*4)
    
    if (bookrand == 1){
      fourstarbook = "吃的美德: 餐桌上的哲学思考",//吃的美德-餐桌上的哲学思考
      fourstarbookcontent="美德要求我们不做味觉欲望的奴隶。被自己胃口控制的人，永远不可能成为自己的主人。",  
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E7%81%AB.png?sign=378ae551248b2e6c2af7c0dcb108104e&t=1674821896"

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "吃的美德: 餐桌上的哲学思考"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }
    
    if (bookrand == 2){
      fourstarbook = "艺术中的黄金、珠宝和宝石",
      fourstarbookcontent="红宝石在希腊语中被称作“燃烧的碳”，这种精小与稀有的宝石，因其外表和特征常常和火联系在一起。",  
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E7%81%AB.png?sign=378ae551248b2e6c2af7c0dcb108104e&t=1674821896"
      
      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "艺术中的黄金、珠宝和宝石"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }

    if (bookrand == 3){
      fourstarbook = "神的食物", 
      fourstarbookcontent="完全没有想象力就是野蛮；低等的想象力只是肉欲和怯懦；而高尚的想象力则如同上帝重又在地球上行走", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E7%81%AB.png?sign=378ae551248b2e6c2af7c0dcb108104e&t=1674821896"
      
      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "神的食物"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }

    if (bookrand == 4){
      fourstarbook = "偶然的创造",// 摩羯50% 巨蟹 30% 射手20%
      fourstarbookcontent="偶然的创造简介",  
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E5%9C%9F.png?sign=871a15b4e4abe3276aaf9bcb9fdbdb31&t=1677249623" //土

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "偶然的创造"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }  
  }

  if (point[0]>0 && point[2]>0 && point[3]>0 && num_zero == 1)//喜火-风-水  土
  { bookrand = Math.ceil(Math.random(0,1)*4)
    elementrand = Math.ceil(Math.random(0,1)*2)

    if (bookrand == 1){
      fourstarbook = "西方的没落", // "喜火-风-水"
      fourstarbookcontent="真正的信仰是彻底的沉默无言的。", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E7%81%AB.png?sign=378ae551248b2e6c2af7c0dcb108104e&t=1674821896" // 待定 火

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "西方的没落"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }

    if (bookrand == 2 && elementrand == 1){ //火
      fourstarbook = "纳尼亚传奇", //"喜火-风-水"
      fourstarbookcontent="如果你整夜没睡，哭得再也哭不出眼泪——你就知道到头来，心境就会有一种平静。你觉得似乎再也不会出什么事了", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E7%81%AB.png?sign=378ae551248b2e6c2af7c0dcb108104e&t=1674821896" // 火

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "纳尼亚传奇"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic1
      //   })
      // })
    }
    
    if (bookrand == 2 && elementrand == 2){//水
      fourstarbook = "纳尼亚传奇", //"喜火-风-水"
      fourstarbookcontent="纳尼亚传奇简介", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359" // 水

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "纳尼亚传奇"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic2
      //   })
      // })
    }

    if (bookrand == 3 && elementrand == 1){
      fourstarbook = "所罗门王的指环", //"喜火-风-水"
      fourstarbookcontent="所罗门王的指环介绍", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E7%81%AB.png?sign=378ae551248b2e6c2af7c0dcb108104e&t=1674821896" // 火

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "所罗门王的指环"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic1
      //   })
      // })
    }

    if (bookrand == 3 && elementrand == 2){
      fourstarbook = "所罗门王的指环", //"喜火-风-水"
      fourstarbookcontent="所罗门王的指环介绍", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359" // 水

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "所罗门王的指环"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic2
      //   })
      // })
    }

    if (bookrand == 4){
      fourstarbook = "万物的签名", // "喜火-风-水" 巨蟹40% 射手30% 天秤30%
      fourstarbookcontent="万物的签名介绍", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359" // 水

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "万物的签名"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }
  }

  if (point[1]>0 && point[2]>0 && point[3]>0 && num_zero == 1)//喜土-风-水
  { bookrand = Math.ceil(Math.random(0,1)*5)
    elementrand = Math.ceil(Math.random(0,1)*2)
    
    if (bookrand == 1){
      fourstarbook = "金花的秘密", //"喜土-风-水"
      fourstarbookcontent="只要我们还有所牵挂，就做不了自己的主，而只要做不了自己的主，就意味着还有某种比自我更强大的东西。", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359" //水

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "金花的秘密"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }

    if (bookrand == 2){
      fourstarbook = "心流", //"喜土-风-水"
      fourstarbookcontent = "体验过心流的人都知道，那份深沉的快乐是严格的自律、集中注意力换来的。",
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359" //待定 水

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "心流"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }
    
    if (bookrand == 3){
      fourstarbook = "重力小丑", //"喜土-风-水"
      fourstarbookcontent="“他作出决定，紧张期待，慈爱迎接，张开双臂欢迎了春的降生。一直站在母亲的产床旁，第一个轻蹭刚出生的春的小脸，那个人当然也是父亲。”", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359" //待定 水

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "重力小丑"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }
    
    if (bookrand == 4 && element == 1){
      fourstarbook = "余命十年", //"喜土-风-水" 牛40% 蟹40% 双20%
      fourstarbookcontent="余命十年简介", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E5%9C%9F.png?sign=871a15b4e4abe3276aaf9bcb9fdbdb31&t=1677249623" //土

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "余命十年"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic1
      //   })
      // }) 
    }

    if (bookrand == 4 && element == 2){
      fourstarbook = "余命十年", //"喜土-风-水"
      fourstarbookcontent="余命十年简介", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359" //水

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "余命十年"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic2
      //   })
      // })
    }

    if (bookrand == 5){
      fourstarbook = "北海鲸梦",//巨蟹60% 双子30% 金牛10%
      fourstarbookcontent = "北海鲸梦简介",
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=0ade31165e9664d87fc46bef35620d70&t=1677251359"

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "北海鲸梦"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }

  }


  // 无明显喜好
  if (num_zero == 4 || (num_zero == 3 && num_negative == 1))//无倾向 zeros
  { bookrand == Math.ceil(Math.random(0,1)*3)
    //bookrand == 2
    
    if (bookrand == 1){
      fourstarbook = "伊甸园",
      fourstarbookcontent="为什么我们不得不按照所有其他人的准则行事？我们就是我们嘛。",  
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B7%B7%E5%90%88.png?sign=568d9599ec7e40c896f04cb07caaca9c&t=1677253681" // 混合书图

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "伊甸园"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }

    if (bookrand == 2){
      fourstarbook = "无法触碰的爱", 
      fourstarbookcontent="在这里，人需要为最伟大的战役而战：从入侵意识的肿瘤中保存自己领地的战争。", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B7%B7%E5%90%88.png?sign=568d9599ec7e40c896f04cb07caaca9c&t=1677253681"

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "无法触碰的爱"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }

    if (bookrand == 3){
      fourstarbook: "外婆的道歉信",
      fourstarbookcontent="对外婆来说，任何事情都不是非黑即白。故事既可以是完全真实的，同时也可以是彻底虚构的。", 
      bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B7%B7%E5%90%88.png?sign=568d9599ec7e40c896f04cb07caaca9c&t=1677253681"

      // wx.cloud.callFunction({
      //   name: "queryresultbook",
      //   data:{bookname: "外婆的道歉信"}
      // }).then(res=>{
      //   console.log(res.result.data)
      //   this.setData({
      //     fourstarbook: res.result.data[0].bookname,
      //     fourbookcontent: res.result.data[0].picture,
      //     fourstarintro: res.result.data[0].introduce,
      //     bookpic: res.result.data[0].bookpic
      //   })
      // })
    }
  }



  return {
    // event,
    fourstarbook,
    fourstarbookcontent,
    bookpic
    // openid: wxContext.OPENID,
    // appid: wxContext.APPID,
    // unionid: wxContext.UNIONID,
  }
}