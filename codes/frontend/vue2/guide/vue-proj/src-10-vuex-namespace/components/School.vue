<template>
  <div>
    <h1>{{ name }} ({{ fullName }})</h1>
    <input type="text" v-model="newName">
    <button @click="UPDATE_NAME(newName)">修改1</button>
    <button @click="update(newName)">修改2</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newName: '',
    };
  },
  computed: {
    name() {
      return this.$store.state.school.name;
    },
    fullName() {
      return this.$store.getters['school/fullName'];
    },
  },
  methods: {
    UPDATE_NAME(newName) {
      this.$store.commit('school/UPDATE_NAME', newName);
    },
    update(newName) {
      this.$store.dispatch('school/update', newName);
    },
  },
};
</script>
