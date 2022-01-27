<template>
  <div>
    我是 Child2，我也要 <button @click="handleClickButton">改变 parentValue</button>
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
    },
  },

  model: {
    prop: 'name', // value -> name
    event: 'updateName', // input -> updateName
  },

  methods: {
    handleClickButton() {
      this.$emit('updateName', '654');
    }
  }
}
</script>
