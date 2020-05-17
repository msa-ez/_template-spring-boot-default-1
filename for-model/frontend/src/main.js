import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

/**    change this host and port    */
window.backendHost = "localhost"
window.backendPort = "8088"

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')


window.withBackend = function(oldUrl){
  if(oldUrl.indexOf("://")==-1) oldUrl = "http://localhost/" + oldUrl;

  var url = new URL(oldUrl);

  url.hostname = window.backendHost;
  url.port = window.backendPort;

  return url.href 

};