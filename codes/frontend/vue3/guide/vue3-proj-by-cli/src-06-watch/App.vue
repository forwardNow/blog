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
import { reactive, ref, watch } from 'vue';
export default {
  setup() {
    const numOne = ref(0);
    const numTwo = ref(1);

    // 监视 ref 对象(基本类型)，监视的是 RefImpl{ value, ... }，可以监测到 ref 对象的 value 变化
    watch(
      numOne, 
      (newValue, oldValue) => {
        console.log('numOne', newValue, oldValue);
      },
      { immediate: false, deep: false },
    );

    // 监视多个 ref 对象(基本类型)
    watch(
      [numOne, numTwo], 

      // newValues: [ numOne新值, numTwo新值 ]
      // oldValues: [ numOne旧值, numTwo旧值 ]
      (newValues, oldValues) => {
        console.log('numOne & numTwo', newValues, oldValues);
      },
      { immediate: true, deep: false },
    );


    const person = ref({ age: 18 });

    // 监视 ref 对象（对象类型）
    watch(
      person, 
      (newValue, oldValue) => { 
        console.log('person', newValue, oldValue);
      },
      { deep: true },
    );


    // 监视 ref 对象包裹的对象（Proxy 对象，由 reactive 函数生成，也就说是 reactive 对象）
    watch(
      person.value, 
      (newValue, oldValue) => { 
        console.log('person.value', newValue, oldValue);
      },
    );

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

    // 监视 reactive 对象
    watch(
      dog,
      // oldValue 无效
      (newValue, oldValue) => {
        console.log('dog', newValue, oldValue);
      }
      // 强制开启 deep，且无法关闭
    );

    // 监视 reactive 对象的属性，此属性的值是基本类型
    watch(
      () => dog.age,
      (newValue, oldValue) => {
        console.log('dog.age', newValue, oldValue);
      }
    );

    // 监视 reactive 对象的属性，此属性的值是对象类型
    watch(
      () => dog.category,
      (newValue, oldValue) => {
        console.log('dog.category', newValue, oldValue);
      },
      // 必须开启 deep
      { deep: true },
    );



    return { numOne, numTwo, person, dog }
  }
}
</script>