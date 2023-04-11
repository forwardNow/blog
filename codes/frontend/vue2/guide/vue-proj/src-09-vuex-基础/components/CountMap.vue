<template>
  <div>
    <p>sum: {{ mySum }} （ × 10 = {{ bigSum }} ）</p>
    <p>num:
      <select v-model.number="num">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </p>
    <p>
      operate:
      <button @click="add(num)">加</button>
      <button @click="subtract(num)">减</button>
      <button @click="addWhenOdd(num)">奇加</button>
      <button @click="addAfterWait(num)">等加</button>
    </p>
  </div>
</template>

<script>
import {
  mapState, mapGetters, mapMutations, mapActions,
} from 'vuex';

export default {
  mounted() {
    console.log(mapState({ mySum: 'sum', myStudentName: 'studentName' }));
    /*
    {
      myStudentName: ƒ mappedState()
      mySum: ƒ mappedState()
    }
    */
  },
  data() {
    return {
      num: 1,
    };
  },

  computed: {
    // sum() {
    //   return this.$store.state.sum;
    // },
    ...mapState({ sum: 'sum' }),
    ...mapState(['sum']),

    ...mapState({ mySum: 'sum', myStudentName: 'studentName' }),

    // bigSum() {
    //   return this.$store.getters.bigSum;
    // },
    ...mapGetters(['bigSum']),
  },

  methods: {
    // add(num) {
    //   this.$store.commit('ADD', num);
    // },

    ...mapMutations(['ADD']),
    ...mapMutations({ add: 'ADD' }),

    // subtract(num) {
    //   this.$store.commit('SUBTRACT', num);
    // },

    ...mapMutations({ subtract: 'SUBTRACT' }),

    // addWhenOdd(num) {
    //   this.$store.dispatch('addWhenOdd', num);
    // },

    ...mapActions(['addWhenOdd']),

    // addAfterWait(num) {
    //   this.$store.dispatch('addAfterWait', num);
    // },

    ...mapActions({ addAfterWait: 'addAfterWait' }),
  },
};
</script>
<style scoped>
button {
  margin-right: 8px;
}
</style>
