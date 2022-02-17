import Vue from 'vue'
import VueRouter from 'vue-router'
import Detail from './Detail.vue'

Vue.use(VueRouter)

function setQueryToPropsOfComponent(route) {
  return route.query;
}

const routes = [
  // 动态路由
  { path: '/dynamic-detail/:id', component: Detail, props: true },

  { path: '/detail', component: Detail, props: setQueryToPropsOfComponent },
]

const router = new VueRouter({
  mode: 'hash',
  base: '06-src-router.html',
  routes
})

export default router
