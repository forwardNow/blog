<template>
  <div>
    <Banner></Banner>

    <router-link to="/home" active-class="active">首页</router-link>
    <router-link to="/about" active-class="active">关于</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
import Banner from './components/Banner.vue';

export default {
  name: 'App',
  components: { Banner },
};
</script>
<style>
  .active {
    color: red;
  }
</style>
