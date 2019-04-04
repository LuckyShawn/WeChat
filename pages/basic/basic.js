

Page({
  data: {
    nodes: [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'Hello&nbsp;World!'
      }]
    }],
    myPercent: 10
  },
  doChange(){
    // console.log("拖动了！");
  },
  doScale(){
    console.log("缩放了！")
  },
  tap() {
    console.log('tap')
  },
  addPercent:function(){
    var newPercent = this.data.myPercent + 10;
    this.setData({
      myPercent : newPercent
    })
  },
  subtractPercent:function(){
    var newPercent = this.data.myPercent -10;
    this.setData({
      myPercent : newPercent
    })
  }
  
})
