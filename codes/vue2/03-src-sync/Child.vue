<template>
  <div>
    我是 Child，
    我要 <button @click="handleClickButton">改变 parentMessage</button>
  </div>
</template>
<script>
export default {
  props: {
    message: {
      type: String,
    },
  },

  methods: {
    handleClickButton() {
      const newMsg = this.message + ' changed by child!';

      this.$emit('update:message', newMsg);
    }
  }
}
</script>
