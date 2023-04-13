import VueRouter from 'vue-router';
import Person from '../pages/Person.vue';
import School from '../pages/School.vue';

export default new VueRouter({
  routes: [
    { path: '/person', component: Person, meta: { keepAlive: false } },
    { path: '/school', component: School, meta: { keepAlive: true } },
  ],
});
