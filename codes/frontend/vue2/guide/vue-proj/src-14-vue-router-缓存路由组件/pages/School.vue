<template>
  <div>我是 School: <input type="text"></div>
</template>
<script>
export default {
  mounted() {
    console.log('mounted');
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  },
  activated() {
    console.log('School activated');
  },
  deactivated() {
    console.log('School deactivated');
  },
};
</script>
