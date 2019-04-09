

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
    ]


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
  }
})
