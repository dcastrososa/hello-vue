import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Login from "./screen/login/Login.vue";

Vue.use(VueRouter);

const routes = [{ path: "/login", component: Login }];
const router = new VueRouter({ routes });

Vue.config.productionTip = false;


new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
