import Vue from 'vue'
import App from './App.vue'
import '@/assets/index.scss'

import MxButton from '@/components/button'

import MxTransfer from '@/components/transfer'

Vue.component(MxButton.name, MxButton)
Vue.component(MxTransfer.name, MxTransfer)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
