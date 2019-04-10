Page({
 data: {
   myHeight:"500rpx",
   staticHeight:500
 },
 myChange: function(e){
   var val = e.detail.value;
   var newHeight = this.data.staticHeight * (val /100);
   this.setData({
     myHeight: newHeight + "rpx"
   })
 },
  myChange1: function (e) {
    var val = e.detail.value;
    var newHeight = this.data.staticHeight * (val / 100);
    this.setData({
      myHeight: newHeight + "rpx"
    })
  }
})
