const maoyanApi = 'http://m.maoyan.com/';

export const MaoYanRequest = (options, data = {}, method) => new Promise((resolve, rejet) => {
  const url = maoyanApi + options;
    wx.request({
      url,
      data,
      method,
      success: res => resolve(res.data),
      fail: err => rejet(err)
    })
}) 