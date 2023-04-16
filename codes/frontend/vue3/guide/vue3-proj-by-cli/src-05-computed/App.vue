<template>
  <p>姓：<input type="text" v-model="person.firstName"></p>
  <p>姓: <input type="text" v-model="person.lastName"></p>
  <p>姓名：{{ person.fullName }}</p>
  <p>姓名：<input type="text" v-model="person.editableFullName"></p>
</template>

<script>
import { reactive, computed } from 'vue';
export default {
  setup() {
    const person = reactive({
      firstName: '张',
      lastName: '三',
    });

    person.fullName = computed(() => {
      return person.firstName + '-' + person.lastName;
    });

    person.editableFullName = computed({
      get() {
        return person.firstName + '-' + person.lastName;
      },
      set(value) {
        ([ person.firstName, person.lastName ] = value.split('-'));
      }
    });

    return { person };
  }
}
</script>