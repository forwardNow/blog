import VueRouter from 'vue-router';
import QueryDetail from '../pages/QueryDetail.vue';
import ParamsDetail from '../pages/ParamsDetail.vue';
import PropsDetail from '../pages/PropsDetail.vue';

export default new VueRouter({
  routes: [
    { path: '/query-detail', component: QueryDetail },
    {
      name: 'ParamsDetail',
      path: '/params-detail/:id/:name',
      component: ParamsDetail,
    },

    {
      path: '/props-detail-obj',
      component: PropsDetail,
      props: { id: 6, name: '赵六' },
    },
    {
      path: '/props-detail-true/:id/:name',
      component: PropsDetail,
      props: true,
    },
    {
      path: '/props-detail-fun',
      component: PropsDetail,
      props($route) {
        return { ...$route.query };
      },
    },
  ],
});
