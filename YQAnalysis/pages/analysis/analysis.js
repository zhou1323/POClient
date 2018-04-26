// pages/analysis/analysis.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mark: 0,//手指触摸位置
    newmark: 0, //滑动新位置
    winHeight: 0,
    winWidth: 0,
    isSubscribed : false,
    canvasHidden: false,
    isNewsHidden: false,
    currentTab: 0,

    scroll_height: '',
    showWeibo: false,
    showWeixin: false,
    showZhihu: false,
    showToutiao: false,
    showNews: false,
    weiboContent: null,
    weixinContent: null,
    zhihuContent: null,
    toutiaoContent: null,
    newsContent: null,



    keywordInfo:{
      keywordName: "武汉大学",
      intro: "如果你无法简洁的表达你的想法，那只能说明你还不够了解它。"
    },
    keywordEmotion:{
      positive: 82,
      nagative: 18,
    },
    lineChartData:{
      data:[
        {
          index: 33318,
          time: '2018-01-24' 
        },
        {
          index: 32266,
          time: '2018-01-23'
        },
        {
          index: 29389,
          time: '2018-01-22'
        },
        {
          index: 35301,
          time: '2018-01-21'
        },
        {
          index: 43816,
          time: '2018-01-20'
        },
        {
          index: 31185,
          time: '2018-01-19'
        },
        {
          index: 48351,
          time: '2018-01-18'
        }
      ]
    },
    toNewsAnimationData: {}
  },
  // 滚动切换标签样式
  switchTab: function (e) {
    this.setData({
      currentTab: e.detail.current
    })
    console.log(e)
  },
  // 点击标题切换当前页时改变样式
  switchNav: function (e) {
    console.log(e)
    var cur = e.target.dataset.current;
    if(cur==0){
      this.setData({
        isNewsHidden: false
      })
    }else{
      this.setData({
        isNewsHidden: true
      })
    }
    if (this.data.currentTab == cur) { 
      this.setData({
        is
      })
    }
    else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //关注按钮切换
  changeStatus:function(e){
    if (this.data.isSubscribed){
      this.setData({
        isSubscribed: false
      })
      wx.showToast({
        title: '关注成功',
        icon: 'success',
        duration: 1000
      })
    }else{
      this.setData({
        isSubscribed: true
      })
      wx.showToast({
        title: '取消关注',
        icon: 'success',
        duration: 1000
      })
    }
  },
  // 选项卡切换
  touchStart: function(e){
    this.data.mark = this.data.newmark = e.touches[0].pageX
  },
  toNewsOrYq: function(e){
    console.log(e)
    this.data.newmark = e.touches[0].pageX
    var roffset = this.data.newmark - this.data.mark
    var loffset = 0-roffset
    if(roffset>0.2*this.data.winWidth){
      console.log(roffset)
      // var toNewsAnimation = wx.createAnimation({
      //   duration: 500,
      //   timingFunction: 'ease',
      //   delay: 0
      // })
      // toNewsAnimation.translate(this.data.winWidth).opacity(0).step()
      this.setData({
        // toNewsAnimationData: toNewsAnimation.export(),
        currentTab: 0,
        isNewsHidden:false
      })
      
      // setTimeout(function(){
      //   this.setData({
      //     display: 'none',
      //     canvasHidden:true,
      //     isNewsHidden: false
      //   })
      // }.bind(this),300)    
    }
    if (loffset > 0.2 * this.data.winWidth) {
      this.setData({
        // toNewsAnimationData: toNewsAnimation.export(),
        currentTab: 1,
        isNewsHidden: true
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      //  高度自适应
      wx.getSystemInfo({
        success: function (res) {
          var clientHeight = res.windowHeight,
            clientWidth = res.windowWidth,
            rpxR = 750 / clientWidth;
          var calc = clientHeight * rpxR - 180;
          console.log(calc)
          that.setData({
            winHeight: calc,
            winWidth: res.windowWidth
          });
        }
      });

      //调用舆情详情接口
      //, 'powechatitem','zhihuitem', 'toutiaoitem','newsitem'
      var scopeArray = ['poweiboitem', 'powechatitem', 'zhihuitem', 'toutiaoitem', 'newsitem'];
      var contents = [];
      var weibo;
      for (var j = 0, len = scopeArray.length; j < len; j++) {
        (function (j) {
          util.getData("python", scopeArray[j])
            .then(function (data) {
              var actualData = data.data;
              var simpleItem = actualData.result.items;
              for (var i = 0; i < simpleItem.length; i++) {
                simpleItem[i]._source.title = simpleItem[i]._source.title.replace(/<[\w\s\"\/\=]+>/g, "");
              }

              if (j == 0) {
                that.setData({
                  weiboContent: simpleItem
                })
              }
              else if (j == 1) {
                that.setData({
                  weixinContent: simpleItem
                })
              }
              else if (j == 2) {
                that.setData({
                  zhihuContent: simpleItem
                })
              }
              else if (j == 3) {
                that.setData({
                  toutiaoContent: simpleItem
                })
              }
              else if (j == 4) {
                that.setData({
                  newsContent: simpleItem
                })
              }

            });
        })(j);
      }
      // wx.request({
      //   url: 'https://api.niucodata.com/api/vip/chart/?access_token=df6cfe180cc1aae3faabeccccf3a716c705c410e',
      //   data:{
      //     "keywords": "武汉大学",
      //     "chart_type": "emotion"
      //   },
      //   header: {
      //     'content-type': 'application/json'
      //   },
      //   success :function(e){
      //     console.log(e.data)
      //     var positive = e.data.result.items[0].percent
      //     var nagative = e.data.result.items[1].percent
      //     that.setData({
      //       keywordInfo:{
      //         keywordName: "武汉大学",
      //         intro: "如果你无法简洁的表达你的想法，那只能说明你还不够了解它。",
      //         positive: (positive*100).toFixed(2),
      //         nagative: (nagative*100).toFixed(2)
      //       }
      //     })
      //   }
      // })
  },  
  footerTap: app.footerTap,



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // var context = wx.createContext()
    // // 设置边框颜色
    // context.beginPath()
    // context.setStrokeStyle("red")
    // context.setLineWidth(2)
    // context.rect(50, 0, 200, 200)
    // context.stroke()
    // context.closePath();

    // context.beginPath();
    // // 设置阴影setShadow(x偏移,y偏移,模糊度0-100,"blue")
    // context.setShadow(10, -10, 2, "blue")

    // context.setStrokeStyle("green")
    // context.setLineWidth(2)

    // context.moveTo(210, 100)
    // context.arc(150, 100, 60, 0, 2 * Math.PI, true)

    // context.moveTo(190, 100)
    // context.arc(150, 100, 40, 0, Math.PI, false)

    // context.moveTo(135, 80)
    // context.arc(130, 80, 5, 0, 2 * Math.PI, true)

    // context.moveTo(175, 80)
    // context.arc(170, 80, 5, 0, 2 * Math.PI, true)

    // context.stroke()

    // // 调用 wx.drawCanvas，通过 canvasId 指定在哪张画布上绘制，通过 actions 指定绘制行为
    // wx.drawCanvas({
    //   canvasId: 'line-chart',
    //   actions: context.getActions() // 获取绘图动作数组
    // })

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

//跳转详情页面
  bindDetailView: function (event) {
    var nowUrl = event.currentTarget.dataset.url;
    console.log(nowUrl);
    app.detailUrl = nowUrl;
    wx.navigateTo({
      url: "../details/details"
    })
  },
  //判断显示状态
  onChangeShowState: function (event) {
    var that = this;
    var scope = event.currentTarget.dataset.scope;

    console.log(scope);
    if (scope == 'weibo') {
      that.setData({
        showWeibo: (!that.data.showWeibo)
      });
    }
    else if (scope == 'weixin') {
      that.setData({
        showWeixin: (!that.data.showWeixin)
      });
    }
    else if (scope == 'zhihu') {
      that.setData({
        showZhihu: (!that.data.showZhihu)
      });
    }
    else if (scope == 'toutiao') {
      that.setData({
        showToutiao: (!that.data.showToutiao)
      });
    }
    else if (scope == 'news') {
      that.setData({
        showNews: (!that.data.showNews)
      });
    }
  }
})