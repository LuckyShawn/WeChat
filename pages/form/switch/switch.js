Page({
  data: {
    color: "white"
  },
  changeMe: function(e){
    var flag = e.detail.value;
    if(flag){
      this.setData({
        color: "white"
      })
    }else{
      this.setData({
        color: "black"
      })
    }
  }
})