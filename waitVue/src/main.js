/*
 * @Descripttion: 
 * @Author: wenjie
 * @Date: 2020-02-12 15:52:30
 * @LastEditors  : wenjie
 * @LastEditTime : 2020-02-12 15:57:02
 * @Email: wnejie@byteborder.com
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'

import wait from './utils/wait'

Vue.config.productionTip = false

wait.fnA()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
