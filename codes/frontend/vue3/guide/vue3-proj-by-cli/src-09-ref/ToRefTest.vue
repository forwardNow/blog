<template>
  <p>{{ student }}</p>
  <p>{{ name }} - {{ age }} - {{ classesTotal }}</p>
  <p>
    <button @click="age++">age+1</button>
    <button @click="classesTotal++">total+1</button>
  </p>
</template>

<script>
import { reactive, toRef } from 'vue';

export default {
  setup() {
    const student = reactive({
      name: '张三',
      age: 18,
      school: {
        classes: {
          total: 10
        }
      }
    });

    // ObjectRefImpl { ..., value }, value 指向 student.name
    const name = toRef(student, 'name');

    const age = toRef(student, 'age');
    const classesTotal = toRef(student.school.classes, 'total');

    return { student, name, age, classesTotal };
  }
}
</script>