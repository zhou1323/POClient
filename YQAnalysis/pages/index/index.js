Page({

  /** 
   * 页面的初始数据 
   */
  data: {
    showView: true,
    result: [
      {
        'eType':'weibo',
        'type':'微博',
        "id": 1,
        "data": [
        {
            "question_id": 1,
            "answer_id": 3,
            "feed_source_id": 23,
            "time": "2018-04-22 15:00",
            "feed_source_name": "Rebecca",
            "feed_source_txt": "赞了回答1",
            "feed_source_img": "../../images/zhihu.jpg",
            "question": "选择 Kindle 而不是纸质书的原因是什么？",
            "answer_ctnt": "难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...",
            "good_num": "112",
            "comment_num": "18"
          },
          {
            "question_id": 2,
            "answer_id": 25,
            "time": "2018-04-22 15:00",
            "feed_source_id": 24,
            "feed_source_name": "Alex",
            "feed_source_txt": "回答了问题2",
            "feed_source_img": "../../images/zhihu.jpg",
            "question": "如何评价周杰伦的「中文歌才是最屌的」的言论？",
            "answer_ctnt": "不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...",
            "good_num": "112",
            "comment_num": "18"
          }]
  },
  {
        'eType':'zhihu',
        'type':'知乎',
        "id": 1,
        "data": [
        {
            "question_id": 1,
            "answer_id": 3,
            "time":"2018-04-22 18:00",
            "feed_source_id": 23,
            "feed_source_name": "Rebecca",
            "feed_source_txt": "赞了回答1",
            "feed_source_img": "../../images/icon1.jpeg",
            "question": "选择 Kindle 而不是纸质书的原因是什么？",
            "answer_ctnt": "难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...",
            "good_num": "112",
            "comment_num": "18"
          },
          {
            "question_id": 2,
            "answer_id": 25,
            "feed_source_id": 24,
            "time": "2018-04-22 15:00",
            "feed_source_name": "Alex",
            "feed_source_txt": "回答了问题2",
            "feed_source_img": "../../images/icon8.jpg",
            "question": "如何评价周杰伦的「中文歌才是最屌的」的言论？",
            "answer_ctnt": "不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...",
            "good_num": "112",
            "comment_num": "18"
          }]
      }, {
        'eType':'weixin',
        'type': '微信',
        "id": 1,
        "data": [
          {
            "question_id": 1,
            "answer_id": 3,
            "time": "2018-04-22 15:00",
            "feed_source_id": 23,
            "feed_source_name": "Rebecca",
            "feed_source_txt": "赞了回答1",
            "feed_source_img": "../../images/icon1.jpeg",
            "question": "选择 Kindle 而不是纸质书的原因是什么？",
            "answer_ctnt": "难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...",
            "good_num": "112",
            "comment_num": "18"
          },
          {
            "question_id": 2,
            "answer_id": 25,
            "time": "2018-04-22 15:00",
            "feed_source_id": 24,
            "feed_source_name": "Alex",
            "feed_source_txt": "回答了问题2",
            "feed_source_img": "../../images/icon8.jpg",
            "question": "如何评价周杰伦的「中文歌才是最屌的」的言论？",
            "answer_ctnt": "不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...",
            "good_num": "112",
            "comment_num": "18"
          }]
      },
      {
        'eType':'toutiao',
        'type': '头条',
        "id": 1,
        "data": [
          {
            "question_id": 1,
            "answer_id": 3,
            "feed_source_id": 23,
            "feed_source_name": "Rebecca",
            "feed_source_txt": "赞了回答1",
            "feed_source_img": "../../images/icon1.jpeg",
            "question": "选择 Kindle 而不是纸质书的原因是什么？",
            "answer_ctnt": "难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...",
            "good_num": "112",
            "comment_num": "18"
          },
          {
            "question_id": 2,
            "answer_id": 25,
            "feed_source_id": 24,
            "feed_source_name": "Alex",
            "feed_source_txt": "回答了问题2",
            "feed_source_img": "../../images/icon8.jpg",
            "question": "如何评价周杰伦的「中文歌才是最屌的」的言论？",
            "answer_ctnt": "不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...",
            "good_num": "112",
            "comment_num": "18"
          }]
      },
      {
        'eType': 'news',
        'type': '主流媒体',
        "id": 1,
        "data": [
          {
            "question_id": 1,
            "answer_id": 3,
            "feed_source_id": 23,
            "feed_source_name": "新华网",
            "feed_source_txt": "赞了回答1",
            "feed_source_img": "../../images/icon1.jpeg",
            "question": "选择 Kindle 而不是纸质书的原因是什么？",
            "answer_ctnt": "难道不明白纸质书更贵啊！！！ 若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。 另外，用kindle看小说的怎么真心不懂了...",
            "good_num": "112",
            "comment_num": "18"
          },
          {
            "question_id": 2,
            "answer_id": 25,
            "feed_source_id": 24,
            "feed_source_name": "人民日报",
            "feed_source_txt": "回答了问题2",
            "feed_source_img": "../../images/icon8.jpg",
            "question": "如何评价周杰伦的「中文歌才是最屌的」的言论？",
            "answer_ctnt": "不知道题主是否是学音乐的。 音乐有公认的经典，也有明显的流行趋势没有错。但归根结底，音乐是一种艺术，艺术是很主观的东西。跟画作一个道理，毕加索是大家，但很多人看不懂他的话，甚至觉得很难看...",
            "good_num": "112",
            "comment_num": "18"
          }]
      }]},
  onLoad: function (options) {
    // 生命周期函数--监听页面加载  
    showView: (options.showView == "true" ? true : false);
    this.fadeOutToButton = new Animation(this, {
      className: 'fadeOutToButton', // 写在css的样式名
      animationName: 'fade',  // 填写在html中的变量名
      timeOut: 1000, //动画时间 和动画持续时间同步
      // delayTime: 1000,  // 延迟时间
    });
  }
  , onChangeShowState: function () {
    console.log("click!");
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    });
  }
})  