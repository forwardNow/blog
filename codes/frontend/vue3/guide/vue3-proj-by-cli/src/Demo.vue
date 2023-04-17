<template>
  <div>我是 Demo 组件</div>
</template>
<script>
export default {
  setup() {
    const res = {};
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(res);
      }, 2000);
    });
  }
}
</script>
<style scoped>
div {
  padding: 48px;
  background-color: pink;
}
</style>