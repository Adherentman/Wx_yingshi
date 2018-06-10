import Vue from 'vue'
import App from './App'
import store from './store';

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
  store,
  App
})

app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main', 'pages/constellation/main', 'pages/movieDetail/main', 'pages/constellationdetail/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#009688',
      navigationBarTitleText: '映拾',
      navigationBarTextStyle: 'white'
    },
    tabBar: {
      backgroundColor: '#009688',
      color: '#cdcdcd',
      selectedColor: '#ffffff',
      list: [{
        pagePath: 'pages/index/main',
        iconPath: '/static/images/tabBars/home.png',
        selectedIconPath: '/static/images/tabBars/selectHome.png',
        text: '首页'
      },
      {
        pagePath: 'pages/constellation/main',
        iconPath: '/static/images/tabBars/xingqiu.png',
        selectedIconPath: '/static/images/tabBars/selectxingqiu.png',
        text: '星座'
      }]
    }
  }
}
