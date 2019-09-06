import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";

import routes from '@/router/index.js'


Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history'
})
/* El parametro mode : 'history', lo que hace es que cuando se cambia de ruta en la URL, no salga "/#/login"
Osea, evita el "#" en la url
*/

Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
