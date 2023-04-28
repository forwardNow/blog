<template>
  <div>
    我是 Child，我要 <button @click="handleClickButton">改变 parentValue</button>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String, // v-model 默认绑定 value 属性
    },
  },

  methods: {
    handleClickButton() {
      // v-model 默认通过 input 事件改变父级的值
      this.$emit('input', '321');
    }
  }
}
</script>
