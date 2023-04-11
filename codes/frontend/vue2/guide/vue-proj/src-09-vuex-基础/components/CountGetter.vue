<template>
  <div>
    <p>sum: {{ $store.state.sum }} （ × 10 = {{ $store.getters.bigSum }} ）</p>
    <p>num:
      <select v-model.number="num">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </p>
    <p>
      operate:
      <button @click="add">加</button>
      <button @click="subtract">减</button>
      <button @click="addWhenOdd">奇加</button>
      <button @click="addAfterWait">等加</button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    add() {
      this.$store.commit('ADD', this.num);
    },
    subtract() {
      this.$store.commit('SUBTRACT', this.num);
    },
    addWhenOdd() {
      this.$store.dispatch('addWhenOdd', this.num);
    },
    addAfterWait() {
      this.$store.dispatch('addAfterWait', this.num);
    },
  },
};
</script>
<style scoped>
button {
  margin-right: 8px;
}
</style>
