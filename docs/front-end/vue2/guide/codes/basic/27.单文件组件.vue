<template>
  <div>
    {{ name }} - {{ age }}
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      name: '张三',
      age: 18
    };
  },
}
</script>

<style>

</style>