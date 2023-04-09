<template>
  <div id="root">
    <button @click="handleClick">显示/隐藏</button>
    <!--
      name
        指定动画类的前缀，默认值为 v

      appear
        一出现就播放，适用于元素初始状态就是 显示 的元素
    -->
    <transition
      name="my"
      appear
    >
      <h1 v-show="visible">我是张三</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
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

<style>
h1 {
  height: 100px;
  margin: 48px 0;
  background-color: pink;
}

/* 进入就激活 */
.v-enter-active,
.my-enter-active {
  animation: my-animation 1s;
}

/* 离开就激活 */
.v-leave-active,
.my-leave-active {
  animation: my-animation 1s reverse; /* 倒着播放 */
}

@keyframes my-animation {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
