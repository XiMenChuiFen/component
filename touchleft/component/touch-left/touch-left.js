// component/touch-left/touch-left.js
var touchs = 0; //点击位置距离
var touchm = 0; //滑动位置滑动距离
var distance=0; //最终滑动距离
Component({
  /**
   * 组件的属性列表
   */

  properties: {
    distance:Number
  },

  /**
   * 组件的初始数据
   */
  data: {
    lists:[
      {
        "index":0,
        "left":0
      }, {
        "index":1,
        "left":0
      },  //{
      //   "index": 2,
      //   "left": 0
      // }, {
      //   "index": 3,
      //   "left": 0
      // }, {
      //   "index": 4,
      //   "left": 0
      // }, {
      //   "index": 5,
      //   "left": 0
      // }, {
      //   "index": 6,
      //   "left": 0
      // }, {
      //   "index": 7,
      //   "left": 0
      // }, {
      //   "index": 8,
      //   "left": 0
      // }, {
      //   "index": 9,
      //   "left": 0
      // }, {
      //   "index": 10,
      //   "left": 0
      // }, {
      //   "index": 11,
      //   "left": 0
      // }, {
      //   "index": 12,
      //   "left": 0
      // }, {
      //   "index": 13,
      //   "left": 0
      // }, {
      //   "index": 14,
      //   "left": 0
      // }, {
      //   "index": 15,
      //   "left": 0
      // }
    ],
    transition:'' //right 0.2s ease-in -out;
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getdata(){
      console.log(this.data.distance)
     
    },
    touchS(e){
      touchs = e.touches[0].clientX;
      console.log("按下", e.touches[0].clientX);
      this.setData({
        transition: ';'
      })
    },
    touchM(e){
      console.log(e.touches[0].clientX < touchs, distance);

      if (e.touches[0].clientX < touchs && distance!=100){
        touchm = touchs - e.touches[0].clientX;
        touchm = touchm >= 100 ? 100 : touchm;
        console.log("移动", touchs-e.touches[0].clientX)

      }else{
        console.log(distance, touchm, touchs)
        if (distance==100){
          touchm = touchs + touchs - e.touches[0].clientX;
          touchm = touchm <= 0 ? 0 : touchm; 
          touchm = touchm >= 100 ? 100 : touchm;
        }
      }

      let lists = this.data.lists;
      lists[e.currentTarget.dataset.index].left = touchm;
      this.setData({
        lists: lists
      })

    },
    touchE(e){

      console.log("松开", e, touchm);
      touchm = touchm < 70 ? 0 : touchm;
      touchm = touchm >= 70 ? 100 : touchm;

      distance = touchm;

      let lists = this.data.lists;
      lists[e.currentTarget.dataset.index].left = touchm;
      this.setData({
        lists: lists,
        transition: 'transition'
      })

    }
  },
  attached(){
    this.getdata();
  }
})
