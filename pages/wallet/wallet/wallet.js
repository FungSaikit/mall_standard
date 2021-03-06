// pages/wallet/wallet.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentPage: 0, 
    currentTab: 0 /* 0:全部 1:成功 2: 失败 3:待结算 */
  },

  changePage: function() {
    this.setData({
      currentPage: this.data.currentPage ? 0 : 1
    })
  },

  setCurrentPage: function(e) {
    this.setData({
      currentPage: e.detail.current
    })
  },

  changeTab: function(e) {
    this.setData({
      currentTab: e.target.dataset.tab
    })
    // 在此处发送数据请求
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