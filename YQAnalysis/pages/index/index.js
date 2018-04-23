var util = require('../../utils/util.js');

Page({
  data: {
    showView: true,
    weiboContent: null,
    weixinContent: null,
    zhihuContent:null,
    toutiaoContent:null,
    newsContent:null
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载  
    showView: (options.showView == "true" ? true : false);

    var weiboArr = [];
    var that = this;
    //'poweiboitem','zhihuitem','powechatitem','toutiaoitem','newsitem'
    var scopeArray = ['newsitem'];
    var contents = [];
    var weibo;
    for (var j = 0, len = scopeArray.length; j < len; j++) {
      util.getData("python", scopeArray[j])
        .then(function (data) {
          var actualData = data.data;
          var simpleItem = actualData.result.items;
          for (var i = 0; i < simpleItem.length; i++) {
            simpleItem[i]._source.title=simpleItem[i]._source.title.replace(/<[\w\s\"\/\=]+>/g,"");
          }
          contents.push(simpleItem);
          
          that.setData({
            //weiboContent: contents[0],
            //weixinContent: contents[0]
            //zhihuContent: contents[0],
            //toutiaoContent: contents[0],
            newsContent: contents[0],
          })
        });
    }
  },
  onChangeShowState: function () {
    console.log("click!");
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    });
  }
})  