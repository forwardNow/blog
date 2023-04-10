<template>
  <div id="root">
    <button @click="handleClick">显示/隐藏</button>
    <transition-group appear>
      <h1 v-show="visible" key="1">我是张三</h1>
      <h1 v-show="!visible" key="2">我是李四</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'Test-3',
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

<style scoped>
/* 进入的起点 */
.v-enter {
  transform: translateX(-100%);
}

/* 进入就激活 */
.v-enter-active {
  transition: 1s linear;
}

/* 进入的终点 */
.v-enter-to {
  transform: translateX(0);
}

/* 离开的起点 */
.v-leave {
  transform: translateX(0);
}

/* 离开就激活 */
.v-leave-active {
  transition: 1s linear;
}

/* 离开的终点 */
.v-leave-to {
  transform: translateX(-100%);
}
</style>
