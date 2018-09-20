// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 解决移动端click点击的延迟刷新问题---需安装
import fastClick from 'fastclick'
import 'styles/reset.css'
// 解决移动端1像素问题
import 'styles/border.css'
// 字体图标引入
import 'styles/iconfont.css'
Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
