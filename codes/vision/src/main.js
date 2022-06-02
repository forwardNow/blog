import Vue from 'vue';
import router from './commons/router/router';
import Http from './commons/plugins/http';

import './commons/styles/styles.scss';

import App from './App.vue';

Vue.use(Http);

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
