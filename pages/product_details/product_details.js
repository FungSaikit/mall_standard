// pages/product_details/product_details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pid: 0, //当前商品id
    currentPage: 0,
    originprice: false
  },

  pageChange: function(e) {
    this.setData({
      'currentPage': e.detail.current
    });
  },

  changePage: function(e) {
    this.setData({
      'currentPage': e.target.dataset.tabnum
    });
  },

  showoriginprice: function() {
    this.setData({
      'originprice': !this.data.originprice
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.setData({
      pid: options.pid
    })
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