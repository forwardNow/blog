import Vue from 'vue';
import Http from './commons/plugins/http';

import App from './App.vue';

Vue.use(Http);

new Vue({
  render: (h) => h(App)
}).$mount('#app');
