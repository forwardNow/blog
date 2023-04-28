<template>
  <div id="app">
    <Child :message.sync="parentMessage1" />

    <!-- 等价于上面的 -->
    <Child :message.sync="parentMessage2"
           @update:message="parentMessage2 = $event.target.value"/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      parentMessage1: '111',
      parentMessage2: '222',
    };
  },
}
</script>
