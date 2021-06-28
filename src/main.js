import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'

import env from './env.js'

Vue.use(BootstrapVue)
Vue.config.productionTip = false

new Vue({
  created() {
    this.env = env
    this.axios = axios
  },
  render: h => h(App),
}).$mount('#app')
