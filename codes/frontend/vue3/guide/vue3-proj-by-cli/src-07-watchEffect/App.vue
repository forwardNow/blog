<template>
  <p>numOne: <span>{{ numOne }}</span> <button @click="numOne++">+</button></p>
  <p>numTwo: <span>{{ numTwo }}</span> <button @click="numTwo++">+</button></p>
  <hr>
  <p>人的年龄：{{ person.age }} <button @click="person.age++">+</button></p>
  <hr>
  <p>狗的年龄：{{ dog.age }} <button @click="dog.age++">+</button></p>
  <p>狗的类别：{{ dog.category.a.b.c }} <button @click="dog.category.a.b.c++">+</button></p>
</template>

<script>
import { reactive, ref, watchEffect } from 'vue';
export default {
  setup() {
    const numOne = ref(0);
    const numTwo = ref(1);

    const person = ref({ age: 18 });

    const dog = reactive({
      age: 1,
      category: {
        a: {
          b: { 
            c: 1
          }
        }
      }
    });

    // 一上来就执行一次，用到那个属性一旦变化就重新执行函数体
    watchEffect(() => {
      console.log('numOne', numOne.value);
    });


    watchEffect(() => {
      console.log('numOne & numTwo', numOne.value, numTwo.value);
    });

    watchEffect(() => {
      console.log('person.value.age', person.value.age);
    });

    watchEffect(() => {
      console.log('dog.age', dog.age);
    });
    
    watchEffect(() => {
      console.log('dog.category.a.b.c', dog.category.a.b.c);
    });

    return { numOne, numTwo, person, dog }
  }
}
</script>