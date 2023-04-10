<template>
  <div id="root">
    <Test1></Test1>
    <Test2></Test2>
    <Test3></Test3>
    <Test4></Test4>
  </div>
</template>

<script>
import Test1 from './components/Test1.vue';
import Test2 from './components/Test2.vue';
import Test3 from './components/Test3.vue';
import Test4 from './components/Test4.vue';

export default {
  name: 'App',
  components: {
    Test1,
    Test2,
    Test3,
    Test4,
  },
};
</script>
<style>
h1 {
  height: 100px;
  margin: 48px 0;
  background-color: pink;
}
</style>
