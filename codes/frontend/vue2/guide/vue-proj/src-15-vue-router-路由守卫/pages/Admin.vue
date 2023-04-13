<template>
  <div>我是 Admin 页面</div>
</template>
<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter', to.meta.title);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave', to.meta.title);
    next();
  },
};
</script>
