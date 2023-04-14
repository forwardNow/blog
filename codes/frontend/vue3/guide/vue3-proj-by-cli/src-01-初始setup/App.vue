<template>
  <p>姓名：{{ name }}</p>
  <p>年龄：{{ age }}</p>
  <p><button @click="sayHello">sayHello</button></p>
</template>

<script>
export default {
  name: 'App',
  setup() {
    const name = '张三';
    const age = 18;

    function sayHello() {
      alert(`你好，我是${name}，今年${age}岁。`);
    }

    return {
      name,
      age,
      sayHello,
    }
  }
}
</script>