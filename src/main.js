import Vue from 'vue'
import App from './App.vue'
import '@/assets/index.scss'

import MxButton from '@/components/button/MxButton.vue'

Vue.component(MxButton.name, MxButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
