<template>
  <div class="test-box">
    <slot person-name="张三" :hobby="hobby">默认内容</slot>
  </div>
</template>
<script>
export default {
  data() {
    return { hobby: ['看书', '看电影'] };
  },
};
</script>
