

Page({
  data: {
    
  },
  clickme:function(e){
    wx.request({
      url: 'https://90097975.ngrok.io/info', 
      data: {
        name: 'shawn',
        pwd: '123'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })
  }
})
