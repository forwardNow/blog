import VueRouter from 'vue-router';
import Login from '../pages/Login.vue';
import Home from '../pages/Home.vue';
import Admin from '../pages/Admin.vue';

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login,
      // title: 页面标题。 isAuth: 是否要鉴权
      meta: { title: '登录', isAuth: false },
    },
    {
      path: '/home',
      component: Home,
      meta: { title: '首页', isAuth: true },
    },
    {
      path: '/admin',
      component: Admin,
      meta: { title: '系统管理', isAuth: true },
      beforeEnter(to, from, next) {
        console.log('beforeEnter', to.meta.title);
        const isAdmin = localStorage.getItem('IS_ADMIN');

        if (!isAdmin) {
          return;
        }

        next();
      },
    },
  ],
});

// 全局前置守卫：初始化时执行、每次路由切换前执行
// 用于进入路由前，进行一些权限的判断
router.beforeEach((to, from, next) => {
  console.log('beforeEach', to.meta.title);

  const { isAuth } = to.meta;

  if (!isAuth) {
    next();
    return;
  }

  const isLogin = localStorage.getItem('IS_LOGIN');

  if (!isLogin) {
    return;
  }

  next();
});

// 全局后置守卫：初始化时执行、每次路由切换后执行
// 用于进入路由后，做一些初始化的操作
router.afterEach((to, from) => {
  console.log('afterEach', to.meta.title);
  document.title = to.meta.title || 'demo';
});

export default router;
