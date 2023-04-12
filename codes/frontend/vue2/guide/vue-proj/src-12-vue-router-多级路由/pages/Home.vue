<template>
  <div>
    <div>
      我是 Home
      <div>
        <router-link to="/home/news" active-class="active">news</router-link>
        <router-link to="/home/message" active-class="active">message</router-link>
      </div>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
