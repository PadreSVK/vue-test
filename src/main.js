import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
// import Highcharts from "highcharts";
import HighchartsVue from "highcharts-vue";

Vue.config.productionTip = false

Vue.use(HighchartsVue);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
