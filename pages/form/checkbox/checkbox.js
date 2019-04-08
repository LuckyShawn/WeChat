Page({
  data: {
    array: [{
        id: "1001",
        name: "basketball",
        value: "篮球",
        checked: false,
        color: "red",
        disabled: false
      },
      {
        id: "1002",
        name: "football",
        value: "足球",
        checked: true,
        color: "pink",
        disabled: true
      }, {
        id: "1003",
        name: "swimming",
        value: "游泳",
        checked: false,
        color: "blue",
        disabled: false
      }
      

    ],
    changed: function (e) {
        debugger;
    }
  }
})