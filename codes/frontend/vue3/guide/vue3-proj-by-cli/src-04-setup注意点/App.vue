<template>
  <Demo name="张三" :age="18" gender="男" @show="handleShow" >
    <template #default><span>xxx</span></template>
  </Demo>
</template>

<script>
import Demo from './Demo.vue';

export default {
  name: 'App',
  components: { Demo },
  setup() {
    function handleShow(value) {
      alert(`handleShow(${value})`);
    }

    return { handleShow }
  }
}
</script>