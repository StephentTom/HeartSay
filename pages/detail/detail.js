// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 数据源
    card: {
      title: "选择卡面",
      // defaultBanner: "../../sources/images/show01.jpg",
      images: [
        "../../sources/images/show01.jpg",
        "../../sources/images/show02.jpg",
        "../../sources/images/show03.jpg",
        "../../sources/images/show04.jpg",
        "../../sources/images/show05.jpg",
        "../../sources/images/show06.jpg",
      ]
    },

    gift: {
      title: "选择礼物",
      prices: ["50", "80", "100", "200", "300", "500"]
    },

    content: {
      useTime: "2019.02.14-2020.02.14 周一至周日 全天",
      useNotice: "提供完善的工作环境，并创造相互尊重和相互信任的工作氛围。秉持多元化是我们企业经营的重要原则。采用最高标准进行采购烘焙，并提供最新鲜的咖啡。以高度热忱满足顾客的需求。"
    }

    // 关于css自定义属性
    
  },

  /**
   * 点击选择卡面
   */
  selectedCardTap: function(options) {
    console.log("selectedCardTap", options)
  },

  /**
   * 点击选择礼物
   */
  selectedGiftTap: function(options) {
    console.log("selectedGiftTap", options)
  },

  /**
   * 点击查看全部门店
   */
  toCheckStores: function() {
    console.log("toCheckStores")
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("接收详情dict:", options);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})