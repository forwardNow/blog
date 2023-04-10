<template>
  <div id="root">
    <button @click="handleClick">显示/隐藏</button>
    <transition-group
      appear
      enter-active-class="animate__animated animate__swing"
      leave-active-class="animate__animated animate__backOutUp"
    >
      <h1 v-show="visible" key="1">我是张三</h1>
      <h1 v-show="!visible" key="2">我是李四</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css';

export default {
  name: 'Test-4',
  data() {
    return {
      visible: true,
    };
  },
  methods: {
    handleClick() {
      this.visible = !this.visible;
    },
  },
};
</script>
