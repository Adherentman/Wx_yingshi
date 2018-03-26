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
    pages: ['^pages/index/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#AEADAD',
      selectedColor: '#049BFF',
      list: [{
        pagePath: 'pages/index/main',
        iconPath: '/static/images/tabBars/decoration.png',
        selectedIconPath: '/static/images/tabBars/selectDecoration.png',
        text: '首页'
      },
      {
        pagePath: 'pages/index/main',
        iconPath: '/static/images/tabBars/form.png',
        selectedIconPath: '/static/images/tabBars/selectForm.png',
        text: '表单'
      }]
    }
  }
}
