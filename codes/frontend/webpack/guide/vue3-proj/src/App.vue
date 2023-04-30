<template>
  <h1>App</h1>
  <div><el-button type="primary">按钮</el-button></div>
  <ul>
    <li>
      <router-link to="/home">Home</router-link>
    </li>
    <li>
      <router-link to="/about">About</router-link>
    </li>
  </ul>
  <router-view />
</template>
<script>
import { ElButton } from 'element-plus';

export default {
  components: {
    ElButton,
  }
}
</script>
<style>
h1 {
  color: red;
}
</style>
