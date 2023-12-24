// index.js
// 获取应用实例
const app = getApp()
var myGolbalFunction = require('../../utils/globalFunction.js')
const db = wx.cloud.database();
const _ = db.command;

var whichelement = 0
var whichstar = 0
var whichstar2 = 0
var backgroundcard = Math.ceil(Math.random(0,1)*6)
var windowWidth = wx.getSystemInfoSync().windowWidth
var windowHeight = wx.getSystemInfoSync().windowHeight

var beginnum = 1
var point = [0,0,0,0]
var authorelement = 0
var fireauths = Math.ceil(Math.random(0,1)*5) 
// var fireauths = 2
var earthauths = Math.ceil(Math.random(0,1)*6)
var windauths = Math.ceil(Math.random(0,1)*7) 
var waterauths = Math.ceil(Math.random(0,1)*7) 
var firebooks = Math.ceil(Math.random(0,1)*7)
// var firebooks = 7
var earthbooks = Math.ceil(Math.random(0,1)*7)
// var earthbooks = 1
var windbooks = Math.ceil(Math.random(0,1)*7)
// var windbooks = 2
var waterbooks  = Math.ceil(Math.random(0,1)*7)
// var waterbooks = 1
var result_bookname = ""

var bookrand = 0
var elementrand = 0
var introrand = 0
var model = ""
var mobile_type = ""
//var text = "这是一行用来测试文字换行的文字，尽可能让它长一点，毕竟我们需要它换行。"
var x = 0
var y = 0
var lw = 20
var lh = 20
var line1 = 0
var loaded=false

var fivestarbooks = "五星正缘书"
var fivestarbookscontent = ""
var fivestarintro = "这里是五星书籍的介绍，大约100字的样子。这里是五星书籍的介绍，大约100字的样子。这里是五星书籍的介绍，大约100字的样子。这里是五星书籍的介绍，大约100字的样子。这里是五星书籍的介绍，大约100字的样子。"
var fourstarbook = "四星正缘书"
var fourbookcontent = ""
var fourstarbookcontent = ""
var fourstarintro = "这里是四星书籍的介绍，大约100字的样子。这里是四星书籍的介绍，大约100字的样子。这里是四星书籍的介绍，大约100字的样子。这里是四星书籍的介绍，大约100字的样子。这里是四星书籍的介绍，大约100字的样子。"
var bookpic = "cloud://cloud1-2gx6xlsu0ca67a99.636c-cloud1-2gx6xlsu0ca67a99-1311762654/书道具-设计稿-混合.png"
var word = "你的X星正缘书"
var word2 = "某某某某书"
var word3 = "扫描二维码，关注KELP“心书”，"
var word4 = "寻找那本与你有机缘的书。"

var num_positive = 0
var num_zero = 0
var num_negative = 0

//var authoreleen
var checked1 = true
var checked2 = true
var checked3 = true
var checked4 = true
var checked5 = true
var checked6 = true
var checked7 = true
var checked8 = true
var checked9 = true //未用 已用
var checked10 = true //未用 已用
var checked11 = true//
var checked12 = true // 未用
var checked13 = 0 // 0是五星正缘书  1是四星正缘书
var checked14 = true
var checked15 = true


Page({
  data: {
    checked: false,
    number : '1',
    //size: '21px',
    color: 'white',
    bookwidth: '550rpx',
    //bookheight:'120rpx',
    authorwidth: "550rpx",
    firebookname:'小王子',
    earthbookname: "黄金时代",//.
    windbookname: "鲁迅全集",
    waterbookname:'心',
    fivestarbooks: "五星正缘书",
    fivestarbookscontent: "",
    fourstarbook: "四星正缘书",
    fourbookcontent:"",
    fourstarbookcontenct:"",
    bookpic:"cloud://cloud1-2gx6xlsu0ca67a99.636c-cloud1-2gx6xlsu0ca67a99-1311762654/书道具-设计稿-混合.png",
    interval:"",
    time: 0,
    // anniu: ["《水象之书》"],
    fontFamily: 'Bitstream Vera Serif Bold',
    isRuleTrue: false,
    i:'',
    hiddenName: false,
    windowHeight: wx.getSystemInfoSync().windowHeight
  },

  // 进度条系列-开始
  startBtn: function(){
    var that= this;
    that.init(that);
    var time = that.data.time;
    console.log("倒计时开始")
    var interval = setInterval(function(){
      time = time + 10;
      that.setData({
        time: time
      })
      if (time == 100)
      that.stopBtn();
    },200)

    that.setData({
      interval: interval
    })
  },

  stopBtn:function(){
    var that = this;
    that.clearBtnInterval(that)
    console.log('停止计时触发')
  },

  init: function (that) {
    var time = 0;
    var interval = ""
    that.clearBtnInterval(that)
    that.setData({
      time: time,
      interval: interval,
    })
  },

  clearBtnInterval:function(that){
    var interval = that.data.interval;
    clearInterval(interval)
    console.log('清除计时触发')
  },

  // 查询数据并显示
  // queryData:function(){
    // let i =[];
    // wx.cloud.callFunction({
    //   name: "connect_fire",
    // }).then(res=>{
    //   console.log(res.result.list[0].authorname)
    //   this.setData({
    //     i: res.result.list[0].authorname
    //   })
    // })

  //   db.collection("books").get().then(res=>{
  //     console.log(res);
  //     this.setData({
  //       i:res
  //     })
  //   })
  // },

   //const db = wx.cloud.database({});
   //db.collection("author").get().then(res=>{
   //  console.log(res);
   //  this.setData({i: res.data[1].name})
   // })
  //},


  // queryData:function(){ //查询元素
  //  const db = wx.cloud.database();
  //  db.collection('books').get().then(res=>{
  //    console.log(res);
  //  })
   //console.log(res.data)
  // },
    //const db = wx.cloud.database({});
    //const cont = db.collection('author');
    //cont.doc("4f1d421c63d0966100c86d8325e861a9").get()

 

  movebg: function(){
    var windowWidth = wx.getSystemInfoSync().windowWidth
    var windowHeight = wx.getSystemInfoSync().windowHeight
    var physicalWidth = wx.getSystemInfoSync().screenWidth
    var physicalHeight = wx.getSystemInfoSync().screenHeight
    console.log(windowWidth)
    console.log(windowHeight)
    console.log(physicalWidth)
    console.log(physicalHeight)
    if (checked9) {
      beginnum = 1
      checked14 = true

    ///小人进出
    // var ani_tps_c = wx.createAnimation({
    //   delay: 300,
    //   duration: 600
    // })
    // ani_tps_c.opacity(0.0).step()

    setTimeout(()=>{
      this.animate("#ani_person_1",[
        {opacity:1.0},
        {opacity:0.0}],600,)},300)

    
    // var ani_tps = wx.createAnimation({
    //   delay: 4700,
    //   duration:600,
    // })
    // ani_tps.opacity(1.0).step()

    setTimeout(()=>{
      this.animate("#ani_person_2",[
        {opacity:0.0},
        {opacity:1.0}],600,)},3600)

    
    // var ani_t0 = wx.createAnimation({
    //   delay: 5800, // 5000 4800 4600 5000 4600 4100
    //   duration: 100
    // })
    // ani_t0.translate(5,5).step() //无translate
    // //ani_t0.opacity(0.0).translate(5,5).step() 


    // var ani_to1 = wx.createAnimation({
    // delay: 300,
    // duration:1200});
    // ani_to1.opacity(0.0).translate(-10,0).step()
    
    // var ani_to2 = wx.createAnimation({
    //   delay: 700, //1000
    //   duration: 1200});
    // ani_to2.opacity(0.0).step()
    // //ani_to2.opacity(0.0).translate(0,10).step()

    setTimeout(()=>{
      this.animate("#ani_title",[
        {opacity:1.0},
        {opacity:0.0}],1200,)},700)

    setTimeout(()=>{
      this.animate("#ani_title_2",[
        {opacity:1.0},
        {opacity:0.0}],1200,)},700)


    // var ani_to3 = wx.createAnimation({
    //   delay: 300,
    //   duration: 1200});
    //   ani_to3.opacity(0.0).translate(10,0).step()

    // var ani_to4 = wx.createAnimation({
    //   delay: 300,
    //   duration: 1200});
    // ani_to4.opacity(0.0).translate(0, 5).step()
    // ani_to4.opacity(0.0).translate(0,350*2*windowWidth/750).step() // 190*2rpx 290*2rpx

    setTimeout(()=>{
      this.animate("#ani_start",[
        {translateY:0, opacity:1.0}, 
        {translateY:5, opacity:0.0},
      ], 300)}, 1200)

    setTimeout(()=>{
      this.animate("#ani_start",[
        {translateY:5}, 
        {translateY:350*2*windowWidth/750},
      ], 300)}, 1200)


    // if (windowHeight>=800){
    //   setTimeout(()=>{
    //   this.animate("#bgimg",[{
    //   translateX:-1500*windowWidth/750,translateY:-2750*windowWidth/750},
    //   {translateX:-1650*windowWidth/750, translateY:-1560*windowWidth/750}],2400,)},1800)
    // }

    if (mobile_type == 'iPhone'){
      if (windowHeight>=800){
        setTimeout(()=>{
        this.animate("#bgimg",[{
        translateX:-1500*windowWidth/750,translateY:-2750*windowWidth/750},
        {translateX:-1630*windowWidth/750, translateY:-1560*windowWidth/750}],2400,)},1800)
      }
  
      if (windowHeight>=700 && windowHeight<800){
        setTimeout(()=>{
        this.animate("#bgimg",[{
          translateX:-1475*windowWidth/750,translateY:-2710*windowWidth/750},
          {translateX:-1585*windowWidth/750, translateY:-1540*windowWidth/750}],2400,)},1800)
      }//  translateX:-1475*windowWidth/750,translateY:-2710*windowWidth/750},
  
      if (windowHeight>=600 && windowHeight<700){
        setTimeout(()=>{
        this.animate("#bgimg",[{
          translateX:-1180*windowWidth/750,translateY:-2250*windowWidth/750},
          {translateX:-1280*windowWidth/750, translateY:-1290*windowWidth/750}],2400,)},1800)
      }//translateX:-1180*windowWidth/750,translateY:-2250*windowWidth/750},
  
      if (windowHeight<600){
        setTimeout(()=>{
        this.animate("#bgimg",[
          {translateX:-1150*windowWidth/750,translateY:-2210*windowWidth/750},
          {translateX:-1250*windowWidth/750, translateY:-1260*windowWidth/750}],2400,)},1800)
      } 
    }

    if (mobile_type != 'iPhone'){
      console.log('进入非iphone范围')
      if (windowHeight>=800){
        setTimeout(()=>{
        this.animate("#bgimg",[{
        translateX:-1500*windowWidth/750,translateY:-2750*windowWidth/750},
        {translateX:-7000*windowWidth/750, translateY:-6250*windowWidth/750}],2400,)},1800)
      }
  
      if (windowHeight>=700 && windowHeight<800){
        setTimeout(()=>{
        this.animate("#bgimg",[{
          translateX:-1475*windowWidth/750,translateY:-2710*windowWidth/750},
          {translateX:-1665*windowWidth/750, translateY:-1620*windowWidth/750}],2400,)},1800)
      }//  translateX:-1475*windowWidth/750,translateY:-2710*windowWidth/750},
  
      if (windowHeight>=600 && windowHeight<700){
        setTimeout(()=>{
        this.animate("#bgimg",[{
          translateX:-1180*windowWidth/750,translateY:-2250*windowWidth/750},
          {translateX:-1280*windowWidth/750, translateY:-1290*windowWidth/750}],2400,)},1800)
      }//translateX:-1180*windowWidth/750,translateY:-2250*windowWidth/750},
  
      if (windowHeight<600){
        setTimeout(()=>{
        this.animate("#bgimg",[
          {translateX:-1150*windowWidth/750,translateY:-2210*windowWidth/750},
          {translateX:-1250*windowWidth/750, translateY:-1260*windowWidth/750}],2400,)},1800)
      } 
    }
   
    // if (windowHeight>=800){
    //   setTimeout(()=>{
    //   this.animate("#bgimg_blur1",[{
    //   translateX:-1500*windowWidth/750,translateY:-2750*windowWidth/750,opacity:0.0},
    //   {translateX:-1650*windowWidth/750, translateY:-1560*windowWidth/750,opacity:1.0}],10,)},3600)
    // }

    if (mobile_type == 'iPhone'){
      if (windowHeight>=800){
        setTimeout(()=>{
        this.animate("#bgimg_blur1",[{
        translateX:-1500*windowWidth/750,translateY:-2750*windowWidth/750,opacity:0.0},
        {translateX:-1630*windowWidth/750, translateY:-1560*windowWidth/750,opacity:1.0}],10,)},3600)
      }
  
      if (windowHeight>=700 && windowHeight<800){
        setTimeout(()=>{
        this.animate("#bgimg_blur1",[
          {translateX:-1475*windowWidth/750,translateY:-2710*windowWidth/750,opacity:0.0},
          {translateX:-1585*windowWidth/750, translateY:-1540*windowWidth/750,opacity:1.0}],10,)},3600)
      }
  
      if (windowHeight>=600 && windowHeight<700){
        setTimeout(()=>{
        this.animate("#bgimg_blur1",[{
          translateX:-1180*windowWidth/750,translateY:-2250*windowWidth/750,opacity:0.0},
          {translateX:-1280*windowWidth/750, translateY:-1290*windowWidth/750,opacity:1.0}],10,)},3600)
      }
  
      if (windowHeight<600){
        setTimeout(()=>{
        this.animate("#bgimg_blur1",[
          {translateX:-1150*windowWidth/750,translateY:-2210*windowWidth/750,opacity:0.0},
          {translateX:-1250*windowWidth/750, translateY:-1260*windowWidth/750,opacity:1.0},],10,)},3600)//10
      }
    }

    if (mobile_type!='iPhone'){
      if (windowHeight>=800){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[{
      translateX:-1500*windowWidth/750,translateY:-2750*windowWidth/750,opacity:0.0},
      {translateX:-1630*windowWidth/750, translateY:-1560*windowWidth/750,opacity:1.0}],10,)},3600)
    }
    
    if (windowHeight>=700 && windowHeight<800){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[
        {translateX:-1475*windowWidth/750,translateY:-2710*windowWidth/750,opacity:0.0},
        {translateX:-1585*windowWidth/750, translateY:-1540*windowWidth/750,opacity:1.0}],10,)},3600)
    }

    if (windowHeight>=600 && windowHeight<700){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[{
        translateX:-1180*windowWidth/750,translateY:-2250*windowWidth/750,opacity:0.0},
        {translateX:-1280*windowWidth/750, translateY:-1290*windowWidth/750,opacity:1.0}],10,)},3600)
    }

    if (windowHeight<600){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[
        {translateX:-1150*windowWidth/750,translateY:-2210*windowWidth/750,opacity:0.0},
        {translateX:-1250*windowWidth/750, translateY:-1260*windowWidth/750,opacity:1.0},],10,)},3600)//10
    }
    }


    //setTimeout(()=>{
    //  this.animate("#bgimg_blur",[
    //    {opacity:0.0},{opacity:1.0}],10,)},5800)
    

    
    //{-1050,-520}, translate1050,-520) {-1150,-620}{-1200,-620}/ {-1230,-620}

    // var ani_tp1 = wx.createAnimation({
    //   delay: 5800, //5100 5500 5800 5500 5000 3500 3000
    //   duration: 1200}); //1500
    // ani_tp1.opacity(1.0).step()//.translate(6,0)

    setTimeout(()=>{
      this.animate("#question1",[
        {opacity: 0.0}, 
        {opacity: 1.0},
      ], 1200)}, 5800)


    // var ani_tqa2 = wx.createAnimation({
    //   delay: 5800, //6100 6500 6900 5500 5000 3500 3000
    //   duration: 1200}); //2000
    // ani_tqa2.opacity(1.0).step()//.translate(-8,0)

    setTimeout(()=>{
      this.animate("#ani_question1_add1",[
        {opacity: 0.0}, 
        {opacity: 1.0},
      ], 1200)}, 5800)

    // var ani_tp3 = wx.createAnimation({
    //   delay: 3000, //4000 4200 3500 4000 3200 3000 2800 2500 2600 2300X4 1800X4
    //   duration: 1000}); //1200
    // ani_tp3.translate(780*windowWidth/750,0).step() //、400(px) /74 800rpx 750rpx
    // ani_tp3.opacity(1.0).step()


    setTimeout(()=>{
      this.animate("#firebook",[
        {translateX:0, opacity:0.0},
        {translateX:780*windowWidth/750, opacity:0.0},
        {translateX:780*windowWidth/750, opacity:1.0}
      ],1000,)},6500)
    
    
    
    // setTimeout(()=>{
    //   this.animate("#firebook",[
    //     {opacity:0.0},
    //     {opacity:1.0}],1000)},1000)


    // function yanshi1(){
    //   setTimeout(()=>{
    //     this.animate("#firebook",[
    //       {opacity:0.0},
    //       {opacity:1.0}],1000)},1500);
    // }

    // function yanshi1(){
    //   this.animate("#firebook",[
    //     {opacity:0.0},
    //     {opacity:1.0}],1000)};
    

    // function yanshi2(){
    //   setTimeout(()=>{
    //     this.animate("#firebook",[
    //       {opacity:0.0, translateX:0},
    //       {translateX:780*windowWidth/750, opacity:0.0}],1000,)},300); // 3000
    // }

      // function yanshi2(){
      //   this.animate("#firebook",[
      //     {opacity:0.0, translateX:0},
      //     {translateX:780*windowWidth/750, opacity:1.0}],1000); // 3000
      // }



    // async function async2() {
    //   return new Promise(resolve => {
    //     console.log('async2 start');
    //     setTimeout(()=>{
    //       this.animate("#firebook",[
    //         {translateX:0, opacity:0.0},
    //         {translateX:780*windowWidth/750, opacity:1.0}],1000,)},300);
    //   })
  //}

    // yanshi1();

    // setTimeout(()=>{
    //   this.animate("#firebook",[
    //     {opacity:0.0},
    //     {translateX:780*windowWidth/750, opacity:0.0}],1000,)},300); 

    // setTimeout(()=>{
    //   this.animate("#firebook",[
    //     {opacity:0.0},
    //     {opacity:1.0}],1000)},1500);



    // var ani_tp4 = wx.createAnimation({
    //   delay: 3000,
    //   duration: 1000});
    // ani_tp4.translate(780*windowWidth/750,0).step()//400 800rpx 
    // ani_tp4.opacity(1.0).step()

    setTimeout(()=>{
      this.animate("#earthbook",[
        {translateX:0, opacity:0.0},
        {translateX:780*windowWidth/750, opacity:0.0},
        {translateX:780*windowWidth/750, opacity:1.0}
      ],1000,)},6500)


    // setTimeout(()=>{
    //   this.animate("#earthbook",[
    //     {translateX:0},
    //     {translateX:780*windowWidth/750}],1000,)},3000)
    
    // setTimeout(()=>{
    //   this.animate("#earthbook",[
    //     {opacity:0.0},
    //     {opacity:1.0}],1000,)},3000)

    // var ani_tp5 = wx.createAnimation({
    //   delay: 3000,
    //   duration: 1000});
    // ani_tp5.translate(780*windowWidth/750,0).step()//400 800rpx
    // ani_tp5.opacity(1.0).step()

    setTimeout(()=>{
      this.animate("#windbook",[
        {translateX:0, opacity:0.0},
        {translateX:780*windowWidth/750, opacity:0.0},
        {translateX:780*windowWidth/750, opacity:1.0}
      ],1000,)},6500)


    // setTimeout(()=>{
    //   this.animate("#windbook",[
    //     {translateX:0},
    //     {translateX:780*windowWidth/750}],1000,)},3000)
    
    // setTimeout(()=>{
    //   this.animate("#windbook",[
    //     {opacity:0.0},
    //     {opacity:1.0}],1000,)},3000)

    // var ani_tp6 = wx.createAnimation({
    //   delay: 3000, //2800
    //   duration:1000});
    // ani_tp6.translate(780*windowWidth/750,0).step()//400 800rpx
    // ani_tp6.opacity(1.0).step()

    setTimeout(()=>{
      this.animate("#waterbook",[
        {translateX:0, opacity:0.0},
        {translateX:780*windowWidth/750, opacity:0.0},
        {translateX:780*windowWidth/750, opacity:1.0}
      ],1000,)},6500)


    // setTimeout(()=>{
    //   this.animate("#waterbook",[
    //     {translateX:0},
    //     {translateX:780*windowWidth/750}],1000,)},3000)
    
    // setTimeout(()=>{
    //   this.animate("#waterbook",[
    //     {opacity:1.0},
    //     {opacity:1.0}],1000,)},3000)

    // var ani_kelp = wx.createAnimation({
    //   delay: 500,
    //   duration: 1200,
    // })
    // ani_kelp.opacity(0.0).translate(0,0).step() //translate(-5,0)[等会儿要改回来]
    // ani_kelp.opacity(0.0).translate(0,350*2*windowWidth/750).step() //ani_to4 ani-

    setTimeout(()=>{
      this.animate("#ani_aboutKELP",[
        {translateX:0, opacity:1.0},
        {translateX:0, opacity:0.0},
        {translateX:350*2*windowWidth/750, opacity:0.0}
      ],800,)},1200)
    

    // this.setData({
      // ani_title: ani_to2.export(),
      //ani_title1: ani_to1.export(),
      //ani_title2: ani_to2.export(),
      //ani_title3: ani_to3.export(),
      // ani_start: ani_to4.export(),
      //ani_person_1: ani_tps_c.export(),
      //ani_person_2: ani_tps.export(),
      //ani_blur: ani_t0.export(),//)//e/s
      // ani_aboutKELP: ani_kelp.export(),

      //ani_movebk: ani_to5.export(),
      //ani_question1_part1: ani_tp1.export(),
      //ani_question1_part2: ani_tp2.export(),
      //ani_question1: ani_tp1.export(),
      //ani_question1_add1: ani_tqa2.export(),
      
      // ani_firebook: ani_tp3.export(),//、、
      // ani_earthbook: ani_tp4.export(),//
      // ani_windbook: ani_tp5.export(),//
      // ani_waterbook: ani_tp6.export(),//
    // })
    //、、this.setData({
      //beginnum: '2',
      //console.log(firebooks)

    if (firebooks == 0){
      firebooks = 1
    }

    console.log(firebooks)
    
    // 火之书
    wx.cloud.callFunction({
      //name: "connect_fire",
      name: "queryPopularBook",
      data:{
        ele: "火",
      },
    }).then(res=>{
      console.log(res.result.list[firebooks-1])
      this.setData({
        firebookpic:res.result.list[firebooks-1].picture,
        firebookname: res.result.list[firebooks-1].name,
        firebookauthor_na: res.result.list[firebooks-1].nationality,
        firebookauthor: res.result.list[firebooks-1].authorname,
        firebookcontent1: res.result.list[firebooks-1].introduce1,
        firebookcontent2: res.result.list[firebooks-1].introduce2,
        firebookcontent3: res.result.list[firebooks-1].introduce3
      })
    })

    //土之书
    if (earthbooks == 0){
      earthbooks = 1
    }
    // wx.cloud.callFunction({
    //   //name: "connect_earth",
    //   name: "queryPopularBook",
    //   data:{
    //     ele: "土",
    //   }
    // }).then(res=>{
    //   console.log(res.result.list[earthbooks-1])
    //   this.setData({
    //     earthbookname: res.result.list[earthbooks-1].name,
    //     earthbookauthor_na: res.result.list[earthbooks-1].nationality,
    //     earthbookauthor: res.result.list[earthbooks-1].authorname,
    //     earthbookcontent1: res.result.list[earthbooks-1].introduce1,
    //     earthbookcontent2: res.result.list[earthbooks-1].introduce2,
    //     earthbookcontent3: res.result.list[earthbooks-1].introduce3,

    //   })
    // })

    console.log(earthbooks)

    wx.cloud.callFunction({
      //name: "connect_earth",
      name: "queryPopularBook",
      data:{
        ele: "土",
      }
    }).then(res=>{
      console.log(res.result.list[earthbooks-1])
      this.setData({
        earthbookname: res.result.list[earthbooks-1].name,
        earthbookauthor_na: res.result.list[earthbooks-1].nationality,
        earthbookauthor: res.result.list[earthbooks-1].authorname,
        earthbookcontent1: res.result.list[earthbooks-1].introduce1,
        earthbookcontent2: res.result.list[earthbooks-1].introduce2,
        earthbookcontent3: res.result.list[earthbooks-1].introduce3,
      })
    })


    if (windbooks == 0){
      windbooks = 1
    }

    //风之书
    wx.cloud.callFunction({
      //name: "connect_wind",
      name: "queryPopularBook",
      data:{
        ele: "风",
      }
    }).then(res=>{
      console.log(res.result.list[0])
      this.setData({
        windbookname: res.result.list[windbooks-1].name,
        windbookauthor_na: res.result.list[windbooks-1].nationality,
        windbookauthor: res.result.list[windbooks-1].authorname,
        windbookcontent1: res.result.list[windbooks-1].introduce1,
        windbookcontent2: res.result.list[windbooks-1].introduce2,
        windbookcontent3: res.result.list[windbooks-1].introduce3,

      })
    })

    if (waterbooks == 0){
      waterbooks = 1
    }

    // 水之书
    wx.cloud.callFunction({
      name: "queryPopularBook",
      data:{
        ele: "水",
      }
    }).then(res=>{
      console.log(res.result.list)
      this.setData({
        waterbookname: res.result.list[waterbooks-1].name,
        waterbookauthor_na: res.result.list[waterbooks-1].nationality,
        waterbookauthor: res.result.list[windbooks-1].authorname,
        waterbookcontent1: res.result.list[windbooks-1].introduce1,
        waterbookcontent2: res.result.list[windbooks-1].introduce2,
        waterbookcontent3: res.result.list[windbooks-1].introduce3,
        //i: res.result.list[firebooks-1].authorname
      })
    })

    /*db.collection("books").get().then(res=>{
      console.log(res);
      this.setData({
        windbookauthor: res.data[waterbooks+1].author,
        windbookname: res.data[waterbooks+1].name,
        windbookcontent: res.data[waterbooks+1].introduce,
      })
    })*/

    wx.cloud.callFunction({
      name: "queryAuthor",
      data:{ele: "火"}
    }).then(res=>{
      console.log(res.result.data[fireauths-1].authorname)
      this.setData({
        fireauthors: res.result.data[fireauths-1].authorname,
        fireauthor_na: res.result.data[fireauths-1].nationality,
        fireauthorcontent: res.result.data[fireauths-1].picadd,
      })
    })

    wx.cloud.callFunction({
      name: "queryAuthor",
      data:{ele: "土"}
    }).then(res=>{
      console.log(res.result.data[earthauths-1].authorname)
      this.setData({
        earthauthors: res.result.data[earthauths-1].authorname,
        earthauthor_na: res.result.data[earthauths-1].nationality,
        earthauthorcontent: res.result.data[earthauths-1].picadd,
      })
    })

    //console.log(windauths)
    wx.cloud.callFunction({
      name: "queryAuthor",
      data:{ele: "风"}
    }).then(res=>{
      console.log(res.result.data[windauths-1].authorname)
      this.setData({
        windauthors: res.result.data[windauths-1].authorname,
        windauthor_na: res.result.data[windauths-1].nationality,
        windauthorcontent: res.result.data[windauths-1].picadd,
      })
    })

    wx.cloud.callFunction({
      name: "queryAuthor",
      data:{ele: "水"}
    }).then(res=>{
      console.log(res.result.data[waterauths-1].authorname)
      this.setData({
        waterauthors: res.result.data[waterauths-1].authorname,
        waterauthor_na: res.result.data[waterauths-1].nationality,
        waterauthorcontent: res.result.data[waterauths-1].picadd,
      })
    })


    // db.collection("author").where({
    //   element: "火"
    // }).get().then(res=>{
    //   console.log(res)
    //   this.setData({
    //     fireauthors: res.data[fireauths-1].authorname,
    //     fireauthorcontent: res.data[fireauths-1].picadd,
    //   })
    // })
   

    // db.collection("author").where({
    //   element: "土"
    // }).get().then(res=>{
    //   //console.log(res)
    //   this.setData({
    //     earthauthors: res.data[earthauths-1].authorname,
    //     earthauthorcontent: res.data[earthauths-1].picadd,
    //   })
    // })


    // db.collection("author").where({
    //   element: "风"
    // }).get().then(res=>{
    //   //console.log(res)
    //   this.setData({
    //     windauthors: res.data[windauths-1].authorname,
    //     windauthorcontent: res.data[windauths-1].picadd,
    //   })
    // })

  

    // db.collection("author").where({
    //   element: "水"
    // }).get().then(res=>{
    //   //console.log(res)
    //   this.setData({
    //     waterauthors: res.data[waterauths-1].authorname,
    //     waterauthorcontent: res.data[waterauths-1].picadd,
    //   })
    // })
  

      checked9 = false;
      checked12 = true;
    }
    
    },

  // 点击“火象之书”，显示书籍介绍。
  tapfirebook:function(){
    checked8 = true;
    if (checked6) {
    // var ani_ti1 = wx.createAnimation({
    //   delay: 250, //1000
    //   duration: 1200});
    //   //ani_ti1.opacity(1.0).step()
    // ani_ti1.opacity(0.0).translateX(860*windowWidth/750).step()
    // ani_ti1.opacity(1.0).step()

    setTimeout(()=>{
      this.animate("#introfirebook",[
        {translateX:0, opacity:0.0},
        {translateX:860*windowWidth/750, opacity:0.0},
        {translateX:860*windowWidth/750, opacity:1.0}
      ],1200,)},1250)
    

    // var ani_tp3_c = wx.createAnimation({
    //   delay: 500,
    //   duration: 600});
    // ani_tp3_c.opacity(0.0).translate(390*2*windowWidth/750, 0).step()
    // ani_tp3_c.opacity(0.0).translate(0,0).step()

    setTimeout(()=>{
      this.animate("#firebook",[
        {translateX:390*2*windowWidth/750, opacity:1.0},
        {translateX:390*2*windowWidth/750, opacity:0.0},
        {translateX:0, opacity:0.0}
      ],1200,)},250)

    
    // var ani_tp4_c = wx.createAnimation({
    //   delay: 500,
    //   duration: 600});
    // ani_tp4_c.opacity(0.0).translate(390*2*windowWidth/750, 0).step() //403 06 400*2rpx
    // ani_tp4_c.opacity(0.0).translate(0,0).step()

    setTimeout(()=>{
      this.animate("#earthbook",[
        {translateX:390*2*windowWidth/750, opacity:1.0},
        {translateX:390*2*windowWidth/750, opacity:0.0},
        {translateX:0, opacity:0.0}
      ],1200,)},250)
    
    // var ani_tp5_c = wx.createAnimation({
    //   delay: 500,
    //   duration: 600});
    // ani_tp5_c.opacity(0.0).translate(390*2*windowWidth/750, 0).step() //403 -6 400*2rpx
    // ani_tp5_c.opacity(0.0).translate(0,0).step()

    setTimeout(()=>{
      this.animate("#windbook",[
        {translateX:390*2*windowWidth/750, opacity:1.0},
        {translateX:390*2*windowWidth/750, opacity:0.0},
        {translateX:0, opacity:0.0}
      ],1200,)},250)
    
    // var ani_tp6_c = wx.createAnimation({
    //   delay: 500,
    //   duration: 600});
    // ani_tp6_c.opacity(0.0).translate(390*2*windowWidth/750, 0).step()// **397 6 400*2rpx
    // ani_tp6_c.opacity(0.0).translate(0,0).step()

    setTimeout(()=>{
      this.animate("#waterbook",[
        {translateX:390*2*windowWidth/750, opacity:1.0},
        {translateX:390*2*windowWidth/750, opacity:0.0},
        {translateX:0, opacity:0.0}
      ],1200,)},250)

    // var ani_tqa1_c = wx.createAnimation({
    //   delay: 500,
    //   duration:600,
    // })
    // ani_tqa1_c.opacity(0.0).step()

    setTimeout(()=>{
      this.animate("#ani_question1_add1",[
        {opacity:1.0},
        {opacity:0.0}],600,)},500)


    // var ani_tqa2 = wx.createAnimation({
    //   delay:1700,
    //   duration:1200,
    // })
    // ani_tqa2.opacity(1.0).step()

    setTimeout(()=>{
      this.animate("#ani_question1_add2",[
        {opacity:0.0},
        {opacity:1.0}],1000,)},1400)



    //、、ani_ti7与ani_ti8互换
    // var ani_ti8 = wx.createAnimation({
    //   delay: 1000, //900
    //   duration:800
    // }); 
    // ani_ti8.translateX(147*2*windowWidth/750).step()
    // ani_ti8.opacity(1.0).translateX(150*2*windowWidth/750).step()

    setTimeout(()=>{
      this.animate("#backtoconfirmbook",[
        {translateX:0*windowWidth/750, opacity:0.0},
        {translateX:147*2*windowWidth/750, opacity:0.0},
        {translateX:150*2*windowWidth/750, opacity:1.0}
      ],1200,)},1550)

    // var ani_ti7 = wx.createAnimation({
    //   delay: 1000,
    //   duration: 800
    // });
    // ani_ti7.translateX(-167*2*windowWidth/750).step()
    // ani_ti7.opacity(1.0).translateX(-170*2*windowWidth/750).step()

    setTimeout(()=>{
      this.animate("#confirmbook",[
        {translateX:0, opacity:0.0},
        {translateX:-167*2*windowWidth/750, opacity:0.0},
        {translateX:-170*2*windowWidth/750, opacity:1.0}
      ],1200,)},1550)
    
    // this.setData({
      // introfirebook: ani_ti1.export(),
      // ani_firebook: ani_tp3_c.export(),
      // ani_earthbook: ani_tp4_c.export(),
      // ani_windbook: ani_tp5_c.export(),
      // ani_waterbook: ani_tp6_c.export(),
      // ani_question1_add1: ani_tqa1_c.export(),
      // ani_question1_add2: ani_tqa2.export(),
    //   ani_confirm: ani_ti7.export(),
    //   ani_bocktoconfirm: ani_ti8.export(),
    // })

    // whichstar = Math.ceil(Math.random(0,1)*3)
    whichstar = 1
    whichelement = 1
    if (whichstar == 1)
    {this.setData({twelvestar: "白羊座"})}
    if (whichstar == 2)
    {this.setData({twelvestar: "狮子座"})}
    if (whichstar == 3)
    {  this.setData({twelvestar: "射手座"})
    }

    console.log(whichstar)
    checked6 = false;
    }
    
  },


  tapearthbook:function(){
    checked8 = true;
    if (checked6) {
    // var ani_ti2 = wx.createAnimation({
    //   delay: 150,
    //   duration:1200});
    //   ani_ti2.opacity(0.0).translateX(860*windowWidth/750).step()//-660
    //   ani_ti2.opacity(1.0).step()
    
    setTimeout(()=>{
      this.animate("#introearthbook",[
        {translateX:0, opacity:0.0},
        {translateX:860*windowWidth/750, opacity:0.0},
        {translateX:860*windowWidth/750, opacity:1.0}
      ],1200,)},1250)

    // var ani_tp3_c = wx.createAnimation({
    //   delay: 300,
    //   duration: 600});
    // ani_tp3_c.opacity(0.0).translate(390*2*windowWidth/750, 0).step()
    // ani_tp3_c.opacity(0.0).translate(0,6).step()

    setTimeout(()=>{
      this.animate("#firebook",[
        {translateX:390*2*windowWidth/750, opacity:1.0},
        {translateX:390*2*windowWidth/750, opacity:0.0},
        {translateX:0, opacity:0.0}
      ],1200,)},250)
    
    // var ani_tp4_c = wx.createAnimation({
    //   delay: 300,
    //   duration: 600});
    // ani_tp4_c.opacity(0.0).translate(390*2*windowWidth/750, 0).step()
    // ani_tp4_c.opacity(0.0).translate(0,6).step()

    setTimeout(()=>{
      this.animate("#earthbook",[
        {translateX:390*2*windowWidth/750, opacity:1.0},
        {translateX:390*2*windowWidth/750, opacity:0.0},
        {translateX:0, opacity:0.0}
      ],1200,)},250)
    
    
    // var ani_tp5_c = wx.createAnimation({
    //   delay: 300,
    //   duration: 600});
    // ani_tp5_c.opacity(0.0).translate(390*2*windowWidth/750, 0).step()
    // ani_tp5_c.opacity(0.0).translate(0,-6).step()

    setTimeout(()=>{
      this.animate("#windbook",[
        {translateX:390*2*windowWidth/750, opacity:1.0},
        {translateX:390*2*windowWidth/750, opacity:0.0},
        {translateX:0, opacity:0.0}
      ],1200,)},250)

    
    // var ani_tp6_c = wx.createAnimation({
    //   delay: 300,
    //   duration: 600});
    // ani_tp6_c.opacity(0.0).translate(390*2*windowWidth/750, 0).step()
    // ani_tp6_c.opacity(0.0).translate(0,6).step()

    setTimeout(()=>{
      this.animate("#waterbook",[
        {translateX:390*2*windowWidth/750, opacity:1.0},
        {translateX:390*2*windowWidth/750, opacity:0.0},
        {translateX:0, opacity:0.0}
      ],1200,)},250)

    // var ani_tqa1_c = wx.createAnimation({
    //   delay: 300,
    //   duration:600,
    // })
    // ani_tqa1_c.opacity(0.0).step()

    setTimeout(()=>{
      this.animate("#ani_question1_add1",[
        {opacity:1.0},
        {opacity:0.0}],600,)},300)

    // var ani_tqa2 = wx.createAnimation({
    //   delay:1700,//1500 1700
    //   duration:1200,
    // })
    // ani_tqa2.opacity(1.0).step()

    setTimeout(()=>{
      this.animate("#ani_question1_add2",[
        {opacity:0.0},
        {opacity:1.0}],1200,)},1700)
  
    // ani_ti7与ani_ti8互换
    // var ani_ti8= wx.createAnimation({
    //   delay: 1000,
    //   duration: 650,
    // });
    // ani_ti8.translateX(150*2*windowWidth/750).step()
    // ani_ti8.opacity(1.0).step()

    setTimeout(()=>{
      this.animate("#backtoconfirmbook",[
        {translateX:0*windowWidth/750, opacity:0.0},
        {translateX:147*2*windowWidth/750, opacity:0.0},
        {translateX:150*2*windowWidth/750, opacity:1.0}
      ],1200,)},1550)
  
    // var ani_ti7 = wx.createAnimation({
    //   delay: 1000,
    //   duration: 650
    // });
    // ani_ti7.translateX(-170*2*windowWidth/750).step()
    // ani_ti7.opacity(1.0).step()

    setTimeout(()=>{
      this.animate("#confirmbook",[
        {translateX:0, opacity:0.0},
        {translateX:-167*2*windowWidth/750, opacity:0.0},
        {translateX:-170*2*windowWidth/750, opacity:1.0}
      ],1200,)},1550)

    // this.setData({
      // introearthbook: ani_ti2.export(),
      // ani_firebook: ani_tp3_c.export(),
      // ani_earthbook: ani_tp4_c.export(),
      // ani_windbook: ani_tp5_c.export(),
      // ani_waterbook: ani_tp6_c.export(),
      // ani_question1_add1: ani_tqa1_c.export(),
      // ani_question1_add2: ani_tqa2.export(),
      // ani_confirm: ani_ti7.export(),
      // ani_bocktoconfirm: ani_ti8.export(),
    // })
  
    whichstar = Math.ceil(Math.random(0,1)*3)
    whichelement = 2
    if (whichstar == 1)
    {this.setData({twelvestar: "金牛座"})}
    if (whichstar == 2)
    {this.setData({twelvestar: "处女座"})}
    if (whichstar == 3)
    {this.setData({twelvestar: "摩羯座"})}
    
    console.log(whichstar)
    checked6 = false;
    }
    
    },


  //longtapearthbook:function(){
  //  var ani_tlong2 = wx.createAnimation({
  //    delay: 500,
  //    duration: 1200});
  //  ani_tlong2.opacity(1.0).translate(10,0).step()
  //  this.setData({
  //    introearthbook: ani_ti2.export()})
  //  whichstar = Math.ceil(Math.random(0,1)*3)
  //  whichelement = 2
  //  if(whichstar == 1) {
  //    this.setData({twelvestar : "金牛座"})}
  //  if (whichstar == 2) {
  //    this.setData({twelvestar : "处女座"})} 
  //  else {
  //    this.setData({twelvestar : "摩羯座"})} 


  //  },
      

  tapwindbook:function(){
    //checked9
    checked8 = true;
    if (checked6){
      // var ani_ti3 = wx.createAnimation({
      // delay: 150,
      // duration: 1200});
      // ani_ti3.opacity(0.0).translateX(860*windowWidth/750).step()//-660
      // ani_ti3.opacity(1.0).step()

      setTimeout(()=>{
        this.animate("#introwindbook",[
          {translateX:0, opacity:0.0},
          {translateX:860*windowWidth/750, opacity:0.0},
          {translateX:860*windowWidth/750, opacity:1.0}
        ],1200,)},1250)
    
    // var ani_tp3_c = wx.createAnimation({
    //   delay: 400, //200 400
    //   duration: 600});
    // ani_tp3_c.opacity(0.0).translate(390*2*windowWidth/750, 0).step() // 397,6 400*2rpx
    // ani_tp3_c.opacity(0.0).translate(0,6).step()

    setTimeout(()=>{
      this.animate("#firebook",[
        {translateX:390*2*windowWidth/750, opacity:1.0},
        {translateX:390*2*windowWidth/750, opacity:0.0},
        {translateX:0, opacity:0.0}
      ],1200,)},250)

  
    // var ani_tp4_c = wx.createAnimation({
    //   delay: 400,
    //   duration: 600});
    // ani_tp4_c.opacity(0.0).translate(390*2*windowWidth/750, 0).step() // 403, 6 400*2rpx
    // ani_tp4_c.opacity(0.0).translate(0,6).step()

    setTimeout(()=>{
      this.animate("#earthbook",[
        {translateX:390*2*windowWidth/750, opacity:1.0},
        {translateX:390*2*windowWidth/750, opacity:0.0},
        {translateX:0, opacity:0.0}
      ],1200,)},250)

  
    // var ani_tp5_c = wx.createAnimation({
    //   delay: 400,
    //   duration: 600});
    // ani_tp5_c.opacity(0.0).translate(390*2*windowWidth/750, 0).step() //403,-6 400*2rpx
    // ani_tp5_c.opacity(0.0).translate(0,-6).step()

    setTimeout(()=>{
      this.animate("#windbook",[
        {translateX:390*2*windowWidth/750, opacity:1.0},
        {translateX:390*2*windowWidth/750, opacity:0.0},
        {translateX:0, opacity:0.0}
      ],1200,)},250)

  
    // var ani_tp6_c = wx.createAnimation({
    //   delay: 400,
    //   duration: 600});
    // ani_tp6_c.opacity(0.0).translate(390*2*windowWidth/750, 0).step()
    // ani_tp6_c.opacity(0.0).translate(0,6).step()

    setTimeout(()=>{
      this.animate("#waterbook",[
        {translateX:390*2*windowWidth/750, opacity:1.0},
        {translateX:390*2*windowWidth/750, opacity:0.0},
        {translateX:0, opacity:0.0}
      ],1200,)},250)

    // var ani_tqa1_c = wx.createAnimation({
    //   delay: 400,
    //   duration:600,
    // })
    // ani_tqa1_c.opacity(0.0).step()

    setTimeout(()=>{
      this.animate("#ani_question1_add1",[
        {opacity:1.0},
        {opacity:0.0}],600,)},400)

    setTimeout(()=>{
      this.animate("#ani_question1_add2",[
        {opacity:0.0},
        {opacity:1.0}],1200,)},1500)

    // var ani_tqa2 = wx.createAnimation({
    //   delay:1500,
    //   duration:1200,
    // })
    // ani_tqa2.opacity(1.0).step()

    // 互换
    // var ani_ti8= wx.createAnimation({
    //   delay: 1000, //800 , 1100 1400
    //   duration: 800 //800 1000
    // });
    // ani_ti8.translateX(150*2*windowWidth/750).step()
    // ani_ti8.opacity(1.0).step()

    setTimeout(()=>{
      this.animate("#backtoconfirmbook",[
        {translateX:0*windowWidth/750, opacity:0.0},
        {translateX:147*2*windowWidth/750, opacity:0.0},
        {translateX:150*2*windowWidth/750, opacity:1.0}
      ],1200,)},1550)

    // var ani_ti7 = wx.createAnimation({
    //   delay: 1000, //1400
    //   duration: 800 //1000
    // });
    // ani_ti7.translateX(-170*2*windowWidth/750).step()
    // ani_ti7.opacity(1.0).step()

    setTimeout(()=>{
      this.animate("#confirmbook",[
        {translateX:0, opacity:0.0},
        {translateX:-167*2*windowWidth/750, opacity:0.0},
        {translateX:-170*2*windowWidth/750, opacity:1.0}
      ],1200,)},1550)

    // this.setData({
    // introwindbook: ani_ti3.export(),
    // ani_firebook: ani_tp3_c.export(),
    // ani_earthbook: ani_tp4_c.export(),
    // ani_windbook: ani_tp5_c.export(),
    // ani_waterbook: ani_tp6_c.export(),
    // ani_question1_add1: ani_tqa1_c.export(),
    // ani_question1_add2: ani_tqa2.export(),
    // ani_confirm: ani_ti7.export(),
    // ani_bocktoconfirm: ani_ti8.export(),
  // })

  //  产生下一轮星座对象
  // whichstar = Math.ceil(Math.random(0,1)*3)
  whichstar = 1
  whichelement = 3
  if(whichstar == 1)
  {this.setData({twelvestar : "双子座"})}
  if (whichstar == 2) {
  this.setData({twelvestar : "天秤座"})}
  if (whichstar == 3)
  {this.setData({twelvestar : "水瓶座"})} 

  console.log(whichstar)
  checked6 = false;
  }

  },


  tapwaterbook:function(e){
    checked8 = true;
    this.setData({ colorIndex:e.currentTarget.dataset.index});

    if (checked6) {
      // var ani_ti4 = wx.createAnimation({
      // delay: 200, duration: 1200 }); 
      // ani_ti4.opacity(0.0).translateX(860*windowWidth/750).step()
      // ani_ti4.opacity(1.0).translateX(860*windowWidth/750).step()

      setTimeout(()=>{
        this.animate("#introwaterbook",[
          {translateX:0, opacity:0.0},
          {translateX:860*windowWidth/750, opacity:0.0},
          {translateX:860*windowWidth/750, opacity:1.0}
        ],1200,)},1250)

      // var ani_tp3_c = wx.createAnimation({
      // delay: 500,
      // duration: 600});
      // ani_tp3_c.opacity(0.0).translate(390*2*windowWidth/750, 0).step()
      // ani_tp3_c.opacity(0.0).translate(0,0).step()

      setTimeout(()=>{
        this.animate("#firebook",[
          {translateX:390*2*windowWidth/750, opacity:1.0},
          {translateX:390*2*windowWidth/750, opacity:0.0},
          {translateX:0, opacity:0.0}
        ],1200,)},250)

    
      // var ani_tp4_c = wx.createAnimation({
      // delay: 500,
      // duration: 600});
      // ani_tp4_c.opacity(0.0).translate(390*2*windowWidth/750, 0).step()
      // ani_tp4_c.opacity(0.0).translate(0,0).step()

      setTimeout(()=>{
        this.animate("#earthbook",[
          {translateX:390*2*windowWidth/750, opacity:1.0},
          {translateX:390*2*windowWidth/750, opacity:0.0},
          {translateX:0, opacity:0.0}
        ],1200,)},250)
    
      // var ani_tp5_c = wx.createAnimation({
      // delay: 500,
      // duration: 600});
      // ani_tp5_c.opacity(0.0).translate(390*2*windowWidth/750, 0).step() 
      // ani_tp5_c.opacity(0.0).translate(0,0).step()

      setTimeout(()=>{
        this.animate("#windbook",[
          {translateX:390*2*windowWidth/750, opacity:1.0},
          {translateX:390*2*windowWidth/750, opacity:0.0},
          {translateX:0, opacity:0.0}
        ],1200,)},250)
    
      // var ani_tp6_c = wx.createAnimation({
      // delay: 500,
      // duration: 600});
      // ani_tp6_c.opacity(0.0).translate(390*2*windowWidth/750, 0).step()
      // ani_tp6_c.opacity(0.0).translate(0,0).step()

      setTimeout(()=>{
        this.animate("#waterbook",[
          {translateX:390*2*windowWidth/750, opacity:1.0},
          {translateX:390*2*windowWidth/750, opacity:0.0},
          {translateX:0, opacity:0.0}
        ],1200,)},250)

      // var ani_tqa1_c = wx.createAnimation({
      //   delay: 500,
      //   duration:600,
      // })
      // ani_tqa1_c.opacity(0.0).step()
  
      // var ani_tqa2 = wx.createAnimation({
      //   delay:1600,
      //   duration:1200,
      // })
      // ani_tqa2.opacity(1.0).step()

      setTimeout(()=>{
        this.animate("#ani_question1_add1",[
          {opacity:1.0},
          {opacity:0.0}],600,)},500)
  
      setTimeout(()=>{
        this.animate("#ani_question1_add2",[
          {opacity:0.0},
          {opacity:1.0}],1200,)},1600)

      // ani_ti7 ani_ti8互换
      // var ani_ti8 = wx.createAnimation({
      // delay: 1200, duration: 800});
      // ani_ti8.translate(150*2*windowWidth/750,0).step()
      // ani_ti8.opacity(1.0).step()

      setTimeout(()=>{
        this.animate("#backtoconfirmbook",[
          {translateX:0*windowWidth/750, opacity:0.0},
          {translateX:147*2*windowWidth/750, opacity:0.0},
          {translateX:150*2*windowWidth/750, opacity:1.0}
        ],1200,)},1550)

      // var ani_ti7 = wx.createAnimation({
      // delay: 1200, duration: 800})
      // ani_ti7.translate(-170*2*windowWidth/750,0).step()
      // ani_ti7.opacity(1.0).step()

      setTimeout(()=>{
        this.animate("#confirmbook",[
          {translateX:0, opacity:0.0},
          {translateX:-167*2*windowWidth/750, opacity:0.0},
          {translateX:-170*2*windowWidth/750, opacity:1.0}
        ],1200,)},1550)


    // this.setData({
      // introwaterbook: ani_ti4.export(),
      // ani_firebook: ani_tp3_c.export(),
      // ani_earthbook: ani_tp4_c.export(),
      // ani_windbook: ani_tp5_c.export(),
      // ani_waterbook: ani_tp6_c.export(),
      // ani_question1_add1: ani_tqa1_c.export(),
      // ani_question1_add2: ani_tqa2.export(),
      // ani_confirm: ani_ti7.export(),
      // ani_bocktoconfirm: ani_ti8.export(),

    // })

    whichstar = Math.ceil(Math.random(0,1)*3)
    whichelement = 4
    if (whichstar == 1) 
    {this.setData({twelvestar : "巨蟹座"})}
    if (whichstar == 2)
    {this.setData({twelvestar: "天蝎座"})}
    if (whichstar == 3)
    {this.setData({twelvestar: "双鱼座"})}

    console.log(whichelement)
    console.log(whichstar)
    checked6=false;
    }

  },

  rebackquestion1: function(){
    checked6 = true;
    if (checked8){
    //   var ani_tp3 = wx.createAnimation({
    //   delay: 935, 
    //   durtion: 800 
    // });
    // ani_tp3.opacity(0.0).translate(390*2*windowWidth/750,0).step()
    // ani_tp3.opacity(1.0).translate(390*2*windowWidth/750,0).step()

    setTimeout(()=>{
      this.animate("#firebook",[
        {translateX:0, opacity:0.0},
        {translateX:390*2*windowWidth/750, opacity:1.0},
        {translateX:390*2*windowWidth/750, opacity:1.0}
      ],800,)},700)

    // var ani_tp4 = wx.createAnimation({
    //   delay: 700, 
    //   duration: 800}); 
    // ani_tp4.opacity(0.0).translate(390*2*windowWidth/750,0).step()
    // ani_tp4.opacity(1.0).translate(390*2*windowWidth/750,0).step()

    setTimeout(()=>{
      this.animate("#earthbook",[
        {translateX:0, opacity:0.0},
        {translateX:390*2*windowWidth/750, opacity:1.0},
        {translateX:390*2*windowWidth/750, opacity:1.0}
      ],800,)},700)
    
    // var ani_tp5 = wx.createAnimation({
    //   delay: 700, //900 800
    //   duration: 800}); // 6800 900
    // ani_tp5.opacity(0.0).translate(390*2*windowWidth/750,0).step() //397,0
    // ani_tp5.opacity(1.0).translate(390*2*windowWidth/750,0).step()//windowWd windowWd

    setTimeout(()=>{
      this.animate("#windbook",[
        {translateX:0, opacity:0.0},
        {translateX:390*2*windowWidth/750, opacity:1.0},
        {translateX:390*2*windowWidth/750, opacity:1.0}
      ],800,)},700)
    
    // var ani_tp6 = wx.createAnimation({
    //   delay: 700,  // 2245050 1000 900 800
    //   duration: 800}); //600 1000 950 900
    // ani_tp6.opacity(0.0).translate(390*2*windowWidth/750,0).step()//winod 397,5
    // ani_tp6.opacity(1.0).translate(390*2*windowWidth/750,0).step() //(390*2,5)

    setTimeout(()=>{
      this.animate("#waterbook",[
        {translateX:0, opacity:0.0},
        {translateX:390*2*windowWidth/750, opacity:1.0},
        {translateX:390*2*windowWidth/750, opacity:1.0}
      ],800,)},700)

    // var ani_tqa1 = wx.createAnimation({
    //   delay: 2200,
    //   duration: 800,
    // })
    // ani_tqa1.opacity(1.0).step()

    // var ani_tqa2_c = wx.createAnimation({
    //   delay:600,
    //   duration:600,
    // })
    // ani_tqa2_c.opacity(0.0).step()

    setTimeout(()=>{
      this.animate("#ani_question1_add1",[
        {opacity:0.0},
        {opacity:1.0}],800,)},2200)

    setTimeout(()=>{
      this.animate("#ani_question1_add2",[
        {opacity:1.0},
        {opacity:0.0}],600,)},600)

    // var ani_ti1_c = wx.createAnimation({
    //   delay: 600, // 1000 1200
    //   duration: 600 //500
    // });
    // ani_ti1_c.opacity(0.0).translateX(860*windowWidth/750).step()
    // ani_ti1_c.opacity(0.0).translateX(0).step()

    setTimeout(()=>{
      this.animate("#introfirebook",[
        {translateX:860*windowWidth/750, opacity:1.0},
        {translateX:860*windowWidth/750, opacity:0.0},
        {translateX:0, opacity:0.0}
      ],600,)},600)

    // var ani_ti2_c = wx.createAnimation({
    //   delay: 600, //1200 1000
    //   duration: 600
    // })
    // ani_ti2_c.opacity(0.0).translateX(860*windowWidth/750).step()//-660
    // ani_ti2_c.opacity(0.0).translateX(0).step()

    setTimeout(()=>{
      this.animate("#introearthbook",[
        {translateX:860*windowWidth/750, opacity:1.0},
        {translateX:860*windowWidth/750, opacity:0.0},
        {translateX:0, opacity:0.0}
      ],600,)},600)
    
    // var ani_ti3_c = wx.createAnimation({
    //   delay: 600, //1200
    //   duration: 600
    // });
    // ani_ti3_c.opacity(0.0).translateX(860*windowWidth/750).step()//-660
    // ani_ti3_c.opacity(0.0).translateX(0).step()

    setTimeout(()=>{
      this.animate("#introwindbook",[
        {translateX:860*windowWidth/750, opacity:1.0},
        {translateX:860*windowWidth/750, opacity:0.0},
        {translateX:0, opacity:0.0}
      ],600,)},600)

    // var ani_ti4_c = wx.createAnimation({
    //   delay: 600, //1200
    //   duration: 600
    // });
    // ani_ti4_c.opacity(0.0).translateX(860*windowWidth/750).step()//660
    // ani_ti4_c.opacity(0.0).translateX(0).step()

    setTimeout(()=>{
      this.animate("#introwaterbook",[
        {translateX:860*windowWidth/750, opacity:1.0},
        {translateX:860*windowWidth/750, opacity:0.0},
        {translateX:0, opacity:0.0}
      ],600,)},600)

    // huhuan7与8
    // var ani_ti8_c = wx.createAnimation({
    //   delay: 500, // 300 600 800
    //   duration: 600 //500, 2000 1200
    // })
    // ani_ti8_c.opacity(0.0).translate(150*2*windowWidth/750,0).step()
    // ani_ti8_c.translate(-150*2*windowWidth/750,0).step()
    // //ani_ti7_c.opacity(1.0).translate(-150,0).step()

    setTimeout(()=>{
      this.animate("#backtoconfirmbook",[
        {translateX:150*2*windowWidth/750, opacity:1.0},
        {translateX:150*2*windowWidth/750, opacity:0.0},
        {translateX:-150*2*windowWidth/750, opacity:0.0}
      ],600,)},500)

    // var ani_ti7_c = wx.createAnimation({
    //   delay: 500, // 300 800
    //   duration: 600 //1200
    // })
    // ani_ti7_c.opacity(0.0).translate(-170*2*windowWidth/750,0).step()
    // ani_ti7_c.translate(170*2*windowWidth/750,0).step()

    setTimeout(()=>{
      this.animate("#confirmbook",[
        {translateX:-170*2*windowWidth/750, opacity:1.0},
        {translateX:-170*2*windowWidth/750, opacity:0.0},
        {translateX:170*2*windowWidth/750, opacity:0.0}
      ],600,)},500)

    // this.setData({
      // ani_firebook: ani_tp3.export(),
      // ani_earthbook: ani_tp4.export(),
      // ani_windbook: ani_tp5.export(),
      // ani_waterbook: ani_tp6.export(),
      // ani_question1_add1: ani_tqa1.export(),//expoty
      // ani_question1_add2: ani_tqa2_c.export(),
      // introfirebook: ani_ti1_c.export(),
      // introearthbook: ani_ti2_c.export(), //aniPt2
      // introwindbook: ani_ti3_c.export(),
      // introwaterbook: ani_ti4_c.export(),
      // ani_confirm: ani_ti7_c.export(),
      // ani_bocktoconfirm: ani_ti8_c.export(),
    // })
    checked8 = false; //checked9
    }
  },



  nextquestion2:function(){
    var windowHeight = wx.getSystemInfoSync().windowHeight
    if (checked8) {
    beginnum = 2

    // 糊化
    if (windowHeight>=800){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[{
      translateX:-1650*windowWidth/750,translateY:-1560*windowWidth/750,opacity:1.0},
      {translateX:-1650*windowWidth/750, translateY:-1560*windowWidth/750,opacity:0.0}],10,)},2300)
    }

    if (windowHeight>=700 && windowHeight<800){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[
        {translateX:-1585*windowWidth/750,translateY:-1540*windowWidth/750,opacity:1.0},
        {translateX:-1585*windowWidth/750, translateY:-1540*windowWidth/750,opacity:0.0}],10,)},2300)
    }

    if (windowHeight>=600 && windowHeight<700){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[{
        translateX:-1280*windowWidth/750,translateY:-1290*windowWidth/750,opacity:1.0},
        {translateX:-1280*windowWidth/750, translateY:-1290*windowWidth/750,opacity:0.0}],10,)},2300)
    }

    if (windowHeight<600){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[
        {translateX:-1250*windowWidth/750,translateY:-1260*windowWidth/750,opacity:1.0},
        {translateX:-1250*windowWidth/750, translateY:-1260*windowWidth/750,opacity:0.0},],10,)},2300)
    }

    if (windowHeight>=800){
       setTimeout(()=>{
      this.animate("#bgimg_blur1",[
        {translateX:-1500*windowWidth/750, translateY:-2750*windowWidth/750, opacity:0.0},
        {translateX:-2300*windowWidth/750, translateY:-2620*windowWidth/750,opacity:1.0}],10,)
      },7300)
    }

    if (windowHeight>=700&&windowHeight<800){
      setTimeout(()=>{
     this.animate("#bgimg_blur1",[
       {translateX:-1500*windowWidth/750, translateY:-2750*windowWidth/750, opacity:0.0},
       {translateX:-2250*windowWidth/750, translateY:-2600*windowWidth/750,opacity:1.0}],10,)
     },7300)
   }

   if (windowHeight>=600&&windowHeight<700){
    setTimeout(()=>{
   this.animate("#bgimg_blur1",[
     {translateX:-1500*windowWidth/750, translateY:-2750*windowWidth/750, opacity:0.0},
     {translateX:-1800*windowWidth/750, translateY:-2140*windowWidth/750,opacity:1.0}],10,)
   },7300)
 }

  if (windowHeight<600){
    setTimeout(()=>{
   this.animate("#bgimg_blur1",[
     {translateX:-1500*windowWidth/750, translateY:-2750*windowWidth/750, opacity:0.0},
     {translateX:-1780*windowWidth/750, translateY:-2123*windowWidth/750,opacity:1.0}],10,)
   },7300)
 }

    

    // 护花设置//h
    // var ani_t0 = wx.createAnimation({
    //   delay: 2300,// 3500
    //   duration: 100
    // })//e
    // //ani_t0.opacity(1.0).step()//t
    // ani_t0.opacity(0.0).translate(-7,0).step() //(-10,0)

    // var ani_t0in = wx.createAnimation({
    //   delay: 7300,//5900 5850 6050 6550 6650 6800 6900 6840
    //   duration: 50, //10
    // })
    // ani_t0in.opacity(0.0).translate(-7,0).step() //(-10,0)

    // 小人进出
    // var ani_tps_c = wx.createAnimation({
    //   delay: 2500,
    //   duration: 600
    // })
    // ani_tps_c.opacity(0.0).step()

    // var ani_tps = wx.createAnimation({
    //   delay: 6200,
    //   duration: 600
    // })
    // ani_tps.opacity(1.0).step()

    setTimeout(()=>{
      this.animate("#ani_person_2",[
        {opacity:1.0},
        {opacity:0.0}],600,)},2500)

    setTimeout(()=>{
      this.animate("#ani_person_3",[
        {opacity:0.0},
        {opacity:1.0}],600,)},6200)



    // 地图移动
    
    if (windowHeight>=800){
      setTimeout(()=>{
      this.animate("#bgimg",[{
        translateX:-1650*windowWidth/750,translateY:-1560*windowWidth/750},
        {translateX:-2300*windowWidth/750, translateY:-2620*windowWidth/750}],2700,)
      },3300)
    }

    if (windowHeight>=700 && windowHeight<800){
      setTimeout(()=>{
      this.animate("#bgimg",[{
        translateX:-1585*windowWidth/750,translateY:-1540*windowWidth/750},
        {translateX:-2250*windowWidth/750, translateY:-2600*windowWidth/750}],2700,)},3300)
    }

    if (windowHeight>=600 && windowHeight<700){
      setTimeout(()=>{
      this.animate("#bgimg",[{
        translateX:-1280*windowWidth/750,translateY:-1290*windowWidth/750},
        {translateX:-1800*windowWidth/750, translateY:-2140*windowWidth/750}],2700,)},3300)
    }

    if (windowHeight<600){
      setTimeout(()=>{
      this.animate("#bgimg",[{
        translateX:-1250*windowWidth/750,translateY:-1260*windowWidth/750},
        {translateX:-1780*windowWidth/750, translateY:-2123*windowWidth/750}],2700,)},3300)
    }
    
    

 

    // 当前界面的火象之书、土象之书、风象之书、水象之书介绍消失(不用)
    var ani_ti1_c = wx.createAnimation({
      delay: 750, // 200 500 1000 1250
      duration: 750, // 500
    });
    //ani_ti1_c.opacity(1.0).translateX(860*windowWidth/750).step()
    //ani_ti1_c.opacity(1.0).translateX(-860*windowWidth/750).step()
    ani_ti1_c.opacity(0.0).translateX(860*windowWidth/750).step()
    ani_ti1_c.opacity(0.0).translateX(0).step()

    // setTimeout(()=>{
    //   this.animate("#introfirebook",[
    //     //{translateX:860*windowWidth/750, opacity:1.0},
    //     {translateX:860*windowWidth/750, opacity:0.0},
    //     {translateX:0, opacity:0.0}
    //   ],750,)},750)

    var ani_ti2_c = wx.createAnimation({
      delay: 750, //1250
      duration: 750
    });
    //ani_ti2_c.opacity(0.0).translateX(-660*windowWidth/750).step()
    //ani_ti2_c.opacity(0.0).translate(660*windowWidth/750,0).step()
    ani_ti2_c.opacity(0.0).translateX(860*windowWidth/750).step()//-660
    ani_ti2_c.opacity(0.0).translateX(0).step()

    // setTimeout(()=>{
    //   this.animate("#introearthbook",[
    //     //{translateX:860*windowWidth/750, opacity:1.0},
    //     {translateX:860*windowWidth/750, opacity:0.0},
    //     {translateX:0, opacity:0.0}
    //   ],750,)},750)


    var ani_ti3_c = wx.createAnimation({
      delay: 750,
      duration: 750,
    });
    //ani_ti3_c.opacity(1.0).translateX(-660*windowWidth/750).step()
    //ani_ti3_c.opacity(1.0).translateX(660*windowWidth/750).step()
    ani_ti3_c.opacity(0.0).translateX(860*windowWidth/750).step()//-660
    ani_ti3_c.opacity(0.0).translateX(0).step()

    // setTimeout(()=>{
    //   this.animate("#introwindbook",[
    //     //{translateX:860*windowWidth/750, opacity:1.0},
    //     {translateX:860*windowWidth/750, opacity:0.0},
    //     {translateX:0, opacity:0.0}
    //   ],750,)},750)

    var ani_ti4_c = wx.createAnimation({
      delay: 750,
      duration: 750
    });
    //ani_ti4_c.opacity(0.0).translateX(660*windowWidth/750).step() //0]1
    //ani_ti4_c.opacity(1.0).translateX(-660*windowWidth/750).step()
    ani_ti4_c.opacity(0.0).translateX(860*windowWidth/750).step() // windowWidht 660
    ani_ti4_c.opacity(0.0).translateX(0).step()

    // setTimeout(()=>{
    //   this.animate("#introwaterbook",[
    //     // translateX:860*windowWidth/750, opacity:1.0},
    //     {translateX:860*windowWidth/750, opacity:0.0},
    //     {translateX:0, opacity:0.0}
    //   ],750,)},750)

    // 当前界面问题消失
    // var ani_tp1_c = wx.createAnimation({
    //   delay: 1000, //600 1000 1200 1600 2000
    //   duration: 800});  //500 600 1000
    // ani_tp1_c.opacity(0.0).translate(0, 0).step()  //（-3，-9）(-3,0)

    setTimeout(()=>{
      this.animate("#question1",[
        {opacity:1.0},
        {opacity:0.0}
      ],800,)},1000)
    
    // var ani_tqa2_c = wx.createAnimation({
    //   delay: 1000,duration: 800}); ///2000 1000
    // ani_tqa2_c.opacity(0.0).translate(0, 0).step() //(3,9) (3,0)

    
    setTimeout(()=>{
      this.animate("#ani_question1_add2",[
        {opacity:1.0},
        {opacity:0.0}
      ],800,)},1000)

    // 当前界面的四象之书选项平移到点击不到的位置
    var ani_tp3 = wx.createAnimation({
      delay: 750, // 200 550
      duration: 750 // 900
    });
    ani_tp3.opacity(0.0).step()//.
    ani_tp3.opacity(0.0).translate(-200*2*windowWidth/750,0).step() //300

    // setTimeout(()=>{
    //   this.animate("#introfirebook",[
    //     {translateX:0, opacity:0.0},
    //     {translateX:860*windowWidth/750, opacity:0.0},
    //     {translateX:860*windowWidth/750, opacity:1.0}
    //   ],1200,)},1250)

    var ani_tp4 = wx.createAnimation({
      delay: 750,
      duration: 750 //700 800
    });
    ani_tp4.opacity(0.0).step()//.
    ani_tp4.opacity(0.0).translate(-200*2*windowWidth/750,0).step()

    var ani_tp5 = wx.createAnimation({
      delay: 750,
      duration: 750 //700
    });
    ani_tp3.opacity(0.0).step()
    ani_tp5.opacity(0.0).translate(-200*2*windowWidth/750,0).step()

    var ani_tp6 = wx.createAnimation({
      delay: 750,
      duration: 750 //900
    })
    ani_tp3.opacity(0.0).step()
    ani_tp6.opacity(0.0).translate(-200*2*windowWidth/750,0).step()


    // 当前界面确认和返回选项消失 互换
    // var ani_ti8_c = wx.createAnimation({
    //   delay: 800,duration: 600 //(600,500)
    // });
    // ani_ti8_c.opacity(0.0).translate(150*2*windowWidth/750,0).step()//、、、、d 2w*
    // ani_ti8_c.opacity(0.0).translate(-130*2*windowWidth/750,0).step() //(-5,0)
    // //ani_ti7_c.opacity(0.0).translate(-400,0).step()  // 将选项移到页面点不到之处  (-400,0)

    setTimeout(()=>{
      this.animate("#backtoconfirmbook",[
        {translateX:150*2*windowWidth/750, opacity:1.0},
        {translateX:150*2*windowWidth/750, opacity:0.0},
        {translateX:0*windowWidth/750, opacity:0.0}
      ],600,)},800)


    // var ani_ti7_c = wx.createAnimation({
    //   delay: 800,duration: 600
    // });
    // ani_ti7_c.opacity(0.0).translate(-170*2*windowWidth/750,0).step()
    // ani_ti7_c.opacity(0.0).translate(150*2*windowWidth/750,0).step() // (5,0)
    // //ani_ti8_c.opacity(0.0).translate(400,0).step() //(400,0)

    setTimeout(()=>{
      this.animate("#confirmbook",[
        {translateX:-170*2*windowWidth/750, opacity:1.0},
        {translateX:-170*2*windowWidth/750, opacity:0.0},
        {translateX:150*2*windowWidth/750, opacity:0.0}
      ],600,)},800)


    // 下一个界面的问题、选项浮现

    // var ani_tsj1 = wx.createAnimation({
    //   delay: 7300, //6000 6300 7300 5500  3500 3000 4900
    //   duration: 1200}); //2000
    // ani_tsj1.opacity(1.0).translate(0, 0).step() //(-3,-9)

    setTimeout(()=>{
      this.animate("#whichstar",[
        {opacity:0.0},
        {opacity:1.0},
      ],1200,)},7300)
 
   // 选项先从顶上移动到恰当位置
    // var ani_tsj_op1 = wx.createAnimation({
    // delay: 3600, //3200 3600 3000 1700X2 1500X2 2000X2
    // duration: 800, //900 1100
    // });
    // ani_tsj_op1.opacity(0.0).translate(0,350*2*windowWidth/750).step() // 545 550*2
    // ani_tsj_op1.opacity(1.0).translate(0,350*2*windowWidth/750).step() // 550 500 5502 550*2

    setTimeout(()=>{
      this.animate("#whetherstar_yes",[
        {translateY:0, opacity:0.0},
        {translateY:350*2*windowWidth/750, opacity:0.0},
        {translateY:350*2*windowWidth/750, opacity:1.0}
      ],1000,)},7400)

    // var ani_tsj_op11 = wx.createAnimation({
    // delay: 3600, //3600
    // duration: 800, //1100
    // })
    // ani_tsj_op11.opacity(0.0).translate(0,866*windowWidth/750).step() //445 450*2 420*2
    // ani_tsj_op11.opacity(1.0).translate(0,866*windowWidth/750).step()  //450 45-*2

    setTimeout(()=>{
      this.animate("#whether_notstar",[
        {translateY:0, opacity:0.0},
        {translateY:866*windowWidth/750, opacity:0.0},
        {translateY:866*windowWidth/750, opacity:1.0}
      ],1000,)},7400)
    

    this.setData({//ani_movebk: ani_to5.export(),
      introfirebook: ani_ti1_c.export(),
      introearthbook: ani_ti2_c.export(),
      introwindbook: ani_ti3_c.export(),
      introwaterbook: ani_ti4_c.export(),
      //ani_question1_part1: ani_tp1_c.export(),
      // // ani_question1_part2: ani_tp2_c.export(),
      // ani_question1: ani_tp1_c.export(),
      // ani_question1_add: ani_tp2_c.export(),
      // ani_question1_add2: ani_tqa2_c.export(),
      ani_firebook: ani_tp3.export(),
      ani_earthbook: ani_tp4.export(),
      ani_windbook: ani_tp5.export(),
      ani_waterbook: ani_tp6.export(),// [这几个为啥需要加上？]
      // ani_confirm: ani_ti7_c.export(),
      // ani_bocktoconfirm: ani_ti8_c.export(),
      // ani_whichstar:ani_tsj1.export(),
      // ani_whetherstar: ani_tsj_op1.export(),
      // ani_whether_nostar: ani_tsj_op11.export(),
      //ani_blur: ani_t0.export(),
      //ani_blurin: ani_t0in.export(),
      // ani_person_2:ani_tps_c.export(),
      // ani_person_3:ani_tps.export(),
    })
      

      //checked9
      checked8 = false;
    }
    
  },




// 点击“是的”，进入五星推书界面
  whetherstar_yes:function(){
    var windowHeight = wx.getSystemInfoSync().windowHeight
    if (checked7){
      beginnum = 3
    // var ani_t0 = wx.createAnimation({
    //   delay: 2000, //2400
    //   duration: 50,
    //   //cur//duratio,
    // })
    // ani_t0.opacity(0.0).translate(8,0).step() //(10,0)

    // var ani_t0in = wx.createAnimation({
    //   delay: 10300, //2400
    //   duration: 50,
    //   //cur//duratio,
    // })
    // ani_t0in.opacity(0.0).translate(8,0).step()

    // 糊化出入
    if (windowHeight>=800){
      setTimeout(()=>{
     this.animate("#bgimg_blur1",[
       {translateX:-2300*windowWidth/750, translateY:-2620*windowWidth/750, opacity:1.0},
       {translateX:-2300*windowWidth/750, translateY:-2620*windowWidth/750,opacity:0.0}],10,)
     },2000)//1850 2050
   }

   if (windowHeight>=700&&windowHeight<800){
     setTimeout(()=>{
    this.animate("#bgimg_blur1",[
      {translateX:-2250*windowWidth/750,translateY:-2600*windowWidth/750, opacity:1.0},
      {translateX:-2250*windowWidth/750,translateY:-2600*windowWidth/750,opacity:0.0}],10,)
    },2000)
  }

  if (windowHeight>=600&&windowHeight<700){
   setTimeout(()=>{
  this.animate("#bgimg_blur1",[
    {translateX:-1800*windowWidth/750, translateY:-2140*windowWidth/750, opacity:1.0},
    {translateX:-1800*windowWidth/750, translateY:-2140*windowWidth/750,opacity:0.0}],10,)
  },2000)
}

 if (windowHeight<600){
   setTimeout(()=>{
  this.animate("#bgimg_blur1",[
    {translateX:-1780*windowWidth/750, translateY:-2123*windowWidth/750, opacity:1.0},
    {translateX:-1780*windowWidth/750, translateY:-2123*windowWidth/750,opacity:0.0}],10,)
  },2000)
}

  

    if (windowHeight>=800){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[{
      translateX:-1650*windowWidth/750,translateY:-1560*windowWidth/750,opacity:0.0},
      {translateX:-3040*windowWidth/750, translateY:0*windowWidth/750,opacity:1.0}],10,)},12800)  //11800
    }//opacir

    if (windowHeight>=700 && windowHeight<800){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[
        {translateX:-1585*windowWidth/750,translateY:-1540*windowWidth/750,opacity:0.0},
        {translateX:-3000*windowWidth/750, translateY:0*windowWidth/750,opacity:1.0}],10,)},12800)
    }

    if (windowHeight>=600 && windowHeight<700){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[{
        translateX:-1280*windowWidth/750,translateY:-1290*windowWidth/750,opacity:0.0},
        {translateX:-2400*windowWidth/750, translateY:0*windowWidth/750,opacity:1.0},
      ],10,)},12800)//6900

      
    }

    if (windowHeight<600){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[
        {translateX:-1250*windowWidth/750,translateY:-1260*windowWidth/750,opacity:0.0},
        {translateX:-2360*windowWidth/750, translateY:0*windowWidth/750,opacity:1.0},
      ],10,)},12800)
    }





    // 小人进出
    // var ani_tps_c = wx.createAnimation({
    //   delay:2200,
    //   duration:600,
    // })
    // ani_tps_c.opacity(0.0).step()//opacity(9)

    // var ani_tps = wx.createAnimation({
    //   delay: 11800,//9500
    //   duration:600,//5--,
    // })
    // ani_tps.opacity(1.0).step()

    setTimeout(()=>{
      this.animate("#ani_person_3",[
        {opacity:1.0},
        {opacity:0.0}],600,)},2200)

    setTimeout(()=>{
      this.animate("#ani_person_10",[
        {opacity:0.0},
        {opacity:1.0}],600,)},11800)


    // 是的与不是的选项消失
    //var ani_
    // var ani_tsj1_c = wx.createAnimation({
    //   delay: 750, //300 1000 1350
    //   duration: 750 //400 800
    // });
    // ani_tsj1_c.opacity(0.0).translate(-3,0).step()

    setTimeout(()=>{
      this.animate("#whichstar",[
        {translateX:0, opacity:1.0},
        {translateX:-3, opacity:0.0},
      ],750,)},750)

    // var ani_tsj_op1_c = wx.createAnimation({
    //   delay: 600, //400 600
    //   duration: 750 //500 760
    // });
    // ani_tsj_op1_c.opacity(0.0).translate(0,350*windowWidth*2/750).step() //、、553
    // ani_tsj_op1_c.opacity(0.0).translate(0,-80*windowWidth*2/750).step() //-80 windowWId (*2)

    setTimeout(()=>{
      this.animate("#whetherstar_yes",[
        {translateX:350*windowWidth*2/750, opacity:1.0},
        {translateX:350*windowWidth*2/750, opacity:0.0},
        {translateX:-80*windowWidth*2/750, opacity:0.0}
      ],750,)},600)

  //   var ani_tsj_op11_c = wx.createAnimation({
  //     delay: 600, //400 600 
  //     duration: 750 //500 760
  //   });
  //   ani_tsj_op11_c.opacity(0.0).translate(0,866*windowWidth/750).step() //453 420*2
  //  ani_tsj_op11_c.opacity(0.0).translate(0,-50*windowWidth*2/750).step()  // 选项移动到无法点击的地方

   setTimeout(()=>{
    this.animate("#whether_notstar",[
      {translateX:866*windowWidth/750, opacity:1.0},
      {translateX:866*windowWidth/750, opacity:0.0},
      {translateX:-50*windowWidth*2/750, opacity:0.0}
    ],750,)},600)


    // 地图移动
    if (windowHeight>=800){
      setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX:-2300*windowWidth/750, translateY:-2620*windowWidth/750},
        {translateX:-3840*windowWidth/750, translateY:-540*windowWidth/750},],3500,)
      },3000)//2850

      setTimeout(()=>{
        this.animate("#bgimg",[
          {translateX:-3840*windowWidth/750, translateY:-540*windowWidth/750},
          {translateX:-3040*windowWidth/750, translateY:0*windowWidth/750},],2100,)
        },9500)
    }
    
  
      if (windowHeight>=700 && windowHeight<800){
        setTimeout(()=>{
        this.animate("#bgimg",[
          {translateX:-2250*windowWidth/750,translateY:-2600*windowWidth/750},
          {translateX:-3800*windowWidth/750, translateY:-500*windowWidth/750},],3500,)},3000)

        setTimeout(()=>{
        this.animate("#bgimg",[
          {translateX:-3800*windowWidth/750, translateY:-500*windowWidth/750},
          {translateX:-3000*windowWidth/750, translateY:0*windowWidth/750},],2100,)},9500)
      }
  
      if (windowHeight>=600 && windowHeight<700){
        setTimeout(()=>{
        this.animate("#bgimg",[{
          translateX:-1800*windowWidth/750,translateY:-2140*windowWidth/750},
          {translateX:-3150*windowWidth/750, translateY:-400*windowWidth/750},],3500,)}, 3000)

        setTimeout(()=>{
        this.animate("#bgimg",[
          {translateX:-3150*windowWidth/750, translateY:-400*windowWidth/750},
          {translateX:-2400*windowWidth/750, translateY:0*windowWidth/750},],2100,)}, 9500)
      }
  
      if (windowHeight<600){
        setTimeout(()=>{
        this.animate("#bgimg",[{
          translateX:-1780*windowWidth/750,translateY:-2123*windowWidth/750},
          {translateX:-3050*windowWidth/750, translateY:-400*windowWidth/750},],3500,)},3000)

        setTimeout(()=>{
        this.animate("#bgimg",[
          {translateX:-3050*windowWidth/750, translateY:-400*windowWidth/750},{translateX:-2360*windowWidth/750, translateY:0*windowWidth/750},],2100,)},9500)
      }

      // 介绍显示
    setTimeout(()=>{
      this.animate("#loading",[{opacity:0.0},{opacity:1.0},],600,)},6500)
    
    setTimeout(()=>this.startBtn(),7100)

    
    setTimeout(()=>{
      this.animate("#loading",[{opacity:1.0},{opacity:0.0},],600,)},9300)  //7700
    

    
   // 纸片划入
  //  if (windowHeight<=700){ //600
  //    var ani_tpp1 = wx.createAnimation({
  //     delay: 13000,//8800 9700 10500 12000
  //     duration: 1200,
  //   })
  //   ani_tpp1.translate(900*windowWidth/750,1150*windowWidth/750).rotate(15).step()

  //   var ani_tpp2 = wx.createAnimation({
  //     delay: 13500,
  //     duration: 1200,
  //   })
  //   ani_tpp2.translate(840*windowWidth/750,1130*windowWidth/750).rotate(28).step()
    
  //   var ani_tpp3 = wx.createAnimation({
  //     delay: 14000,
  //     duration: 1200,
  //   })
  //   ani_tpp3.translate(760*windowWidth/750,1120*windowWidth/750).rotate(45).step()
  //  }

  //  if (windowHeight >700){ //600
  //   var ani_tpp1 = wx.createAnimation({
  //    delay: 13000,//8800 9700 10500 12000
  //    duration: 1200,
  //  })
  //  ani_tpp1.translate(820*windowWidth/750,1150*windowWidth/750).rotate(15).step()

  //  var ani_tpp2 = wx.createAnimation({
  //    delay: 13500,
  //    duration: 1200,
  //  })
  //  ani_tpp2.translate(760*windowWidth/750,1130*windowWidth/750).rotate(28).step()
   
  //  var ani_tpp3 = wx.createAnimation({
  //    delay: 14000,
  //    duration: 1200,
  //  })
  //  ani_tpp3.translate(680*windowWidth/750,1120*windowWidth/750).rotate(45).step()
  // }
    
//问题2和选项消失

// 五星正缘书
  var ani_ti9 = wx.createAnimation({
    delay: 14500, //12000 14400 12400 6000 2500 12500 11500
    duration: 1200, //1300
  })
  ani_ti9.opacity(1.0).step()

  // var ani_five = wx.createAnimation({
  //   delay: 6000, //7350 13400 7000 3500 13500
  //   duration: 1000,//1-
  // })
  // ani_five.translate(700*windowWidth/750,0).step()
  // ani_five.opacity(1.0).step()
  // //ani_five.opacity(1.0).translate(0,5).step()
  // //ani_five.opacity(1.0).step()
  // //ani_five.opacity(1.0)./step()

  setTimeout(()=>{
    this.animate("#fivestarbooks",[
      {translateX:0, opacity:0.0},
      {translateX:700*windowWidth/750, opacity:0.0},
      {translateX:700*windowWidth/750, opacity:1.0}
    ],1000,)},11000)

  // continue按钮
  // var ani_continue = wx.createAnimation({
  //   delay: 6500,//7250
  //   duration: 1000
  // })
  // ani_continue.opacity(0.0).translateX(550*windowWidth/750).step()
  // ani_continue.opacity(1.0).step()

  setTimeout(()=>{
    this.animate("#continue",[
      {translateX:0, opacity:0.0},
      {translateX:550*windowWidth/750, opacity:0.0},
      {translateX:550*windowWidth/750, opacity:1.0}
    ],1000,)},11500)
  

  //setTimeout(()=>{
  //  this.animate("#continue",[
  //    {translateX:-320*windowWidth/750},
  //    {translateX:600*windowWidth/750},],600,)},12500) //6500
  //setTimeout(()=>{
  //  this.animate("#continue",[
  //    {opacity:0.0},{opacity:1.0},],600,)},15500)

  // 再测一次的按钮
  // var ani_again = wx.createAnimation({
  //   delay: 7300, //7900 7200 7000 7200 1000
  //   duration: 1200,
  // })
  // ani_again.opacity(0.0).translate(137*2*windowWidth/750,0).step()
  // ani_again.opacity(1.0).translate(140*2*windowWidth/750,0).step() //windowWId
  //ani_again.opacity(0.0).translate(137,0)//(.)
  //ani_again.opacity(1.0).translate(140,0)//(1/)

  // ABOUT KELPde 按钮
  // var ani_aboutKELP = wx.createAnimation({
  //   delay: 6800, //14000,7000 2000
  //   duration: 1000,
  // })
  // ani_aboutKELP.translate(0,0).step()
  // ani_aboutKELP.opacity(1.0).step()

  // this.setData({
    // ani_whichstar: ani_tsj1_c.export(),
    // ani_whetherstar: ani_tsj_op1_c.export(),
    // ani_whether_nostar: ani_tsj_op11_c.export(),
    // ani_person_3: ani_tps_c.export(),
    // ani_person_10: ani_tps.export(),
    // ani_fivestarbook: ani_ti9.export(),
    // ani_fivestar: ani_five.export(),
    // ani_continue: ani_continue.export(),

    // ani_paper_1: ani_tpp1.export(),
    // ani_paper_2: ani_tpp2.export(),
    // ani_paper_3: ani_tpp3.export(),
  // })
  console.log(whichstar)
  console.log(whichelement)

  //if (whichstar==1 && whichelement == 1)
  if (whichstar == 1 && whichelement==1)
  { // introrand = Math.ceil(Math.random(0,1)*2)
    introrand = 1
    fivestarbooks = "鲁迅全集",//白羊座五星书
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E7%81%AB.png?sign=b30b2e973a4888e47bca01a62532349c&t=1672208215"
    if (introrand ==1){
      fivestarbookscontent = "凡对于以真话为笑话的，以笑话为真话的，以笑话为笑话的，只有一个方法：就是不说话。"//白羊座五星书简介白羊座五星书简介白羊座五星书简介
      wx.cloud.callFunction({
      name: "queryresultbook",
      data:{bookname: "鲁迅全集"}}).then(res=>{
      console.log(res.result.data)
      this.setData({
        fivestarbooks: res.result.data[0].bookname,//firestarbook
        fivestarbookscontent: res.result.data[0].picture,//firebookcontent
        fivestarintro1: res.result.data[0].introduce1,
        fivestarintro2: res.result.data[0].introduce2,
        bookpic: res.result.data[0].bookpic
      })
    })
    }
    if (introrand == 2){
      fivestarbookscontent = "从来如此，便对么？"
      wx.cloud.callFunction({
        name: "queryresultbook",
        data:{bookname: "鲁迅全集"}}).then(res=>{
        //console.log(res.result.data)
        this.setData({
          fivestarbooks: res.result.data[0].bookname,//firestarbook
          fivestarbookscontent: res.result.data[0].picture,//firebookcontent
          fivestarintro1: res.result.data[0].introduce1,
          fivestarintro2: res.result.data[0].introduce2,
          bookpic: res.result.data[0].bookpic
        })
      })
    }
  }
  //{this.setData({fivestarbooks: "格列夫游记"})}

  if (whichstar==1 && whichelement == 2)
  {fivestarbooks = "喻世明言",
   fivestarbookscontent = "世事翻腾似转轮，眼前凶吉未为真。请看久久分明应，天道何曾负善人？"// 分开上下两阙？
   bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E5%9C%9F.png?sign=7b06d4eca1d4904e304494536f38010c&t=1672208250"
   
   wx.cloud.callFunction({
    name: "queryresultbook",
    data:{bookname: "喻世明言"}
  }).then(res=>{
    console.log(res.result.data)
    this.setData({
      fivestarbooks: res.result.data[0].bookname,//firestarbook
      fivestarbookscontent: res.result.data[0].picture,//firebookcontent
      fivestarintro1: res.result.data[0].introduce1,
      fivestarintro2: res.result.data[0].introduce2,
      bookpic: res.result.data[0].bookpic
    })
  })
  }
  //{this.setData{{fivestarbooks:"教你种田"}}}
  //cloud://cloud1-2gx6xlsu0ca67a99.636c-cloud1-2gx6xlsu0ca67a99-1311762654/Hbimages/书道具/土.png

  if (whichstar==1 && whichelement == 3)
  { fivestarbooks = "晚学盲言",
    fivestarbookscontent = "人各有欲，而得其所欲则必在道。"
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E9%A3%8E.png?sign=03891cf7e08e4c27bc4fc7400363e67f&t=1672208281"
    
    wx.cloud.callFunction({
      name: "queryresultbook",
      data:{bookname: "晚学盲言"}
    }).then(res=>{
      console.log(res.result.data)
      this.setData({
        fivestarbooks: res.result.data[0].bookname,//firestarbook
        fivestarbookscontent: res.result.data[0].picture,//firebookcontent
        fivestarintro1: res.result.data[0].introduce1,
        fivestarintro2: res.result.data[0].introduce2,
        bookpic: res.result.data[0].bookpic
      })
    })
  }

  if (whichstar==1 && whichelement == 4)
  { introrand = Math.ceil(Math.random(0,1)*3)
    fivestarbooks = "人·兽·鬼",
    
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=6fc3c700dc4ae294ae2b579619bf32e0&t=1672208303"

    if (introrand == 1){
      fivestarbookscontent = "怕打仗，躲避打仗，无可躲避了就打，没打的时候怕死，到打的时候怕得忘了死。"//巨蟹座五星书简介巨蟹座五星书简介巨蟹座五星书简介巨蟹座五星书简介巨蟹座五星书简介巨蟹座五星书简介巨蟹座五星书简介巨蟹座五星书简介巨蟹座五星书简。
      wx.cloud.callFunction({
      name: "queryresultbook",
      data:{bookname: "人·兽·鬼"}
      }).then(res=>{
      console.log(res.result.data)
      this.setData({
        fivestarbooks: res.result.data[0].bookname,//firestarbook
        fivestarbookscontent: res.result.data[0].picture,//firebookcontent
        fivestarintro1: res.result.data[0].introduce1,
        fivestarintro2: res.result.data[0].introduce2,
        bookpic: res.result.data[0].bookpic
      })
    })
    }

    if (introrand == 2){
      fivestarbookscontent = "譬如家畜里最胆小的是猫，我们只看见小孩子给家里养的猫抓破了皮，没见过狗会咬痛小孩子。"//巨蟹座五星书简介巨蟹座五星书简介巨蟹座五星书简介巨蟹座五星书简介巨蟹座五星书简介巨蟹座五星书简介巨蟹座五星书简介巨蟹座五星书简介巨蟹座五星书简。
      wx.cloud.callFunction({
      name: "queryresultbook",
      data:{bookname: "人·兽·鬼"}
      }).then(res=>{
      console.log(res.result.data)
      this.setData({
        fivestarbooks: res.result.data[0].bookname,//firestarbook
        fivestarbookscontent: res.result.data[0].picture,//firebookcontent
        fivestarintro1: res.result.data[0].introduce1,
        fivestarintro2: res.result.data[0].introduce2,
        bookpic: res.result.data[0].bookpic
      })
    })
    }

    if (introrand == 3){
      fivestarbookscontent = "恋爱里的确有“心理距离”，所以西洋的爱神专射冷箭。"//巨蟹座五星书简介巨蟹座五星书简介巨蟹座五星书简介巨蟹座五星书简介巨蟹座五星书简介巨蟹座五星书简介巨蟹座五星书简介巨蟹座五星书简介巨蟹座五星书简。
      wx.cloud.callFunction({
      name: "queryresultbook",
      data:{bookname: "人·兽·鬼"}//人·兽·鬼
      }).then(res=>{
      console.log(res.result.data)
      this.setData({
        fivestarbooks: res.result.data[0].bookname,//firestarbook
        fivestarbookscontent: res.result.data[0].picture,//firebookcontent
        fivestarintro1: res.result.data[0].introduce1,
        fivestarintro2: res.result.data[0].introduce2,
        bookpic: res.result.data[0].bookpic
      })
    })
    }   
  }

  if (whichstar==2 && whichelement == 1)
  {
  introrand = Math.ceil(Math.random(0,1)*2)
  fivestarbooks = "空谷幽兰",
  bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E7%81%AB.png?sign=ba105e64ab9aefcedd99491f9d19db32&t=1672208534"
  if (introrand == 1){
    fivestarbookscontent = "只有当我们独处时，我们才会更清楚地意识到，我们与万物同在。"//狮子座五星书简介

    wx.cloud.callFunction({
      name: "queryresultbook",
      data:{bookname: "空谷幽兰"}
    }).then(res=>{
      console.log(res.result.data)
      this.setData({
        fivestarbooks: res.result.data[0].bookname,//firestarbook
        fivestarbookscontent: res.result.data[0].picture,//firebookcontent
        fivestarintro1: res.result.data[0].introduce1,
        fivestarintro2: res.result.data[0].introduce2,
        bookpic: res.result.data[0].bookpic
      })
    })
  }
  if (introrand==2){
    fivestarbookscontent = "只要你不受欲望的困扰，只要你的心不受妄想左右，那么你是出家人还是在家人，根本没有什么区别。一旦你的心很清净，你就能理解业。"//狮子座五星书简介

    wx.cloud.callFunction({
      name: "queryresultbook",
      data:{bookname: "空谷幽兰"}
    }).then(res=>{
      console.log(res.result.data)
      this.setData({
        fivestarbooks: res.result.data[0].bookname,//firestarbook
        fivestarbookscontent: res.result.data[0].picture,//firebookcontent
        fivestarintro1: res.result.data[0].introduce1,
        fivestarintro2: res.result.data[0].introduce2,
        bookpic: res.result.data[0].bookpic
      })
    })
  }
  }//cloud://cloud1-2gx6xlsu0ca67a99.636c-cloud1-2gx6xlsu0ca67a99-1311762654/书道具-设计稿-火.png

  if (whichstar==2 && whichelement == 2)
  {fivestarbooks = "金线",
  fivestarbookscontent = "当我们说我们正命悬一线，说生活一团乱麻，或说自己处于社会网络之中时，我们使用的说法实际上有着数千年的传统。"
  bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E5%9C%9F.png?sign=421a50df6927df4de6a3cfd2136a2fd9&t=1672208493"
  
  wx.cloud.callFunction({
    name: "queryresultbook",
    data:{bookname: "金线"}
  }).then(res=>{
    console.log(res.result.data)
    this.setData({
      fivestarbooks: res.result.data[0].bookname,//firestarbook
      fivestarbookscontent: res.result.data[0].picture,//firebookcontent
      fivestarintro1: res.result.data[0].introduce1,
      fivestarintro2: res.result.data[0].introduce2,
      bookpic: res.result.data[0].bookpic
    })
  })
  }

  if (whichstar==2 && whichelement == 3)
  { fivestarbooks = "挚友",
    fivestarbookscontent = "白昼的温暖空气，因为无法逃遁，就变成了雾。"
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E9%A3%8E.png?sign=1eb3b68aedfe2e54b571f19c95fe9e9d&t=1672208399"
    
    wx.cloud.callFunction({
      name: "queryresultbook",
      data:{bookname: "挚友"}
    }).then(res=>{
      console.log(res.result.data)
      this.setData({
        fivestarbooks: res.result.data[0].bookname,//firestarbook
        fivestarbookscontent: res.result.data[0].picture,//firebookcontent
        fivestarintro1: res.result.data[0].introduce1,
        fivestarintro2: res.result.data[0].introduce2,
        bookpic: res.result.data[0].bookpic
      })
    })
  }//cloud://cloud1-2gx6xlsu0ca67a99.636c-cloud1-2gx6xlsu0ca67a99-1311762654/书道具-设计稿-风.png

  if (whichstar==2 && whichelement == 4)
  {fivestarbooks = "西藏生死书",//ds
  fivestarbookscontent = "此时此地，我们就可以开始寻找生命的意义。我们可以全心全意、准确无比、心平气和地把每一秒钟当成改变和准备死亡与永恒的契机。"
  bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=6fc3c700dc4ae294ae2b579619bf32e0&t=1672208303"

  wx.cloud.callFunction({
    name: "queryresultbook",
    data:{bookname: "西藏生死书"}//西藏生死书
  }).then(res=>{
    console.log(res.result.data)
    this.setData({
      fivestarbooks: res.result.data[0].bookname,//firestarbook
      fivestarbookscontent: res.result.data[0].picture,//firebookcontent
      fivestarintro1: res.result.data[0].introduce1,
      fivestarintro2: res.result.data[0].introduce2,
      bookpic: res.result.data[0].bookpic
    })
  })
  }
    

  //{this.setData{{fivestarbooks:"天蝎座五星书"}}}
  if (whichstar==3 && whichelement == 1)
  {fivestarbooks = "标竿人生", // 标竿人生
  fivestarbookscontent = "爱是人生最好的应用，最能表达爱的方式是付出时间，去爱最好的时刻就是现在。"//射手座五星书简介
  bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E7%81%AB.png?sign=ba105e64ab9aefcedd99491f9d19db32&t=1672208534",

  wx.cloud.callFunction({
    name: "queryresultbook",
    data:{
      bookname: "标竿人生"
    }
  }).then(res=>{
    console.log(res.result.data)
    this.setData({
      fivestarbooks: res.result.data[0].bookname,//firestarbook name
      fivestarbookscontent: res.result.data[0].picture,//firebookcontent
      fivestarintro1: res.result.data[0].introduce1,
      fivestarintro2: res.result.data[0].introduce2,
      bookpic: res.result.data[0].bookpic
    })
  })
  }


  if (whichstar==3 && whichelement == 2) // /if
  {fivestarbooks = "辨喜的生平、思想与影响",
  fivestarbookscontent = "不要去追问，因为所有的答案都是无意义的，问和答都是摩耶的一部分，我们要去做的是拔苦自救，正如中毒之人，不要去追问中毒的原因，而应该是解救生命。"
  bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E5%9C%9F.png?sign=421a50df6927df4de6a3cfd2136a2fd9&t=1672208493"
  
  wx.cloud.callFunction({
    name: "queryresultbook",
    data:{bookname: "辨喜的生平、思想与影响"}
  }).then(res=>{
    console.log(res.result.data)
    this.setData({
      fivestarbooks: res.result.data[0].bookname,//firestarbook
      fivestarbookscontent: res.result.data[0].picture,//firebookcontent
      fivestarintro1: res.result.data[0].introduce1,
      fivestarintro2: res.result.data[0].introduce2,
      bookpic: res.result.data[0].bookpic
    })
  })
  }


  if (whichstar==3 && whichelement == 3)
  { fivestarbooks = "悠悠岁月",
    fivestarbookscontent = "大量的物品掩盖着观念的稀少和信仰的衰退。"
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E9%A3%8E.png?sign=1eb3b68aedfe2e54b571f19c95fe9e9d&t=1672208399"

    wx.cloud.callFunction({
      name: "queryresultbook",
      data:{bookname: "哲学人生问答"}//悠悠岁月
    }).then(res=>{
      console.log(res.result.data)
      this.setData({
        fivestarbooks: res.result.data[0].bookname,//firestarbook
        fivestarbookscontent: res.result.data[0].picture,//firebookcontent
        fivestarintro1: res.result.data[0].introduce1,
        fivestarintro2: res.result.data[0].introduce2,
        bookpic: res.result.data[0].bookpic
      })
    })
  }

  if (whichstar==3 && whichelement == 4)
  { fivestarbooks = "前世今生: 生命轮回的启示",
    fivestarbookscontent = "耐心和适当时机每件事在该来的时候就会来。人生是急不得的，不能像许多人希望的时间表那样。我们必须接受凡事来临的时间，不要强求。",
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=6fc3c700dc4ae294ae2b579619bf32e0&t=1672208303"
    wx.cloud.callFunction({
      name: "queryresultbook",
      data:{bookname: "前世今生: 生命轮回的启示"}
    }).then(res=>{
      console.log(res.result.data)
      this.setData({
        fivestarbooks: res.result.data[0].bookname,//firestarbook
        fivestarbookscontent: res.result.data[0].picture,//firebookcontent
        fivestarintro1: res.result.data[0].introduce1,
        fivestarintro2: res.result.data[0].introduce2,
        bookpic: res.result.data[0].bookpic
      })
    })
  }

  // 把结果保存到数据库中
  wx.cloud.callFunction({
    name: "saveResults",
    data:{
      bookname: fivestarbooks,
      bookintro: fivestarintro
    }
  }).then(res=>{
    console.log(res)
  })
    
  

      var word = "你的五星正缘书"//您的五星正缘书

      wx.createSelectorQuery()
      .select('#canvas')
      .fields({
        node: true,
        size: true
      })
      .exec(async (res) => {
        const canvas = res[0].node;
        // Canvas 绘制上下文
        const ctx = canvas.getContext('2d');

        //画布大小根据屏幕分辨率进行缩放，防止模糊
        const renderWidth = res[0].width
        const renderHeight = res[0].height

        // 初始化画布大熊啊
        const dpr = wx.getSystemInfoSync().pixelRatio
        canvas.width = renderWidth*dpr
        canvas.height = renderHeight*dpr
        ctx.scale(dpr, dpr)

        //画布背景色
        ctx.fillStyle = "white";
        //ctx.fillRect(0, 0, canvas.width, canvas.height)
        // 载入图片 
        let imageToLoadCount = 0;
        function loadImage(src) {
            ++imageToLoadCount;
            const image = canvas.createImage();
            // image.onload 的执行顺序是不固定的（根据网络速度决定，谁先载入完成，谁先onload)
            image.onload = () => {
                if ((--imageToLoadCount)==0) {
                    // 当所有图片都载入完成后，才执行绘制操作
                    allImagesLoaded();
                }
            }
            image.src = src;
            return image;
        }
        const image = loadImage('https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E5%85%B6%E4%BB%96/%E8%83%8C%E6%99%AF(%E8%99%9A%E5%8C%96).jpg?sign=261ebb2cd307d7190934964661a55aa1&t=1672051076');
        //https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/XS01-11.jpg?sign=43a0b57d65b287761d29f8e7be6750e6&t=1671114263
        //https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E5%85%B6%E4%BB%96/XS01-11.jpg?sign=0090ddda65db1e6e6c04b1336b3ecf50&t=1671198918
        const image2 = loadImage(bookpic);
        const image3 = loadImage("https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E6%A0%87%E5%BF%97/%E4%BA%8C%E7%BB%B4%E7%A0%81.jpeg?sign=c37603589db16c714593060e4fc0b823&t=1671199297");
        //https://636c-cloud1-7gbpee7nfc78bc69-1311890189.tcb.qcloud.la/QR-%E4%BA%8C%E7%BB%B4%E7%A0%81.jpeg?sign=fc6bf4a360d4dd17507777628f3c633f&t=1663229258
        const image4 = loadImage("https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E6%A0%87%E5%BF%97/kelplogo.png?sign=8718a5c871506572a5fca6b323644a62&t=1671199307");
        const image5 = loadImage("https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E6%AF%9B%E7%AC%94%E4%BA%BA%20%E5%8E%9F%E5%A7%8B%E5%B0%BA%E5%AF%B8/%E5%B0%8F%E4%BA%BA-11(new).png?sign=3f6644b03c0370b3558db878bd97c592&t=1672051225");
        //https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E6%AF%9B%E7%AC%94%E4%BA%BA%20%E5%8E%9F%E5%A7%8B%E5%B0%BA%E5%AF%B8/%E5%B0%8F%E4%BA%BA-11.png?sign=c617b178ab794eecacfb4e5f64f99c62&t=1671199381
        
                
        function allImagesLoaded() {
          // 后draw的在先draw的上层
        
          // Draw image 1
          //ctx.drawImage(image,0,0,414,736)//650
          //ctx.fillStyle = "white";
          //ctx.font= 'normal bold 22px serif'
          //ctx.fillText(word,120,320)
          //ctx.font= 'normal bold 22px serif'
          //ctx.fillText(fivestarbooks,120,350)
          //ctx.font = 'normal 12px serif'
          //ctx.fillText(fivestarbookscontent, 120,370)
          //ctx.font= 'normal 10px serif'
          //ctx.fillText(word3,120, 430)//120,400
          //ctx.font= 'normal 10px serif'
          //ctx.fillText(word4,120,445)//120,415
          
                
          // Draw image 2
          //ctx.drawImage(image2,30,30,350,350)
        
          // Draw image 3
          //ctx.drawImage(image3,146,470,100,100)

          // Draw image 4
          //ctx.drawImage(image4, 0, 0, 80,80)

          // Draw image 5
          //ctx.drawImage(image5, 310,460,120,120)


          // Draw image 1
          ctx.drawImage(image,0,0,414,736)//650
          ctx.fillStyle = "white";

          // Draw "您的五星正缘书"
          ctx.textAlign = 'center';
          ctx.font= 'normal bold 24px serif'
          ctx.fillText(word,207,370)

          // Draw TITLE
          ctx.font= 'normal bold 24px serif'
          //ctx.fillText(fivestarbooks,207,410)
          line1 = myGolbalFunction.myFunction.textPrewrap(ctx,fivestarbooks,207,414,35,240,12)

          y = line1*37+410;
          ctx.font = 'normal bold 16px serif'
          myGolbalFunction.myFunction.textPrewrap(ctx,fivestarbookscontent,207,y,20,200,12)//fivestarintro//442
          
          //ctx.font= 'normal 10px serif'
          //ctx.fillText(word3,120, 400)//120,400
          //ctx.font= 'normal 10px serif'
          //ctx.fillText(word4,120,415)//120,415

          // Draw title of books
          

          // Draw intro of books
          const fillTextLineBreak = (ctx,text,x,y,lw,lh)=> {
            let i = 0
            let n = 0
            let r = -1
            while (i < text.length){
              while (ctx.measureText(text.substring(n, i)).width < lw && i < text.length) {
                i++
              }
              r++
              ctx.fillText(text.substring(n, i), x, y + lh * r)
              n = i
            }
            return lh * r
          }
                
          // Draw image 2  书图
          //ctx.drawImage(image2,30,30,350,350)
          ctx.drawImage(image2,-46,-37,480,480)
        
          // Draw image 3  二维码
          ctx.drawImage(image3,183,635,48,48)

          // Draw image 4  kelplogo
          ctx.drawImage(image4, 182, 10, 50,50)

          // Draw image 5  小人-11
          ctx.drawImage(image5, -15, 580,140,140)
        }
         

      })

      
 
      checked7 = false;
    }
    
},  

// 点击“不是的”
  whether_notstar: function(){
    var windowHeight = wx.getSystemInfoSync().windowHeight
    if (checked7){
      beginnum = 3
    // var ani_t0 = wx.createAnimation({
    //   delay: 1850, //2400 2200 2000 1950
    //   duration: 50,
    //   //cur//duratio,
    // })
    // ani_t0.opacity(0.0).translate(10,0).step()


    // var ani_t0in = wx.createAnimation({
    //   delay: 5450, //5900 6000 6200 6230 6210 5510 5210 5010 4810 4510
    //   duration: 50,//10 100
    // })
    // ani_t0in.opacity(0.0).translate(10,0).step()

    // 糊化出入
    if (windowHeight>=800){
      setTimeout(()=>{
     this.animate("#bgimg_blur1",[
       {translateX:-2300*windowWidth/750, translateY:-2620*windowWidth/750, opacity:1.0},
       {translateX:-2300*windowWidth/750, translateY:-2620*windowWidth/750,opacity:0.0}],10,)
     },1850)
   }

   if (windowHeight>=700&&windowHeight<800){
     setTimeout(()=>{
    this.animate("#bgimg_blur1",[ //blur2
      {translateX:-2250*windowWidth/750,translateY:-2600*windowWidth/750, opacity:1.0},
      {translateX:-2250*windowWidth/750,translateY:-2600*windowWidth/750,opacity:0.0}],10,)
    },1850)
  }

  if (windowHeight>=600&&windowHeight<700){
   setTimeout(()=>{
  this.animate("#bgimg_blur1",[
    {translateX:-1800*windowWidth/750, translateY:-2140*windowWidth/750, opacity:1.0},
    {translateX:-1800*windowWidth/750, translateY:-2140*windowWidth/750,opacity:0.0}],10,)
  },1850)
}

 if (windowHeight<600){
   setTimeout(()=>{
  this.animate("#bgimg_blur1",[
    {translateX:-1780*windowWidth/750, translateY:-2123*windowWidth/750, opacity:1.0},
    {translateX:-1780*windowWidth/750, translateY:-2123*windowWidth/750,opacity:0.0}],10,)
  },1850)
}

  

    if (windowHeight>=800){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[{
      translateX:-1650*windowWidth/750,translateY:-1560*windowWidth/750,opacity:0.0},
      {translateX:-720*windowWidth/750, translateY:-2790*windowWidth/750,opacity:1.0}],10,)},7300)
    }

    if (windowHeight>=700 && windowHeight<800){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[
        {translateX:-1585*windowWidth/750,translateY:-1540*windowWidth/750,opacity:0.0},
        {translateX:-700*windowWidth/750, translateY:-2760*windowWidth/750,opacity:1.0}],10,)},7300)
    }

    if (windowHeight>=600 && windowHeight<700){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[{
        translateX:-1280*windowWidth/750,translateY:-1290*windowWidth/750,opacity:0.0},
        {translateX:-550*windowWidth/750, translateY:-2300*windowWidth/750,opacity:1.0}],10,)},7300)
    }

    if (windowHeight<600){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[
        {translateX:-1250*windowWidth/750,translateY:-1260*windowWidth/750,opacity:0.0},
        {translateX:-550*windowWidth/750, translateY:-2260*windowWidth/750,opacity:1.0},],10,)},7300)
    }




    // 小人进出
    // var ani_tps_c = wx.createAnimation({
    //   delay: 2050,
    //   duration:600,
    // })
    // ani_tps_c.opacity(0.0).step()

    // var ani_tps = wx.createAnimation({
    //   delay: 6250, //5850
    //   duration:600,
    // })
    // ani_tps.opacity(1.0).step()

    setTimeout(()=>{
      this.animate("#ani_person_3",[
        {opacity:1.0},
        {opacity:0.0}],600,)},2050)

    setTimeout(()=>{
      this.animate("#ani_person_4",[
        {opacity:0.0},
        {opacity:1.0}],600,)},6250)


  // 地图移动
  if (windowHeight>=800){
    setTimeout(()=>{
    this.animate("#bgimg",[{
      translateX:-2300*windowWidth/750,translateY:-2620*windowWidth/750},
      {translateX:-720*windowWidth/750, translateY:-2790*windowWidth/750}],3200,)
    },2850)
  }
  

    if (windowHeight>=700 && windowHeight<800){
      setTimeout(()=>{
      this.animate("#bgimg",[{
        translateX:-2250*windowWidth/750,translateY:-2600*windowWidth/750},
        {translateX:-700*windowWidth/750, translateY:-2760*windowWidth/750}],3200,)},2850)
    }

    if (windowHeight>=600 && windowHeight<700){
      setTimeout(()=>{
      this.animate("#bgimg",[{
        translateX:-1800*windowWidth/750,translateY:-2140*windowWidth/750},
        {translateX:-550*windowWidth/750, translateY:-2300*windowWidth/750}],3200,)},2850)
    }

    if (windowHeight<600){
      setTimeout(()=>{
      this.animate("#bgimg",[{
        translateX:-1780*windowWidth/750,translateY:-2123*windowWidth/750},
        {translateX:-550*windowWidth/750, translateY:-2260*windowWidth/750}],3200,)},2850)
    }
    //var ani_tq3 = wx.createAnimation({
    //  delay: 2850,  // 2400  2850  2650 3250 3150 2750 2550
    //  duration: 1600 // 1700 2000
    //});
    
    
    //ani_tq3.opacity(1.0).translate(-828*2*windowWidth/750, -1083*2*windowWidth/750).step() //、、1123px  1083px （428，30）

  
  //ani_tq3.opacity(0.0).translate(-618, -933).step()
    //ani_tq3.opacity(1.0).translate(-828, -1123).step()
    //{-668,-923}{-768,-1023}蛮好看的  「-798，-1123」 「-8188」
//{-818}
  // 本题的问题、选项消失
    // var ani_tsj1_c = wx.createAnimation({
    //   delay: 600,
    //   duration: 750 //800
    // });
    // ani_tsj1_c.opacity(0.0).translate(0,0).step() //(-5,0)

    setTimeout(()=>{
      this.animate("#whichstar",[
        {translateX:0, opacity:1.0},
        {translateX:0, opacity:0.0},
      ],750)},600)

    // var ani_tsj_op1_c = wx.createAnimation({
    //   delay: 600, // 400 700
    //   duration: 400  // 500
    // });
    // ani_tsj_op1_c.opacity(0.0).translate(0,350*2*windowWidth/750).step() //0,553 550*2
    // ani_tsj_op1_c.opacity(0.0).translate(0,-80*2*windowWidth/750).step()

    setTimeout(()=>{
      this.animate("#whetherstar_yes",[
        {translateY:350*2*windowWidth/750, opacity:1.0},
        {translateY:350*2*windowWidth/750, opacity:0.0},
        {translateY:-80*2*windowWidth/750, opacity:0.0}
      ],400)},600)

  //   var ani_tsj_op11_c = wx.createAnimation({
  //     delay: 600,
  //     duration: 400
  //   });
  //   ani_tsj_op11_c.opacity(0.0).translate(0,866*windowWidth/750).step() //0,453 450*2
  //  ani_tsj_op11_c.opacity(0.0).translate(0,-50*2*windowWidth/750).step()

   setTimeout(()=>{
    this.animate("#whether_notstar",[
      {translateY:866*windowWidth/750, opacity:1.0},
      {translateY:866*windowWidth/750, opacity:0.0},
      {translateY:-50*2*windowWidth/750, opacity:0.0}
    ],400)},600)

  // 选项移动到无法点击的地方
  // var ani_tsj_op1 = wx.createAnimation({
  //   delay: 700,
  //   duration: 200
  // });
  // ani_tsj_op1.opacity(0.0).translate(0,-50*2*windowWidth/750).step()

  // var ani_tsj_op11 = wx.createAnimation({
  //   delay: 700,
  //   duration: 200
  // });
  // ani_tsj_op11.opacity(0.0).translate(0,-80*2*windowWidth/750).step()



  // 问题2和选项出现
  // var ani_tsj2 = wx.createAnimation({
  //   delay: 7300, //4700 4800 5000 5200 5350 5400 5500 61200 6600 6900 6200 3200 3450 3650 4450
  //   duration: 1900  // 1200 1300 1600 1800 2100
  // });
  // ani_tsj2.opacity(1.0).step()

  setTimeout(()=>{
    this.animate("#ddlikestar",[
      {opacity:0.0},
      {opacity:1.0}],1900,)},7300)

  

  // var ani_tsj_op2 = wx.createAnimation({
  //   delay: 3300, //(6300, 6500, 6900))(6500,6700,7000) {6600, 6900, 7400} {7000, 7400, 7900}{3000,3200,3450}{43100, 3400, 3700} 「3250 3500 3750」{3300 3550 3800} 3300X3 3200X3  1200X3 1300x3 1500X3 1600X3 3000X3
  //   duration: 1200 // 800 1000
  // });
  // ani_tsj_op2.opacity(0.0).translate(290*2*windowWidth/750,0).step() //1.0 240px
  // ani_tsj_op2.opacity(1.0).step()

  setTimeout(()=>{
    this.animate("#likestar",[
      {translateX:0, opacity:0.0},
      {translateX:290*2*windowWidth/750, opacity:0.0},
      {translateX:290*2*windowWidth/750, opacity:1.0}
    ],1200)},5300)

  // var ani_tsj_op22 = wx.createAnimation({
  //   delay: 3300, //7400 3550
  //   duration: 1200
  // });
  // ani_tsj_op22.opacity(0.0).translate(290*2*windowWidth/750,0).step() //1.0
  // ani_tsj_op22.opacity(1.0).step()//opacity(1.0)step

  setTimeout(()=>{
    this.animate("#whateverstar",[
      {translateX:0, opacity:0.0},
      {translateX:290*2*windowWidth/750, opacity:0.0},
      {translateX:290*2*windowWidth/750, opacity:1.0}
    ],1200)},5300)

  // var ani_tsj_op222 = wx.createAnimation({
  //   delay: 3300, //7900 3800
  //   duration: 1200
  // });
  // ani_tsj_op222.opacity(0.0).translate(580*windowWidth/750,0).step()//1.0
  // ani_tsj_op222.opacity(1.0).step()

  setTimeout(()=>{
    this.animate("#dislikestar",[
      {translateX:0, opacity:0.0},
      {translateX:290*2*windowWidth/750, opacity:0.0},
      {translateX:290*2*windowWidth/750, opacity:1.0}
    ],1200)},5300)



// 问题2和选项消失
  // this.setData({
    //ani_movebk: ani_tq3.export(),
    // ani_whichstar: ani_tsj1_c.export(),
    // ani_whetherstar: ani_tsj_op1_c.export(),
    // ani_whether_nostar: ani_tsj_op11_c.export(),
    // ani_honeystar: ani_tsj_op2.export(),
    // ani_whateverstar: ani_tsj_op22.export(),
    // ani_nolikestar: ani_tsj_op222.export(),
    //ani_blur: ani_t0.export(),
    //ani_blurin: ani_t0in.export(),
    // ani_person_3: ani_tps_c.export(),
    // ani_person_4:ani_tps.export(),

  // })


      checked7 = false;
    }
    
  },

// 选择“喜欢”，水象元素分数积累2分，同时进入第三题
sweetstar:function(){
  // 按钮保护
  //、、this.setData({
  //  buttonClicked: true//buttonClickxz false
  //});
  var windowHeight = wx.getSystemInfoSync().windowHeight
  if (checked1){
  beginnum = 4
  // var ani_t0 = wx.createAnimation({
  //   delay: 2300, // 、、25600 2900 2550
  //   duration: 50//L
  // })
  // ani_t0.opacity(0.0).translate(5,0).step()

  // var ani_t0in = wx.createAnimation({
  //   delay: 6300, //6300 7200 6750 6000 4800 4600 4600
  //   duration: 50
  // })//ex.
  // ani_t0in.opacity(0.0).translate(5,0).step()


  if (windowHeight>=800){
    setTimeout(()=>{
    this.animate("#bgimg_blur1",[{
    translateX:-720*windowWidth/750,translateY:-2790*windowWidth/750,opacity:1.0},
    {translateX:-720*windowWidth/750, translateY:-2790*windowWidth/750,opacity:0.0}],10,)},2300)
  }

  if (windowHeight>=700 && windowHeight<800){
    setTimeout(()=>{
    this.animate("#bgimg_blur1",[
      {translateX:-700*windowWidth/750,translateY:-2760*windowWidth/750,opacity:1.0},
      {translateX:-700*windowWidth/750, translateY:-2760*windowWidth/750,opacity:0.0}],10,)},2300)
  }

  if (windowHeight>=600 && windowHeight<700){
    setTimeout(()=>{
    this.animate("#bgimg_blur1",[{
      translateX:-550*windowWidth/750,translateY:-2300*windowWidth/750,opacity:1.0},
      {translateX:-550*windowWidth/750, translateY:-2300*windowWidth/750,opacity:0.0}],10,)},2300)
  }

  if (windowHeight<600){
    setTimeout(()=>{
    this.animate("#bgimg_blur1",[
      {translateX:-550*windowWidth/750,translateY:-2260*windowWidth/750,opacity:1.0},
      {translateX:-550*windowWidth/750, translateY:-2260*windowWidth/750,opacity:0.0},],10,)},2300)
  }


  if (windowHeight>=800){
    setTimeout(()=>{
   this.animate("#bgimg_blur1",[ //blur2
     {translateX:-2300*windowWidth/750, translateY:-2620*windowWidth/750, opacity:0.0},
     {translateX:-2260*windowWidth/750, translateY:-1000*windowWidth/750,opacity:1.0}],10,)
   },7700) //.toExponential. 1850
 }

 if (windowHeight>=700&&windowHeight<800){
   setTimeout(()=>{
  this.animate("#bgimg_blur1",[
    {translateX:-2250*windowWidth/750,translateY:-2600*windowWidth/750, opacity:0.0},
    {translateX:-2240*windowWidth/750,translateY:-950*windowWidth/750,opacity:1.0}],10,)
  },7700)
}

if (windowHeight>=600&&windowHeight<700){
 setTimeout(()=>{
this.animate("#bgimg_blur1",[
  {translateX:-1800*windowWidth/750, translateY:-2140*windowWidth/750, opacity:0.0},
  {translateX:-1850*windowWidth/750, translateY:-770*windowWidth/750,opacity:1.0}],10,)
},7700)
}

if (windowHeight<600){
 setTimeout(()=>{
this.animate("#bgimg_blur1",[
  {translateX:-1780*windowWidth/750, translateY:-2123*windowWidth/750, opacity:0.0},
  {translateX:-1810*windowWidth/750, translateY:-750*windowWidth/750,opacity:1.0}],10,)
},7700)
}




  // 小人进出
  // var ani_tps_c = wx.createAnimation({
  //   delay: 2500,
  //   duration:600,
  // })
  // ani_tps_c.opacity(0.0).step()//opacitt

  // var ani_tps = wx.createAnimation({
  //   delay: 6700,
  //   duration:600,
  // })
  // ani_tps.opacity(1.0).step()

  setTimeout(()=>{
    this.animate("#ani_person_4",[
      {opacity:1.0},
      {opacity:0.0}],600,)},2500)

  setTimeout(()=>{
    this.animate("#ani_person_5",[
      {opacity:0.0},
      {opacity:1.0}],600,)},6700)


  // 地图移动
  if (windowHeight>=800){
    setTimeout(()=>{
    this.animate("#bgimg",[{
      translateX:-720*windowWidth/750,translateY:-2790*windowWidth/750},
      {translateX:-2260*windowWidth/750, translateY:-1000*windowWidth/750}],3200,)
    },3300)
  }
  

    if (windowHeight>=700 && windowHeight<800){
      setTimeout(()=>{
      this.animate("#bgimg",[{
        translateX:-700*windowWidth/750,translateY:-2760*windowWidth/750},
        {translateX:-2240*windowWidth/750, translateY:-950*windowWidth/750}],3200,)},3300)
    }

    if (windowHeight>=600 && windowHeight<700){
      setTimeout(()=>{
      this.animate("#bgimg",[{
        translateX:-550*windowWidth/750,translateY:-2300*windowWidth/750},
        {translateX:-1850*windowWidth/750, translateY:-770*windowWidth/750}],3200,)},3300)
    }

    if (windowHeight<600){
      setTimeout(()=>{
      this.animate("#bgimg",[{
        translateX:-550*windowWidth/750,translateY:-2260*windowWidth/750},
        {translateX:-1810*windowWidth/750, translateY:-750*windowWidth/750}],3200,)},3300)
    }

  // 当前的问题和选项消失
  // var ani_tsj2_c = wx.createAnimation({
  //   delay: 1000,  //600,900, 1200 1400 1200 1800
  //   duration: 800 //800
  // })
  // ani_tsj2_c.opacity(0.0).step()

  setTimeout(()=>{
    this.animate("#ddlikestar",[
      {opacity:1.0},
      {opacity:0.0}],800,)},1000)


  var ani_tsj_op2_c = wx.createAnimation({
    delay: 600,  //(300,330,400)  (500,560,680)(680,740,850)（880，940，1050）600X3
    duration: 600 //600
  })
  ani_tsj_op2_c.opacity(0.0).translate(290*2*windowWidth/750,0).step() //ani_tsj2_ 235,0
  ani_tsj_op2_c.opacity(0.0).translate(-300*2*windowWidth/750,0).step()

  var ani_tsj_op22_c = wx.createAnimation({
    delay: 600,
    duration: 600
  })
  ani_tsj_op22_c.opacity(0.0).translate(290*2*windowWidth/750,0).step() //235,0px
  ani_tsj_op22_c.opacity(0.0).translate(-300*2*windowWidth/750,0).step()
  //ani_tsj_op22_c.opacity(0.0).step()
  //ani_tsj_op22_c.translate(-300,0).step()

  var ani_tsj_op222_c = wx.createAnimation({
    delay: 600,
    duration: 600
  })
  ani_tsj_op222_c.opacity(0.0).translate(290*2*windowWidth/750,0).step() //235px, 0px
  ani_tsj_op222_c.opacity(0.0).translate(-300*2*windowWidth/750,0).step()
  //ani_tsj_op222_c. opacity(0.0).step()
  //ani_tsj_op222_c. translate(-300,0).step()

  // 选项移动到点击不到的地方

  // 显示问题3和选项
  var ani_tqq3 = wx.createAnimation({
    delay: 7700, //6000 6600 8000 6750 2750 3750 3850 3950 5400
    duration: 1200,  //1200 1500 1800
  })
  ani_tqq3.opacity(1.0).step()

  // var ani_tsj3_fire = wx.createAnimation({
  //   delay: 3600,  //(3000, 2900,2900,3000) {3300, 3500, 35000, 3300} {3500,3700,3900} {3300,3550,3800,4100} {3200, 3500, 3800, 4100} {3600 3800 4000 4200}{3650 3850 4050 4250} 3650X4  3259X4 1259X4 (800) 1759X4(800) 2600X4 3500X4
  //   duration: 1000, //1000 1200 1400 800
  // }) 
  // ani_tsj3_fire.translateX(780*windowWidth/750).step() //600rpx
  // ani_tsj3_fire.opacity(1.0).step() //280px
  // // 象限：3 

  // var ani_tsj3_earth = wx.createAnimation({
  //   delay: 3600, //3850
  //   duration: 1000, //1400
  // })
  // ani_tsj3_earth.translateX(780*windowWidth/750).step() //277px
  // ani_tsj3_earth.opacity(1.0).step()

  // var ani_tsj3_wind = wx.createAnimation({
  //   delay: 3600, //4050
  //   duration: 1000, //1400
  // })
  // ani_tsj3_wind.translateX(780*windowWidth/750).step() //277px
  // ani_tsj3_wind.opacity(1.0).step()

  // var ani_tsj3_water = wx.createAnimation({
  //   delay: 3600, //4250
  //   duration: 1000, //1400
  // })
  // ani_tsj3_water.translateX(780*windowWidth/750).step() //277px
  // ani_tsj3_water.opacity(1.0).step() // 相信啊
  // // 象限： 1 //280px

  // selectauthors出现
  var ani_tsas = wx.createAnimation({
    delay:3700,
    duration:1000,
  })
  ani_tsas.translateX(-800*windowWidth/750).step()
  ani_tsas.opacity(1.0).step()//opaicty

  
  // 传入wxml
  this.setData({
    //ani_movebk: ani_tq3.export(),
    //ani_ddlikestar: ani_tsj2_c.export(),
    ani_honeystar: ani_tsj_op2_c.export(),
    ani_whateverstar: ani_tsj_op22_c.export(),
    ani_nolikestar: ani_tsj_op222_c.export(),
    ani_likeauthor: ani_tqq3.export(),
    // ani_fireauthor: ani_tsj3_fire.export(),
    // ani_earthauthor: ani_tsj3_earth.export(),
    // ani_windauthor: ani_tsj3_wind.export(),
    // ani_waterauthor: ani_tsj3_water.export(),
    ani_selectauthors: ani_tsas.export(),
    // ani_person_4: ani_tps_c.export(),
    // ani_person_5: ani_tps.export(),
  })

  // 该元素累积两分 y一分
  point[whichelement-1] = point[whichelement-1] + 1 
  console.log(point)

  checked1 = false;
}
 
},

coolstar: function(){
  var windowHeight = wx.getSystemInfoSync().windowHeight
  if (checked1){
  beginnum = 4
  // var ani_t0 = wx.createAnimation({
  //   delay: 2340, //2600 2400 2300 2350
  //   duration: 10//L 50 10
  // })
  // ani_t0.opacity(0.0).translate(5,0).step()

  // var ani_t0in = wx.createAnimation({
  //   delay: 6400, //6300 6450 6500 6000 4600
  //   duration: 50
  // })//ex.
  // ani_t0in.opacity(0.0).translate(5,0).step()

  if (windowHeight>=800){
    setTimeout(()=>{
    this.animate("#bgimg_blur1",[{
    translateX:-720*windowWidth/750,translateY:-2790*windowWidth/750,opacity:1.0},
    {translateX:-720*windowWidth/750, translateY:-2790*windowWidth/750,opacity:0.0}],10,)},2300)
  }

  if (windowHeight>=700 && windowHeight<800){
    setTimeout(()=>{
    this.animate("#bgimg_blur1",[
      {translateX:-700*windowWidth/750,translateY:-2760*windowWidth/750,opacity:1.0},
      {translateX:-700*windowWidth/750, translateY:-2760*windowWidth/750,opacity:0.0}],10,)},2300)
  }

  if (windowHeight>=600 && windowHeight<700){
    setTimeout(()=>{
    this.animate("#bgimg_blur1",[{
      translateX:-550*windowWidth/750,translateY:-2300*windowWidth/750,opacity:1.0},
      {translateX:-550*windowWidth/750, translateY:-2300*windowWidth/750,opacity:0.0}],10,)},2300)
  }

  if (windowHeight<600){
    setTimeout(()=>{
    this.animate("#bgimg_blur1",[
      {translateX:-550*windowWidth/750,translateY:-2260*windowWidth/750,opacity:1.0},
      {translateX:-550*windowWidth/750, translateY:-2260*windowWidth/750,opacity:0.0},],10,)},2300)
  }


  if (windowHeight>=800){
    setTimeout(()=>{
   this.animate("#bgimg_blur1",[ //blur2
     {translateX:-2300*windowWidth/750, translateY:-2620*windowWidth/750, opacity:0.0},
     {translateX:-2260*windowWidth/750, translateY:-1000*windowWidth/750,opacity:1.0}],10,)
   },7700) //.toExponential. 1850
 }

 if (windowHeight>=700&&windowHeight<800){
   setTimeout(()=>{
  this.animate("#bgimg_blur1",[
    {translateX:-2250*windowWidth/750,translateY:-2600*windowWidth/750, opacity:0.0},
    {translateX:-2240*windowWidth/750,translateY:-950*windowWidth/750,opacity:1.0}],10,)
  },7700)
}

if (windowHeight>=600&&windowHeight<700){
 setTimeout(()=>{
this.animate("#bgimg_blur1",[
  {translateX:-1800*windowWidth/750, translateY:-2140*windowWidth/750, opacity:0.0},
  {translateX:-1850*windowWidth/750, translateY:-770*windowWidth/750,opacity:1.0}],10,)
},7700)
}

if (windowHeight<600){
 setTimeout(()=>{
this.animate("#bgimg_blur1",[
  {translateX:-1780*windowWidth/750, translateY:-2123*windowWidth/750, opacity:0.0},
  {translateX:-1810*windowWidth/750, translateY:-750*windowWidth/750,opacity:1.0}],10,)
},7700)
}


  // 小人进出
  // var ani_tps_c = wx.createAnimation({
  //   delay: 2500,
  //   duration:600,
  // })
  // ani_tps_c.opacity(0.0).step()//opacitt

  // var ani_tps = wx.createAnimation({
  //   delay: 6700, //6500
  //   duration:600,
  // })
  // ani_tps.opacity(1.0).step()

  setTimeout(()=>{
    this.animate("#ani_person_4",[
      {opacity:1.0},
      {opacity:0.0}],600,)},2500)

  setTimeout(()=>{
    this.animate("#ani_person_5",[
      {opacity:0.0},
      {opacity:1.0}],600,)},6700)


  // 地图移动
  if (windowHeight>=800){
    setTimeout(()=>{
    this.animate("#bgimg",[{
      translateX:-720*windowWidth/750,translateY:-2790*windowWidth/750},
      {translateX:-2260*windowWidth/750, translateY:-1000*windowWidth/750}],3200,)
    },3300)// 2000
  }
  

    if (windowHeight>=700 && windowHeight<800){
      setTimeout(()=>{
      this.animate("#bgimg",[{
        translateX:-700*windowWidth/750,translateY:-2760*windowWidth/750},
        {translateX:-2240*windowWidth/750, translateY:-950*windowWidth/750}],3200,)},3300)
    }

    if (windowHeight>=600 && windowHeight<700){
      setTimeout(()=>{
      this.animate("#bgimg",[{
        translateX:-550*windowWidth/750,translateY:-2300*windowWidth/750},
        {translateX:-1850*windowWidth/750, translateY:-770*windowWidth/750}],3200,)},3300)
    }

    if (windowHeight<600){
      setTimeout(()=>{
      this.animate("#bgimg",[{
        translateX:-550*windowWidth/750,translateY:-2260*windowWidth/750},
        {translateX:-1810*windowWidth/750, translateY:-750*windowWidth/750}],3200,)},3300)
    }
  
  //ani_tq3.translate(-2200*windowWidth/750,-1150*windowWidth/750).step() // (-1200,-300)
  //{-1320,-300} (-1820,-595) {-1520,-595} {-12220,-450} {-1380,-400} {-1430,-380} {-1480,-380} {-1480.-370} {-1500,-370} {-1520,-370}(-1510,-370){-320, 720}
  //当前的问题和选项消失
  // var ani_tsj2_c = wx.createAnimation({
  //   delay: 1000, //600
  //   duration: 800  //800
  // })
  // ani_tsj2_c.opacity(0.0).step()

  setTimeout(()=>{
    this.animate("#ddlikestar",[
      {opacity:1.0},
      {opacity:0.0}],800,)},1000)

  var ani_tsj_op2_c = wx.createAnimation({
    delay: 600, //300 {880 904-940 1050 } 600X3
    duration: 600
  })
  ani_tsj_op2_c.opacity(0.0).translate(290*2*windowWidth/750,0).step() //235px,0-px
  //ani_tsj_op2_c.opacity(0.0).step() //ani_tsj2_
  ani_tsj_op2_c.translate(-300*2*windowWidth/750,0).step()

  var ani_tsj_op22_c = wx.createAnimation({
    delay: 600, //330 940
    duration: 600
  })
  ani_tsj_op22_c.opacity(0.0).translate(290*2*windowWidth/750,0).step()//235,0px
  //ani_tsj_op22_c.opacity(0.0).step()
  ani_tsj_op22_c.translate(-300*2*windowWidth/750,0).step() // 选项移动到点击不到的地方

  var ani_tsj_op222_c = wx.createAnimation({
    delay: 600, //400 1050
    duration: 600
  })
  ani_tsj_op222_c.opacity(0.0).translate(290*2*windowWidth/750,0).step() //235xp,0px
  //ani_tsj_op222_c. opacity(0.0). step() wm
  ani_tsj_op222_c.translate(-300*2*windowWidth/750,0).step()

  // 显示问题3和选项
  var ani_tsj3 = wx.createAnimation({
    delay: 7700,  //6000 6100 7100 7350 6750 2750 3750 3950 5400 7500 7700
    duration: 1200, //1200 1800
  })
  ani_tsj3.opacity(1.0).step()

  // var ani_tsj3_fire = wx.createAnimation({
  //   delay: 3600, //{2750} {2950X4} {3050X4} {3150X4} {3350 3550 37450 3950} {3400 3600 3800 4000} {3500,3700, 3900,4100} 3259X4 1259X4 1859X4 2600X4 3500X4
  //   duration: 1000, //1000 1400
  // }) 
  // ani_tsj3_fire.translateX(780*windowWidth/750).step()//Wi  277px 280px 297px
  // ani_tsj3_fire.opacity(1.0).translateX(780*windowWidth/750).step()

  // var ani_tsj3_earth = wx.createAnimation({
  //   delay: 3600, //3700
  //   duration: 1000, //1400
  // })
  // ani_tsj3_earth.translateX(780*windowWidth/750).step() //297px
  // ani_tsj3_earth.opacity(1.0).translateX(780*windowWidth/750).step() // 象限：3241

  // var ani_tsj3_wind = wx.createAnimation({
  //   delay: 3600, //3900
  //   duration: 1000, //1400
  // })
  // ani_tsj3_wind.translateX(780*windowWidth/750).step() //wubd 297px 39
  // ani_tsj3_wind.opacity(1.0).translateX(780*windowWidth/750).step() //3000

  // var ani_tsj3_water = wx.createAnimation({
  //   delay: 3600, //2750 30150 4100
  //   duration: 1000, //1400 800
  // })
  // ani_tsj3_water.translateX(780*windowWidth/750).step()  // trasn 297pcx
  // ani_tsj3_water.opacity(1.0).translateX(780*windowWidth/750).step()

  // selectauthors出现
  var ani_tsas = wx.createAnimation({
    delay:3600,
    duration:1000,
  })
  ani_tsas.translateX(-800*windowWidth/750).step()
  ani_tsas.opacity(1.0).step()//opaicty


  this.setData({
    //ani_movebk: ani_tq3.export(),
    //ani_ddlikestar: ani_tsj2_c.export(),
    ani_honeystar: ani_tsj_op2_c.export(),
    ani_whateverstar: ani_tsj_op22_c.export(),
    ani_nolikestar: ani_tsj_op222_c.export(), 
    ani_likeauthor: ani_tsj3.export(),
    //ani_likeauthor_part2 = ani_tsj3.export(),
    // ani_fireauthor: ani_tsj3_fire.export(),
    // ani_earthauthor: ani_tsj3_earth.export(),
    // ani_windauthor: ani_tsj3_wind.export(),
    // ani_waterauthor: ani_tsj3_water.export(),//,
    ani_selectauthors: ani_tsas.export(),
    //ani_blur: ani_t0.export(),
    //ani_blurin: ani_t0in.export(),
    // ani_person_4: ani_tps_c.export(),
    // ani_person_5: ani_tps.export(),
  });

  // 该元素累积零分
  point[whichelement-1] = point[whichelement-1] + 0 
  console.log(point)

  checked1 = false;
  }
  
},
  

coldstar:function(){
  var windowHeight = wx.getSystemInfoSync().windowHeight
  if (checked1){
// 糊化效果
  beginnum = 4
  // var ani_t0 = wx.createAnimation({
  //   delay: 2300, // 、、25600 2600 2500 2300 2550
  //   duration: 50//L
  // })
  // ani_t0.opacity(0.0).translate(5,0).step()

  // var ani_t0in = wx.createAnimation({
  //   delay: 6300, //6300 6400 6800 v6000 4600
  //   duration: 50
  // })//ex.
  // ani_t0in.opacity(0.0).translate(5,0).step()

  if (windowHeight>=800){
    setTimeout(()=>{
    this.animate("#bgimg_blur1",[{
    translateX:-720*windowWidth/750,translateY:-2790*windowWidth/750,opacity:1.0},
    {translateX:-720*windowWidth/750, translateY:-2790*windowWidth/750,opacity:0.0}],10,)},2300)
  }

  if (windowHeight>=700 && windowHeight<800){
    setTimeout(()=>{
    this.animate("#bgimg_blur1",[
      {translateX:-700*windowWidth/750,translateY:-2760*windowWidth/750,opacity:1.0},
      {translateX:-700*windowWidth/750, translateY:-2760*windowWidth/750,opacity:0.0}],10,)},2300)
  }

  if (windowHeight>=600 && windowHeight<700){
    setTimeout(()=>{
    this.animate("#bgimg_blur1",[{
      translateX:-550*windowWidth/750,translateY:-2300*windowWidth/750,opacity:1.0},
      {translateX:-550*windowWidth/750, translateY:-2300*windowWidth/750,opacity:0.0}],10,)},2300)
  }

  if (windowHeight<600){
    setTimeout(()=>{
    this.animate("#bgimg_blur1",[
      {translateX:-550*windowWidth/750,translateY:-2260*windowWidth/750,opacity:1.0},
      {translateX:-550*windowWidth/750, translateY:-2260*windowWidth/750,opacity:0.0},],10,)},2300)
  }


  if (windowHeight>=800){
    setTimeout(()=>{
   this.animate("#bgimg_blur1",[ //blur2
     {translateX:-2300*windowWidth/750, translateY:-2620*windowWidth/750, opacity:0.0},
     {translateX:-2260*windowWidth/750, translateY:-1000*windowWidth/750,opacity:1.0}],10,)
   },7700) //.toExponential. 1850
 }

 if (windowHeight>=700&&windowHeight<800){
   setTimeout(()=>{
  this.animate("#bgimg_blur1",[
    {translateX:-2250*windowWidth/750,translateY:-2600*windowWidth/750, opacity:0.0},
    {translateX:-2240*windowWidth/750,translateY:-950*windowWidth/750,opacity:1.0}],10,)
  },7700)
}

if (windowHeight>=600&&windowHeight<700){
 setTimeout(()=>{
this.animate("#bgimg_blur1",[
  {translateX:-1800*windowWidth/750, translateY:-2140*windowWidth/750, opacity:0.0},
  {translateX:-1850*windowWidth/750, translateY:-770*windowWidth/750,opacity:1.0}],10,)
},7700)
}

if (windowHeight<600){
 setTimeout(()=>{
this.animate("#bgimg_blur1",[
  {translateX:-1780*windowWidth/750, translateY:-2123*windowWidth/750, opacity:0.0},
  {translateX:-1810*windowWidth/750, translateY:-750*windowWidth/750,opacity:1.0}],10,)
},7700)
}


  // 小人进出
  // var ani_tps_c = wx.createAnimation({
  //   delay: 2500,
  //   duration:600,
  // })
  // ani_tps_c.opacity(0.0).step()//opacitt

  // var ani_tps = wx.createAnimation({
  //   delay: 6700,
  //   duration:600,
  // })
  // ani_tps.opacity(1.0).step()

  setTimeout(()=>{
    this.animate("#ani_person_4",[
      {opacity:1.0},
      {opacity:0.0}],600,)},2500)

  setTimeout(()=>{
    this.animate("#ani_person_5",[
      {opacity:0.0},
      {opacity:1.0}],600,)},6700)


  // 地图移动
  if (windowHeight>=800){
    setTimeout(()=>{
    this.animate("#bgimg",[{
      translateX:-720*windowWidth/750,translateY:-2790*windowWidth/750},
      {translateX:-2260*windowWidth/750, translateY:-1000*windowWidth/750}],3200,)
    },3300)
  }

  if (windowHeight>=700 && windowHeight<800){
    setTimeout(()=>{
    this.animate("#bgimg",[{
      translateX:-700*windowWidth/750,translateY:-2760*windowWidth/750},
      {translateX:-2240*windowWidth/750, translateY:-950*windowWidth/750}],3200,)},3300)
  }

  if (windowHeight>=600 && windowHeight<700){
    setTimeout(()=>{
    this.animate("#bgimg",[{
      translateX:-550*windowWidth/750,translateY:-2300*windowWidth/750},
      {translateX:-1850*windowWidth/750, translateY:-770*windowWidth/750}],3200,)},3300)
  }

  if (windowHeight<600){
    setTimeout(()=>{
    this.animate("#bgimg",[{
      translateX:-550*windowWidth/750,translateY:-2260*windowWidth/750},
      {translateX:-1810*windowWidth/750, translateY:-750*windowWidth/750}],3200,)},3300)
  }
  
  
  //if (windowHeight>=800){
  //  ani_tq3.translate(-2200*windowWidth/750,-1050*windowWidth/750).step()
  //}
 // if (windowHeight>=700 && windowHeight<800){
 //   ani_tq3.translate(-2200*windowWidth/750,-950*windowWidth/750).step()
 // }
  //if (windowHeight>=600 && windowHeight<700){
  //  ani_tq3.translate(-1910*windowWidth/750,-650*windowWidth/750).step()
  //}
  //if (windowHeight<600 ){
  //  ani_tq3.translate(-1810*windowWidth/750,-650*windowWidth/750).step()
  //}

  //ani_tq3.translate(-2200*windowWidth/750, -1150*windowWidth/750).step() //(-1320,-300)
//、{-1720,-615} {-1510,-370}
  // 当前的问题和选项消失
  // var ani_tsj2_c = wx.createAnimation({
  //   delay: 1000, // 600 1200
  //   duration: 800
  // })
  // ani_tsj2_c.opacity(0.0).step()

  setTimeout(()=>{
    this.animate("#ddlikestar",[
      {opacity:1.0},
      {opacity:0.0}],800,)},1000)

  var ani_tsj_op2_c = wx.createAnimation({
    delay: 600, //300,330,400 「880，940， 1050」
    duration: 600
  })
  ani_tsj_op2_c.opacity(0.0).translate(290*2*windowWidth/750,0).step() //====保留 看哪个更好====
  //ani_tsj_op2_c.opacity(0.0).step() //ani_tsj2_ // 235px
  ani_tsj_op2_c.translate(-300,0).step()

  var ani_tsj_op22_c = wx.createAnimation({
    delay: 600, //、、940
    duration: 600
  })
  ani_tsj_op22_c.opacity(0.0).translate(290*2*windowWidth/750,0).step()
  //ani_tsj_op22_c.opacity(0.0).translate(235,0).step() //235px
  ani_tsj_op22_c.translate(-300,0).step() // 选项移动到点击不到的地方

  var ani_tsj_op222_c = wx.createAnimation({
    delay: 600, //1050
    duration: 600
  })
  //ani_tsj_op222_c. opacity(0.0). step()
  //ani_tsj_op222_c.opacity(0.0).translate(235,0).step()
  //ani_tsj_op222_c.translate(-300,0).step()
  ani_tsj_op222_c.opacity(0.0).translate(290*2*windowWidth/750,0).step()
  ani_tsj_op222_c.translate(-300,0).step()

  // 显示问题3和选项
  var ani_tsj3 = wx.createAnimation({
    delay: 7700, //6000 7200 7750 6750 2750 3750 3950 5400
    duration: 1200,
  })
  ani_tsj3.opacity(1.0).translate(-3,0).step()

  // var ani_tsj3_fire = wx.createAnimation({
  //   delay: 3600, //2750 {30-50 3350 3650 3950 }{3150 3350 3750 4050} {3350 3550 3750 3950} {3400 3600 3800 4000} {3500 3700 3900 4100} 3259X4 1259X4 1859X4 2600X4 3500X4 
  //   duration: 1000, //1000 1400
  // }) 
  // //ani_tsj3_fire.opacity(1.0).translateX(277).step()
  // ani_tsj3_fire.translateX(780*windowWidth/750).step() //277px 280px 300px 297px
  // ani_tsj3_fire.opacity(1.0).translateX(780*windowWidth/750).step()

  // var ani_tsj3_earth = wx.createAnimation({
  //   delay: 3600, //3700
  //   duration: 1000, //1400
  // })
  // ani_tsj3_earth.translateX(780*windowWidth/750).step() //297*2px rpx
  // ani_tsj3_earth.opacity(1.0).translateX(780*windowWidth/750).step()

  // var ani_tsj3_wind = wx.createAnimation({
  //   delay: 3600, //3900
  //   duration: 1000, //1400
  // })
  // ani_tsj3_wind.translateX(780*windowWidth/750).step() //300*2rpx
  // ani_tsj3_wind.translateX(780*windowWidth/750).opacity(1.0).step()
  // //ani_tsj3_wind.opacity(1.0).translate(3,-6).step() oa (1/)
  // //////////////----这里风可以----////////////////

  // var ani_tsj3_water = wx.createAnimation({
  //   delay: 3600, //4100
  //   duration: 1000, //1400
  // })
  // ani_tsj3_water.translateX(780*windowWidth/750).step() //297*2
  // ani_tsj3_water.opacity(1.0).translateX(780*windowWidth/750).step()

  // selectauthors出现
  var ani_tsas = wx.createAnimation({
    delay:3600,
    duration:1000,
  })
  ani_tsas.translateX(-800*windowWidth/750).step()
  ani_tsas.opacity(1.0).step()//opaicty


  this.setData({
    //ani_movebk: ani_tq3.export(),
    //ani_ddlikestar: ani_tsj2_c.export(),
    ani_honeystar: ani_tsj_op2_c.export(),
    ani_whateverstar: ani_tsj_op22_c.export(),
    ani_nolikestar: ani_tsj_op222_c.export(), 
    ani_likeauthor: ani_tsj3.export(),
    // ani_likeauthor_part2:ani_tsj3.export(),
    // ani_fireauthor: ani_tsj3_fire.export(),
    // ani_earthauthor: ani_tsj3_earth.export(),
    // ani_windauthor: ani_tsj3_wind.export(),
    // ani_waterauthor: ani_tsj3_water.export(),
    ani_selectauthors: ani_tsas.export(),
    //ani_blur: ani_t0.export(),
    //ani_blurin: ani_t0in.export(),
    // ani_person_4: ani_tps_c.export(),
    // ani_person_5: ani_tps.export(),
    //ani_blurin: ani_toin.export(),
  })

  // 该元素累积负两分 一分
  point[whichelement-1] = point[whichelement-1] - 1
  console.log(point)

  checked1 = false;
  }
  
},

fireauthorsure:function(){
  var windowHeight = wx.getSystemInfoSync().windowHeight
  if (checked3){
    //num
  beginnum = 5
  // var ani_t0 = wx.createAnimation({
  //   delay: 2330, // 2700、、 2650 2850
  //   duration: 20 // 50
  // })//
  // ani_t0.translate(-5,0).step()//expor

  // var ani_t0in = wx.createAnimation({
  //   delay: 5950, //、、5600 6100 7000 5500 4000
  //   duration: 50
  // })//
  // ani_t0in.translate(-5,0).step()

  // 糊化
  if (windowHeight>=800){
    setTimeout(()=>{
   this.animate("#bgimg_blur1",[ //blur2
     {translateX:-2260*windowWidth/750,translateY:-1000*windowWidth/750,opacity:1.0},
     {translateX:-2260*windowWidth/750,translateY:-1000*windowWidth/750,opacity:0.0}],10,)
   },2350) //.toExponential. 1850
 }
  if (windowHeight>=700&&windowHeight<800){
    setTimeout(()=>{
   this.animate("#bgimg_blur1",[
     {translateX:-2240*windowWidth/750,translateY:-950*windowWidth/750,opacity:1.0},
     {translateX:-2240*windowWidth/750,translateY:-950*windowWidth/750,opacity:0.0}],10,)
   },2350)
 }

  if (windowHeight>=600&&windowHeight<700){
   setTimeout(()=>{
  this.animate("#bgimg_blur1",[
    {translateX:-1850*windowWidth/750, translateY:-770*windowWidth/750, opacity:1.0},
    {translateX:-1850*windowWidth/750, translateY:-770*windowWidth/750,opacity:0.0}],10,)
  },2350)
  }

  if (windowHeight<600){
   setTimeout(()=>{
  this.animate("#bgimg_blur1",[
    {translateX:-1810*windowWidth/750, translateY:-750*windowWidth/750, opacity:1.0},
    {translateX:-1810*windowWidth/750, translateY:-750*windowWidth/750,opacity:0.0}],10,)
  },2350)
  }


  if (windowHeight>=800){
    setTimeout(()=>{
    this.animate("#bgimg_blur1",[{
    translateX:-720*windowWidth/750,translateY:-2790*windowWidth/750,opacity:0.0},
    {translateX:-900*windowWidth/750, translateY:-1620*windowWidth/750,opacity:1.0}],10,)},7200)
  }

  if (windowHeight>=700 && windowHeight<800){
    setTimeout(()=>{
    this.animate("#bgimg_blur1",[
      {translateX:-700*windowWidth/750,translateY:-2760*windowWidth/750,opacity:0.0},
      {translateX:-885*windowWidth/750, translateY:-1580*windowWidth/750,opacity:1.0}],10,)},7200)
  }

  if (windowHeight>=600 && windowHeight<700){
    setTimeout(()=>{
    this.animate("#bgimg_blur1",[{
      translateX:-550*windowWidth/750,translateY:-2300*windowWidth/750,opacity:0.0},
      {translateX:-625*windowWidth/750, translateY:-1310*windowWidth/750,opacity:1.0}],10,)},7200)
  }

  if (windowHeight<600){
    setTimeout(()=>{
    this.animate("#bgimg_blur1",[
      {translateX:-550*windowWidth/750,translateY:-2260*windowWidth/750,opacity:0.0},
      {translateX:-585*windowWidth/750, translateY:-1300*windowWidth/750,opacity:1.0},],10,)},7200)
  }


  // 小人进出
  // var ani_tps_c = wx.createAnimation({
  //   delay: 2550,
  //   durtaion:600,
  // })
  // ani_tps_c.opacity(0.0).step()

  // var ani_tps = wx.createAnimation({
  //   delay: 6200, //5150
  //   durtaion:600,
  // })
  // ani_tps.opacity(1.0).step()

  setTimeout(()=>{
    this.animate("#ani_person_5",[
      {opacity:1.0},
      {opacity:0.0}],600,)},2550)

  setTimeout(()=>{
    this.animate("#ani_person_6",[
      {opacity:0.0},
      {opacity:1.0}],600,)},6200)


  // 地图转移
  if (windowHeight>=800){
    setTimeout(()=>{
    this.animate("#bgimg",[{
      translateX:-2260*windowWidth/750,translateY:-1000*windowWidth/750},
      {translateX:-900*windowWidth/750, translateY:-1620*windowWidth/750}],2650,)
    },3350)
  
  }

  if (windowHeight>=700 && windowHeight<800){
    setTimeout(()=>{
    this.animate("#bgimg",[
      {translateX:-2240*windowWidth/750, translateY:-950*windowWidth/750},
      {translateX:-885*windowWidth/750, translateY:-1580*windowWidth/750},
    ],2650,)},3350)
  }

  if (windowHeight>=600 && windowHeight<700){
    setTimeout(()=>{
    this.animate("#bgimg",[
      {translateX: -1850*windowWidth/750,translateY:-770*windowWidth/750},
      {translateX:-625*windowWidth/750, translateY:-1310*windowWidth/750}],2650,)},3350)
  }

  if (windowHeight<600){
    setTimeout(()=>{
    this.animate("#bgimg",[
      {translateX:-1810*windowWidth/750, translateY:-750*windowWidth/750},
      {translateX:-585*windowWidth/750, translateY:-1300*windowWidth/750}],2650,)},3350)
  }
  
  // 下一题抽卡牌问题显示
  var ani_pc = wx.createAnimation({
    delay: 7200, // 3700 4100 4400 4800 57500 5750 5600 5800 6700  6750 7850 6300 3300 3450 5050
    duration: 1200 //1300 1500
  })
  ani_pc.translate(0,3).opacity(1.0).step()
  //ani_pc.translate(3,0).opacity(1.0).step()
  //ani_pc.translate(3,0).opacity(1.0).export()

  // 本题问题消失
  // var ani_tqq3_c = wx.createAnimation({
  //   delay: 1000, // 700 1400
  //   duration: 800 //500 700 900
  // })
  // ani_tqq3_c.opacity(0.0).step()
  // // ani--

  setTimeout(()=>{
    this.animate("#likeauthor",[
      {opacity:1.0},
      {opacity:0.0}],800,)},1000)
  

  // 卡牌浮现
  var ani_show = wx.createAnimation({
    delay: 8000, //4100  4800  4900 5600 6000 6300 7100 7500 7700 7800 8900 7200 4200 4350 5950
    duration: 1200, //1200 1400
  })
  ani_show.opacity(1.0).translate(-370*2/750*windowWidth,0).step() 
  //、、ani_show.translate(-370*2/750*windowWidth,0).step() //、// -320*2 -420*2
  //ani_show.translate(0,-900).step()



  // 火象作家的简介消失 消失
  // var ani_ta1_c = wx.createAnimation({
  //   delay: 600, //、、、、\ 1000
  //   duration: 700 //1200 800
  // })
  // ani_ta1_c.opacity(0.0).translateX(800*windowWidth/750).step()
  // ani_ta1_c.opacity(0.0).translateX(0).step()

  // 选择作家消失
  var ani_tsas_c = wx.createAnimation({
    delay: 600,
    duration:600
  })
  ani_tsas_c.opacity(0.0).translate(-800*windowWidth/750).step()
  ani_tsas_c.translate(0,0).step()


  // 数据传入wxml
  this.setData({
    // ani_person_5: ani_tps_c.export(),
    // ani_person_6: ani_tps.export(),
    ani_pickcards: ani_pc.export(),
    // ani_likeauthor: ani_tqq3_c.export(), 
    ani_card: ani_show.export(),
    ani_selectauthors: ani_tsas_c.export(),
  })

// 火象元素积累两分
  authorelement = 1
  point[authorelement-1] = point[authorelement-1]+2
  console.log(point)

  //决定卡牌背面

  if (backgroundcard == 1)
  {this.setData({starcardspic: "cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌背面/卡牌背面-type1.jpeg"})}

  if (backgroundcard == 2)
  {this.setData({starcardspic: "cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌背面/卡牌背面-type2.jpeg"})}

  if (backgroundcard == 3)
  {this.setData({starcardspic:"cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌背面/卡牌背面-type3.jpeg"})}

  if (backgroundcard == 4)
  {this.setData({starcardspic:"cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌背面/卡牌背面-type4.jpeg"})}

  if (backgroundcard == 5)
  {this.setData({starcardspic:"cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌背面/卡牌背面-type5.jpeg"})}

  if (backgroundcard == 6)
  {this.setData({starcardspic: "cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌背面/卡牌背面-type6.jpeg"})}

    checked3 = false;
  }
  
},



  // fireauthor:function(){
  //   //checked3-
  //   checked3 = true;
  //   if (checked2){
  //   // 显示火象作家的简介
  //   var ani_ta1 = wx.createAnimation({
  //     delay: 200, //1000
  //     duration: 1000 //1200
  //   })
  //   // ani_ta1.opacity(0.0).translateX(800*windowWidth/750).step()
  //   // ani_ta1.opacity(1.0).translateX(800*windowWidth/750).step()
  //   ani_ta1.opacity(1.0).step()
    

  //   // 显示确认按钮
  //   var ani_ti7 = wx.createAnimation({ // /var
  //     delay: 300, //1000 800
  //     duration: 600 //500
  //   })
  //   //ani_ti7.translate(150,0).step()
  //   ani_ti7.translate(-425*windowWidth/750,0).step()
  //   ani_ti7.opacity(1.0).step()

  //   var ani_ti8 = wx.createAnimation({
  //     delay: 300, //1000 800
  //     duration: 600 //500
  //   })
  //   //ani_ti8.translate(170,0).step()
  //   //ani_xz ani_i translate(5)
  //   ani_ti8.translate(400*windowWidth/750,0).step()
  //   ani_ti8.opacity(1.0).step()

  //   // 其他选项(四象作家)消失
  //   var ani_tp3_c = wx.createAnimation({  //ani_tp3_c
  //     delay: 600, //600X4A
  //     duration: 600 //400 550 650 900
  //   })
  //   ani_tp3_c.opacity(0.0).translate(780*windowWidth/750).step() ///opacitt translate(280,0) 277*2rpx
  //   //ani_tp_c.opacity(0.0).step()
  //   ani_tp3_c.translate(0,0).step()
    
  //   var ani_tp4_c = wx.createAnimation({  //ani_tp3_c
  //     delay: 600, //600
  //     duration: 600 //900
  //   })
  //   ani_tp4_c.opacity(0.0).translate(780*windowWidth/750).step() //wnu 277*2rpx
  //   ani_tp4_c.translate(0,0).step()

  //   var ani_tp5_c = wx.createAnimation({  //ani_tp3_c
  //     delay: 600, //900
  //     duration: 600 //900
  //   })
  //   ani_tp5_c.opacity(0.0).translate(780*windowWidth/750).step() //01.0 277*2rpx
  //   ani_tp5_c.translate(0,0).step()

  //   var ani_tp6_c = wx.createAnimation({  //ani_tp3_c
  //     delay: 600, //1050
  //     duration: 600 //900
  //   })
  //   ani_tp6_c.opacity(0.0).translate(780*windowWidth/750).step() //WId 277*2rpx 8
  //   ani_tp6_c.translate(0.0,0.0).step()

  //   this.setData({
  //     //intro_fireauthour: ani_ta1.export(),
  //     ani_introfireauthor: ani_ta1.export(),
  //     ani_authorsure: ani_ti7.export(),
  //     ani_authorback: ani_ti8.export(),
  //     ani_fireauthor: ani_tp3_c.export(),
  //     ani_earthauthor: ani_tp4_c.export(),
  //     ani_windauthor: ani_tp5_c.export(),
  //     ani_waterauthor: ani_tp6_c.export(),
  //   })

  //   authorelement = "1"

  //   checked2 = false;
  //   }


  // },
  
  earthauthorsure:function(){
    var windowHeight = wx.getSystemInfoSync().windowHeight
    if (checked3){
    beginnum = 5
    // var ani_t0 = wx.createAnimation({
    //   delay: 2330, 
    //   duration: 20 
    // })
    // ani_t0.translate(-5,0).step()
  
    // var ani_t0in = wx.createAnimation({
    //   delay: 5950,
    //   duration: 50
    // })
    // ani_t0in.translate(-5,0).step()
  
    // 糊化
    if (windowHeight>=800){
      setTimeout(()=>{
     this.animate("#bgimg_blur1",[
       {translateX:-2260*windowWidth/750,translateY:-1000*windowWidth/750,opacity:1.0},
       {translateX:-2260*windowWidth/750,translateY:-1000*windowWidth/750,opacity:0.0}],10,)
     },2350)
   }
    if (windowHeight>=700&&windowHeight<800){
      setTimeout(()=>{
     this.animate("#bgimg_blur1",[
       {translateX:-2240*windowWidth/750,translateY:-950*windowWidth/750,opacity:1.0},
       {translateX:-2240*windowWidth/750,translateY:-950*windowWidth/750,opacity:0.0}],10,)
     },2350)
   }
  
    if (windowHeight>=600&&windowHeight<700){
     setTimeout(()=>{
    this.animate("#bgimg_blur1",[
      {translateX:-1850*windowWidth/750, translateY:-770*windowWidth/750, opacity:1.0},
      {translateX:-1850*windowWidth/750, translateY:-770*windowWidth/750,opacity:0.0}],10,)
    },2350)
    }
  
    if (windowHeight<600){
     setTimeout(()=>{
    this.animate("#bgimg_blur1",[
      {translateX:-1810*windowWidth/750, translateY:-750*windowWidth/750, opacity:1.0},
      {translateX:-1810*windowWidth/750, translateY:-750*windowWidth/750,opacity:0.0}],10,)
    },2350)
    }
  
  
    if (windowHeight>=800){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[{
      translateX:-720*windowWidth/750,translateY:-2790*windowWidth/750,opacity:0.0},
      {translateX:-900*windowWidth/750, translateY:-1620*windowWidth/750,opacity:1.0}],10,)},7200)
    }
  
    if (windowHeight>=700 && windowHeight<800){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[
        {translateX:-700*windowWidth/750,translateY:-2760*windowWidth/750,opacity:0.0},
        {translateX:-885*windowWidth/750, translateY:-1580*windowWidth/750,opacity:1.0}],10,)},7200)
    }
  
    if (windowHeight>=600 && windowHeight<700){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[{
        translateX:-550*windowWidth/750,translateY:-2300*windowWidth/750,opacity:0.0},
        {translateX:-625*windowWidth/750, translateY:-1310*windowWidth/750,opacity:1.0}],10,)},7200)
    }
  
    if (windowHeight<600){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[
        {translateX:-550*windowWidth/750,translateY:-2260*windowWidth/750,opacity:0.0},
        {translateX:-585*windowWidth/750, translateY:-1300*windowWidth/750,opacity:1.0},],10,)},7200)
    }
  
  
    // 小人进出
    // var ani_tps_c = wx.createAnimation({
    //   delay: 2550,
    //   durtaion:600,
    // })
    // ani_tps_c.opacity(0.0).step()
  
    // var ani_tps = wx.createAnimation({
    //   delay: 6200, 
    //   durtaion:600,
    // })
    // ani_tps.opacity(1.0).step()

    setTimeout(()=>{
      this.animate("#ani_person_5",[
        {opacity:1.0},
        {opacity:0.0}],600,)},2550)
  
    setTimeout(()=>{
      this.animate("#ani_person_6",[
        {opacity:0.0},
        {opacity:1.0}],600,)},6200)
  
  
    // 地图转移
    if (windowHeight>=800){
      setTimeout(()=>{
      this.animate("#bgimg",[{
        translateX:-2260*windowWidth/750,translateY:-1000*windowWidth/750},
        {translateX:-900*windowWidth/750, translateY:-1620*windowWidth/750}],2650,)
      },3350)
    
    }
  
    if (windowHeight>=700 && windowHeight<800){
      setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX:-2240*windowWidth/750, translateY:-950*windowWidth/750},
        {translateX:-885*windowWidth/750, translateY:-1580*windowWidth/750},
      ],2650,)},3350)
    }
  
    if (windowHeight>=600 && windowHeight<700){
      setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX: -1850*windowWidth/750,translateY:-770*windowWidth/750},
        {translateX:-625*windowWidth/750, translateY:-1310*windowWidth/750}],2650,)},3350)
    }
  
    if (windowHeight<600){
      setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX:-1810*windowWidth/750, translateY:-750*windowWidth/750},
        {translateX:-585*windowWidth/750, translateY:-1300*windowWidth/750}],2650,)},3350)
    }
    
    // 下一题抽卡牌问题显示
    var ani_pc = wx.createAnimation({
      delay: 7200,
      duration: 1200,
    })
    ani_pc.translate(0,3).opacity(1.0).step()
  
    // 本题问题消失
    // var ani_tqq3_c = wx.createAnimation({
    //   delay: 1000,
    //   duration: 800,
    // })
    // ani_tqq3_c.opacity(0.0).step()
    // // ani--

    setTimeout(()=>{
      this.animate("#likeauthor",[
        {opacity:1.0},
        {opacity:0.0}],800,)},1000)
  
    // 卡牌浮现
    var ani_show = wx.createAnimation({
      delay: 8000,
      duration: 1200, 
    })
    ani_show.opacity(1.0).translate(-370*2/750*windowWidth,0).step() 
  
    // 选择作家消失
    var ani_tsas_c = wx.createAnimation({
      delay: 600,
      duration:600
    })
    ani_tsas_c.opacity(0.0).translate(-800*windowWidth/750).step()
    ani_tsas_c.translate(0,0).step()
  
  
    // 数据传入wxml
    this.setData({
      // ani_person_5: ani_tps_c.export(),
      // ani_person_6: ani_tps.export(),
      ani_pickcards: ani_pc.export(),
      // ani_likeauthor: ani_tqq3_c.export(), 
      ani_card: ani_show.export(),
      ani_selectauthors: ani_tsas_c.export(),
    })
  
  // 土象元素积累两分
    authorelement = 2
    point[authorelement-1] = point[authorelement-1]+2
    console.log(point)
  
    //决定卡牌背面
    if (backgroundcard == 1)
    {this.setData({starcardspic: "cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌背面/卡牌背面-type1.jpeg"})}
  
    if (backgroundcard == 2)
    {this.setData({starcardspic: "cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌背面/卡牌背面-type2.jpeg"})}
  
    if (backgroundcard == 3)
    {this.setData({starcardspic:"cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌背面/卡牌背面-type3.jpeg"})}
  
    if (backgroundcard == 4)
    {this.setData({starcardspic:"cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌背面/卡牌背面-type4.jpeg"})}
  
    if (backgroundcard == 5)
    {this.setData({starcardspic:"cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌背面/卡牌背面-type5.jpeg"})}
  
    if (backgroundcard == 6)
    {this.setData({starcardspic: "cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌背面/卡牌背面-type6.jpeg"})}
  
    checked3 = false;
    }
  },

  // earthauthor:function(){
  //   checked3 = true;
  //   if (checked2){
  //  // 显示土象作家的简介
  //   var ani_ta2 = wx.createAnimation({
  //     delay: 200, //1000 1200
  //     duration: 1000 //1200
  //   })
  //     //ani_ta1.translate(150,0).step()
  //   // ani_ta2.opacity(0.0).translateX(800*windowWidth/750).step()//1600
  //   // ani_ta2.opacity(1.0).translateX(800*windowWidth/750).step()
  //   ani_ta2.opacity(1.0).step()

  //   // 显示确认按钮
  //   var ani_ti7 = wx.createAnimation({ // /var
  //     delay: 300, //1000 600
  //     duration: 600
  //   })
  //   //ani_ti7.translate(150,0).step()
  //   ani_ti7.translateX(-425*windowWidth/750).step()
  //   ani_ti7.opacity(1.0).step()
    
  //   var ani_ti8 = wx.createAnimation({
  //     delay: 300, //1000
  //     duration: 600
  //   })
  //   //ani_ti8.translate(170,0).step()
  //   //ani_xz ani_i translate(5)
  //   ani_ti8.translate(400*windowWidth/750,0).step()
  //   ani_ti8.opacity(1.0).step()
    
  //   // 其他选项(四象作家)消失
  //   var ani_tp3_c = wx.createAnimation({  //ani_tp3_c
  //     delay: 600, // 300 {300,500,700,900} <600,750,900,1050> 600X4A
  //     duration: 600 //400 550 650 900
  //   })
  //   ani_tp3_c.opacity(0.0).translate(780*windowWidth/750).step() ///opacitt translate(280,0) 277*2rpx 600
  //   //ani_tp_c.opacity(0.0).step()
  //   ani_tp3_c.translate(0,0).step()
        
  //   var ani_tp4_c = wx.createAnimation({  //ani_tp3_c
  //     delay: 600, //、、750
  //     duration: 600 //900
  //   })
  //   ani_tp4_c.opacity(0.0).translate(780*windowWidth/750).step() //wnu 277*2rpx
  //   ani_tp4_c.translate(0,0).step()
    
  //   var ani_tp5_c = wx.createAnimation({  //ani_tp3_c
  //     delay: 600, //900
  //     duration: 600 //900
  //   })
  //   ani_tp5_c.opacity(0.0).translate(780*windowWidth/750).step() //01.0 277*2rpx
  //   ani_tp5_c.translate(0,0).step()
    
  //   var ani_tp6_c = wx.createAnimation({  //ani_tp3_c
  //     delay: 600, //1050
  //     duration: 600 //900
  //   })
  //   ani_tp6_c.opacity(0.0).translate(780*windowWidth/750).step() //WId 277*2rpx 8
  //   ani_tp6_c.translate(0.0,0.0).step()
    
  //   this.setData({
  //     //intro_fireauthour: ani_ta1.export(),
  //     ani_introearthauthor: ani_ta2.export(),
  //     ani_authorsure: ani_ti7.export(),
  //     ani_authorback: ani_ti8.export(),
  //     ani_fireauthor: ani_tp3_c.export(),
  //     ani_earthauthor: ani_tp4_c.export(),
  //     ani_windauthor: ani_tp5_c.export(),
  //     ani_waterauthor: ani_tp6_c.export(),
  //   })

  //   authorelement = "2"
    
    
  //     checked2 = false;
  //   }
   
  // },

  windauthorsure:function(){
    var windowHeight = wx.getSystemInfoSync().windowHeight
    if (checked3){
    beginnum = 5
    // var ani_t0 = wx.createAnimation({
    //   delay: 2330, 
    //   duration: 20 
    // })
    // ani_t0.translate(-5,0).step()
  
    // var ani_t0in = wx.createAnimation({
    //   delay: 5950,
    //   duration: 50
    // })
    // ani_t0in.translate(-5,0).step()
  
    // 糊化
    if (windowHeight>=800){
      setTimeout(()=>{
     this.animate("#bgimg_blur1",[
       {translateX:-2260*windowWidth/750,translateY:-1000*windowWidth/750,opacity:1.0},
       {translateX:-2260*windowWidth/750,translateY:-1000*windowWidth/750,opacity:0.0}],10,)
     },2350)
   }
    if (windowHeight>=700&&windowHeight<800){
      setTimeout(()=>{
     this.animate("#bgimg_blur1",[
       {translateX:-2240*windowWidth/750,translateY:-950*windowWidth/750,opacity:1.0},
       {translateX:-2240*windowWidth/750,translateY:-950*windowWidth/750,opacity:0.0}],10,)
     },2350)
   }
  
    if (windowHeight>=600&&windowHeight<700){
     setTimeout(()=>{
    this.animate("#bgimg_blur1",[
      {translateX:-1850*windowWidth/750, translateY:-770*windowWidth/750, opacity:1.0},
      {translateX:-1850*windowWidth/750, translateY:-770*windowWidth/750,opacity:0.0}],10,)
    },2350)
    }
  
    if (windowHeight<600){
     setTimeout(()=>{
    this.animate("#bgimg_blur1",[
      {translateX:-1810*windowWidth/750, translateY:-750*windowWidth/750, opacity:1.0},
      {translateX:-1810*windowWidth/750, translateY:-750*windowWidth/750,opacity:0.0}],10,)
    },2350)
    }
  
  
    if (windowHeight>=800){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[{
      translateX:-720*windowWidth/750,translateY:-2790*windowWidth/750,opacity:0.0},
      {translateX:-900*windowWidth/750, translateY:-1620*windowWidth/750,opacity:1.0}],10,)},7200)
    }
  
    if (windowHeight>=700 && windowHeight<800){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[
        {translateX:-700*windowWidth/750,translateY:-2760*windowWidth/750,opacity:0.0},
        {translateX:-885*windowWidth/750, translateY:-1580*windowWidth/750,opacity:1.0}],10,)},7200)
    }
  
    if (windowHeight>=600 && windowHeight<700){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[{
        translateX:-550*windowWidth/750,translateY:-2300*windowWidth/750,opacity:0.0},
        {translateX:-625*windowWidth/750, translateY:-1310*windowWidth/750,opacity:1.0}],10,)},7200)
    }
  
    if (windowHeight<600){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[
        {translateX:-550*windowWidth/750,translateY:-2260*windowWidth/750,opacity:0.0},
        {translateX:-585*windowWidth/750, translateY:-1300*windowWidth/750,opacity:1.0},],10,)},7200)
    }
  
  
    // 小人进出
    // var ani_tps_c = wx.createAnimation({
    //   delay: 2550,
    //   durtaion:600,
    // })
    // ani_tps_c.opacity(0.0).step()
  
    // var ani_tps = wx.createAnimation({
    //   delay: 6200, 
    //   durtaion:600,
    // })
    // ani_tps.opacity(1.0).step()

    setTimeout(()=>{
      this.animate("#ani_person_5",[
        {opacity:1.0},
        {opacity:0.0}],600,)},2550)
  
    setTimeout(()=>{
      this.animate("#ani_person_6",[
        {opacity:0.0},
        {opacity:1.0}],600,)},6200)
  
  
    // 地图转移
    if (windowHeight>=800){
      setTimeout(()=>{
      this.animate("#bgimg",[{
        translateX:-2260*windowWidth/750,translateY:-1000*windowWidth/750},
        {translateX:-900*windowWidth/750, translateY:-1620*windowWidth/750}],2650,)
      },3350)
    
    }
  
    if (windowHeight>=700 && windowHeight<800){
      setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX:-2240*windowWidth/750, translateY:-950*windowWidth/750},
        {translateX:-885*windowWidth/750, translateY:-1580*windowWidth/750},
      ],2650,)},3350)
    }
  
    if (windowHeight>=600 && windowHeight<700){
      setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX: -1850*windowWidth/750,translateY:-770*windowWidth/750},
        {translateX:-625*windowWidth/750, translateY:-1310*windowWidth/750}],2650,)},3350)
    }
  
    if (windowHeight<600){
      setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX:-1810*windowWidth/750, translateY:-750*windowWidth/750},
        {translateX:-585*windowWidth/750, translateY:-1300*windowWidth/750}],2650,)},3350)
    }
    
    // 下一题抽卡牌问题显示
    var ani_pc = wx.createAnimation({
      delay: 7200,
      duration: 1200,
    })
    ani_pc.translate(0,3).opacity(1.0).step()
  
    // 本题问题消失
    // var ani_tqq3_c = wx.createAnimation({
    //   delay: 1000,
    //   duration: 800,
    // })
    // ani_tqq3_c.opacity(0.0).step()
    // // ani--
    setTimeout(()=>{
      this.animate("#likeauthor",[
        {opacity:1.0},
        {opacity:0.0}],800,)},1000)
  
    // 卡牌浮现
    var ani_show = wx.createAnimation({
      delay: 8000,
      duration: 1200, 
    })
    ani_show.opacity(1.0).translate(-370*2/750*windowWidth,0).step() 
  
    // 选择作家消失
    var ani_tsas_c = wx.createAnimation({
      delay: 600,
      duration:600
    })
    ani_tsas_c.opacity(0.0).translate(-800*windowWidth/750).step()
    ani_tsas_c.translate(0,0).step()
  
  
    // 数据传入wxml
    this.setData({
      // ani_person_5: ani_tps_c.export(),
      // ani_person_6: ani_tps.export(),
      ani_pickcards: ani_pc.export(),
      // ani_likeauthor: ani_tqq3_c.export(), 
      ani_card: ani_show.export(),
      ani_selectauthors: ani_tsas_c.export(),
    })
  
  // 风象元素积累两分
    authorelement = 3
    point[authorelement-1] = point[authorelement-1]+2
    console.log(point)
  
    //决定卡牌背面
    if (backgroundcard == 1)
    {this.setData({starcardspic: "cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌背面/卡牌背面-type1.jpeg"})}
  
    if (backgroundcard == 2)
    {this.setData({starcardspic: "cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌背面/卡牌背面-type2.jpeg"})}
  
    if (backgroundcard == 3)
    {this.setData({starcardspic:"cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌背面/卡牌背面-type3.jpeg"})}
  
    if (backgroundcard == 4)
    {this.setData({starcardspic:"cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌背面/卡牌背面-type4.jpeg"})}
  
    if (backgroundcard == 5)
    {this.setData({starcardspic:"cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌背面/卡牌背面-type5.jpeg"})}
  
    if (backgroundcard == 6)
    {this.setData({starcardspic: "cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌背面/卡牌背面-type6.jpeg"})}
  
    checked3 = false;
    }
  },

  // windauthor:function(){
  //   checked3 = true;
  //   if (checked2) {    
  //   // 显示feng风（土）象作家的简介
  //   var ani_ta3 = wx.createAnimation({
  //     delay: 200, //1200
  //     duration: 1000 //1200
  //   })
  //   //ani_ta1.translate(150,0).step()
  //   // ani_ta3.opacity(0.0).translateX(800*windowWidth/750).step()
  //   // ani_ta3.opacity(1.0).translateX(800*windowWidth/750).step()
  //   ani_ta3.opacity(1.0).step()
    
  //   // 显示确认按钮
  //   var ani_ti7 = wx.createAnimation({ // /var
  //     delay: 300, //1000
  //     duration: 600
  //   })
  //   //ani_ti7.translate(150,0).step()
  //   ani_ti7.translate(-425*windowWidth/750,0).step()
  //   ani_ti7.opacity(1.0).step()
    
  //   var ani_ti8 = wx.createAnimation({
  //     delay: 300, //1000
  //     duration: 600
  //   })
  //   //ani_ti8.translate(170,0).step()
  //   //ani_xz ani_i translate(5)
  //   ani_ti8.translate(400*windowWidth/750,0).step()
  //   ani_ti8.opacity(1.0).step()
    
  //   // 其他选项(四象作家)消失
  //   var ani_tp3_c = wx.createAnimation({  //ani_tp3_c
  //     delay: 600, // 300 {300,500,700,900} <600,750,900,1050> 600X4A
  //     duration: 600 //400 550 650 900
  //   })
  //   ani_tp3_c.opacity(0.0).translate(780*windowWidth/750).step() ///opacitt translate(280,0) 277*2rpx 600
  //   //ani_tp_c.opacity(0.0).step()
  //   ani_tp3_c.translate(0,0).step()
        
  //   var ani_tp4_c = wx.createAnimation({  //ani_tp3_c
  //     delay: 600, //、、750
  //     duration: 600 //900
  //   })
  //   ani_tp4_c.opacity(0.0).translate(780*windowWidth/750).step() //wnu 277*2rpx
  //   ani_tp4_c.translate(0,0).step()
    
  //   var ani_tp5_c = wx.createAnimation({  //ani_tp3_c
  //     delay: 600, //900
  //     duration: 600 //900
  //   })
  //   ani_tp5_c.opacity(0.0).translate(780*windowWidth/750).step() //01.0 277*2rpx
  //   ani_tp5_c.translate(0,0).step()
    
  //   var ani_tp6_c = wx.createAnimation({  //ani_tp3_c
  //     delay: 600, //1050
  //     duration: 600 //900
  //   })
  //   ani_tp6_c.opacity(0.0).translate(780*windowWidth/750).step() //WId 277*2rpx 8
  //   ani_tp6_c.translate(0.0,0.0).step()
    
  //   this.setData({
  //     //intro_fireauthour: ani_ta1.export(),
  //     ani_introwindauthor: ani_ta3.export(),
  //     ani_authorsure: ani_ti7.export(),
  //     ani_authorback: ani_ti8.export(),
  //     ani_fireauthor: ani_tp3_c.export(),
  //     ani_earthauthor: ani_tp4_c.export(),
  //     ani_windauthor: ani_tp5_c.export(),
  //     ani_waterauthor: ani_tp6_c.export(),
  //   })
    
  //   authorelement = "3"
    
  //   checked2 = false;
  //   }

  // },

  waterauthorsure:function(){
    var windowHeight = wx.getSystemInfoSync().windowHeight
    if (checked3){
    beginnum = 5
    // var ani_t0 = wx.createAnimation({
    //   delay: 2330, 
    //   duration: 20 
    // })
    // ani_t0.translate(-5,0).step()
  
    // var ani_t0in = wx.createAnimation({
    //   delay: 5950,
    //   duration: 50
    // })
    // ani_t0in.translate(-5,0).step()
  
    // 糊化
    if (windowHeight>=800){
      setTimeout(()=>{
     this.animate("#bgimg_blur1",[
       {translateX:-2260*windowWidth/750,translateY:-1000*windowWidth/750,opacity:1.0},
       {translateX:-2260*windowWidth/750,translateY:-1000*windowWidth/750,opacity:0.0}],10,)
     },2350)
   }
    if (windowHeight>=700&&windowHeight<800){
      setTimeout(()=>{
     this.animate("#bgimg_blur1",[
       {translateX:-2240*windowWidth/750,translateY:-950*windowWidth/750,opacity:1.0},
       {translateX:-2240*windowWidth/750,translateY:-950*windowWidth/750,opacity:0.0}],10,)
     },2350)
   }
  
    if (windowHeight>=600&&windowHeight<700){
     setTimeout(()=>{
    this.animate("#bgimg_blur1",[
      {translateX:-1850*windowWidth/750, translateY:-770*windowWidth/750, opacity:1.0},
      {translateX:-1850*windowWidth/750, translateY:-770*windowWidth/750,opacity:0.0}],10,)
    },2350)
    }
  
    if (windowHeight<600){
     setTimeout(()=>{
    this.animate("#bgimg_blur1",[
      {translateX:-1810*windowWidth/750, translateY:-750*windowWidth/750, opacity:1.0},
      {translateX:-1810*windowWidth/750, translateY:-750*windowWidth/750,opacity:0.0}],10,)
    },2350)
    }
  
  
    if (windowHeight>=800){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[{
      translateX:-720*windowWidth/750,translateY:-2790*windowWidth/750,opacity:0.0},
      {translateX:-900*windowWidth/750, translateY:-1620*windowWidth/750,opacity:1.0}],10,)},7200)
    }
  
    if (windowHeight>=700 && windowHeight<800){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[
        {translateX:-700*windowWidth/750,translateY:-2760*windowWidth/750,opacity:0.0},
        {translateX:-885*windowWidth/750, translateY:-1580*windowWidth/750,opacity:1.0}],10,)},7200)
    }
  
    if (windowHeight>=600 && windowHeight<700){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[{
        translateX:-550*windowWidth/750,translateY:-2300*windowWidth/750,opacity:0.0},
        {translateX:-625*windowWidth/750, translateY:-1310*windowWidth/750,opacity:1.0}],10,)},7200)
    }
  
    if (windowHeight<600){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[
        {translateX:-550*windowWidth/750,translateY:-2260*windowWidth/750,opacity:0.0},
        {translateX:-585*windowWidth/750, translateY:-1300*windowWidth/750,opacity:1.0},],10,)},7200)
    }
  
  
    // 小人进出
    // var ani_tps_c = wx.createAnimation({
    //   delay: 2550,
    //   durtaion:600,
    // })
    // ani_tps_c.opacity(0.0).step()
  
    // var ani_tps = wx.createAnimation({
    //   delay: 6200, 
    //   durtaion:600,
    // })
    // ani_tps.opacity(1.0).step()

    setTimeout(()=>{
      this.animate("#ani_person_5",[
        {opacity:1.0},
        {opacity:0.0}],600,)},2550)
  
    setTimeout(()=>{
      this.animate("#ani_person_6",[
        {opacity:0.0},
        {opacity:1.0}],600,)},6200)
  
  
    // 地图转移
    if (windowHeight>=800){
      setTimeout(()=>{
      this.animate("#bgimg",[{
        translateX:-2260*windowWidth/750,translateY:-1000*windowWidth/750},
        {translateX:-900*windowWidth/750, translateY:-1620*windowWidth/750}],2650,)
      },3350)
    
    }
  
    if (windowHeight>=700 && windowHeight<800){
      setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX:-2240*windowWidth/750, translateY:-950*windowWidth/750},
        {translateX:-885*windowWidth/750, translateY:-1580*windowWidth/750},
      ],2650,)},3350)
    }
  
    if (windowHeight>=600 && windowHeight<700){
      setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX: -1850*windowWidth/750,translateY:-770*windowWidth/750},
        {translateX:-625*windowWidth/750, translateY:-1310*windowWidth/750}],2650,)},3350)
    }
  
    if (windowHeight<600){
      setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX:-1810*windowWidth/750, translateY:-750*windowWidth/750},
        {translateX:-585*windowWidth/750, translateY:-1300*windowWidth/750}],2650,)},3350)
    }
    
    // 下一题抽卡牌问题显示
    var ani_pc = wx.createAnimation({
      delay: 7200,
      duration: 1200,
    })
    ani_pc.translate(0,3).opacity(1.0).step()
  
    // 本题问题消失
    // var ani_tqq3_c = wx.createAnimation({
    //   delay: 1000,
    //   duration: 800,
    // })
    // ani_tqq3_c.opacity(0.0).step()
    // // ani--
  
    setTimeout(()=>{
      this.animate("#likeauthor",[
        {opacity:1.0},
        {opacity:0.0}],800,)},1000)
    
    // 卡牌浮现
    var ani_show = wx.createAnimation({
      delay: 8000,
      duration: 1200, 
    })
    ani_show.opacity(1.0).translate(-370*2/750*windowWidth,0).step() 
  
    // 选择作家消失
    var ani_tsas_c = wx.createAnimation({
      delay: 600,
      duration:600
    })
    ani_tsas_c.opacity(0.0).translate(-800*windowWidth/750).step()
    ani_tsas_c.translate(0,0).step()
  
  
    // 数据传入wxml
    this.setData({
      // ani_person_5: ani_tps_c.export(),
      // ani_person_6: ani_tps.export(),
      ani_pickcards: ani_pc.export(),
      // ani_likeauthor: ani_tqq3_c.export(), 
      ani_card: ani_show.export(),
      ani_selectauthors: ani_tsas_c.export(),
    })
  
  // 水象元素积累两分
    authorelement = 4
    point[authorelement-1] = point[authorelement-1]+2
    console.log(point)
  
    //决定卡牌背面
    if (backgroundcard == 1)
    {this.setData({starcardspic: "cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌背面/卡牌背面-type1.jpeg"})}
  
    if (backgroundcard == 2)
    {this.setData({starcardspic: "cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌背面/卡牌背面-type2.jpeg"})}
  
    if (backgroundcard == 3)
    {this.setData({starcardspic:"cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌背面/卡牌背面-type3.jpeg"})}
  
    if (backgroundcard == 4)
    {this.setData({starcardspic:"cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌背面/卡牌背面-type4.jpeg"})}
  
    if (backgroundcard == 5)
    {this.setData({starcardspic:"cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌背面/卡牌背面-type5.jpeg"})}
  
    if (backgroundcard == 6)
    {this.setData({starcardspic: "cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌背面/卡牌背面-type6.jpeg"})}
  
    checked3 = false;
    }
  },

  // waterauthor:function(){
  //   checked3 = true;
  //   if (checked2){
  //      // 显示水象作家的简介
  //   var ani_ta4 = wx.createAnimation({
  //     delay: 200, //1000
  //     duration: 1000 //1200
  //   })
  //     //ani_ta1.translate(150,0).step()
  //   // ani_ta4.opacity(0.0).translateX(800*windowWidth/750).step()
  //   // ani_ta4.opacity(1.0).translateX(800*windowWidth/750).step()
  //   ani_ta4.opacity(1.0).step()
    
  //   // 显示确认按钮
  //   var ani_ti7 = wx.createAnimation({ // /var
  //     delay: 300, //1000
  //     duration: 600
  //   })
  //   //ani_ti7.translate(150,0).step()
  //   ani_ti7.translate(-425*windowWidth/750,0).step()
  //   ani_ti7.opacity(1.0).step()
    
  //   var ani_ti8 = wx.createAnimation({
  //     delay: 300, //1000
  //     duration: 600
  //   })
  //   //ani_ti8.translate(170,0).step()
  //   //ani_xz ani_i translate(5)
  //   ani_ti8.translate(400*windowWidth/750,0).step()
  //   ani_ti8.opacity(1.0).step()
    
  //   // 其他选项(四象作家)消失
  //   var ani_tp3_c = wx.createAnimation({  //ani_tp3_c
  //     delay: 600, // 300 {300,500,700,900} <600,750,900,1050> 600X4A
  //     duration: 600 //400 550 650 900
  //   })
  //   ani_tp3_c.opacity(0.0).translate(780*windowWidth/750).step() ///opacitt translate(280,0) 277*2rpx 600
  //   //ani_tp_c.opacity(0.0).step()
  //   ani_tp3_c.translate(0,0).step()
        
  //   var ani_tp4_c = wx.createAnimation({  //ani_tp3_c
  //     delay: 600, //、、750
  //     duration: 600 //900
  //   })
  //   ani_tp4_c.opacity(0.0).translate(780*windowWidth/750).step() //wnu 277*2rpx
  //   ani_tp4_c.translate(0,0).step()
    
  //   var ani_tp5_c = wx.createAnimation({  //ani_tp3_c
  //     delay: 600, //900
  //     duration: 600 //900
  //   })
  //   ani_tp5_c.opacity(0.0).translate(780*windowWidth/750).step() //01.0 277*2rpx
  //   ani_tp5_c.translate(0,0).step()
    
  //   var ani_tp6_c = wx.createAnimation({  //ani_tp3_c
  //     delay: 600, //1050
  //     duration: 600 //900
  //   })
  //   ani_tp6_c.opacity(0.0).translate(780*windowWidth/750).step() //WId 277*2rpx 8
  //   ani_tp6_c.translate(0.0,0.0).step()
    
  //   this.setData({
  //     //intro_fireauthour: ani_ta1.export(),
  //     ani_introwaterauthor: ani_ta4.export(),
  //     ani_authorsure: ani_ti7.export(),
  //     ani_authorback: ani_ti8.export(),
  //     ani_fireauthor: ani_tp3_c.export(),
  //     ani_earthauthor: ani_tp4_c.export(),
  //     ani_windauthor: ani_tp5_c.export(),
  //     ani_waterauthor: ani_tp6_c.export(),
  //   })
    
    
  //   authorelement = "4"
  //     checked2 = false
  //   }
   
  // },


  

  //、、fireauthor: function(){
//   authorsure:function(){
//     var windowHeight = wx.getSystemInfoSync().windowHeight
//     if (checked3){
//       //num
//     beginnum = 5
//     var ani_t0 = wx.createAnimation({
//       delay: 2330, // 2700、、 2650 2850
//       duration: 20 // 50
//     })//
//     ani_t0.translate(-5,0).step()//expor

//     var ani_t0in = wx.createAnimation({
//       delay: 5950, //、、5600 6100 7000 5500 4000
//       duration: 50
//     })//
//     ani_t0in.translate(-5,0).step()

//     // 糊化
//     if (windowHeight>=800){
//       setTimeout(()=>{
//      this.animate("#bgimg_blur1",[ //blur2
//        {translateX:-2260*windowWidth/750,translateY:-1000*windowWidth/750,opacity:1.0},
//        {translateX:-2260*windowWidth/750,translateY:-1000*windowWidth/750,opacity:0.0}],10,)
//      },2350) //.toExponential. 1850
//    }
//     if (windowHeight>=700&&windowHeight<800){
//       setTimeout(()=>{
//      this.animate("#bgimg_blur1",[
//        {translateX:-2240*windowWidth/750,translateY:-950*windowWidth/750,opacity:1.0},
//        {translateX:-2240*windowWidth/750,translateY:-950*windowWidth/750,opacity:0.0}],10,)
//      },2350)
//    }
  
//     if (windowHeight>=600&&windowHeight<700){
//      setTimeout(()=>{
//     this.animate("#bgimg_blur1",[
//       {translateX:-1850*windowWidth/750, translateY:-770*windowWidth/750, opacity:1.0},
//       {translateX:-1850*windowWidth/750, translateY:-770*windowWidth/750,opacity:0.0}],10,)
//     },2350)
//     }
  
//     if (windowHeight<600){
//      setTimeout(()=>{
//     this.animate("#bgimg_blur1",[
//       {translateX:-1810*windowWidth/750, translateY:-750*windowWidth/750, opacity:1.0},
//       {translateX:-1810*windowWidth/750, translateY:-750*windowWidth/750,opacity:0.0}],10,)
//     },2350)
//     }


//     if (windowHeight>=800){
//       setTimeout(()=>{
//       this.animate("#bgimg_blur1",[{
//       translateX:-720*windowWidth/750,translateY:-2790*windowWidth/750,opacity:0.0},
//       {translateX:-900*windowWidth/750, translateY:-1620*windowWidth/750,opacity:1.0}],10,)},7200)
//     }
  
//     if (windowHeight>=700 && windowHeight<800){
//       setTimeout(()=>{
//       this.animate("#bgimg_blur1",[
//         {translateX:-700*windowWidth/750,translateY:-2760*windowWidth/750,opacity:0.0},
//         {translateX:-885*windowWidth/750, translateY:-1580*windowWidth/750,opacity:1.0}],10,)},7200)
//     }
  
//     if (windowHeight>=600 && windowHeight<700){
//       setTimeout(()=>{
//       this.animate("#bgimg_blur1",[{
//         translateX:-550*windowWidth/750,translateY:-2300*windowWidth/750,opacity:0.0},
//         {translateX:-625*windowWidth/750, translateY:-1310*windowWidth/750,opacity:1.0}],10,)},7200)
//     }
  
//     if (windowHeight<600){
//       setTimeout(()=>{
//       this.animate("#bgimg_blur1",[
//         {translateX:-550*windowWidth/750,translateY:-2260*windowWidth/750,opacity:0.0},
//         {translateX:-585*windowWidth/750, translateY:-1300*windowWidth/750,opacity:1.0},],10,)},7200)
//     }


//     // 小人进出
//     var ani_tps_c = wx.createAnimation({
//       delay: 2550,
//       durtaion:600,
//     })
//     ani_tps_c.opacity(0.0).step()

//     var ani_tps = wx.createAnimation({
//       delay: 6200, //5150
//       durtaion:600,
//     })
//     ani_tps.opacity(1.0).step()


//     // 地图转移
//     if (windowHeight>=800){
//       setTimeout(()=>{
//       this.animate("#bgimg",[{
//         translateX:-2260*windowWidth/750,translateY:-1000*windowWidth/750},
//         {translateX:-900*windowWidth/750, translateY:-1620*windowWidth/750}],2650,)
//       },3350)
    
//     }

//     if (windowHeight>=700 && windowHeight<800){
//       setTimeout(()=>{
//       this.animate("#bgimg",[
//         {translateX:-2240*windowWidth/750, translateY:-950*windowWidth/750},
//         {translateX:-885*windowWidth/750, translateY:-1580*windowWidth/750},
//       ],2650,)},3350)
//     }

//     if (windowHeight>=600 && windowHeight<700){
//       setTimeout(()=>{
//       this.animate("#bgimg",[
//         {translateX: -1850*windowWidth/750,translateY:-770*windowWidth/750},
//         {translateX:-625*windowWidth/750, translateY:-1310*windowWidth/750}],2650,)},3350)
//     }

//     if (windowHeight<600){
//       setTimeout(()=>{
//       this.animate("#bgimg",[
//         {translateX:-1810*windowWidth/750, translateY:-750*windowWidth/750},
//         {translateX:-585*windowWidth/750, translateY:-1300*windowWidth/750}],2650,)},3350)
//     }
    
//     // 下一题抽卡牌问题显示
//     var ani_pc = wx.createAnimation({
//       delay: 7200, // 3700 4100 4400 4800 57500 5750 5600 5800 6700  6750 7850 6300 3300 3450 5050
//       duration: 1200 //1300 1500
//     })
//     ani_pc.translate(0,3).opacity(1.0).step()
//     //ani_pc.translate(3,0).opacity(1.0).step()
//     //ani_pc.translate(3,0).opacity(1.0).export()

//     // 本题问题消失
//     var ani_tqq3_c = wx.createAnimation({
//       delay: 1000, // 700 1400
//       duration: 800 //500 700 900
//     })
//     ani_tqq3_c.opacity(0.0).step()
//     // ani--

//     // 卡牌浮现
//     var ani_show = wx.createAnimation({
//       delay: 8000, //4100  4800  4900 5600 6000 6300 7100 7500 7700 7800 8900 7200 4200 4350 5950
//       duration: 1200, //1200 1400
//     })
//     ani_show.opacity(1.0).translate(-370*2/750*windowWidth,0).step() 
//     //、、ani_show.translate(-370*2/750*windowWidth,0).step() //、// -320*2 -420*2
//     //ani_show.translate(0,-900).step()



//     // 火象作家的简介消失 消失
//     var ani_ta1_c = wx.createAnimation({
//       delay: 600, //、、、、\ 1000
//       duration: 700 //1200 800
//     })
//     ani_ta1_c.opacity(0.0).translateX(800*windowWidth/750).step()
//     ani_ta1_c.opacity(0.0).translateX(0).step()
//      //ani_ta1_c.translate(150,0).step()
//     //ani_ta1_c.opacity(1.0).step()

//     // tu 土象作家简介消失
//     var ani_ta2_c = wx.createAnimation({
//       delay: 600, //、、、、\ 1000
//       duration: 700 //1200
//     })
//     ani_ta2_c.opacity(0.0).translateX(800*windowWidth/750).step()
//     ani_ta2_c.opacity(0.0).translateX(0).step()

//     // 风向作家简介消失
//     var ani_ta3_c = wx.createAnimation({
//       delay: 600, //、、、、\
//       duration: 700 //1200
//     })
//     ani_ta3_c.opacity(0.0).translateX(800*windowWidth/750).step()
//     ani_ta3_c.opacity(0.0).translateX(0).step()

//     // 水象昨天作家简介消失
//     var ani_ta4_c = wx.createAnimation({
//       delay: 600, //、、、、\
//       duration: 700 //1200
//     })
//     ani_ta4_c.opacity(0.0).translateX(800*windowWidth/750).step()
//     ani_ta4_c.opacity(0.0).translateX(0).step()

//     // 确认按钮和返回按钮消失
//     var ani_ti7_c = wx.createAnimation({ // var ani_ti7——_
//       delay: 1000,
//       duration: 500
//     })
//     ani_ti7_c.opacity(0.0).translate(-425*windowWidth/750).step()//400 -400
//     ani_ti7_c.opacity(0.0).translate(0,0).step()//opaciy
//     //ani_ti7_c.translate(150,0).step()
//     //ani_ti7_c.opacity(1.0).step()

//     var ani_ti8_c = wx.createAnimation({
//       delay: 1000,
//       duration: 500
//     })
//     ani_ti8_c.opacity(0.0).translate(400*windowWidth/750).step() //ani_ti9_c
//     ani_ti8_c.opacity(0.0).translate(0,0).step()
//     //ani_ti8_c.translate(170,0).step()
//     //ani_ti8_c.opacity(1.0).step()

//     // 其他选项(四象作家)消失
//     var ani_tp3_c = wx.createAnimation({  //ani_tp3_c
//       delay: 600, // 300 {300,500,700,900} <600,750,900,1050> 600X4A
//       duration: 600 //400 550 650 900
//     })
//     ani_tp3_c.opacity(0.0).translate(300*2*windowWidth/750).step() ///opacitt translate(280,0) 277*2rpx
//     //ani_tp_c.opacity(0.0).step()
//     ani_tp3_c.translate(0,0).step()
    
//     var ani_tp4_c = wx.createAnimation({  //ani_tp3_c
//       delay: 600, //、、750
//       duration: 600 //900
//     })
//     ani_tp4_c.opacity(0.0).translate(300*2*windowWidth/750).step() //wnu 277*2rpx
//     ani_tp4_c.translate(0,0).step()

//     var ani_tp5_c = wx.createAnimation({  //ani_tp3_c
//       delay: 600, //900
//       duration: 600 //900
//     })
//     ani_tp5_c.opacity(0.0).translate(300*2*windowWidth/750).step() //01.0 277*2rpx
//     ani_tp5_c.translate(0,0).step()

//     var ani_tp6_c = wx.createAnimation({  //ani_tp3_c
//       delay: 600, //1050
//       duration: 600 //900
//     })
//     ani_tp6_c.opacity(0.0).translate(300*2*windowWidth/750).step() //WId 277*2rpx 8
//     ani_tp6_c.translate(0.0,0.0).step()

//     // 数据传入wxml
//     this.setData({
//       ani_person_5: ani_tps_c.export(),
//       ani_person_6: ani_tps.export(),
//       ani_pickcards: ani_pc.export(),
//       ani_likeauthor: ani_tqq3_c.export(),
      
//       ani_introfireauthor: ani_ta1_c.export(),
//       ani_introearthauthor: ani_ta2_c.export(),
//       ani_introwindauthor: ani_ta3_c.export(), //wn
//       ani_introwaterauthor: ani_ta4_c.export(),

//       ani_authorsure: ani_ti7_c.export(),
//       ani_authorback: ani_ti8_c.export(),
//       //ani_fireauthor: ani_tp3_c.export(),
//       //ani_earthauthor: ani_tp4_c.export(),
//       //ani_windauthor: ani_tp5_c.export(),
//       //ani_waterauthor: ani_tp6_c.export(),
      
//       ani_card: ani_show.export(),
      

//     })

// // 火象元素积累两分
//     point[authorelement-1] = point[authorelement-1]+2
//     console.log(point)

//     //决定卡牌背面

//     if (backgroundcard == 1)
//     {this.setData({starcardspic: "cloud://cloud1-2gx6xlsu0ca67a99.636c-cloud1-2gx6xlsu0ca67a99-1311762654/Hbimages/卡牌背面/卡牌背面-type1.jpeg"})}//、、../../images/卡牌背面-type1.jpeg

//     if (backgroundcard == 2)
//     {this.setData({starcardspic: "cloud://cloud1-2gx6xlsu0ca67a99.636c-cloud1-2gx6xlsu0ca67a99-1311762654/Hbimages/卡牌背面/卡牌背面-type2.jpeg"})}//../../images/卡牌背面-type2.jpeg

//     if (backgroundcard == 3)
//     {this.setData({starcardspic:"cloud://cloud1-2gx6xlsu0ca67a99.636c-cloud1-2gx6xlsu0ca67a99-1311762654/Hbimages/卡牌背面/卡牌背面-type3.jpeg"})}//../../images/卡牌背面-type3.jpeg

//     if (backgroundcard == 4)
//     {this.setData({starcardspic:"cloud://cloud1-2gx6xlsu0ca67a99.636c-cloud1-2gx6xlsu0ca67a99-1311762654/Hbimages/卡牌背面/卡牌背面-type4.jpeg"})}//../../images/卡牌背面-type4.jpeg

//     if (backgroundcard == 5)
//     {this.setData({starcardspic:"cloud://cloud1-2gx6xlsu0ca67a99.636c-cloud1-2gx6xlsu0ca67a99-1311762654/Hbimages/卡牌背面/卡牌背面-type5.jpeg"})}//../../images/卡牌背面-type5.jpeg

//     if (backgroundcard == 6)
//     {this.setData({starcardspic: "cloud://cloud1-2gx6xlsu0ca67a99.636c-cloud1-2gx6xlsu0ca67a99-1311762654/Hbimages/卡牌背面/卡牌背面-type6.jpeg"})}//../../images/卡牌背面-type6.jpeg
//     //https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/%E5%8D%A1%E7%89%8C%E8%83%8C%E9%9D%A2/%E5%8D%A1%E7%89%8C%E8%83%8C%E9%9D%A2-type6.jpeg?sign=d1aff0ddb067358527a28a1d55fa052b&t=1667465405


//       checked3 = false;
//     }
    
//   },

//   authorback:function(){
//     checked2 = true;
//     if (checked3){ //checked10
//       // 消失火象作家的简介
//     var ani_ta1_c = wx.createAnimation({
//       delay: 1000,
//       duration: 800 //1200
//     })
//      //ani_ta1.translate(150,0).step()
//     ani_ta1_c.opacity(0.0).translateX(800*windowWidth/750).step()
//     ani_ta1_c.opacity(0.0).translateX(0).step()

// // 消失土象作家的简介
//     var ani_ta2_c = wx.createAnimation({
//       delay: 1000,
//       duration: 800 //1200
//     })
//      //ani_ta1.translate(150,0).step()
//     ani_ta2_c.opacity(0.0).translateX(800*windowWidth/750).step()
//     ani_ta2_c.opacity(0.0).translateX(0).step()//tranlsa=

//   // 消失风象作家的简介
//   var ani_ta3_c = wx.createAnimation({
//     delay: 1000,
//     duration: 800 //1200
//   })
//    //ani_ta1.translate(150,0).step()
//   ani_ta3_c.opacity(0.0).translateX(800*windowWidth/750).step()
//   ani_ta3_c.opacity(0.0).translateX(0).step()

//   // 消失水象作家的简介
//   var ani_ta4_c = wx.createAnimation({
//     delay: 1000,
//     duration: 800 //1200
//   })
//    //ani_ta1.translate(150,0).step()
//   ani_ta4_c.opacity(0.0).translateX(800*windowWidth/750).step()
//   ani_ta4_c.opacity(0.0).translateX(0).step()

//     // 消失确认按钮和返回按钮
//     var ani_ti7_c = wx.createAnimation({ // /var
//       delay: 200, //1000
//       duration: 500
//     })
//     //ani_ti7.translate(150,0).step()
//     ani_ti7_c.opacity(0.0).translate(-425*windowWidth/750,0).step() //400 -400
//     ani_ti7_c.opacity(0.0).translate(0,0).step()

//     var ani_ti8_c = wx.createAnimation({
//       delay: 200, //1000
//       duration: 500
//     })
//     //ani_ti8.translate(170,0).step()
//     //ani_xz ani_i translate(5)
//     ani_ti8_c.opacity(0.0).translate(400*windowWidth/750,0).step() //ani_ti8_C
//     ani_ti8_c.translate(0,0).step()

//     // 其他选项(四象作家)显示
//     var ani_tp3 = wx.createAnimation({  //ani_tp3_c
//       delay: 600, // 300 {300,500,700,900} <600,750,900,1050> 600X4A
//       duration: 600 //400 550 650 900
//     })
//     ani_tp3.opacity(0.0).translate(780*windowWidth/750).step() ///opacitt translate(280,0) 277*2rpx 300*2
//     //ani_tp_c.opacity(0.0).step()
//     ani_tp3.opacity(1.0).step()
    
//     var ani_tp4 = wx.createAnimation({  //ani_tp3_c
//       delay: 600, //、、750
//       duration: 600 //900
//     })
//     ani_tp4.opacity(0.0).translate(780*windowWidth/750).step() //wnu 277*2rpx
//     ani_tp4.opacity(1.0).step() //opacity(1/0)

//     var ani_tp5 = wx.createAnimation({  //ani_tp3_c
//       delay: 600, //900
//       duration: 600 //900
//     })
//     ani_tp5.opacity(0.0).translate(780*windowWidth/750).step() //01.0 277*2rpx
//     ani_tp5.opacity(1.0).step()

//     var ani_tp6 = wx.createAnimation({  //ani_tp3_c
//       delay: 600, //1050
//       duration: 600 //900
//     })
//     ani_tp6.opacity(0.0).translate(780*windowWidth/750).step() //WId 277*2rpx 8
//     ani_tp6.opacity(1.0).step()

//     this.setData({
//       //intro_fireauthour: ani_ta1.export(),
//       ani_introfireauthor: ani_ta1_c.export(),
//       ani_introearthauthor: ani_ta2_c.export(),
//       //ani_introwjauthor: ani_ta1_c.export(),
//       ani_introwindauthor: ani_ta3_c.export(),
//       ani_introwaterauthor: ani_ta4_c.export(),
//       ani_authorsure: ani_ti7_c.export(),
//       ani_authorback: ani_ti8_c.export(),
//       ani_fireauthor: ani_tp3.export(),
//       ani_earthauthor: ani_tp4.export(),
//       ani_windauthor: ani_tp5.export(),
//       ani_waterauthor: ani_tp6.export(),
//     })
//       //checked10=false
//         checked3=false}

//   },

  clickcard:function(){
    if (checked15){
    // 生成随机数  1-12
    whichstar2 = Math.ceil(Math.random(0,1)*12) //whichstar
    console.log(whichstar2)

    // 用随机数对应twelvestar赋值
    if (whichstar2 == 1){this.setData({twelvestar2: "白羊座", card: "cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌正面/卡牌正面-白羊座"})}
    if (whichstar2 == 2){this.setData({twelvestar2: "金牛座", card: "cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌正面/卡牌正面-金牛座"})}
    if (whichstar2 == 3){this.setData({twelvestar2: "双子座", card: "cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌正面/卡牌正面-双子座"})}
    if (whichstar2 == 4){this.setData({twelvestar2: "巨蟹座", card: "cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌正面/卡牌正面-巨蟹座"})}
    if (whichstar2 == 5){this.setData({twelvestar2: "狮子座", card: "cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌正面/卡牌正面-狮子座"})}
    if (whichstar2 == 6){this.setData({twelvestar2: "处女座", card: "cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌正面/卡牌正面-处女座"})}
    if (whichstar2 == 7){this.setData({twelvestar2: "天秤座", card: "cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌正面/卡牌正面-天秤座"})}
    if (whichstar2 == 8){this.setData({twelvestar2: "天蝎座", card: "cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌正面/卡牌正面-天蝎座"})}
    if (whichstar2 == 9){this.setData({twelvestar2: "射手座", card: "cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌正面/卡牌正面-射手座"})}
    if (whichstar2 == 10){this.setData({twelvestar2: "摩羯座", card: "cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌正面/卡牌正面-摩羯座"})}// twelvesta2r
    if (whichstar2 == 11){this.setData({twelvestar2: "水瓶座", card: "cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌正面/卡牌正面-水瓶座"})}
    if (whichstar2 == 12){this.setData({twelvestar2: "双鱼座", card: "cloud://kelpcloudenvironment-3bb91f1ee75.6b65-kelpcloudenvironment-3bb91f1ee75-1317303536/Hbimages/卡牌正面/卡牌正面-双鱼座"})}

    // s随机数对应的whichstar的数值
    if (whichstar2 == 1){whichelement = 1} //whichstar
    if (whichstar2 == 2){whichelement = 2} // whichstar
    if (whichstar2 == 3){whichelement = 3} // whichstar
    if (whichstar2 == 4){whichelement = 4} // whichstar
    if (whichstar2 == 5){ whichelement= 1} //whichstar
    if (whichstar2 == 6){ whichelement= 2} //whichstar
    if (whichstar2 == 7){ whichelement= 3} //whichstar
    if (whichstar2 == 8){ whichelement= 4} //whichstar
    if (whichstar2 == 9){ whichelement= 1} //whichstar
    if (whichstar2 == 10){whichelement = 2}// twelvesta2r //whichstar
    if (whichstar2 == 11){whichelement = 3} //tw //whichstar
    if (whichstar2 == 12){whichelement = 4} //t whichstar = 3 //whichstar

    // 卡牌正面显示
    setTimeout(()=>{
      this.animate("#card",[
        {opacity:0.0}, {opacity:1.0},
      ],800,)}, 1200)// 持续时间爱你，延时

    // 前进按钮出现
    var ani_sure = wx.createAnimation({
      delay: 400, //1400
      duration: 600,
    })
    ani_sure.translate(485*windowWidth/750,0).step()
    ani_sure.opacity(1.0).step()

    // 当前的卡牌背面消失
    var ani_card_c = wx.createAnimation({
      delay: 350,
      duration: 1000,
    })
    ani_card_c.opacity(1.0).translate(0,0).step()
    
    this.setData({
      ani_card: ani_card_c.export(),
      ani_cardsure:ani_sure.export()
    })
    checked15 = false
    }
  },

  
  cardsure:function(){
    var windowHeight = wx.getSystemInfoSync().windowHeight

    if (checked11){
    beginnum = 6
    // var ani_t0 = wx.createAnimation({
    //   delay: 2340,
    //   duration: 10,
    // })
    // ani_t0.translate(0,10).step()

    // var ani_t0in = wx.createAnimation({
    //   delay: 5500,
    //   duration: 10,
    // })
    // ani_t0in.translate(0,10).step()

    // 糊化
    if (windowHeight>=800){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[{
      translateX:-900*windowWidth/750,translateY:-1630*windowWidth/750,opacity:1.0},
      {translateX:-900*windowWidth/750, translateY:-1620*windowWidth/750,opacity:0.0}],10,)},2050) //2350
    }
  
    if (windowHeight>=700 && windowHeight<800){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[
        {translateX:-885*windowWidth/750,translateY:-1580*windowWidth/750,opacity:1.0},
        {translateX:-885*windowWidth/750, translateY:-1580*windowWidth/750,opacity:0.0}],10,)},2050)
    }
  
    if (windowHeight>=600 && windowHeight<700){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[{
        translateX:-625*windowWidth/750,translateY:-1310*windowWidth/750,opacity:1.0},
        {translateX:-625*windowWidth/750, translateY:-1310*windowWidth/750,opacity:0.0}],10,)},2050)
    }
  
    if (windowHeight<600){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[
        {translateX:-585*windowWidth/750,translateY:-1300*windowWidth/750,opacity:1.0},
        {translateX:-585*windowWidth/750, translateY:-1300*windowWidth/750,opacity:0.0},],10,)},2050)
    }


    if (windowHeight>=800){
      setTimeout(()=>{
     this.animate("#bgimg_blur1",[ //blur2
       {translateX:-2260*windowWidth/750,translateY:-1000*windowWidth/750,opacity:0.0},
       {translateX:-750*windowWidth/750,translateY:-520*windowWidth/750,opacity:1.0}],10,)
     },6700) //.toExponential. 2350 7000
   }
    if (windowHeight>=700&&windowHeight<800){
      setTimeout(()=>{
     this.animate("#bgimg_blur1",[
       {translateX:-2240*windowWidth/750,translateY:-950*windowWidth/750,opacity:0.0},
       {translateX:-750*windowWidth/750,translateY:-510*windowWidth/750,opacity:1.0}],10,)
     },6700)
   }
  
    if (windowHeight>=600&&windowHeight<700){
     setTimeout(()=>{
    this.animate("#bgimg_blur1",[
      {translateX:-1850*windowWidth/750, translateY:-770*windowWidth/750, opacity:0.0},
      {translateX:-565*windowWidth/750, translateY:-430*windowWidth/750,opacity:1.0}],10,)
    },6700)
    }
  
    if (windowHeight<600){
     setTimeout(()=>{
    this.animate("#bgimg_blur1",[
      {translateX:-1810*windowWidth/750, translateY:-750*windowWidth/750, opacity:0.0},
      {translateX:-545*windowWidth/750, translateY:-410*windowWidth/750,opacity:1.0}],10,)
    },6700) //10200
    }

    //小人进出
    // var ani_tps_c = wx.createAnimation({
    //   delay: 2250, // 5750
    //   duration: 600,
    // })
    // ani_tps_c.opacity(0.0).step()

    // var ani_tps = wx.createAnimation({
    //   delay: 5700, //9200
    //   duration: 600,
    // })
    // ani_tps.opacity(1.0).step()//ani_tps_c

    setTimeout(()=>{
      this.animate("#ani_person_6",[
        {opacity:1.0},
        {opacity:0.0}],600,)},2250)
  
    setTimeout(()=>{
      this.animate("#ani_person_7",[
        {opacity:0.0},
        {opacity:1.0}],600,)},5700)


    // 地图移动
    if (windowHeight>=800){
      setTimeout(()=>{
      this.animate("#bgimg",[{
        translateX:-900*windowWidth/750,translateY:-1620*windowWidth/750},
        {translateX:-750*windowWidth/750, translateY:-520*windowWidth/750}],2400,)
      },3050) //6550
    }

    if (windowHeight>=700 && windowHeight<800){
      setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX:-885*windowWidth/750, translateY:-1580*windowWidth/750},
        {translateX:-750*windowWidth/750, translateY:-510*windowWidth/750},
      ],2400,)},3050)
    }

    if (windowHeight>=600 && windowHeight<700){
      setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX: -625*windowWidth/750,translateY:-1310*windowWidth/750},
        {translateX:-565*windowWidth/750, translateY:-430*windowWidth/750}],2400,)},3050)
    }

    if (windowHeight<600){
      setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX:-585*windowWidth/750, translateY:-1300*windowWidth/750},
        {translateX:-545*windowWidth/750, translateY:-410*windowWidth/750}],2400,)},3050)
    }
  

    // 前进按钮消失
    var ani_sure_c = wx.createAnimation({
      delay: 500, //1400
      duration: 600,
    })
    ani_sure_c.translate(485*windowWidth/750,0).opacity(0.0).step()
    ani_sure_c.translate(0,0).step()

    // 当前的问题消失
    // var ani_tqq4_c = wx.createAnimation({
    //   delay: 700, //4200
    //   duration: 800, //800
    // })
    // ani_tqq4_c.opacity(0.0).step()

    setTimeout(()=>{
      this.animate("#pick12cards",[
        {opacity:1.0},
        {opacity:0.0}],800,)},700)


    // 卡牌正面消失
     setTimeout(()=>{
      this.animate("#card",[
        {opacity:1.0}, {opacity:0.0},
      ], 600,)}, 500)//  持续时间  延后时间
      
      
    // 卡牌正面退场
     setTimeout(()=>{
      this.animate("#card",[
        {translateX:0}, {translateX:800*windowWidth/750},
      ], 50,)}, 1150)

    // 生成随机数  1-12
    // whichstar2 = Math.ceil(Math.random(0,1)*12)

    // 用随机数对应twelvestar赋值
    // if (whichstar2 == 1){this.setData({twelvestar: "白羊座"})}
  
    // 显示问题：是XX星座
    // var ani_tsj6 = wx.createAnimation({
    //   delay: 6700,
    //   duration: 1200,
    // })
    // ani_tsj6.opacity(1.0).step()

    setTimeout(()=>{
      this.animate("#questionstar",[
        {opacity:0.0},
        {opacity:1.0}],1200,)},6700)



    // 显示选项：是 /不是的
    var ani_tsj_op6 = wx.createAnimation({
      delay: 3050, 
      duration: 1200,
    })
    ani_tsj_op6.translate(0,450*2*windowWidth/750).step() 
    ani_tsj_op6.opacity(1.0).translate(0,450*2*windowWidth/750).step()

    var ani_tsj_op66 = wx.createAnimation({
      delay: 3050,
      duration: 1200,
    })
    ani_tsj_op66.opacity(0.0).translate(0,450*2*windowWidth/750).step()
    ani_tsj_op66.opacity(1.0).translate(0,450*2*windowWidth/750).step()

    //jiang data tranform into wxml
    this.setData({
      ani_cardsure: ani_sure_c.export(),
      // ani_person_6: ani_tps_c.export(),
      // ani_person_7: ani_tps.export(),
      // ani_pickcards: ani_tqq4_c.export(),
      // ani_questionstar: ani_tsj6.export(),
      ani_yesstar: ani_tsj_op6.export(),
      ani_nostar: ani_tsj_op66.export(),
    })

    checked11 = false;
    }
    
  },

  nostar:function(){
    var windowHeight = wx.getSystemInfoSync().windowHeight
    if (checked4) {
      beginnum = 7

    // var ani_t0 = wx.createAnimation({
    //   delay: 2340,
    //   duration: 10
    // })
    // ani_t0.translate(0,5).step()

    // var ani_t0in = wx.createAnimation({
    //   delay: 5340,
    //   duration: 10,
    // })
    // ani_t0in.translate(0,5).step()

    // 糊化出入
    if (windowHeight>=800){
      setTimeout(()=>{
     this.animate("#bgimg_blur1",[ //blur2
       {translateX:-750*windowWidth/750,translateY:-520*windowWidth/750,opacity:1.0},
       {translateX:-750*windowWidth/750,translateY:-520*windowWidth/750,opacity:0.0}],10,)
     },2350) //.toExponential. 2350
   }
    if (windowHeight>=700&&windowHeight<800){
      setTimeout(()=>{
     this.animate("#bgimg_blur1",[
       {translateX:-750*windowWidth/750,translateY:-510*windowWidth/750,opacity:1.0},
       {translateX:-750*windowWidth/750,translateY:-510*windowWidth/750,opacity:0.0}],10,)
     },2350)
   }
  
    if (windowHeight>=600&&windowHeight<700){
     setTimeout(()=>{
    this.animate("#bgimg_blur1",[
      {translateX:-565*windowWidth/750, translateY:-430*windowWidth/750, opacity:1.0},
      {translateX:-565*windowWidth/750, translateY:-430*windowWidth/750,opacity:0.0}],10,)
    },2350)
    }
  
    if (windowHeight<600){
     setTimeout(()=>{
    this.animate("#bgimg_blur1",[
      {translateX:-545*windowWidth/750, translateY:-410*windowWidth/750, opacity:1.0},
      {translateX:-545*windowWidth/750, translateY:-410*windowWidth/750,opacity:0.0}],10,)
    },2350)//7000
    }


    if (windowHeight>=800){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[{
      translateX:-900*windowWidth/750,translateY:-1630*windowWidth/750,opacity:0.0},
      {translateX:-1600*windowWidth/750, translateY:-680*windowWidth/750,opacity:1.0}],10,)},6900)
    }
  
    if (windowHeight>=700 && windowHeight<800){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[
        {translateX:-885*windowWidth/750,translateY:-1580*windowWidth/750,opacity:0.0},
        {translateX:-1570*windowWidth/750, translateY:-670*windowWidth/750,opacity:1.0}],10,)},6900)
    }
  
    if (windowHeight>=600 && windowHeight<700){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[{
        translateX:-625*windowWidth/750,translateY:-1310*windowWidth/750,opacity:0.0},
        {translateX:-1260*windowWidth/750, translateY:-560*windowWidth/750,opacity:1.0}],10,)},6900)
    }
  
    if (windowHeight<600){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[
        {translateX:-585*windowWidth/750,translateY:-1300*windowWidth/750,opacity:0.0},
        {translateX:-1255*windowWidth/750, translateY:-550*windowWidth/750,opacity:1.0},],10,)},6900)
    }

    // 小人进出
    // var ani_tps_c = wx.createAnimation({
    //   delay: 2550,
    //   duration: 600,
    // })
    // ani_tps_c.opacity(0.0).step()

    
    // var ani_tps = wx.createAnimation({
    //   delay:5900, // 4550
    //   duration: 600,
    // })
    // ani_tps.opacity(1.0).step()

    setTimeout(()=>{
      this.animate("#ani_person_7",[
        {opacity:1.0},
        {opacity:0.0}],600,)},2550)
  
    setTimeout(()=>{
      this.animate("#ani_person_8",[
        {opacity:0.0},
        {opacity:1.0}],600,)},5900)


    // 地图移动
    if (windowHeight>=800){
      setTimeout(()=>{
      this.animate("#bgimg",[{
        translateX:-750*windowWidth/750,translateY:-520*windowWidth/750},
        {translateX:-1600*windowWidth/750, translateY:-680*windowWidth/750}],2350,)
      },3350)
    }
    
    if (windowHeight>=700 && windowHeight<800){
      setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX:-750*windowWidth/750, translateY:-510*windowWidth/750},
        {translateX:-1570*windowWidth/750, translateY:-670*windowWidth/750},
      ],2350,)},3350)
    }

    if (windowHeight>=600 && windowHeight<700){
      setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX: -565*windowWidth/750,translateY:-430*windowWidth/750},
        {translateX:-1260*windowWidth/750, translateY:-560*windowWidth/750}],2350,)},3350)
    }

    if (windowHeight<600){
      setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX:-545*windowWidth/750, translateY:-410*windowWidth/750},
        {translateX:-1255*windowWidth/750, translateY:-550*windowWidth/750}],2350,)},3350)
    }

    // 当前问题消失
    // var ani_tqq6_c = wx.createAnimation({
    //   delay: 1000,
    //   duration: 800,
    // })
    // ani_tqq6_c.opacity(0.0).step()

    setTimeout(()=>{
      this.animate("#questionstar",[
        {opacity:1.0},
        {opacity:0.0}],800)},1000)

    // 当前选项消失并移动到点击不到的区域
    var ani_tsj_op6_c = wx.createAnimation({
      delay: 600,
      duration: 600,
    })
    ani_tsj_op6_c.opacity(0.0).translateY(450*2*windowWidth/750).step()
    ani_tsj_op6_c.translate(0,1000*2*windowWidth/750).step()


    var ani_tsj_op66_c = wx.createAnimation({
      delay: 600, 
      duration: 600,
    })
    ani_tsj_op66_c.opacity(0.0).translateY(450*2*windowWidth/750).step()
    ani_tsj_op66_c.translate(0,1100*2*windowWidth/750).step()


    // 显示问题：对XX星座印象
    // var ani_tq7 = wx.createAnimation({
    //   delay: 6900,
    //   duration: 1200,
    // })
    // ani_tq7.opacity(1.0).step()

    setTimeout(()=>{
      this.animate("#questionimpress",[
        {opacity:0.0},
        {opacity:1.0}],1200)},6900)
    


    // 显示选项:喜欢 无感 不喜欢
    // var ani_tsj_op7 = wx.createAnimation({
    //   delay: 3150, 
    //   duration: 1200,
    // })
    // ani_tsj_op7.opacity(0.0).translate(0,-600*2*windowWidth/750).step() 
    // ani_tsj_op7.opacity(1.0).step()

    setTimeout(()=>{
      this.animate("#likestar-2",[
        {translateY:0, opacity:0.0},
        {translateY:-600*2*windowWidth/750, opacity:0.0},
        {translateY:-600*2*windowWidth/750, opacity:1.0}
      ],1200,)},3150)

    // var ani_tsj_op77 = wx.createAnimation({
    //   delay: 3150, 
    //   duration: 1200,
    // })
    // ani_tsj_op77.opacity(0.0).translateY(-600*2*windowWidth/750).step() 
    // ani_tsj_op77.opacity(1.0).step()

    setTimeout(()=>{
      this.animate("#whateverstar-2",[
        {translateY:0, opacity:0.0},
        {translateY:-600*2*windowWidth/750, opacity:0.0},
        {translateY:-600*2*windowWidth/750, opacity:1.0}
      ],1200,)},3150)
    

    // var ani_tsj_op777 = wx.createAnimation({
    //   delay: 3150, 
    //   duration: 1200,
    // })
    // ani_tsj_op777.opacity(0.0).translateY(-600*2*windowWidth/750).step()
    // ani_tsj_op777.opacity(1.0).step()

    setTimeout(()=>{
      this.animate("#dislikestar-2",[
        {translateY:0, opacity:0.0},
        {translateY:-600*2*windowWidth/750, opacity:0.0},
        {translateY:-600*2*windowWidth/750, opacity:1.0}
      ],1200,)},3150)

    // 将数据传入wxml之中
    this.setData({
      // ani_questionstar: an_tqq6_c.export(),
      ani_yesstar: ani_tsj_op6_c.export(),
      ani_nostar: ani_tsj_op66_c.export(),
      // ani_impression: ani_tq7.export(),
      // ani_likestar2: ani_tsj_op7.export(),
      // ani_whateverstar2: ani_tsj_op77.export(),
      // ani_dislikestar2: ani_tsj_op777.export(),
      // ani_person_7: ani_tps_c.export(),
      // ani_person_8: ani_tps.export(),
    })
      checked4 = false;
    }
  },

  // 推荐五星正缘之书
  yesstar:function(){
    var windowHeight = wx.getSystemInfoSync().windowHeight
    if (checked4){
      beginnum = 7
    // 糊化进出
   // var ani_t0 = wx.createAnimation({
    //  delay: 2340, //2200 2900 2000 2100 2150
    //  duration: 10,
    //})
    //ani_t0.translate(0,9).step()

    //var ani_t0in = wx.createAnimation({
    //  delay: 11700,
    //  duration: 10,
    //})
    //ani_t0in.translate(0,9).step()

    if (windowHeight>=800){
      setTimeout(()=>{
     this.animate("#bgimg_blur1",[
       {translateX:-750*windowWidth/750,translateY:-520*windowWidth/750,opacity:1.0},
       {translateX:-750*windowWidth/750,translateY:-520*windowWidth/750,opacity:0.0}],10,)
     },2350)
   }
    if (windowHeight>=700&&windowHeight<800){
      setTimeout(()=>{
     this.animate("#bgimg_blur1",[
       {translateX:-750*windowWidth/750,translateY:-510*windowWidth/750,opacity:1.0},
       {translateX:-750*windowWidth/750,translateY:-510*windowWidth/750,opacity:0.0}],10,)
     },2350)
   }
  
    if (windowHeight>=600&&windowHeight<700){
     setTimeout(()=>{
    this.animate("#bgimg_blur1",[
      {translateX:-565*windowWidth/750, translateY:-430*windowWidth/750, opacity:1.0},
      {translateX:-565*windowWidth/750, translateY:-430*windowWidth/750,opacity:0.0}],10,)
    },2350)
    }
  
    if (windowHeight<600){
     setTimeout(()=>{
    this.animate("#bgimg_blur1",[
      {translateX:-545*windowWidth/750, translateY:-410*windowWidth/750, opacity:1.0},
      {translateX:-545*windowWidth/750, translateY:-410*windowWidth/750,opacity:0.0}],10,)
    },2350)
    }

    if (windowHeight>=800){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[{
      translateX:-900*windowWidth/750,translateY:-1620*windowWidth/750,opacity:0.0},
      {translateX:-3040*windowWidth/750, translateY:0*windowWidth/750,opacity:1.0}],10,)},14200)//6900 12200
    }//opacir

    if (windowHeight>=700 && windowHeight<800){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[
        {translateX:-885*windowWidth/750,translateY:-1580*windowWidth/750,opacity:0.0},
        {translateX:-3000*windowWidth/750, translateY:0*windowWidth/750,opacity:1.0}],10,)},14200)//11800
    }

    if (windowHeight>=600 && windowHeight<700){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[{
        translateX:-625*windowWidth/750,translateY:-1310*windowWidth/750,opacity:0.0},
        {translateX:-2400*windowWidth/750, translateY:0*windowWidth/750,opacity:1.0},
      ],10,)},14200)
    }

    if (windowHeight<600){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[
        {translateX:-1250*windowWidth/750,translateY:-1260*windowWidth/750,opacity:0.0},
        {translateX:-2360*windowWidth/750, translateY:0*windowWidth/750,opacity:1.0},
      ],10,)},14200)
    }

    // 小人进出
    // var ani_tps_c = wx.createAnimation({
    //   delay: 2550,
    //   duration: 600,
    // })
    // ani_tps_c.opacity(0.0).step()

    // var ani_tps = wx.createAnimation({
    //   delay: 13200,
    //   duration: 600,
    // })
    // ani_tps.opacity(1.0).step()

    setTimeout(()=>{
      this.animate("#ani_person_7",[
        {opacity:1.0},
        {opacity:0.0}],600,)},2550)
  
    setTimeout(()=>{
      this.animate("#ani_person_10",[
        {opacity:0.0},
        {opacity:1.0}],600,)},13200)

    // 当前界面问题消失
    // var ani_tqq6_c = wx.createAnimation({
    //   delay: 1000,
    //   duration: 800, 
    // })
    // ani_tqq6_c.opacity(0.0).step()

    setTimeout(()=>{
      this.animate("#questionstar",[
        {opacity:1.0},
        {opacity:0.0}],800)},1000)

    // 当前界面选项消失并移动到点击不到的区域
    var ani_tsj_op6_c = wx.createAnimation({
      delay: 600, 
      duration: 600 
    })
    ani_tsj_op6_c.translate(0,450*2*windowWidth/750).opacity(0.0).step()
    ani_tsj_op6_c.translate(0,0).opacity(0.0).step()

    var ani_tsj_op66_c = wx.createAnimation({
      delay: 600, 
      duration:600
    })
    ani_tsj_op66_c.translate(0,450*2*windowWidth/750).opacity(0.0).step() 
    ani_tsj_op66_c.translate(0,0).opacity(0.0).step()
    
  // 介绍显示
    setTimeout(()=>{
      this.animate("#loading",[{opacity:0.0},{opacity:1.0},],600,)},7700)//6500
    
    setTimeout(()=>this.startBtn(),8300) //7100

    setTimeout(()=>{
      this.animate("#loading",[{opacity:1.0},{opacity:0.0},],600,)},10500)

    // 纸片划入
    if (windowHeight<=700){
      var ani_tpp1 = wx.createAnimation({
      delay: 13000,//8800 9700 10500 12000
      duration: 1200,
    })
    ani_tpp1.translate(900*windowWidth/750,1150*windowWidth/750).rotate(15).step()

    var ani_tpp2 = wx.createAnimation({
      delay: 13500,
      duration: 1200,
    })
    ani_tpp2.translate(840*windowWidth/750,1130*windowWidth/750).rotate(28).step()
    
    var ani_tpp3 = wx.createAnimation({
      delay: 14000,
      duration: 1200,
    })
    ani_tpp3.translate(760*windowWidth/750,1120*windowWidth/750).rotate(45).step()
    }
    

    if (windowHeight >700){ //600
      var ani_tpp1 = wx.createAnimation({
       delay: 13000,//8800 9700 10500 12000
       duration: 1200,
     })
     ani_tpp1.translate(820*windowWidth/750,1150*windowWidth/750).rotate(15).step()
  
     var ani_tpp2 = wx.createAnimation({
       delay: 13500,
       duration: 1200,
     })
     ani_tpp2.translate(760*windowWidth/750,1130*windowWidth/750).rotate(28).step()
     
     var ani_tpp3 = wx.createAnimation({
       delay: 14000,
       duration: 1200,
     })
     ani_tpp3.translate(680*windowWidth/750,1120*windowWidth/750).rotate(45).step()
    }

    // 显示说明：您的五星正缘之书
    var ani_fivestar = wx.createAnimation({
      delay: 15600, //12000 15600 2600 12000 13400 13600
      duration: 1200, //1000
    })
    ani_fivestar.opacity(1.0).step()

    // xi显示：五星正缘书内容
    var ani_five = wx.createAnimation({
      delay: 6000,//7350
      duration: 1000,
    })
    ani_five.translate(700*windowWidth/750,0).step()
    ani_five.opacity(1.0).step()

    // continue按钮
    var ani_continue = wx.createAnimation({
      delay: 6500,//7900
      duration: 1000
    })
    ani_continue.opacity(0.0).translateX(550*windowWidth/750).step()
    ani_continue.opacity(1.0).step()


    if (windowHeight>=800){
      setTimeout(()=>{
      this.animate("#bgimg",[{
        translateX:-750*windowWidth/750,translateY:-520*windowWidth/750},
        {translateX:-3840*windowWidth/750, translateY:-540*windowWidth/750},],4500,)
      },3350)

      setTimeout(()=>{
        this.animate("#bgimg",[
          {translateX:-3840*windowWidth/750, translateY:-540*windowWidth/750},
          {translateX:-3040*windowWidth/750, translateY:0*windowWidth/750}],2100,)
        },10550)
    }

    if (windowHeight>=700 && windowHeight<800){
      setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX:-750*windowWidth/750, translateY:-510*windowWidth/750},
        {translateX:-3800*windowWidth/750, translateY:-500*windowWidth/750},
      ],4500,)},3350)
      setTimeout(()=>{
        this.animate("#bgimg",[
          {translateX:-3800*windowWidth/750, translateY:-500*windowWidth/750},
          {translateX:-3000*windowWidth/750, translateY: 0*windowWidth/750},
        ],2100,)},10550)
    }

    if (windowHeight>=600 && windowHeight<700){
      setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX: -565*windowWidth/750,translateY:-430*windowWidth/750},
        {translateX:-3150*windowWidth/750, translateY:-400*windowWidth/750},
      ],4500,)},3350)

      setTimeout(()=>{
        this.animate("#bgimg",[
          {translateX:-3150*windowWidth/750, translateY:-400*windowWidth/750},
          {translateX:-2400*windowWidth/750, translateY: 0*windowWidth/750},
        ],2100,)},10550)
    }

    if (windowHeight<600){
      setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX:-545*windowWidth/750, translateY:-410*windowWidth/750},
        {translateX:-3050*windowWidth/750, translateY:-400*windowWidth/750},
      ],4500,)},3350)

      setTimeout(()=>{
        this.animate("#bgimg",[
          {translateX:-3050*windowWidth/750, translateY:-400*windowWidth/750},
          {translateX:-2360*windowWidth/750, translateY: 0*windowWidth/750},
        ],2100,)},10550)
    }
    
    // transform infor into wxml
    this.setData({
      // ani_person_7: ani_tps_c.export(),
      // ani_person_10: ani_tps.export(),
      // ani_questionstar: ani_tqq6_c.export(),
      ani_yesstar: ani_tsj_op6_c.export(),
      ani_nostar: ani_tsj_op66_c.export(),
      // ani_paper_1: ani_tpp1.export(),
      // ani_paper_2: ani_tpp2.export(),
      // ani_paper_3: ani_tpp3.export(),
      // ani_fivestarbook: ani_fivestar.export(),
      ani_fivestar: ani_five.export(),
      ani_continue: ani_continue.export(),
    })

  console.log(whichstar2)
  // console.log(whichelement)

  //if (whichstar==1 && whichelement == 1)
  if (whichstar2 == 1)// && whichelement==1
  { introrand = Math.ceil(Math.random(0,1)*2)
    fivestarbooks = "鲁迅全集",//白羊座五星书
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E7%81%AB.png?sign=b30b2e973a4888e47bca01a62532349c&t=1672208215"
    if (introrand ==1){
      fivestarbookscontent = "凡对于以真话为笑话的，以笑话为真话的，以笑话为笑话的，只有一个方法：就是不说话。"//白羊座五星书简介白羊座五星书简介白羊座五星书简介
      wx.cloud.callFunction({
      name: "queryresultbook",
      data:{bookname: "鲁迅全集"}}).then(res=>{
      //console.log(res.result.data)
      this.setData({
        fivestarbooks: res.result.data[0].bookname,//firestarbook
        fivestarbookscontent: res.result.data[0].picture,//firebookcontent
        fivestarintro: res.result.data[0].introduce1,
        bookpic: res.result.data[0].bookpic
      })
    })
    }
    if (introrand == 2){
      fivestarbookscontent = "从来如此，便对么？"
      wx.cloud.callFunction({
        name: "queryresultbook",
        data:{bookname: "鲁迅全集"}}).then(res=>{
        //console.log(res.result.data)
        this.setData({
          fivestarbooks: res.result.data[0].bookname,//firestarbook
          fivestarbookscontent: res.result.data[0].picture,//firebookcontent
          fivestarintro: res.result.data[0].introduce2,
          bookpic: res.result.data[0].bookpic
        })
      })
    }
  }

  if (whichstar2==2)
  {fivestarbooks = "喻世明言",
   fivestarbookscontent = "世事翻腾似转轮，眼前凶吉未为真。请看久久分明应，天道何曾负善人？"// 分开上下两阙？
   bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E5%9C%9F.png?sign=7b06d4eca1d4904e304494536f38010c&t=1672208250"
   
   wx.cloud.callFunction({
    name: "queryresultbook",
    data:{bookname: "喻世明言"}
  }).then(res=>{
    console.log(res.result.data)
    this.setData({
      fivestarbooks: res.result.data[0].bookname,//firestarbook
      fivestarbookscontent: res.result.data[0].picture,//firebookcontent
      fivestarintro: res.result.data[0].introduce,
      bookpic: res.result.data[0].bookpic
    })
  })
  }


  if (whichstar2==3)
  { fivestarbooks = "晚学盲言",
    fivestarbookscontent = "人各有欲，而得其所欲则必在道。"
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E9%A3%8E.png?sign=03891cf7e08e4c27bc4fc7400363e67f&t=1672208281"
    
    wx.cloud.callFunction({
      name: "queryresultbook",
      data:{bookname: "晚学盲言"}
    }).then(res=>{
      console.log(res.result.data)
      this.setData({
        fivestarbooks: res.result.data[0].bookname,//firestarbook
        fivestarbookscontent: res.result.data[0].picture,//firebookcontent
        fivestarintro: res.result.data[0].introduce,
        bookpic: res.result.data[0].bookpic
      })
    })
  }

  if (whichstar2==4)
  { introrand = Math.ceil(Math.random(0,1)*3)
    fivestarbooks = "人·兽·鬼",
    
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=6fc3c700dc4ae294ae2b579619bf32e0&t=1672208303"

    if (introrand == 1){
      fivestarbookscontent = "怕打仗，躲避打仗，无可躲避了就打，没打的时候怕死，到打的时候怕得忘了死。"
      wx.cloud.callFunction({
      name: "queryresultbook",
      data:{bookname: "人·兽·鬼"}
      }).then(res=>{
      console.log(res.result.data)
      this.setData({
        fivestarbooks: res.result.data[0].bookname,//firestarbook
        fivestarbookscontent: res.result.data[0].picture,//firebookcontent
        fivestarintro: res.result.data[0].introduce1,
        bookpic: res.result.data[0].bookpic
      })
    })
    }

    if (introrand == 2){
      fivestarbookscontent = "譬如家畜里最胆小的是猫，我们只看见小孩子给家里养的猫抓破了皮，没见过狗会咬痛小孩子。"/
      wx.cloud.callFunction({
      name: "queryresultbook",
      data:{bookname: "人·兽·鬼"}
      }).then(res=>{
      console.log(res.result.data)
      this.setData({
        fivestarbooks: res.result.data[0].bookname,//firestarbook
        fivestarbookscontent: res.result.data[0].picture,//firebookcontent
        fivestarintro: res.result.data[0].introduce2,
        bookpic: res.result.data[0].bookpic
      })
    })
    }

    if (introrand == 3){
      fivestarbookscontent = "恋爱里的确有“心理距离”，所以西洋的爱神专射冷箭。"
      wx.cloud.callFunction({
      name: "queryresultbook",
      data:{bookname: "人·兽·鬼"}
      }).then(res=>{
      console.log(res.result.data)
      this.setData({
        fivestarbooks: res.result.data[0].bookname,//firestarbook
        fivestarbookscontent: res.result.data[0].picture,//firebookcontent
        fivestarintro: res.result.data[0].introduce3,
        bookpic: res.result.data[0].bookpic
      })
    })
    }
  }


  if (whichstar2==5)
  {
  introrand = Math.ceil(Math.random(0,1)*2)
  fivestarbooks = "空谷幽兰",
  bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E7%81%AB.png?sign=ba105e64ab9aefcedd99491f9d19db32&t=1672208534"
  if (introrand == 1){
    fivestarbookscontent = "只有当我们独处时，我们才会更清楚地意识到，我们与万物同在。"//狮子座五星书简介

    wx.cloud.callFunction({
      name: "queryresultbook",
      data:{bookname: "空谷幽兰"}
    }).then(res=>{
      console.log(res.result.data)
      this.setData({
        fivestarbooks: res.result.data[0].bookname,//firestarbook
        fivestarbookscontent: res.result.data[0].picture,//firebookcontent
        fivestarintro: res.result.data[0].introduce1,
        bookpic: res.result.data[0].bookpic
      })
    })
  }
  if (introrand==2){
    fivestarbookscontent = "只要你不受欲望的困扰，只要你的心不受妄想左右，那么你是出家人还是在家人，根本没有什么区别。一旦你的心很清净，你就能理解业。"//狮子座五星书简介

    wx.cloud.callFunction({
      name: "queryresultbook",
      data:{bookname: "空谷幽兰"}
    }).then(res=>{
      console.log(res.result.data)
      this.setData({
        fivestarbooks: res.result.data[0].bookname,//firestarbook
        fivestarbookscontent: res.result.data[0].picture,//firebookcontent
        fivestarintro: res.result.data[0].introduce2,
        bookpic: res.result.data[0].bookpic
      })
    })
  }
  }//cloud://cloud1-2gx6xlsu0ca67a99.636c-cloud1-2gx6xlsu0ca67a99-1311762654/书道具-设计稿-火.png

  if (whichstar2==6)
  {fivestarbooks = "金线",
  fivestarbookscontent = "当我们说我们正命悬一线，说生活一团乱麻，或说自己处于社会网络之中时，我们使用的说法实际上有着数千年的传统。"
  bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E5%9C%9F.png?sign=421a50df6927df4de6a3cfd2136a2fd9&t=1672208493"
  
  wx.cloud.callFunction({
    name: "queryresultbook",
    data:{bookname: "金线"}
  }).then(res=>{
    console.log(res.result.data)
    this.setData({
      fivestarbooks: res.result.data[0].bookname,//firestarbook
      fivestarbookscontent: res.result.data[0].picture,//firebookcontent
      fivestarintro: res.result.data[0].introduce,
      bookpic: res.result.data[0].bookpic
    })
  })
  }

  if (whichstar2==7)
  { fivestarbooks = "挚友",
    fivestarbookscontent = "白昼的温暖空气，因为无法逃遁，就变成了雾。"
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E9%A3%8E.png?sign=1eb3b68aedfe2e54b571f19c95fe9e9d&t=1672208399"
    
    wx.cloud.callFunction({
      name: "queryresultbook",
      data:{bookname: "挚友"}
    }).then(res=>{
      console.log(res.result.data)
      this.setData({
        fivestarbooks: res.result.data[0].bookname,//firestarbook
        fivestarbookscontent: res.result.data[0].picture,//firebookcontent
        fivestarintro: res.result.data[0].introduce,
        bookpic: res.result.data[0].bookpic
      })
    })
  }//cloud://cloud1-2gx6xlsu0ca67a99.636c-cloud1-2gx6xlsu0ca67a99-1311762654/书道具-设计稿-风.png

  if (whichstar2==8)
  {fivestarbooks = "西藏生死书",//ds
  fivestarbookscontent = "此时此地，我们就可以开始寻找生命的意义。我们可以全心全意、准确无比、心平气和地把每一秒钟当成改变和准备死亡与永恒的契机。"
  bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=6fc3c700dc4ae294ae2b579619bf32e0&t=1672208303"

  wx.cloud.callFunction({
    name: "queryresultbook",
    data:{bookname: "西藏生死书"}
  }).then(res=>{
    console.log(res.result.data)
    this.setData({
      fivestarbooks: res.result.data[0].bookname,//firestarbook
      fivestarbookscontent: res.result.data[0].picture,//firebookcontent
      fivestarintro: res.result.data[0].introduce,
      bookpic: res.result.data[0].bookpic
    })
  })
  }
  
  if (whichstar2==9)
  {fivestarbooks = "标竿人生",
  fivestarbookscontent = "爱是人生最好的应用，最能表达爱的方式是付出时间，去爱最好的时刻就是现在。"//射手座五星书简介
  bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E7%81%AB.png?sign=ba105e64ab9aefcedd99491f9d19db32&t=1672208534",

  wx.cloud.callFunction({
    name: "queryresultbook",
    data:{
      bookname: "标竿人生"
    }
  }).then(res=>{
    console.log(res.result.data)
    this.setData({
      fivestarbooks: res.result.data[0].bookname,//firestarbook
      fivestarbookscontent: res.result.data[0].picture,//firebookcontent
      fivestarintro: res.result.data[0].introduce,
      bookpic: res.result.data[0].bookpic
    })
  })
  }


  if (whichstar2==10)
  {fivestarbooks = "辨喜的生平、思想与影响",
  fivestarbookscontent = "不要去追问，因为所有的答案都是无意义的，问和答都是摩耶的一部分，我们要去做的是拔苦自救，正如中毒之人，不要去追问中毒的原因，而应该是解救生命。"
  bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E5%9C%9F.png?sign=421a50df6927df4de6a3cfd2136a2fd9&t=1672208493"
  
  wx.cloud.callFunction({
    name: "queryresultbook",
    data:{bookname: "辨喜的生平、思想与影响"}
  }).then(res=>{
    console.log(res.result.data)
    this.setData({
      fivestarbooks: res.result.data[0].bookname,//firestarbook
      fivestarbookscontent: res.result.data[0].picture,//firebookcontent
      fivestarintro: res.result.data[0].introduce,
      bookpic: res.result.data[0].bookpic
    })
  })
  }

  if (whichstar2==11)
  { fivestarbooks = "悠悠岁月",
    fivestarbookscontent = "大量的物品掩盖着观念的稀少和信仰的衰退。"
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E9%A3%8E.png?sign=1eb3b68aedfe2e54b571f19c95fe9e9d&t=1672208399"

    wx.cloud.callFunction({
      name: "queryresultbook",
      data:{bookname: "悠悠岁月"}
    }).then(res=>{
      console.log(res.result.data)
      this.setData({
        fivestarbooks: res.result.data[0].bookname,//firestarbook
        fivestarbookscontent: res.result.data[0].picture,//firebookcontent
        fivestarintro: res.result.data[0].introduce,
        bookpic: res.result.data[0].bookpic
      })
    })
  }

  if (whichstar2==12)
  { fivestarbooks = "前世今生: 生命轮回的启示",
    fivestarbookscontent = "耐心和适当时机每件事在该来的时候就会来。人生是急不得的，不能像许多人希望的时间表那样。我们必须接受凡事来临的时间，不要强求。",
    bookpic = "https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E4%B9%A6%E9%81%93%E5%85%B7/%E6%B0%B4.png?sign=6fc3c700dc4ae294ae2b579619bf32e0&t=1672208303"
    wx.cloud.callFunction({
      name: "queryresultbook",
      data:{bookname: "前生今世: 生命轮回的启示"}
    }).then(res=>{
      console.log(res.result.data)
      this.setData({
        fivestarbooks: res.result.data[0].bookname,
        fivestarbookscontent: res.result.data[0].picture,
        fivestarintro: res.result.data[0].introduce,
        bookpic: res.result.data[0].bookpic
      })
    })
  }

    var word = "你的五星正缘书"//您的五星正缘书

    wx.createSelectorQuery()
    .select('#canvas')
    .fields({
      node: true,
      size: true
    })
    .exec(async (res) => {
      const canvas = res[0].node;
      // Canvas 绘制上下文
      const ctx = canvas.getContext('2d');

      //画布大小根据屏幕分辨率进行缩放，防止模糊
      const renderWidth = res[0].width
      const renderHeight = res[0].height

      // 初始化画布大熊啊
      const dpr = wx.getSystemInfoSync().pixelRatio
      canvas.width = renderWidth*dpr
      canvas.height = renderHeight*dpr
      ctx.scale(dpr, dpr)

      //画布背景色
      ctx.fillStyle = "white";
      //ctx.fillRect(0, 0, canvas.width, canvas.height)
      // 载入图片 
      let imageToLoadCount = 0;
      function loadImage(src) {
          ++imageToLoadCount;
          const image = canvas.createImage();
          // image.onload 的执行顺序是不固定的（根据网络速度决定，谁先载入完成，谁先onload)
          image.onload = () => {
              if ((--imageToLoadCount)==0) {
                  // 当所有图片都载入完成后，才执行绘制操作
                  allImagesLoaded();
              }
          }
          image.src = src;
          return image;
      }
      const image = loadImage('https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E5%85%B6%E4%BB%96/%E8%83%8C%E6%99%AF(%E8%99%9A%E5%8C%96).jpg?sign=261ebb2cd307d7190934964661a55aa1&t=1672051076');
      const image2 = loadImage(bookpic);
      const image3 = loadImage("https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E6%A0%87%E5%BF%97/%E4%BA%8C%E7%BB%B4%E7%A0%81.jpeg?sign=c37603589db16c714593060e4fc0b823&t=1671199297");
      const image4 = loadImage("https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E6%A0%87%E5%BF%97/kelplogo.png?sign=8718a5c871506572a5fca6b323644a62&t=1671199307");
      const image5 = loadImage("https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E6%AF%9B%E7%AC%94%E4%BA%BA%20%E5%8E%9F%E5%A7%8B%E5%B0%BA%E5%AF%B8/%E5%B0%8F%E4%BA%BA-11(new).png?sign=3f6644b03c0370b3558db878bd97c592&t=1672051225");
      
              
      function allImagesLoaded() {
        // 后draw的在先draw的上层
 
        // Draw image 1
        ctx.drawImage(image,0,0,414,736)//650
        ctx.fillStyle = "white";

        // Draw "您的五星正缘书"
        ctx.textAlign = 'center';
        ctx.font= 'normal bold 24px serif'
        ctx.fillText(word,207,370)

        // Draw TITLE
        ctx.font= 'normal bold 24px serif'
        //ctx.fillText(fivestarbooks,207,410)
        line1 = myGolbalFunction.myFunction.textPrewrap(ctx,fivestarbooks,207,414,35,240,12)

        y = line1*37+410;
        ctx.font = 'normal bold 16px serif'
        myGolbalFunction.myFunction.textPrewrap(ctx,fivestarbookscontent,207,y,20,200,12)

        // Draw image 2  书图
        //ctx.drawImage(image2,30,30,350,350)
        ctx.drawImage(image2,-46,-37,480,480)
      
        // Draw image 3  二维码
        ctx.drawImage(image3,183,635,48,48)

        // Draw image 4  kelplogo
        ctx.drawImage(image4, 182, 10, 50,50)

        // Draw image 5  小人-11
        ctx.drawImage(image5, -15, 580,140,140)
      }
    })
    checked4 = false;
    }
    
  },

  // 点击“喜欢”，进入四星推书界面
  honeystar2:function(){
    var windowHeight = wx.getSystemInfoSync().windowHeight

    if (checked5){
      beginnum == 8
      checked13 = 1
    // 糊化进出
    //var ani_t0 = wx.createAnimation({
    //  delay: 2340, //2600 2750 22
    //  duration:10
    //})//a
    //ani_t0.translate(0,0).step()

    //var ani_t0in = wx.createAnimation({
    //  delay: 11700,
    //  duration: 10,
    //})
    //ani_t0in.translate(0,0).step()

    //糊化出入
    if (windowHeight>=800){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[{
      translateX:-1600*windowWidth/750,translateY:-680*windowWidth/750,opacity:1.0},
      {translateX:-1600*windowWidth/750, translateY:-680*windowWidth/750,opacity:0.0}],10,)},2350)//6900
    }
  
    if (windowHeight>=700 && windowHeight<800){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[
      {translateX:-1570*windowWidth/750,translateY:-670*windowWidth/750,opacity:1.0},
      {translateX:-1570*windowWidth/750, translateY:-670*windowWidth/750,opacity:0.0}],10,)},2350)
    }
  
    if (windowHeight>=600 && windowHeight<700){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[{
        translateX:-1260*windowWidth/750,translateY:-560*windowWidth/750,opacity:1.0},
      {translateX:-1260*windowWidth/750, translateY:-560*windowWidth/750,opacity:0.0}],10,)},2350)
    }
  
    if (windowHeight<600){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[
      {translateX:-1255*windowWidth/750,translateY:-550*windowWidth/750,opacity:1.0},
      {translateX:-1255*windowWidth/750, translateY:-550*windowWidth/750,opacity:0.0},],10,)},2350)
    }


    if (windowHeight>=800){
      setTimeout(()=>{
     this.animate("#bgimg_blur1",[ //blur2
       {translateX:-750*windowWidth/750,translateY:-520*windowWidth/750,opacity:0.0},
       {translateX:-3040*windowWidth/750,translateY:0*windowWidth/750,opacity:1.0}],10,)
     },12900) //.toExponential. 2350
   }
    if (windowHeight>=700&&windowHeight<800){
      setTimeout(()=>{
     this.animate("#bgimg_blur1",[
       {translateX:-750*windowWidth/750,translateY:-510*windowWidth/750,opacity:0.0},
       {translateX:-3000*windowWidth/750,translateY:0*windowWidth/750,opacity:1.0}],10,)
     },12900)
   }
  
    if (windowHeight>=600&&windowHeight<700){
     setTimeout(()=>{
    this.animate("#bgimg_blur1",[
      {translateX:-565*windowWidth/750, translateY:-430*windowWidth/750, opacity:0.0},
      {translateX:-2400*windowWidth/750, translateY:0*windowWidth/750,opacity:1.0}],10,)
    },12900)
    }
  
    if (windowHeight<600){
     setTimeout(()=>{
    this.animate("#bgimg_blur1",[
      {translateX:-545*windowWidth/750, translateY:-410*windowWidth/750, opacity:0.0},
      {translateX:-2360*windowWidth/750, translateY:0*windowWidth/750,opacity:1.0}],10,)
    },12900)//7000
    }


    //小人进出
    // var ani_tps_c = wx.createAnimation({
    //   delay: 2550,
    //   duration:600,
    // })
    // ani_tps_c.opacity(0.0).step()

    // var ani_tps = wx.createAnimation({
    //   delay: 11900,
    //   duration: 600,
    // })
    // ani_tps.opacity(1.0).step()

    setTimeout(()=>{
      this.animate("#ani_person_8",[
        {opacity:1.0},
        {opacity:0.0}],600,)},2550)
  
    setTimeout(()=>{
      this.animate("#ani_person_10",[
        {opacity:0.0},
        {opacity:1.0}],600,)},11900)

    // 地图移动
    //var ani_tmap = wx.createAnimation({
    //  delay: 3350,  //16]00 2100 2200 2400 3300 3800 3050 2550 
   //   duration: 2000, //1800
   // });
    
    if (windowHeight>=800){
      setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX:-1600*windowWidth/750, translateY:-680*windowWidth/750},
        {translateX:-3840*windowWidth/750, translateY: -540*windowWidth/750},],3000,)
      },3350)

      setTimeout(()=>{
        this.animate("#bgimg",[
          {translateX:-3840*windowWidth/750, translateY: -540*windowWidth/750},
          {translateX:-3040*windowWidth/750, translateY:0*windowWidth/750},],2100,)
        },9550)
    }
    
    if (windowHeight>=700 && windowHeight<800){
      setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX:-1570*windowWidth/750, translateY:-670*windowWidth/750},
        {translateX:-3800*windowWidth/750, translateY:-500*windowWidth/750},
       
      ],3000,)},3350)

      setTimeout(()=>{
        this.animate("#bgimg",[
          {translateX:-3800*windowWidth/750, translateY:-500*windowWidth/750},
          {translateX:-3000*windowWidth/750, translateY:0*windowWidth/750},
        ],2100,)},9550)
    }

    if (windowHeight>=600 && windowHeight<700){
      setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX:-1260*windowWidth/750, translateY:-560*windowWidth/750},{translateX:-3150*windowWidth/750, translateY:-400*windowWidth/750},
      ],3000,)},3350)
      setTimeout(()=>{
        this.animate("#bgimg",[
          {translateX:-3150*windowWidth/750, translateY:-400*windowWidth/750},{translateX:-2400*windowWidth/750, translateY:0*windowWidth/750},
        ],2100,)},9550)
    }

    if (windowHeight<600){
      setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX:-1255*windowWidth/750, translateY:-550*windowWidth/750},{translateX:-3050*windowWidth/750, translateY:-400*windowWidth/750},
      ],3000,)},3350)
      setTimeout(()=>{
        this.animate("#bgimg",[
          {translateX:-3050*windowWidth/750, translateY:-400*windowWidth/750},{translateX:-2360*windowWidth/750, translateY:0*windowWidth/750},
        ],2100,)},9550)
    }
    
    // 当前的问题和选项消失
    // var ani_tqq7_c = wx.createAnimation({
    //   delay: 1000,
    //   duration: 800,
    // });
    // ani_tqq7_c.opacity(0.0).step()

    setTimeout(()=>{
      this.animate("#questionimpress",[
        {opacity:1.0},
        {opacity:0.0}],800,)},1000)



    var ani_tsj7_op_c=wx.createAnimation({
      delay: 600,
      duration: 600,
    });
    ani_tsj7_op_c.opacity(0.0).translate(0,-600*2*windowWidth/750).step()
    ani_tsj7_op_c.translate(0,0).step()

    var ani_tsj_op77_c=wx.createAnimation({ //ani_tsj7_op_c
      delay: 600,
      duration: 600,
    })
    ani_tsj_op77_c.opacity(0.0).translate(0,-600*2*windowWidth/750).step()
    ani_tsj_op77_c.opacity(0.0).translate(0,0).step()

    var ani_tsj_op777_c=wx.createAnimation({ //ani_tsj7_op_c
      delay: 600,
      duration: 600, 
    })
    ani_tsj_op777_c.opacity(0.0).translate(0,-600*2*windowWidth/750).step()
    ani_tsj_op777_c.translate(0,0).step()

    // 等待加载显示
    setTimeout(()=>{
      this.animate("#loading",[{opacity:0.0},{opacity:1.0},],600,)},6350)
    
    setTimeout(()=>this.startBtn(),6950)
    
    setTimeout(()=>{
      this.animate("#loading",[{opacity:1.0},{opacity:0.0},],600,)},9150)  //7700
    

    //、流星划过
    //var ani_meteor = wx.createAnimation({ //ani_mete
    //  delay: 2600,//5000 2000 1500 5000
    //  duration: 2560, //1660 2060 2260
    //})
    //ani_metoe ani_metero
    //ani_meteor.opacity(1.0).translate(0,0).step()
    //ani_meteor.translate(-1250, 2000).step()

    // 纸片划入
  //   if (windowHeight<=700){
  //     var ani_tpp1 = wx.createAnimation({
  //     delay: 13000,//8800 9700 10500 12000
  //     duration: 1200,
  //   })
  //   ani_tpp1.translate(900*windowWidth/750,1150*windowWidth/750).rotate(15).step()

  //   var ani_tpp2 = wx.createAnimation({
  //     delay: 13500,
  //     duration: 1200,
  //   })
  //   ani_tpp2.translate(840*windowWidth/750,1130*windowWidth/750).rotate(28).step()
    
  //   var ani_tpp3 = wx.createAnimation({
  //     delay: 14000,
  //     duration: 1200,
  //   })
  //   ani_tpp3.translate(760*windowWidth/750,1120*windowWidth/750).rotate(45).step()
  // }
   
    // if (windowHeight >700){
    //   var ani_tpp1 = wx.createAnimation({
    //     delay: 13000,//8800 9700 10500 12000
    //     duration: 1200,
    //   })
    //   ani_tpp1.translate(820*windowWidth/750,1150*windowWidth/750).rotate(15).step()
   
    //   var ani_tpp2 = wx.createAnimation({
    //     delay: 13500,
    //     duration: 1200,
    //   })
    //   ani_tpp2.translate(760*windowWidth/750,1130*windowWidth/750).rotate(28).step()
      
    //   var ani_tpp3 = wx.createAnimation({
    //     delay: 14000,
    //     duration: 1200,
    //   })
    //   ani_tpp3.translate(680*windowWidth/750,1120*windowWidth/750).rotate(45).step()
    // }
    
    // 四星推书显示

    var ani_fourstar = wx.createAnimation({
      delay: 14700,
      duration: 1200,
    })
    ani_fourstar. opacity(1.0).step()

    var ani_four = wx.createAnimation({
      delay: 6000,//7100
      duration: 1000,
    })
    ani_four.translate(-700*windowWidth/750,0).step()
    ani_four.opacity(1.0).step()

    // 再来一次按钮
    //var ani_again = wx.createAnimation({
    //  delay: 7700,  //7900 8500 7500 7700 1700
    //  duration: 1200,
    //})
    //ani_again.opacity(0.0).translate(137*2*windowWidth/750,0).step() // 纯140px这个位置显示不错
    //ani_again.opacity(1.0).translate(140*2*windowWidth/750,0).step()

    // continue按钮
    var ani_continue = wx.createAnimation({
      delay: 6500,//7850
      duration: 1000
    })
    ani_continue.opacity(0.0).translateX(550*windowWidth/750).step()
    ani_continue.opacity(1.0).step()

    // ABOUT KELPde 按钮
    // var ani_aboutKELP = wx.createAnimation({
    //   delay: 7500, //14000, 7500 1500
    //   duration: 1000,
    // })
    // ani_aboutKELP.translate(0,0).step()
    // ani_aboutKELP.opacity(1.0).step()

    // 把信息传入index.wxml
    // the last steps
    this.setData({
      //ani_movebk: ani_tmap.export(),
      // ani_impression: ani_tqq7_c.export(),
      ani_likestar2: ani_tsj7_op_c.export(),
      ani_whateverstar2: ani_tsj_op77_c.export(),
      ani_dislikestar2: ani_tsj_op777_c.export(),
      // ani_paper_1: ani_tpp1.export(),
      // ani_paper_2: ani_tpp2.export(),
      // ani_paper_3: ani_tpp3.export(),
      // ani_fourstarbook: ani_fourstar.export(),
      ani_fourstar: ani_four.export(),
      ani_continue: ani_continue.export(),
      // ani_person_8: ani_tps_c.export(),
      // ani_person_10: ani_tps.export()
    })

    point[whichelement-1] = point[whichelement-1] + 2
    console.log(point)

    for (var i = 0; i <= 3; i++)
    { if (point[i] > 0){
      num_positive = num_positive + 1}
    }
    console.log(num_positive)
    
    for (var i = 0; i <= 3; i++) // var i =1;i<=4
    { if (point[i] == 0){
      num_zero = num_zero + 1}
    }
    console.log(num_zero)

    for (var i = 0; i <= 3; i++)
    { if (point[i] < 0){
      num_negative = num_negative + 1}
    }
    console.log(num_negative)


    wx.cloud.callFunction({
      name: "getResultBook",
      data: {
        point: point,
        num_zero: num_zero,
        num_negative: num_negative,
        num_positive: num_positive
      }
    }).then(res=>{
      console.log("获取结果书籍成功,", res.result)
      result_bookname = res.result.fourstarbook
      // console.log("结果书籍是1：", result_bookname)
      
      wx.cloud.callFunction({
        name: "queryresultbook",
        data:{bookname: result_bookname}
      }).then(res=>{
        console.log(res.result.data)
        this.setData({
          fourstarbook: res.result.data[0].bookname,
          fourbookcontent: res.result.data[0].picture,
          fourstarintro1: res.result.data[0].introduce1,
          bookpic: res.result.data[0].bookpic
        })
      })
    })

    
    var word = "你的四星正缘书"//您的四星正缘书

      wx.createSelectorQuery()
      .select('#canvas')
      .fields({
        node: true,
        size: true
      })
      .exec(async (res) => {
        const canvas = res[0].node;
        // Canvas 绘制上下文
        const ctx = canvas.getContext('2d');

        //画布大小根据屏幕分辨率进行缩放，防止模糊
        const renderWidth = res[0].width
        const renderHeight = res[0].height

        // 初始化画布大熊啊
        const dpr = wx.getSystemInfoSync().pixelRatio
        canvas.width = renderWidth*dpr
        canvas.height = renderHeight*dpr
        ctx.scale(dpr, dpr)

        //画布背景色
        ctx.fillStyle = "white";
        //ctx.fillRect(0, 0, canvas.width, canvas.height)
        // 载入图片 
        let imageToLoadCount = 0;
        function loadImage(src) {
            ++imageToLoadCount;
            const image = canvas.createImage();
            // image.onload 的执行顺序是不固定的（根据网络速度决定，谁先载入完成，谁先onload)
            image.onload = () => {
                if ((--imageToLoadCount)==0) {
                    // 当所有图片都载入完成后，才执行绘制操作
                    allImagesLoaded();
                }
            }
            image.src = src;
            return image;
        }
        const image = loadImage('https://636c-cloud1-7gbpee7nfc78bc69-1311890189.tcb.qcloud.la/11%20%E6%9C%80%E7%BB%88%E5%88%86%E4%BA%AB%E7%95%8C%E9%9D%A2.jpg?sign=44d46f01640a122461be3e01961b72b0&t=1662863990');
        const image2 = loadImage(bookpic);
        const image3 = loadImage("https://636c-cloud1-7gbpee7nfc78bc69-1311890189.tcb.qcloud.la/QR-%E4%BA%8C%E7%BB%B4%E7%A0%81.jpeg?sign=fc6bf4a360d4dd17507777628f3c633f&t=1663229258")
        
                
        function allImagesLoaded() {
          // 后draw的在先draw的上层
        
          // Draw image 1
          ctx.drawImage(image,0,0,414,650)
          ctx.fillStyle = "white";
          ctx.font= 'normal bold 20px sans-serif'
          ctx.fillText(word,100,320)
          ctx.font= 'normal bold 20px sans-serif'
          ctx.fillText(fourstarbook,100,350)
          ctx.font= 'normal 10px sans-serif'
          ctx.fillText(word3,100,400)
          ctx.font= 'normal 10px sans-serif'
          ctx.fillText(word4,100,415)
                
          // Draw image 2
          ctx.drawImage(image2,30,0,350,350)
        
          // Draw image 3
          ctx.drawImage(image3,120,440,130,130)
        }

      })


    checked5 = false;
    }
    
  },

  coolstar2:function(){
    var windowHeight = wx.getSystemInfoSync().windowHeight
    if (checked5){
      beginnum == 8
      checked13 = 1

    //糊化出入
    if (windowHeight>=800){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[{
      translateX:-1600*windowWidth/750,translateY:-680*windowWidth/750,opacity:1.0},
      {translateX:-1600*windowWidth/750, translateY:-680*windowWidth/750,opacity:0.0}],10,)},2350)//6900
    }
  
    if (windowHeight>=700 && windowHeight<800){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[
      {translateX:-1570*windowWidth/750,translateY:-670*windowWidth/750,opacity:1.0},
      {translateX:-1570*windowWidth/750, translateY:-670*windowWidth/750,opacity:0.0}],10,)},2350)
    }
  
    if (windowHeight>=600 && windowHeight<700){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[{
        translateX:-1260*windowWidth/750,translateY:-560*windowWidth/750,opacity:1.0},
      {translateX:-1260*windowWidth/750, translateY:-560*windowWidth/750,opacity:0.0}],10,)},2350)
    }
  
    if (windowHeight<600){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[
      {translateX:-1255*windowWidth/750,translateY:-550*windowWidth/750,opacity:1.0},
      {translateX:-1255*windowWidth/750, translateY:-550*windowWidth/750,opacity:0.0},],10,)},2350)
    }


    if (windowHeight>=800){
      setTimeout(()=>{
     this.animate("#bgimg_blur1",[ //blur2
       {translateX:-750*windowWidth/750,translateY:-520*windowWidth/750,opacity:0.0},
       {translateX:-3040*windowWidth/750,translateY:0*windowWidth/750,opacity:1.0}],10,)
     },12900) //.toExponential. 2350
   }
    if (windowHeight>=700&&windowHeight<800){
      setTimeout(()=>{
     this.animate("#bgimg_blur1",[
       {translateX:-750*windowWidth/750,translateY:-510*windowWidth/750,opacity:0.0},
       {translateX:-3000*windowWidth/750,translateY:0*windowWidth/750,opacity:1.0}],10,)
     },12900)
   }
  
    if (windowHeight>=600&&windowHeight<700){
     setTimeout(()=>{
    this.animate("#bgimg_blur1",[
      {translateX:-565*windowWidth/750, translateY:-430*windowWidth/750, opacity:0.0},
      {translateX:-2400*windowWidth/750, translateY:0*windowWidth/750,opacity:1.0}],10,)
    },12900)
    }
  
    if (windowHeight<600){
     setTimeout(()=>{
    this.animate("#bgimg_blur1",[
      {translateX:-545*windowWidth/750, translateY:-410*windowWidth/750, opacity:0.0},
      {translateX:-2360*windowWidth/750, translateY:0*windowWidth/750,opacity:1.0}],10,)
    },12900)//7000
    }


    //小人进出
    // var ani_tps_c = wx.createAnimation({
    //   delay: 2550,
    //   duration:600,
    // })
    // ani_tps_c.opacity(0.0).step()

    // var ani_tps = wx.createAnimation({
    //   delay: 11900,
    //   duration: 600,
    // })
    // ani_tps.opacity(1.0).step()

    setTimeout(()=>{
      this.animate("#ani_person_8",[
        {opacity:1.0},
        {opacity:0.0}],600,)},2550)
  
    setTimeout(()=>{
      this.animate("#ani_person_10",[
        {opacity:0.0},
        {opacity:1.0}],600,)},11900)



    // 地图移动
    //var ani_tmap = wx.createAnimation({
    //  delay: 3350, //1600 32500 3250 3450 3550 3900 3050 2550
    //  duration: 2000,
    //});
    
    if (windowHeight>=800){
      setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX:-1600*windowWidth/750, translateY:-680*windowWidth/750},
        {translateX:-3840*windowWidth/750, translateY: -540*windowWidth/750},],3000,)
      },3350)
      setTimeout(()=>{
        this.animate("#bgimg",[
          {translateX:-3840*windowWidth/750, translateY: -540*windowWidth/750},
          {translateX:-3040*windowWidth/750, translateY:0*windowWidth/750},],2100,)
        },9550)
    }
    
    if (windowHeight>=700 && windowHeight<800){
      setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX:-1570*windowWidth/750, translateY:-670*windowWidth/750},
        {translateX:-3800*windowWidth/750, translateY:-500*windowWidth/750},
      ],3000,)},3350)
      setTimeout(()=>{
        this.animate("#bgimg",[
          {translateX:-3800*windowWidth/750, translateY:-500*windowWidth/750},
          {translateX:-3000*windowWidth/750, translateY:0*windowWidth/750},
        ],2100,)},9550)
    }

    if (windowHeight>=600 && windowHeight<700){
      setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX:-1260*windowWidth/750, translateY:-560*windowWidth/750},{translateX:-3150*windowWidth/750, translateY:-400*windowWidth/750},
      ],3000,)},3350)
      setTimeout(()=>{
        this.animate("#bgimg",[
          {translateX:-3150*windowWidth/750, translateY:-400*windowWidth/750},{translateX:-2400*windowWidth/750, translateY:0*windowWidth/750},
        ],2100,)},9550)
    }

    if (windowHeight<600){
      setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX:-1255*windowWidth/750, translateY:-550*windowWidth/750},{translateX:-3050*windowWidth/750, translateY:-400*windowWidth/750},
      ],3000,)},3350)
      setTimeout(()=>{
        this.animate("#bgimg",[
          {translateX:-3050*windowWidth/750, translateY:-400*windowWidth/750},{translateX:-2360*windowWidth/750, translateY:0*windowWidth/750},
        ],2100,)},9550)
    }

    // 当前的问题和选项消失
    // var ani_tqq7_c = wx.createAnimation({
    //   delay: 1000, //600 800 1400 1700
    //   duration: 800 //600 650
    // });
    // ani_tqq7_c.opacity(0.0).step()

    setTimeout(()=>{
      this.animate("#questionimpress",[
        {opacity:1.0},
        {opacity:0.0}],800,)},1000)

    var ani_tsj7_op_c=wx.createAnimation({
      delay: 600, //700 {900 1150 1400}
      duration: 600 //650
    });
    ani_tsj7_op_c.opacity(0.0).translateY(-600*2*windowWidth/750).step() 
    ani_tsj7_op_c.translate(0,0*2*windowWidth/750).step() //0

    var ani_tsj_op77_c=wx.createAnimation({ //ani_tsj7_op_c
      delay: 600, //700750  750700 750 1000 1150
      duration: 600 // 650
    });
    //(0,-275)
    ani_tsj_op77_c.opacity(0.0).translateY(-600*2*windowWidth/750).step() //-375*2rpx //-380*2rpx
    ani_tsj_op77_c.opacity(0.0).translate(0,0*2*windowWidth/750).step() //0 2w

    var ani_tsj_op777_c=wx.createAnimation({ //ani_tsj7_op_c
      delay: 600, //700 1100 1400
      duration: 600 //650
    });
    //(0,-275)
    ani_tsj_op777_c.opacity(0.0).translateY(-600*2*windowWidth/750).step() //-375*2rpx -380*2rpx
    ani_tsj_op777_c.opacity(0.0).translate(0,0*2*windowWidth/750).step()//280*2
    //ani_tsj_op777_c.opacity(1.0).translateY(-375).step()
    //ani_tsj_op777_c.translate(0,380).step()
    //ani_tsj_op777_c.opacity(0.0).translate(3,0).step() //ani_tsj7_op_c
    //ani_tsj_op777_c.translate(150,0).step() //opc, tras, ani_tsj7_op_c

    // 等待加载
    setTimeout(()=>{
      this.animate("#loading",[{opacity:0.0},{opacity:1.0},],600,)},6350)
    
    setTimeout(()=>this.startBtn(),6950)
    
    setTimeout(()=>{
      this.animate("#loading",[{opacity:1.0},{opacity:0.0},],600,)},9150)  //7700 8150
    

    //、流星划过
    //var ani_meteor = wx.createAnimation({ //ani_mete
    //  delay: 2600,//5000 2000 1500 5000
    //  duration: 2560, //1660 2060 2260
    //})
    //ani_metoe ani_metero
    //ani_meteor.opacity(1.0).translate(0,0).step()
    //ani_meteor.translate(-1250, 2000).step()

    // 纸片划入
    // if (windowHeight<=700){
    //   var ani_tpp1 = wx.createAnimation({
    //     delay: 13000,//8800 9700 10500 12000
    //     duration: 1200,
    //   })
    //   ani_tpp1.translate(900*windowWidth/750,1150*windowWidth/750).rotate(15).step()

    //   var ani_tpp2 = wx.createAnimation({
    //     delay: 13500,
    //     duration: 1200,
    //   })
    //   ani_tpp2.translate(840*windowWidth/750,1130*windowWidth/750).rotate(28).step()
    
    //   var ani_tpp3 = wx.createAnimation({
    //     delay: 14000,
    //     duration: 1200,
    //   })
    //   ani_tpp3.translate(760*windowWidth/750,1120*windowWidth/750).rotate(45).step()
    // }
    

    // if (windowHeight >700){
    //   var ani_tpp1 = wx.createAnimation({
    //     delay: 13000,//8800 9700 10500 12000
    //     duration: 1200,
    //   })
    //   ani_tpp1.translate(820*windowWidth/750,1150*windowWidth/750).rotate(15).step()
   
    //   var ani_tpp2 = wx.createAnimation({
    //     delay: 13500,
    //     duration: 1200,
    //   })
    //   ani_tpp2.translate(760*windowWidth/750,1130*windowWidth/750).rotate(28).step()
      
    //   var ani_tpp3 = wx.createAnimation({
    //     delay: 14000,
    //     duration: 1200,
    //   })
    //   ani_tpp3.translate(680*windowWidth/750,1120*windowWidth/750).rotate(45).step()
    // }
   
    //var ani_tpp1 = wx.createAnimation({
    //  delay: 13100,//8800 9700
    //  duration: 1200,
    //})
    //ani_tpp1.translate(800*windowWidth/750,1200*windowWidth/750).rotate(10).step()
    
    //var ani_tpp2 = wx.createAnimation({
    //  delay: 13600,
    //  duration: 1200,
    //})
    //ani_tpp2.translate(730*windowWidth/750,1130*windowWidth/750).rotate(25).step()
    
    //var ani_tpp3 = wx.createAnimation({
    //  delay: 14100,
    //  duration: 1200,
    //})
    //ani_tpp3.translate(660*windowWidth/750,1110*windowWidth/750).rotate(40).step()


    // 四星推书显示

    var ani_fourstar = wx.createAnimation({
      delay: 14700, //12000 14500 17500 15000 3000
      duration: 1200 //1200 1600
    })
    ani_fourstar.opacity(1.0).step() //opacity(1.0)s
    //ani_fourstar.opacity(-0.0).step()

    var ani_four = wx.createAnimation({
      delay:6000, //7100 16000 4000 13000
      duration: 1000,
    })
    ani_four.translate(-700*windowWidth/750,0).step()
    ani_four.opacity(1.0).step()

    // continue按键
    var ani_continue = wx.createAnimation({
      delay: 6500,//7850
      duration: 1000
    })
    ani_continue.opacity(0.0).translateX(550*windowWidth/750).step()
    ani_continue.opacity(1.0).step()
  

    // 显示：再测一次

    //var ani_again = wx.createAnimation({
    //  delay: 7700, //7900 8600 700 9000 7700 1700
    //  duration: 1200,
    //})
    //ani_again.opacity(0.0).translate(137*2*windowWidth/750,0).step() //opacity(1.0)
    //ani_again.opacity(1.0).translate(140*2*windowWidth/750,0).step()

    // ABOUT KELPde 按钮
  //var ani_aboutKELP = wx.createAnimation({
    //delay: 7500, //14000,7000 7500 1500
    //duration: 1000,
  //})
  //ani_aboutKELP.translate(0,0).step()
  //ani_aboutKELP.opacity(1.0).step()

    // 把信息传入index.wxml
    // the last steps
    this.setData({
      // ani_person_8: ani_tps_c.export(),
      // ani_person_10: ani_tps.export(),
      //ani_movebk: ani_tmap.export(),
      // ani_impression: ani_tqq7_c.export(),
      ani_likestar2: ani_tsj7_op_c.export(),
      ani_whateverstar2: ani_tsj_op77_c.export(), 
      ani_dislikestar2: ani_tsj_op777_c.export(),
      // ani_paper_1: ani_tpp1.export(),
      // ani_paper_2: ani_tpp2.export(),
      // ani_paper_3: ani_tpp3.export(),
      // ani_fourstarbook: ani_fourstar.export(),
      ani_fourstar: ani_four.export(),
      ani_continue: ani_continue.export(),    
    })

    point[whichelement-1] = point[whichelement-1] + 0
    console.log(point)

    for (var i = 0; i <= 3; i++)
    { if (point[i] > 0){
      num_positive = num_positive + 1}
    }
    console.log(num_positive)
    
    for (var i = 0; i <= 3; i++) // var i =1;i<=4
    { if (point[i] == 0){
      num_zero = num_zero + 1}
    }
    console.log(num_zero)

    for (var i = 0; i <= 3; i++)
    { if (point[i] < 0){
      num_negative = num_negative + 1}
    }
    console.log(num_negative)


    wx.cloud.callFunction({
      name: "getResultBook",
      data: {
        point: point,
        num_zero: num_zero,
        num_negative: num_negative,
        num_positive: num_positive
      }
    }).then(res=>{
      console.log("获取结果书籍成功,", res.result)
      result_bookname = res.result.fourstarbook
      // console.log("结果书籍是1：", result_bookname)
      
      wx.cloud.callFunction({
        name: "queryresultbook",
        data:{bookname: result_bookname}
      }).then(res=>{
        console.log(res.result.data)
        this.setData({
          fourstarbook: res.result.data[0].bookname,
          fourbookcontent: res.result.data[0].picture,
          fourstarintro1: res.result.data[0].introduce1,
          fourstarintro2: res.result.data[0].introduce2,
          bookpic: res.result.data[0].bookpic
        })
      })
    })


    var word = "你的四星正缘书"//您的四星正缘书

    wx.createSelectorQuery()
    .select('#canvas')
    .fields({
      node: true,
      size: true
    })
    .exec(async (res) => {
      const canvas = res[0].node;
      // Canvas 绘制上下文
      const ctx = canvas.getContext('2d');

      //画布大小根据屏幕分辨率进行缩放，防止模糊
      const renderWidth = res[0].width
      const renderHeight = res[0].height

      // 初始化画布大熊啊
      const dpr = wx.getSystemInfoSync().pixelRatio
      canvas.width = renderWidth*dpr
      canvas.height = renderHeight*dpr
      ctx.scale(dpr, dpr)

      //画布背景色
      ctx.fillStyle = "white";
      //ctx.fillRect(0, 0, canvas.width, canvas.height)
      // 载入图片 
      let imageToLoadCount = 0;
      function loadImage(src) {
          ++imageToLoadCount;
          const image = canvas.createImage();
          // image.onload 的执行顺序是不固定的（根据网络速度决定，谁先载入完成，谁先onload)
          image.onload = () => {
            if ((--imageToLoadCount)==0) {
                // 当所有图片都载入完成后，才执行绘制操作
                allImagesLoaded();
            }
          }
          image.src = src;
          return image;
      }
      const image = loadImage('https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E5%85%B6%E4%BB%96/%E8%83%8C%E6%99%AF(%E8%99%9A%E5%8C%96).jpg?sign=261ebb2cd307d7190934964661a55aa1&t=1672051076');
      const image2 = loadImage(bookpic);
      const image3 = loadImage("https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E6%A0%87%E5%BF%97/%E4%BA%8C%E7%BB%B4%E7%A0%81.jpeg?sign=c37603589db16c714593060e4fc0b823&t=1671199297");
      const image4 = loadImage("https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E6%A0%87%E5%BF%97/kelplogo.png?sign=8718a5c871506572a5fca6b323644a62&t=1671199307");
      const image5 = loadImage("https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E6%AF%9B%E7%AC%94%E4%BA%BA%20%E5%8E%9F%E5%A7%8B%E5%B0%BA%E5%AF%B8/%E5%B0%8F%E4%BA%BA-11(new).png?sign=3f6644b03c0370b3558db878bd97c592&t=1672051225");

    
      function allImagesLoaded() {
        // Draw image 1
        ctx.drawImage(image,0,0,414,736)//650
        ctx.fillStyle = "white";

        // Draw "您的四星正缘书"
        ctx.textAlign = 'center';
        ctx.font= 'normal bold 24px serif'
        ctx.fillText(word,207,370)

        // Draw TITLE
        ctx.font= 'normal bold 24px serif'
        line1 = myGolbalFunction.myFunction.textPrewrap(ctx,fourstarbook,207,414,35,240,12)

        y = line1*37+410;
        ctx.font = 'normal bold 16px serif'
        myGolbalFunction.myFunction.textPrewrap(ctx,fourstarbookcontent,207,y,20,200,12)//fivestarintro//442
            
        // Draw image 2  书图
        ctx.drawImage(image2,-46,-37,480,480)
    
        // Draw image 3  二维码
        ctx.drawImage(image3,183,635,48,48)

        // Draw image 4  kelplogo
        ctx.drawImage(image4, 182, 10, 50,50)

        // Draw image 5  小人-11
        ctx.drawImage(image5, -15, 580,140,140)
      }
    })


    checked5 = false;

    }
    
  },

  coldstar2:function(){
    var windowHeight = wx.getSystemInfoSync().windowHeight
    if (checked5) {
      beginnum == 8
      checked13 = 1
    // 糊化进出
    //var ani_t0 = wx.createAnimation({
    //  delay: 2600, //2600
   //   duration:10
  //  })//a
    //ani_t0.translate(0,0).step()

    //var ani_t0in = wx.createAnimation({
    //  delay: 12200,
    //  duration: 10,
    //})
    //ani_t0in.translate(0,0).step()

    //糊化出入
    if (windowHeight>=800){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[{
      translateX:-1600*windowWidth/750,translateY:-680*windowWidth/750,opacity:1.0},
      {translateX:-1600*windowWidth/750,translateY:-680*windowWidth/750,opacity:0.0}],10,)},2350)//6900
    }
  
    if (windowHeight>=700 && windowHeight<800){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[
      {translateX:-1570*windowWidth/750,translateY:-670*windowWidth/750,opacity:1.0},
      {translateX:-1570*windowWidth/750, translateY:-670*windowWidth/750,opacity:0.0}],10,)},2350)
    }
  
    if (windowHeight>=600 && windowHeight<700){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[{
        translateX:-1260*windowWidth/750,translateY:-560*windowWidth/750,opacity:1.0},
      {translateX:-1260*windowWidth/750, translateY:-560*windowWidth/750,opacity:0.0}],10,)},2350)
    }
  
    if (windowHeight<600){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[
      {translateX:-1255*windowWidth/750,translateY:-550*windowWidth/750,opacity:1.0},
      {translateX:-1255*windowWidth/750, translateY:-550*windowWidth/750,opacity:0.0},],10,)},2350)
    }


    if (windowHeight>=800){
      setTimeout(()=>{
     this.animate("#bgimg_blur1",[ //blur2
       {translateX:-750*windowWidth/750,translateY:-520*windowWidth/750,opacity:0.0},
       {translateX:-3040*windowWidth/750,translateY:0*windowWidth/750,opacity:1.0}],10,)
     },12900) //.toExponential. 2350
   }
    if (windowHeight>=700&&windowHeight<800){
      setTimeout(()=>{
     this.animate("#bgimg_blur1",[
       {translateX:-750*windowWidth/750,translateY:-510*windowWidth/750,opacity:0.0},
       {translateX:-3000*windowWidth/750,translateY:0*windowWidth/750,opacity:1.0}],10,)
     },12900)
   }
  
    if (windowHeight>=600&&windowHeight<700){
     setTimeout(()=>{
    this.animate("#bgimg_blur1",[
      {translateX:-565*windowWidth/750, translateY:-430*windowWidth/750, opacity:0.0},
      {translateX:-2400*windowWidth/750, translateY:0*windowWidth/750,opacity:1.0}],10,)
    },12900)
    }
  
    if (windowHeight<600){
     setTimeout(()=>{
    this.animate("#bgimg_blur1",[
      {translateX:-545*windowWidth/750, translateY:-410*windowWidth/750, opacity:0.0},
      {translateX:-2360*windowWidth/750, translateY:0*windowWidth/750,opacity:1.0}],10,)
    },12900)//7000
    }

    //小人进出
    // var ani_tps_c = wx.createAnimation({
    //   delay: 2550, //2800
    //   duration:600,
    // })
    // ani_tps_c.opacity(0.0).step()

    // var ani_tps = wx.createAnimation({
    //   delay: 11900, //11400
    //   duration: 600,
    // })
    // ani_tps.opacity(1.0).step()

    setTimeout(()=>{
      this.animate("#ani_person_8",[
        {opacity:1.0},
        {opacity:0.0}],600,)},2550)
  
    setTimeout(()=>{
      this.animate("#ani_person_10",[
        {opacity:0.0},
        {opacity:1.0}],600,)},11900)



    // 地图移动
   // var ani_tmap = wx.createAnimation({
   //   delay: 3600, // 1600 26000 2500 2700 3300 2550
   //   duration: 2000,
   // });
   if (windowHeight>=800){
    setTimeout(()=>{
    this.animate("#bgimg",[
      {translateX:-1600*windowWidth/750, translateY:-680*windowWidth/750},
      {translateX:-3840*windowWidth/750, translateY: -540*windowWidth/750},
     ],3000,)},3350)
    setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX:-3840*windowWidth/750, translateY: -540*windowWidth/750},
        {translateX:-3040*windowWidth/750, translateY:0*windowWidth/750},],2100,)
      },9550)
  }
  
  if (windowHeight>=700 && windowHeight<800){
    setTimeout(()=>{
    this.animate("#bgimg",[
      {translateX:-1570*windowWidth/750, translateY:-670*windowWidth/750},
      {translateX:-3800*windowWidth/750, translateY:-500*windowWidth/750},
    ],3000,)},3350)
    setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX:-3800*windowWidth/750, translateY:-500*windowWidth/750},
        {translateX:-3000*windowWidth/750, translateY:0*windowWidth/750},
      ],2100,)},9550)
  }

  if (windowHeight>=600 && windowHeight<700){
    setTimeout(()=>{
    this.animate("#bgimg",[
      {translateX:-1260*windowWidth/750, translateY:-560*windowWidth/750},{translateX:-3150*windowWidth/750, translateY:-400*windowWidth/750},
    ],3000,)},3350)
    setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX:-3150*windowWidth/750, translateY:-400*windowWidth/750},{translateX:-2400*windowWidth/750, translateY:0*windowWidth/750},
      ],2100,)},9550) //8350
  }

  if (windowHeight<600){
    setTimeout(()=>{
    this.animate("#bgimg",[
      {translateX:-1255*windowWidth/750, translateY:-550*windowWidth/750},{translateX:-3050*windowWidth/750, translateY:-400*windowWidth/750},
    ],3000,)},3350)
    setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX:-3050*windowWidth/750, translateY:-400*windowWidth/750},{translateX:-2360*windowWidth/750, translateY:0*windowWidth/750},
      ],2100,)},9550)
  }
   
    //ani_tmap.translate(-3850*windowWidth/750, -1200*windowWidth/750).step()
    //ani_tmap.translate(-3050*windowWidth/750, -300*windowWidth/750).step() //tamp (-850,900) (-750,930)(-700,930)
    //ani_tmap.translate(-2270*windowWidth/750, 0*windowWidth/750).step()

    //ani_tmap.translate(-2200*2*windowWidth/750, -350*2*windowWidth/750).step()
    //ani_tmap.translate(-1850*2*windowWidth/750, -100*2*windowWidth/750).step()
    //ani_tmap.translate(-1500*2*windowWidth/750, 0).step()
    //ani_tmap.translate(-2000, -350).step()
    //ani_tmap.translate(-1590, -80).step() //进入翻书页
    //ani_tmap.translate(-1250,0).step() //进入推书页

    // 当前的问题和选项消失
    // var ani_tqq7_c = wx.createAnimation({
    //   delay: 1600, //600
    //   duration: 600
    // });
    // ani_tqq7_c.opacity(0.0).step()

    setTimeout(()=>{
      this.animate("#questionimpress",[
        {opacity:1.0},
        {opacity:0.0}],600,)},1600)

    var ani_tsj7_op_c=wx.createAnimation({ //ani_tsj7_op_
      delay: 950, //700
      duration: 650
    });
    //、、-275
    ani_tsj7_op_c.opacity(0.0).translate(0,-600*2*windowWidth/750).step() //opacity(1.0) //-375*2rpx -380*2 -480*3
    ani_tsj7_op_c.translateY(0*2*windowWidth/750).step()
    //ani_tsj7_op_c.opacity(0.0).step()
    //ani_tsj7_op_c.translate(150,0).step()
    //ani_tsj7_op_c.opacity(900,0).step()
    //ani_tsj_op7_c.opacity(0.0).translate(0,-275).step()
    //ani_tsj_op7_c.translate(0,280).step()

    var ani_tsj_op77_c=wx.createAnimation({ //ani_tsj7_op_
      delay: 1100,//700 7500
      duration: 650
    });
    //ani_tsj_op77_c.opacity(0.0).step()
    //ani_tsj_op77_c.translate(150,0).step() // -275 ani_tsj7777_op_c.translate(150,0).step()
    ani_tsj_op77_c.opacity(0.0).translate(0,-600*2*windowWidth/750).step() //-375*2rpx 0380*2rpx
    ani_tsj_op77_c.translateY(0*2*windowWidth/750).step()

    var ani_tsj_op777_c=wx.createAnimation({ //ani_tsj7_op_
      delay: 1250, //700 800
      duration: 650
    });
    // -275
    ani_tsj_op777_c.opacity(0.0).translate(0,-600*2*windowWidth/750).step() //-374 -375*2rpx -380*2rpx
    ani_tsj_op777_c.translateY(0*2*windowWidth/750).step()//280
    //ani_tsj_op88_c.opacity(0.0).translate(0,-275).step()
    //ani_tsj_op_c.translate(0,280).step()
    //ani_tsj_op777_c.opacity(0.0).step()
    //ani_tsj_op777_c.translate(150,0).step()
    
    // 等待加载显示
    setTimeout(()=>{
      this.animate("#loading",[{opacity:0.0},{opacity:1.0},],600,)},6350)
    
    setTimeout(()=>this.startBtn(),6950)
    
    setTimeout(()=>{
      this.animate("#loading",[{opacity:1.0},{opacity:0.0},],600,)},9150)  //7700
    

    //、流星划过
    //var ani_meteor = wx.createAnimation({ //ani_mete
    //  delay: 2600,//5000 2000 1500 5000
   //   duration: 2560, //1660 2060 2260
   // })
    //ani_metoe ani_metero
   // ani_meteor.opacity(1.0).translate(0,0).step()
   // ani_meteor.translate(-1250, 2000).step()

    // 纸片划入
    // if (windowHeight<=700){
    //   var ani_tpp1 = wx.createAnimation({
    //     delay: 13000,//8800 9700 10500 12000
    //     duration: 1200,
    //   })
    //   ani_tpp1.translate(900*windowWidth/750,1150*windowWidth/750).rotate(15).step()

    //   var ani_tpp2 = wx.createAnimation({
    //     delay: 13500,
    //     duration: 1200,
    //   })
    //   ani_tpp2.translate(840*windowWidth/750,1130*windowWidth/750).rotate(28).step()
    
    //   var ani_tpp3 = wx.createAnimation({
    //     delay: 14000,
    //     duration: 1200,
    //   })
    //   ani_tpp3.translate(760*windowWidth/750,1120*windowWidth/750).rotate(45).step()
   
    // }
    

    // if (windowHeight >700){
    //   var ani_tpp1 = wx.createAnimation({
    //     delay: 13000,//8800 9700 10500 12000
    //     duration: 1200,
    //   })
    //   ani_tpp1.translate(820*windowWidth/750,1150*windowWidth/750).rotate(15).step()
   
    //   var ani_tpp2 = wx.createAnimation({
    //     delay: 13500,
    //     duration: 1200,
    //   })
    //   ani_tpp2.translate(760*windowWidth/750,1130*windowWidth/750).rotate(28).step()
      
    //   var ani_tpp3 = wx.createAnimation({
    //     delay: 14000,
    //     duration: 1200,
    //   })
    //   ani_tpp3.translate(680*windowWidth/750,1120*windowWidth/750).rotate(45).step()
    // }
    
    // 四星推书显示

    var ani_fourstar = wx.createAnimation({
      delay: 14700, //12000 15600 3000 14000 13500
      duration: 1600 //1200
    })
    ani_fourstar.opacity(1.0).step()
    //ani_fourstar: a
    //ani_fourstar.opacity(-0.0).step()

    // 显示 推的书是什么
    var ani_four = wx.createAnimation({
      delay: 6000, //7250 ;;16000 4000 13000 6900 6500
      duration: 1000,
    })
    ani_four.translate(-700*windowWidth/750,0).step()
    ani_four.opacity(1.0).step()



    // 显示：再测一次
    //var ani_again = wx.createAnimation({
    //  delay: 7900, //7900 1900
    //  duration: 1200,
    //})
    //ani_again.opacity(0.0).translate(137*2*windowWidth/750,0).step()
    //ani_again.opacity(1.0).translate(140*2*windowWidth/750,0).step()

   // continue按钮
    var ani_continue = wx.createAnimation({
      delay: 6500, //7850 7250
      duration: 1000
    })
    ani_continue.opacity(0.0).translateX(550*windowWidth/750).step()
    ani_continue.opacity(1.0).step()
  
    // ABOUT KELPde 按钮
    //var ani_aboutKELP = wx.createAnimation({
    //  delay: 7500, //14000,7000 7500 1500
    //  duration: 1000,
    //})
    //ani_aboutKELP.translate(0,0).step()
    //ani_aboutKELP.opacity(1.0).step()

    // 把信息传入index.wxml
    // the last steps
    this.setData({
      //ani_blur: ani_t0.export(),
      //ani_blurin: ani_t0in.export(),
      // ani_person_8: ani_tps_c.export(),
      // ani_person_10: ani_tps.export(),
      // ani_impression: ani_tqq7_c.export(),
      ani_likestar2: ani_tsj7_op_c.export(),
      ani_whateverstar2: ani_tsj_op77_c.export(),
      ani_dislikestar2: ani_tsj_op777_c.export(),
      // ani_paper_1: ani_tpp1.export(),
      // ani_paper_2: ani_tpp2.export(),
      // ani_paper_3: ani_tpp3.export(),
      // ani_fourstarbook: ani_fourstar.export(),
      ani_fourstar: ani_four.export(),
      ani_continue: ani_continue.export(),
    })


    point[whichelement-1] = point[whichelement-1] - 2
    console.log(point)


    for (var i = 0; i <= 3; i++)
    { if (point[i] > 0){
      num_positive = num_positive + 1}
    }
    console.log(num_positive)
    
    for (var i = 0; i <= 3; i++)
    { if (point[i] == 0){
      num_zero = num_zero + 1}
    }
    console.log(num_zero)

    for (var i = 0; i <= 3; i++)
    { if (point[i] < 0){
      num_negative = num_negative + 1}
    }
    console.log(num_negative)

    
    wx.cloud.callFunction({
      name: "getResultBook",
      data: {
        point: point,
        num_zero: num_zero,
        num_negative: num_negative,
        num_positive: num_positive
      }
    }).then(res=>{
      console.log("获取结果书籍成功,", res.result)
      result_bookname = res.result.fourstarbook
      // console.log("结果书籍是1：", result_bookname)
      
      wx.cloud.callFunction({
        name: "queryresultbook",
        data:{bookname: result_bookname}
      }).then(res=>{
        console.log(res.result.data)
        this.setData({
          fourstarbook: res.result.data[0].bookname,
          fourbookcontent: res.result.data[0].picture,
          fourstarintro1: res.result.data[0].introduce1,
          fourstarintro2: res.result.data[0].introduce2,
          bookpic: res.result.data[0].bookpic
        })
      })
    })



    var word = "你的四星正缘书"//您的四星正缘书

    wx.createSelectorQuery()
    .select('#canvas')
    .fields({
      node: true,
      size: true
    })
    .exec(async (res) => {
      const canvas = res[0].node;
      // Canvas 绘制上下文
      const ctx = canvas.getContext('2d');

      //画布大小根据屏幕分辨率进行缩放，防止模糊
      const renderWidth = res[0].width
      const renderHeight = res[0].height

      // 初始化画布大熊啊
      const dpr = wx.getSystemInfoSync().pixelRatio
      canvas.width = renderWidth*dpr
      canvas.height = renderHeight*dpr
      ctx.scale(dpr, dpr)

      //画布背景色
      ctx.fillStyle = "white";
      //ctx.fillRect(0, 0, canvas.width, canvas.height)
      // 载入图片 
      let imageToLoadCount = 0;
      function loadImage(src) {
          ++imageToLoadCount;
          const image = canvas.createImage();
          // image.onload 的执行顺序是不固定的（根据网络速度决定，谁先载入完成，谁先onload)
          image.onload = () => {
            if ((--imageToLoadCount)==0) {
                // 当所有图片都载入完成后，才执行绘制操作
                allImagesLoaded();
            }
          }
          image.src = src;
          return image;
      }
      const image = loadImage('https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E5%85%B6%E4%BB%96/%E8%83%8C%E6%99%AF(%E8%99%9A%E5%8C%96).jpg?sign=261ebb2cd307d7190934964661a55aa1&t=1672051076');
      const image2 = loadImage(bookpic);
      const image3 = loadImage("https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E6%A0%87%E5%BF%97/%E4%BA%8C%E7%BB%B4%E7%A0%81.jpeg?sign=c37603589db16c714593060e4fc0b823&t=1671199297");
      const image4 = loadImage("https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E6%A0%87%E5%BF%97/kelplogo.png?sign=8718a5c871506572a5fca6b323644a62&t=1671199307");
      const image5 = loadImage("https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E6%AF%9B%E7%AC%94%E4%BA%BA%20%E5%8E%9F%E5%A7%8B%E5%B0%BA%E5%AF%B8/%E5%B0%8F%E4%BA%BA-11(new).png?sign=3f6644b03c0370b3558db878bd97c592&t=1672051225");

    
      function allImagesLoaded() {
        // Draw image 1
        ctx.drawImage(image,0,0,414,736)//650
        ctx.fillStyle = "white";

        // Draw "您的四星正缘书"
        ctx.textAlign = 'center';
        ctx.font= 'normal bold 24px serif'
        ctx.fillText(word,207,370)

        // Draw TITLE
        ctx.font= 'normal bold 24px serif'
        line1 = myGolbalFunction.myFunction.textPrewrap(ctx,fourstarbook,207,414,35,240,12)

        y = line1*37+410;
        ctx.font = 'normal bold 16px serif'
        myGolbalFunction.myFunction.textPrewrap(ctx,fourstarbookcontent,207,y,20,200,12)//fivestarintro//442
            
        // Draw image 2  书图
        ctx.drawImage(image2,-46,-37,480,480)
    
        // Draw image 3  二维码
        ctx.drawImage(image3,183,635,48,48)

        // Draw image 4  kelplogo
        ctx.drawImage(image4, 182, 10, 50,50)

        // Draw image 5  小人-11
        ctx.drawImage(image5, -15, 580,140,140)
      }
    })
    
    checked5 = false;
    }
  },
  
  //continueP
  continue:function(){
    var windowHeight = wx.getSystemInfoSync().windowHeight
    if (checked10){
      // 糊化出入
    if (windowHeight>=800){
      setTimeout(()=>{
     this.animate("#bgimg_blur1",[
       {translateX:-3040*windowWidth/750,translateY:0*windowWidth/750,opacity:1.0},
       {translateX:-3040*windowWidth/750,translateY:0*windowWidth/750,opacity:0.0}],10,)
     },2350) //2350 .toExponential. 2350
   }
    if (windowHeight>=700&&windowHeight<800){
      setTimeout(()=>{
     this.animate("#bgimg_blur1",[
       {translateX:-3000*windowWidth/750,translateY:0*windowWidth/750,opacity:1.0},
       {translateX:-3000*windowWidth/750,translateY:0*windowWidth/750,opacity:0.0}],10,)
     },2350)
   }
  
    if (windowHeight>=600&&windowHeight<700){
     setTimeout(()=>{
    this.animate("#bgimg_blur1",[
      {translateX:-2400*windowWidth/750, translateY:0*windowWidth/750,opacity:1.0},
      {translateX:-2400*windowWidth/750, translateY:0*windowWidth/750,opacity:0.0}],10,)
    },2350)
    }
  
    if (windowHeight<600){
     setTimeout(()=>{
    this.animate("#bgimg_blur1",[
      {translateX:-2360*windowWidth/750, translateY:0*windowWidth/750,opacity:1.0},
      {translateX:-2360*windowWidth/750, translateY:0*windowWidth/750,opacity:0.0}],10,)
    },2350)//7000
    }


    if (windowHeight>=800){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[{
      translateX:-1600*windowWidth/750,translateY:-680*windowWidth/750,opacity:0.0},
      {translateX:-2300*windowWidth/750, translateY:0*windowWidth/750,opacity:1.0}],10,)},6650)//6900
    }
  
    if (windowHeight>=700 && windowHeight<800){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[
      {translateX:-1570*windowWidth/750,translateY:-670*windowWidth/750,opacity:0.0},
      {translateX:-2275*windowWidth/750, translateY:0*windowWidth/750,opacity:1.0}],10,)},6650)
    }
  
    if (windowHeight>=600 && windowHeight<700){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[{
        translateX:-1260*windowWidth/750,translateY:-560*windowWidth/750,opacity:0.0},
      {translateX:-1817*windowWidth/750, translateY:0*windowWidth/750,opacity:1.0}],10,)},6650)
    }
  
    if (windowHeight<600){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[
      {translateX:-1255*windowWidth/750,translateY:-550*windowWidth/750,opacity:0.0},
      {translateX:-1777*windowWidth/750, translateY:0*windowWidth/750,opacity:1.0},],10,)},6650)
    }


    
    // 小人出入
    setTimeout(()=>{
      this.animate("#ani_person_10",[
        {opacity:1.0}, {opacity:0.0},],600,)},2550)

    
    setTimeout(()=>{
      this.animate("#ani_person_11",[
        {opacity:0.0}, {opacity:1.0},],600,)},5650)


    // 地图移动
    if (windowHeight>=800){
      setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX:-3040*windowWidth/750, translateY:0*windowWidth/750},
        {translateX:-2300*windowWidth/750, translateY: 0*windowWidth/750},
       ],2100,)},3350)
    }

    if (windowHeight>=700 && windowHeight<800){
      setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX:-3000*windowWidth/750, translateY:0*windowWidth/750},
        {translateX:-2275*windowWidth/750, translateY: 0*windowWidth/750},
       ],2100,)},3350)
    }

    if (windowHeight>=600 && windowHeight<700){
      setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX:-2400*windowWidth/750, translateY:0*windowWidth/750},
        {translateX:-1817*windowWidth/750, translateY: 0*windowWidth/750},
       ],2100,)},3350)
    }

    if (windowHeight<600){
      setTimeout(()=>{
      this.animate("#bgimg",[
        {translateX:-2360*windowWidth/750, translateY:0*windowWidth/750},
        {translateX:-1777*windowWidth/750, translateY: 0*windowWidth/750},
       ],2100,)},3350)
    }
    
    // 四/五星书介绍消失
    // var ani_tp1_c = wx.createAnimation({
    //   delay: 600,
    //   duration: 600,
    // })
    // ani_tp1_c.opacity(0.0).step()
  
    // var ani_tp2_c = wx.createAnimation({
    //   delay: 400,//600
    //   duration: 600,
    // })
    // ani_tp2_c.translate(-700*windowWidth/750,0).opacity(0.0).step()
    // ani_tp2_c.translate(0,0).opacity(0.0).step()

    setTimeout(()=>{
      this.animate("#fourstarbook",[
        {translateX:-700*windowWidth/750, opacity:1.0},
        {translateX:-700*windowWidth/750, opacity:0.0},
        {translateX:0, opacity:0.0}
      ],600,)},400)
    

   // ani_fourstar

    // var ani_tp3_c = wx.createAnimation({
    //   delay: 600,
    //   duration: 600,
    // })
    // ani_tp3_c.opacity(0.0).step()

    var ani_tp4_c = wx.createAnimation({
      delay: 400,//600
      duration: 600,
    })
    ani_tp4_c.translate(700*windowWidth/750,0).opacity(0.0).step()
    ani_tp4_c.translate(0,0).opacity(0.0).step()//sep
    //ani_tp4_c.opacity(0.0).step()

    // fivestarbooks

    setTimeout(()=>{
      this.animate("#fivestarbooks",[
        {translateX: 700*windowWidth/750, opacity:1.0},
        {translateX: 700*windowWidth/750, opacity:0.0},
        {translateX:0, opacity:0.0}
      ],600,)},400)


    // 纸片消失
    // var ani_tpp1_c = wx.createAnimation({
    //   delay: 1200,
    //   duration: 800
    // })
    // ani_tpp1_c.translate(0,0).rotate(0).step()

    // var ani_tpp2_c = wx.createAnimation({
    //   delay: 1500,
    //   duration: 800
    // })
    // ani_tpp2_c.translate(0,0).rotate(0).step()

    // var ani_tpp3_c = wx.createAnimation({
    //   delay: 1800,
    //   duration: 800
    // })
    // ani_tpp3_c.translate(0,0).rotate(0).step()


    //setTimeout(()=>{
    //  this.animate("#fourstar",[
    //    {opacity:1.0}, {opacity:0.0},],600,)},500)
    
    
    // continue按键消失
    setTimeout(()=>{
      this.animate("#continue",[
        {translateX:550*windowWidth/750,opacity:1.0}, 
        {translateX:550*windowWidth/750,opacity:0.0},],600,)},1200)//1800
    setTimeout(()=>{
      this.animate("#continue",[
        {translateX:550*windowWidth/750,opacity:0.0}, 
        {translateX:0,opacity:0.0},],200,)},1900)//2410

    // 书图进入 6750 600
    // var ani_tbook = wx.createAnimation({
    //   delay: 6850,
    //   duration:600,
    // })
    // ani_tbook.opacity(1.0).step()

    setTimeout(()=>{
      this.animate("#bookpic",[
        {opacity:0.0},
        {opacity:1.0}
      ],600,)},6850)

    


    // 四/五星正缘书进入
    if (checked13 == 0){
      setTimeout(()=>{
        this.animate("#fivestarbook2",[
          {opacity:0.0}, {opacity:1.0},],600,)},7750)

      setTimeout(()=>{
        this.animate("#fivestar2",[
          {opacity:0.0}, {opacity:1.0},],600,)},7950)

      setTimeout(()=>{
        this.animate("#fivestarintro2",[
          {opacity:0.0}, {opacity:1.0},],600,)},8150)//7750
        
    }
    
    if (checked13 == 1){
      setTimeout(()=>{
        this.animate("#fourstarbook2",[
          {opacity:0.0}, {opacity:1.0},],600,)},7750)
      setTimeout(()=>{
        this.animate("#fourstar2",[
          {opacity:0.0}, {opacity:1.0},],600,)},7950)
      setTimeout(()=>{
        this.animate("#fourstarintro2",[
          {opacity:0.0}, {opacity:1.0},],600,)},8150)//7750

    }

    // X星正缘书进入 试试看共用一个(no)
    //var ani_tp1 = wx.createAnimation({
    //  delay: 7750,
    //  duration:600,
    //})
    //ani_tp1.opacity(1.0).step()

    //var ani_tp4 = wx.createAnimation({
    //  delay: 7950,
    //  duration:600,
    //})
    //ani_tp4.opacity(1.0).step()

    
    // 二维码进入(intro+pic)
    // var ani_tp2 = wx.createAnimation({
    //   delay: 8550,
    //   duration:600,
    // })
    // ani_tp2.opacity(1.0).step()

    setTimeout(()=>{
      this.animate("#introQRcode",[
        {opacity:0.0},
        {opacity:1.0}
      ],600,)},8550)
    
    // var ani_tp5 = wx.createAnimation({
    //   delay: 8550,
    //   duration:600,
    // })
    // ani_tp5.opacity(1.0).step()

    setTimeout(()=>{
      this.animate("#QRcode",[
        {translateX:-700*windowWidth/750, opacity:1.0},
        {translateX:-700*windowWidth/750, opacity:0.0},
        {translateX:0, opacity:0.0}
      ],600,)},400)

    // 分享和重来按钮进入
    // var ani_tp3 = wx.createAnimation({
    //   delay: 4400,
    //   duration:600,
    // })
    // ani_tp3.translateX(-400*windowWidth/750).opacity(0.0).step()
    // ani_tp3.opacity(1.0).step()//opacitt

    setTimeout(()=>{
      this.animate("#testagain",[
        {translateX:0, opacity:0.0},
        {translateX:-400*windowWidth/750, opacity:0.0},
        {translateX:-400*windowWidth/750, opacity:1.0}
      ],600,)},4400)

    // var ani_tp4 = wx.createAnimation({
    //   delay: 4400,
    //   duration:600,
    // })
    // ani_tp4.translateX(300*windowWidth/750).opacity(0.0).step()
    // ani_tp4.opacity(1.0).step()//opacitt

    setTimeout(()=>{
      this.animate("#share",[
        {translateX:0, opacity:0.0},
        {translateX:300*windowWidth/750, opacity:0.0},
        {translateX:300*windowWidth/750, opacity:1.0}
      ],600,)},4400)

    // 关于KELP进入
    // var ani_tkelp = wx.createAnimation({
    //   delay: 4600,
    //   duration:600
    // })
    // ani_tkelp.opacity(0.0).translate(0.0).step()
    // ani_tkelp.opacity(1.0).step()

    setTimeout(()=>{
      this.animate("ani_aboutKELP",[
        {translateX:350*2*windowWidth/750, opacity:0.0},
        {translateX:0, opacity:0.0},
        {translateX:0, opacity:1.0}
      ],600)}, 4600)


    // this.setData({
      // ani_fourstarbook: ani_tp1_c.export(),
      // ani_fourstar: ani_tp2_c.export(),
      // ani_fivestarbook: ani_tp3_c.export(),
      // ani_fivestar: ani_tp4_c.export(),
      // ani_paper_1: ani_tpp1_c.export(),
      // ani_paper_2: ani_tpp2_c.export(),
      // ani_paper_3: ani_tpp3_c.export(),
     // ani_continue: ani_tp5_c.export(),
      // ani_bookpic: ani_tbook.export(),
      // ani_introQRcode:ani_tp2.export(),
      // ani_QRcode: ani_tp5.export(),
      // ani_haveanothertest: ani_tp3.export(),
      // ani_share:ani_tp4.export(),
      // ani_aboutKELP: ani_tkelp.export(),
    // })
    
      checked10 = false
    }
    
  },

  async share() {
    const query = wx.createSelectorQuery();
    const canvasObj = await new Promise((resolve, reject) => {
      query.select('#canvas')
        .fields({
          node: true,
          size: true
        })
        .exec(async (res) => {
          resolve(res[0].node);
        })
    });

    wx.canvasToTempFilePath({
      canvas: canvasObj, //现在的写法
      success: (res) => {
        //保存图片
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: function (data) {
            wx.showToast({
              title: '已保存到相册',
              icon: 'success',
              duration: 2000
            })
          },
          fail: function (err) {
            console.log('fff')
            if (err.errMsg === "saveImageToPhotosAlbum:fail:auth denied" || err.errMsg === "saveImageToPhotosAlbum:fail auth deny" || err.errMsg === "saveImageToPhotosAlbum:fail authorize no response") {
              wx.showModal({
                title: '提示',
                content: '需要您授权保存相册',
                showCancel: false,
                success: modalSuccess => {
                  wx.openSetting({
                    success(settingdata) {
                      if (settingdata.authSetting['scope.writePhotosAlbum']) {
                         wx.showModal({
                           title: '提示',
                           content: '获取权限成功,再次点击图片即可保存',
                           showCancel: false,
                         })
                      } else {
                        wx.showModal({
                          title: '提示',
                          content: '获取权限失败',
                          showCancel: false,
                        })
                      }
                    },
                    fail(failData) {
                      console.log("failData", failData)
                    },
                    complete(finishData) {
                      console.log("finishData", finishData)
                    }
                  })
                }
              })
            } else {
              wx.showToast({
                title: '保存图片失败',
                icon: 'none',
                duration: 2000
              })
            }
          },
          complete(res) {
            console.log('com');
          }
        })
      },
      fail(res) {
        console.log('fail');
      }
    }, this)
  },

  //testagain()
  testagain:function(){
    var windowHeight = wx.getSystemInfoSync().windowHeight;
    if (checked14){
    beginnum = 1
    point = [0,0,0,0]
    whichstar = 0
    whichstar2 = 0
    whichelement = 0 //wi //whis
    backgroundcard = Math.ceil(Math.random(0,1)*6)
    fireauths = Math.ceil(Math.random(0,1)*5) //fireaurs 12
    earthauths = Math.ceil(Math.random(0,1)*6) //earthaurs 10
    windauths = Math.ceil(Math.random(0,1)*7) // windaurs 8
    waterauths = Math.ceil(Math.random(0,1)*7) // wateraurs 12
    firebooks = Math.ceil(Math.random(0,1)*3) //4
    earthbooks = Math.ceil(Math.random(0,1)*2)
    windbooks = Math.ceil(Math.random(0,1)*2)//e, rad 3 
    waterbooks  = Math.ceil(Math.random(0,1)*2) //4
    num_positive = 0;
    num_zero = 0;
    num_negative = 0;
    result_bookname = "";


    checked1 = true
    checked2 = true
    checked3 = true
    checked4 = true
    checked5 = true
    checked6 = true
    checked7 = true
    checked8 = true//tu
    checked9 = true
    checked10 = true
    checked11 = true
    checked12 = false
    checked13 = 0
    checked15 = true

    // 清空计时
    var that= this;
    that.init(that);

    // 清空画布
    wx.createSelectorQuery()
      .select('#canvas')
      .fields({
        node: true,
        size: true
      })
      .exec(async (res) => {
        const canvas = res[0].node;
        // Canvas 绘制上下文
        const ctx = canvas.getContext('2d');
        //画布大小根据屏幕分辨率进行缩放，防止模糊
        const renderWidth = res[0].width
        const renderHeight = res[0].height

        // 初始化画布大熊啊
        const dpr = wx.getSystemInfoSync().pixelRatio
        canvas.width = renderWidth*dpr
        canvas.height = renderHeight*dpr
        ctx.clearRect(0,0,canvas.width,canvas.height )
      })

    // 形容词消失 800+600


    // 书图消失
    var ani_tp1_c = wx.createAnimation({
      duration: 450,
      delay:1200,
    })
    ani_tp1_c.opacity(0.0).step()

    // 说明文字消失
    var ani_tp2_c = wx.createAnimation({
      delay: 1600,
      duration:600,
    })
    ani_tp2_c.opacity(0.0).step()

    var ani_tp3_c = wx.createAnimation({
      delay: 1800,
      duration:600,
    })
    ani_tp3_c.opacity(0.0).step()

    var ani_tp4_c = wx.createAnimation({
      delay: 1600,
      duration:600,
    })
    ani_tp4_c.opacity(0.0).step()

    var ani_tp9_c = wx.createAnimation({
      delay: 1800,
      duration:600,
    })
    ani_tp9_c.opacity(0.0).step()

    setTimeout(()=>{
      this.animate("#fivestarintro2",[
        {opacity:1.0}, {opacity:0.0},],600,)},2000)
    
    setTimeout(()=>{
      this.animate("#fourstarintro2",[
        {opacity:1.0}, {opacity:0.0},],600,)},2000)


    // 二维码消失 二维码说明文字消失
    var ani_tp5_c = wx.createAnimation({
      delay: 2200,
      duration:600,
    })
    ani_tp5_c.opacity(0.0).step()

    var ani_tp7_c = wx.createAnimation({
      delay: 2200,
      duration:600,
    })
    ani_tp7_c.opacity(0.0).step()
    

    // 重来按钮和保存按钮消失
    var ani_tp6_c = wx.createAnimation({
      delay: 2400,
      duration:600,
    })
    //ani_tp6_c.translateX(1000*windowWidth/750).step()
    ani_tp6_c.translateX(0*windowWidth/750).opacity(0.0).step()
    //ani_tp6_c.translateX(400*windowWidth/750).step()
    

    var ani_tp8_c = wx.createAnimation({
      delay: 2400,
      duration:600,
    })
    ani_tp8_c.translateX(0*windowWidth/750).opacity(0.0).step()
    //ani_tp8_c.translateX(-300*windowWidth/750).step()
    //ani_tp8_c.translateX(-300*windowWidth/750).step()

    // about KELP消失
    setTimeout(()=>{
      this.animate("#aboutKELP",[
        {opacity:1.0}, 
        {opacity:0.0},],600,)},2800)

    setTimeout(()=>{
      this.animate("#aboutKELP2",[
        {opacity:1.0}, 
        {opacity:0.0},],600,)},2800)

    //setTimeout(()=>{
     // this.animate("#aboutKELP2",[
      //  {translateY:0}, 
        //{translateY:700*windowWidth/750},],600,)},3410)//3410

    //var ani_tp7_c = wx.createAnimation({
    //  delay: 2800,
    //  duration:600,
    //})
    //ani_tp7_c.translate(0*windowWidth/750).opacity(0.0).step()
    //ani_tp7_c.translate(-400*windowWidth/750,0).step()


    // 小人消失
    var ani_tpp11_c = wx.createAnimation({
      delay: 3200,
      duration: 600,
    })
    ani_tpp11_c.opacity(0.0).step()

    // 糊化退出
    if (windowHeight>=800){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[{
      translateX:-2300*windowWidth/750, translateY:0*windowWidth/750,opacity:1.0},
      {translateX:-2300*windowWidth/750, translateY:0*windowWidth/750,opacity:0.0}],10,)},3800)//6900 3400
    }
  
    if (windowHeight>=700 && windowHeight<800){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[
      {translateX:-2275*windowWidth/750, translateY:0*windowWidth/750,opacity:1.0},
      {translateX:-2275*windowWidth/750, translateY:0*windowWidth/750,opacity:0.0}],10,)},3800)
    }
  
    if (windowHeight>=600 && windowHeight<700){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[
      {translateX:-1817*windowWidth/750, translateY:0*windowWidth/750, opacity:1.0},
      {translateX:-1817*windowWidth/750, translateY:0*windowWidth/750, opacity:0.0}],10,)},3800)
    }
  
    if (windowHeight<600){
      setTimeout(()=>{
      this.animate("#bgimg_blur1",[
      {translateX:-1777*windowWidth/750, translateY:0*windowWidth/750,opacity:1.0},
      {translateX:-1777*windowWidth/750, translateY:0*windowWidth/750,opacity:0.0},],10,)},3800)
    }

    // 纸片回到原点

    // 地图移动
    if (windowHeight>=800){

      setTimeout(()=>{
        this.animate("#bgimg",[
          {translateX:-2300*windowWidth/750, translateY:0*windowWidth/750},
          {translateX:-1500*windowWidth/750, translateY:-2750*windowWidth/750},
        ],4500,)},4000)
    }
    
  
      if (windowHeight>=700 && windowHeight<800){
        setTimeout(()=>{
        this.animate("#bgimg",[
          {translateX:-2275*windowWidth/750, translateY:0*windowWidth/750},
          {translateX:-1475*windowWidth/750, translateY:-2710*windowWidth/750},],4500,)},4000)
      }
  
      if (windowHeight>=600 && windowHeight<700){
        setTimeout(()=>{
        this.animate("#bgimg",[
          {translateX:-1817*windowWidth/750, translateY:0*windowWidth/750},
          {translateX:-1180*windowWidth/750, translateY:-2250*windowWidth/750},],4500,)}, 4000)
      }
  
      if (windowHeight<600){

        setTimeout(()=>{
        this.animate("#bgimg",[
          {translateX:-1777*windowWidth/750, translateY:0*windowWidth/750},{translateX:-1150*windowWidth/750, translateY:-2210*windowWidth/750},],4500,)},4000)
      }

      //标题进入
      var ani_tp1 = wx.createAnimation({
        delay: 8600,
        duration: 1000,
      })
      ani_tp1.opacity(1.0).step()

      // 小人1进入
      var ani_tpp1 = wx.createAnimation({
        delay: 10000,
        duration: 800,
      })
      ani_tpp1.opacity(1.0).step()

      //开始按钮进入
      var ani_tp2 = wx.createAnimation({
        delay: 4000,
        duration: 1000,
      })
      ani_tp2.opacity(0.0).translate(0,0).step()
      ani_tp2.opacity(1.0).step()

      //关于KELP进入
      //setTimeout(()=>{
        //this.animate("#aboutKELP",[
          //{translateY:700*windowWidth/750}, 
          //{translateY:0},],600,)},8800)

      setTimeout(()=>{
        this.animate("#aboutKELP",[
          {opacity:0.0}, 
          {opacity:1.0},],600,)},9500)
      setTimeout(()=>{
        this.animate("#aboutKELP2",[
          {opacity:0.0}, {opacity:1.0},],600,)},9500)//9500

      var ani_tkelp = wx.createAnimation({
        delay: 4200,
        duration: 1000,
      })
      ani_tkelp.opacity(0.0).translate(0,0).step()
      ani_tkelp.opacity(1.0)


    this.setData({
      ani_bookpic: ani_tp1_c.export(),
      ani_fivestarbook2: ani_tp2_c.export(),
      ani_fivestar2: ani_tp3_c.export(),
      ani_fourstarbook2:ani_tp4_c.export(),
      ani_fourstar2:ani_tp9_c.export(),
      ani_introQRcode: ani_tp5_c.export(),
      ani_QRcode:ani_tp7_c.export(),
      ani_haveanothertest: ani_tp6_c.export(),
      ani_share:ani_tp8_c.export(),
      //ani_aboutKELP:ani_tp7_c.export(),
      ani_person_11: ani_tpp11_c.export(),
      ani_title: ani_tp1.export(),
      ani_person_1: ani_tpp1.export(),
      ani_start: ani_tp2.export(),
      //ani_aboutKELP:ani_tkelp.export(),
    })
    
    checked14 = false
    
    }

  },

  aboutKELP:function(){
    wx.navigateTo({
      url:'../introkelp/introkelp'
    })
  },

  aboutKELP2:function(){
    wx.navigateTo({
      url:'../introkelp/introkelp'
    })
  },

  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onShow:function(){
    // 音乐部分
    this.player(wx.getBackgroundAudioManager()) 
  },
  
  checkMusic(){
    this.setData({
      //check: !this.check
      checked: !this.data.checked //tis
    })
    if (this.data.checked) //ti, ched
    {wx.getBackgroundAudioManager().pause();}
    else 
    { this.player(wx.getBackgroundAudioManager())}
  },

  player(e){
    e.title = "星页"; //"Jolene";Turn ye to me
    e.src = //"http://music.163.com/song/media/outer/url?id=18533133.mp3"  // Jolene
    //"http://music.163.com/song/media/outer/url?id=1935374629.mp3" // 比明天还远
    //"http://music.163.com/song/media/outer/url?id=551835080.mp3"  // Turen ye to me
     // Supersonic
     "http://music.163.com/song/media/outer/url?id=1996135820.mp3"// "星页"

    e.onEnded(()=>{
      this.player(wx.getBackgroundAudioManager())//w
    })
  }, //:

  timeUpdate:function(res){//播放中函数，查看当前播放时间等
    // console.log(res.detail.currentTime)
    if (res.detail.currentTime >= 4.70) {//4.35
      var ani_tv = wx.createAnimation({
        delay: 100,
        duration:600,
      })
      ani_tv.opacity(0.0).step()//opacitt
      this.setData({
        ani_video: ani_tv.export()
      })
      //this.setData({
      //  hiddenName: !this.data.hiddenName
      //})
    }
  },

  ani_video_end(){
    // console.log('淡出结束了')
    this.setData({
        hiddenName: !this.data.hiddenName
      })
  },

  onUnload: function(){
    wx.getBackgroundAudioManager().stop() //stp
    checked1 = true
    checked2 = true
    checked3 = true
    checked4 = true
    checked5 = true
    checked6 = true
    checked7 = true
    checked8 = true
    checked9 = true //未用 已用
    checked10 = true //未用 已用
    checked11 = true//
    checked12 = true // 未用
    checked13 = 0 // 0是五星正缘书  1是四星正缘书
    checked14 = true
    checked15 = true
  },

  onHide(){
    wx.getBackgroundAudioManager().stop()
  },

  
  onLoad() {
    wx.getSystemInfo({
      success(res){
        console.log('型号:',res.model)
        model = res.model
        mobile_type = model.slice(0,6)
        console.log(mobile_type)
      }
    })
    
    if (model.indexOf("iPad")>=0){
      console.log("是iPad")
      this.setData({
        isRuleTrue: true,
      })
    }


    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }

    this.setData({
      loaded: false
    })

    const self = this
    wx.loadFontFace({
      family: this.data.fontFamily,
      source: 'url("https://6b65-kelpcloudenvironment-3bb91f1ee75-1317303536.tcb.qcloud.la/Hbimages/%E5%85%B6%E4%BB%96/SourceHanSerifCN-VF-subset.ttf?sign=5c22ee946d453efff5ddc234f410281f&t=1697102378")',
      //https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/Hbimages/%E5%85%B6%E4%BB%96/SourceHanSerifCN-VF-subset.ttf?sign=af0ca8cdc498f63d95cd4d127f578920&t=1671188596
      //https://636c-cloud1-2gx6xlsu0ca67a99-1311762654.tcb.qcloud.la/SourceHanSerifCN-VF-subset.ttf?sign=7dca92fd37e50adc25cb9a659a59281a&t=1669884925
      //https://spkf-zsxn-prod.s3.cn-north-1.amazonaws.com.cn/pic/livecenter/kaiti.ttf"  
      //https://prod-5ggq9jqt71c63e91-1311762654.tcloudbaseapp.com/SourceHanSerifSC-VF.ttf?sign=569fb08393d14d62104da5138fc5ed45&t=1669884477
      //https://raw.githubusercontent.com/adobe-fonts/source-han-serif/release/Variable/TFF/SourceHanSerifSC-VF.ttf"
      //https://github.com/adobe-fonts/source-han-serif/raw/release/Variable/TTF/SourceHanSerifSC-VF.ttf
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
