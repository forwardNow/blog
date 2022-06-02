import Vue from 'vue';
import VueRouter from 'vue-router';
import SellerPage from '../../test/SellerPage.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes:[
    { path: '/', redirect: '/test/seller' },
    { path: '/test/seller', component: SellerPage },
  ]
});

export default router;
