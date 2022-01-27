<template>
  <div id="app">
    <input v-model="formInputValue">

    <input :value="formInputValue2"
           @input="formInputValue2 = $event.target.value">

    <Child v-model="parentValue" />

    <Child2 v-model="parentValue2" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInputValue: '',

      formInputValue2: '',

      parentValue: '123',

      parentValue2: '456',
    };
  },
}
</script>
