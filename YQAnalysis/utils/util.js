const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function getData(keywords,scope) {
  return new Promise(function (resolve, reject) {
    wx.request({
      url:'https://api.niucodata.com/api/vip/items/?access_token=df6cfe180cc1aae3faabeccccf3a716c705c410e',
      data: {
        'keywords':keywords,
        'scope':scope
      },
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log("success");
        resolve(res);
      },
      fail: function (res) {
        reject(res);
        console.log("failed");
      }
    })
  })
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  getData:getData
}