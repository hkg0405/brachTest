import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
console.log("我是bill")
console.log("我是Allen");
new Vue({
  render: h => h(App),
}).$mount('#app')
