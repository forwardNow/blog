<template>
  <div>
    <h1>{{ name }} ({{ fullName }})</h1>
    <input type="text" v-model="newName">
    <button @click="UPDATE_NAME(newName)">修改1</button>
    <button @click="update(newName)">修改2</button>
  </div>
</template>

<script>
import {
  mapState, mapGetters, mapMutations, mapActions,
} from 'vuex';

export default {
  data() {
    return {
      newName: '',
    };
  },
  computed: {
    ...mapState('person', ['name']),
    ...mapGetters('person', ['fullName']),
  },
  methods: {
    ...mapMutations('person', ['UPDATE_NAME']),
    ...mapActions('person', ['update']),
  },
};
</script>
