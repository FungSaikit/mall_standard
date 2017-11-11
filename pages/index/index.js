Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    keywords: ""
  }, 
  setKeywords: function (e) {
    this.setData({
      "keywords": e.detail.value
    });
  },
  searchGoods: function (e) {
    if (e.detail.value)  {
      console.log(e.detail.value);
    } else {
      console.log(this.data.keywords);
    }
  }
})