import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main', 'pages/form/main'],
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
        pagePath: 'pages/form/main',
        iconPath: '/static/images/tabBars/hammer_nail.png',
        selectedIconPath: '/static/images/tabBars/selectHammer_nail.png',
        text: '预约'
      }]
    }
  }
}
