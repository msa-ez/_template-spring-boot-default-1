import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

window.backendHost = "http://localhost:8088"

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')


window.withBackend = function(oldUrl){
  if(oldUrl.indexOf("://")==-1) oldUrl = "http://localhost/" + oldUrl;

  var url = new URL(oldUrl);

  /**    change this host and port    */
  url.hostname = 'localhost';
  url.port = 8088;

  return url.href 

};