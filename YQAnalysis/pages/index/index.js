var util = require('../../utils/util.js');
var app=getApp();
Page({
  data: {
    scroll_height:'',
    showWeibo: false,
    showWeixin:false,
    showZhihu:false,
    showToutiao:false,
    showNews:false,
    weiboContent: null,
    weixinContent: null,
    zhihuContent:null,
    toutiaoContent:null,
    newsContent:null
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载  
    //showView: (options.showView == "true" ? true : false);

    var weiboArr = [];
    var that = this;
    //, 'powechatitem','zhihuitem', 'toutiaoitem','newsitem'
    var scopeArray = ['poweiboitem', 'powechatitem', 'zhihuitem', 'toutiaoitem', 'newsitem'];
    var contents = [];
    var weibo;
    for (var j = 0, len = scopeArray.length; j < len; j++) {
      (function(j){
      util.getData("python", scopeArray[j])
        .then(function (data) {
          var actualData = data.data;
          var simpleItem = actualData.result.items;
          for (var i = 0; i < simpleItem.length; i++) {
            simpleItem[i]._source.title=simpleItem[i]._source.title.replace(/<[\w\s\"\/\=]+>/g,"");
          }

          
          if(j==0){
            console.log("0");
            that.setData({
              weiboContent: simpleItem
            })
          }
          else if (j == 1) {
            console.log("1");
            that.setData({
              weixinContent: simpleItem
            })
          }
          else if(j==2){
            console.log("2");
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
  },
  onChangeShowState: function (event) {
    var that = this;
    var scope=event.currentTarget.dataset.scope;

    console.log(scope);
    if(scope=='weibo'){
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
  },
  bindDetailView:function(event){
    var nowUrl = event.currentTarget.dataset.url;
    console.log(nowUrl);
    app.detailUrl=nowUrl;
    wx.navigateTo({
      url:"../detail/detail"
    })
  },
  scroll: function (e) {
    var that = this;
    //console.log(e.detail.scrollTop)
    that.setData({
      scroll_height: e.detail.scrollTop
    })
  }
})  