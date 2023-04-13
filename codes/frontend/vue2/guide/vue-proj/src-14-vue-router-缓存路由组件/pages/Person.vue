<template>
  <div>我是 Person: <input type="text"></div>
</template>
<script>
export default {
  activated() {
    console.log('Person activated');
  },
  deactivated() {
    console.log('Person deactivated');
  },
};
</script>
