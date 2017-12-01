// pages/service/service_list/service_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    orderList: [
      {
        orderNumber: '201430340207', 
        orderTitle: '旺图思瑞微信小程序', 
        orderModel: '小程序标准版',
        price: '3899.99', 
        number: '10', 
        image: '/images/goods.jpg'
      },
    ]
  },

  changeTab: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.tid
    })

   /* 此处重新渲染列表 */
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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