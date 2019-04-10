

Page({
  data: {
    array:[1,2,3,4,5,6,7,8,9],
    arrObj:[
      { id: 1001, name: "jack" },
      { id: 1002, name: "shawn" },
      { id: 1003, name: "lucy" },
      { id: 1004, name: "tom" },
      { id: 1005, name: "tim" }
    ],
    showme:"请选择一个人名",
    arrayMuti:[
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [1, 2, 3, 4, 5, 6, 7, 8, 9]
    ],
    arrObjMuti:[
      [
        { id: 1001, name: "jack" },
        { id: 1002, name: "shawn" },
        { id: 1003, name: "lucy" },
        { id: 1004, name: "tom" },
        { id: 1005, name: "tim" }
      ],
      [
        { id: 1001, name: "jack" },
        { id: 1002, name: "shawn" },
        { id: 1003, name: "lucy" },
        { id: 1004, name: "tom" },
        { id: 1005, name: "tim" }
      ]
    ],
    showTime: "请选择时间",
    showDate: "请选择日期",
    showRegion: "请选择地区"
  },
  changeMe: function(e){
    var index = e.detail.value;
    console.log("index下标值为："+index);
    var name = this.data.arrObj[index].name;
    var id = this.data.arrObj[index].id;
    this.setData({
      showme: id + name
    })
  },
  cancelMe: function(e){
    console.log("取消事件！");
  },

  columnchange:function(e){
    console.log(e.detail)
  },
  changemeMulti: function(e) {
    var indexs  = e.detail.value;
    var arrObjMuti = this.data.arrObjMuti;
    for(var i = 0;i < indexs.length ; i++){
      var indexTmp = indexs[i];
      var id = arrObjMuti[i][indexTmp].id;
      var name = arrObjMuti[i][indexTmp].name;
      console.log(id+ "  "+ name);
    }
  },
  timeChange: function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      showTime: e.detail.value
    });
  },
  dateChange: function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      showDate: e.detail.value
    });
  },
  regionChange: function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value);  //地区名
    console.log('picker发送选择改变，携带值为', e.detail.code);  //统计用区划代码
    console.log('picker发送选择改变，携带值为', e.detail.postcode);//邮政编码
    this.setData({
      showRegion: e.detail.value
    });
  }

})
