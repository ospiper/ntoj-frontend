import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store'
import vuetify from './plugins/vuetify';

import * as filters from './filters';

Object.keys(filters).forEach(k => {
  // @ts-ignore
  Vue.filter(k, filters[k]);
});

import Toasted from 'vue-toasted';

Vue.use(Toasted, {
  duration: 3000,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // @ts-ignore
  vuetify,
  render: h => h(App)
}).$mount('#app');
