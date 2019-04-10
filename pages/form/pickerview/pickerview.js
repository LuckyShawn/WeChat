Page({
 data: {
   year:[2015,2016,2017,2018,2019,2020],
   month:[1,2,3,4,5,6,7,8,9,10,11,12],
   day:[1,5,10,15,20,25,30],
   myValue:"请选择日期"
 },
 changeMe: function(e){
   var indexs = e.detail.value; //所选择日期的下标，数组形式 eg：[1,0,0]

   var year = this.data.year[indexs[0]]
   var month = this.data.month[indexs[1]]
   var day = this.data.day[indexs[2]]
   this.setData({
     myValue: year + "年" + month + "月" + day + "日"
   })
 }
})
