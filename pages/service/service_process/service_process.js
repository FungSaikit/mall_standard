// pages/service/service_process/service_process.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0, 
    selectedImages: []
  },

  changeTab: function(e) {
    console.log(e.currentTarget.dataset.tid);
    this.setData({
      currentTab: e.currentTarget.dataset.tid
    });
  },

  selectImages: function () {
    var page = this;
    wx.chooseImage({
      count: 3 - this.data.selectedImages.length,
      sizeType: 'compressed',
      success: function (res) {
        page.setData({
          selectedImages: page.data.selectedImages.concat(res.tempFilePaths)
        });
      }
    })
  },

  deleteImage: function (e) {
    console.log(e.currentTarget);
    var newArray = this.data.selectedImages;
    newArray.splice(e.currentTarget.dataset.imageid, 1);
    this.setData({
      selectedImages: newArray
    });
  },

  /**
   * 查看图片
   */

  viewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.dataset.src,
      urls: [e.currentTarget.dataset.src],
    })
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