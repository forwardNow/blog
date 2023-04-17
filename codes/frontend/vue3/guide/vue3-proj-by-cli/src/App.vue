<template>
  <div class="app">
    我是 App 组件
    <suspense>
      <template #default>
        <Demo />
      </template>
      <!-- 后备内容 -->
      <template #fallback>
        <div>
          loading demo......
        </div>
      </template>
    </suspense>
  </div>
</template>
<script>
import { defineAsyncComponent } from 'vue';

const Demo = defineAsyncComponent(() => import('./Demo.vue'));

export default {
  components: { Demo },
}
</script>
<style scoped>
.app {
  padding: 48px; 
  background-color: gray;
}
</style>