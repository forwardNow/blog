import Vue from 'vue'
import App from './App.vue'

import Child from './Child.vue';
import Child2 from './Child2.vue';
import router from './router'

Vue.component('Child', Child);
Vue.component('Child2', Child2);

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')


