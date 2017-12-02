Page({

  data: {
    usericon: "/images/personalCenter/icon.jpg",
    username: "JackFung"
  },
  orderList: function (e) {
    wx.navigateTo({
      url: '/pages/order_list/order_list?currentTab=' + e.currentTarget.dataset.status + '&isMine=' + e.currentTarget.dataset.ismine,
    })
  },
  addressManagement: function () {
    wx.navigateTo({
      url: '/pages/address/address_management/address_management',
    })
  },
  myWallet: function () {
    wx.navigateTo({
      url: '/pages/wallet/wallet/wallet',
    })
  }, 
  serviceList: function () {
    wx.navigateTo({
      url: '/pages/service/service_list/service_list',
    })
  }, 
  feedback: function () {
    wx.navigateTo({
      url: '/pages/feedback/feedback',
    })
  }, 
  clientList: function () {
    console.log('页面未完成');
  }
})