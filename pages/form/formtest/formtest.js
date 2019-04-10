Page({
  data: {
    skills:[
      {
        id:"1001",
        name:"java",
        value:"java value"
      },
      {
        id: "1002",
        name: "PHP",
        value: "PHP value"
      },
      {
        id: "1003",
        name: "Python",
        value: "Python value"
      },
      {
        id: "1004",
        name: "ios",
        value: "ios value"
      }
    ],
    dateLable: "请选择你的生日",
    cityLable: "请选择你的所在地"
  },
  changeDate:function(e){
    this.setData({
        dateLable: e.detail.value
    })
  },
  changeCity:function(e){
    this.setData({
      cityLable: e.detail.value
    })
  },
  // 提交form事件
  submitData: function (e) { 
      console.log(e.detail.value);
  }
})