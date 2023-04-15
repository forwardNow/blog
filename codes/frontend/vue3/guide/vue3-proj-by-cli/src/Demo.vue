<template>
  <p>{{ name }} - {{ age }}</p>
  <button @click="handleClick">show</button>
</template>

<script>
export default {
  name: 'Demo',
  props: [ 'name', 'age', /* 'gender' */ ],
  emits: [ 'show' ],
  setup(props, context) {
    // Proxy(Object) {name: '张三', age: 18}
    console.log('props:', props); 

    // Proxy(Object) {gender: '男'}
    console.log('context.attrs:', context.attrs);

    // Proxy(Object) {default: ƒ}
    console.log('context.slots:', context.slots);

    function handleClick() {
      context.emit('show', 666);
    }

    return { handleClick };
  }
}
</script>