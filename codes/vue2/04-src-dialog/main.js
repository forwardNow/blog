import Vue from 'vue'
import App from './App.vue'

new Vue({
  components: {
    Dialog: () => import('./Dialog.vue'),
  },
  render: function (h) { return h(App) },
}).$mount('#app')


