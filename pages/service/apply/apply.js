// pages/service/apply/apply.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    serviceType: ['—— 请选择 ——', '退货后退款', '仅退款(未发货)'],
    /* 0为未选择， 1为选择退货+退款， 2为选择仅退款 */
    serviceTypeIndex: 0,
    selectedImages: []
  },

  /**
   * 修改售后类型
   */
  changeTab: function (e) {
    this.setData({
      currentTab: this.data.currentTab ? 0 : 1
    })
  },

  /**
   *  修改退货/退款 
   */
  changeServiceType: function (e) {
    console.log(e.detail.value);
    this.setData({
      serviceTypeIndex: e.detail.value
    })
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