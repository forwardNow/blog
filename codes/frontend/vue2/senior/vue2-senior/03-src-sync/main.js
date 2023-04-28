import Vue from 'vue'
import App from './App.vue'

import Child from './Child.vue';

Vue.component('Child', Child);

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')


