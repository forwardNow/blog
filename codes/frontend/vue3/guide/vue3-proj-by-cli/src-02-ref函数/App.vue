<template>
  <p>姓名：{{ name }}</p>
  <p>年龄：{{ age }}</p>

  <p>{{ person.name }} - {{ person.age }}</p>
  
  <p><button @click="change">change</button></p>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'App',
  setup() {
    const name = ref('张三');
    const age = ref(18);
    const person = ref({ name: '李四', age: 19 })

    function change() {
      name.value = '张三2';
      age.value = 28;

      person.value.name = '李四2';
      person.value.age = 29;
    }

    return {
      name,
      age,
      person,
      change,
    }
  }
}
</script>