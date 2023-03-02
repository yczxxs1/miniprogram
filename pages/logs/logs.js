// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onShow(){
    this.getTabBar().init()
  },
  onLoad() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  }
})
