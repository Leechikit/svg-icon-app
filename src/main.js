import Vue from 'vue'
import App from './App.vue'
import iconComponent from './components/svgSprites/Icon'

Vue.component('icon', iconComponent)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
