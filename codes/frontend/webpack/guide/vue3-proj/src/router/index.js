import { createRouter, createWebHistory } from "vue-router";


const Home = () => import('../pages/Home')
const About = () => import('../pages/About')


export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ]
})
