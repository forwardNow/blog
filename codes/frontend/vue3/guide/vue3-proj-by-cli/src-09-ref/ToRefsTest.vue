<template>
  <p>{{ student }}</p>
  <p>{{ name }} - {{ age }} - {{ classesTotal }}</p>
  <p>
    <button @click="age++">age+1</button>
    <button @click="classesTotal++">total+1</button>
  </p>
</template>

<script>
import { reactive, toRefs } from 'vue';

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


    // {name: ObjectRefImpl, age: ObjectRefImpl, school: ObjectRefImpl}
    const studentRefs = toRefs(student);
    
    const { name, age } = studentRefs;
    const { total: classesTotal } = toRefs(student.school.classes);

    return { student, name, age, classesTotal };
  }
}
</script>