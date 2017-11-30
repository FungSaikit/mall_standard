// pages/wallet/withdraw/withdraw.js
var util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    balance: 10086.00,
    withdrawSum: '',
    poundage: '0.00',
    predictTime: ''
  },

  changeMoney: function(e) {
    var sum = e.detail.value * 0.006;
    sum = sum.toFixed(2);
    this.setData({
      poundage: sum
    })
  },

  withdrawAll: function(e) {
    this.setData({
      withdrawSum: this.data.balance
    })
    var sum = this.data.withdrawSum * 0.006;
    sum = sum.toFixed(2);
    this.setData({
      poundage: sum
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
    var nowDate = new Date();
    console.log(util.formatTime(new Date));
    nowDate.setDate(nowDate.getDate() + 2);
    this.setData({
      predictTime: nowDate.getFullYear() + "-" + (nowDate.getMonth() + 1) + "-" + nowDate.getDate() + " " + nowDate.getHours() + ":" + nowDate.getMinutes()
    })
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