<template>
  <div>
    <School></School>
    <Person></Person>
  </div>
</template>

<script>
import School from './components/School.vue';
import Person from './components/Person.vue';

export default {
  name: 'App',

  components: {
    School,
    Person,
  },
};
</script>
