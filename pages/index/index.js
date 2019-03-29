//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    mytxt: 'My demo',
    color: 'red'
  },
  onLoad: function(){
    var appInstance = getApp();
    console.log(appInstance.courseName);
    this.setData({
      mytxt: appInstance.globalData
    })
  }
})
