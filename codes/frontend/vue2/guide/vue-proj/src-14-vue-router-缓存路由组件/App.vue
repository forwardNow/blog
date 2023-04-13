<template>
  <div>

    <p><router-link to="/person">to person</router-link></p>
    <p><router-link to="/school">to school</router-link></p>

    <p><button @click="handleClick">让缓存的页面失效</button></p>
    <hr>

    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" key="1"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" key="2"></router-view>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick() {
      this.$router.push({
        path: '/school',
        query: { t: Date.now() },
      });
    },
  },
};
</script>
