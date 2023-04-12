import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';

export default new VueRouter({
  routes: [
    { path: '/home', component: Home },
    { path: '/about', component: About },
  ],
});
