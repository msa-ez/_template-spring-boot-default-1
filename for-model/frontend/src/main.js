import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import Mustache from 'mustache';

console.log(Mustache);

window.Mustache = Mustache;

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
