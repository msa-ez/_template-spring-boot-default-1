import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import Mustache from 'mustache';


console.log(Mustache);

window.backendHost = "http://localhost:8088"

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
