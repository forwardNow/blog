<template>
  <div class="box">
    <Search />
    <List />
  </div>
</template>

<script>
import Search from './components/Search.vue';
import List from './components/List.vue';

export default {
  name: 'App',

  components: {
    Search,
    List,
  },
};
</script>
<style scoped>
.box {
  margin: 48px auto;
  width: 800px;
  font-size: 14px;
  color: #333;
  font-family: "Microsoft Yahei";
}
</style>
