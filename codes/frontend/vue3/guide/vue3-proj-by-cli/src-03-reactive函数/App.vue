<template>
  <p>姓名：{{ person.name }}</p>
  <p>年龄：{{ person.age }}</p>
  <p>爱好：{{ hobby }}</p>

  <p><button @click="change">change</button></p>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'App',
  setup() {
    const person = reactive({
      name: '张三',
      age: 18,
    });

    const hobby = reactive([ '踢球', '打篮球', '打乒乓球' ]);

    function change() {
      person.name = '李四';
      person.age = 28;

      hobby[1] = '学习';
    }

    return {
      person,
      hobby,
      change,
    }
  }
}
</script>