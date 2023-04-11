<template>
  <div class="search">
    search github users:
    <input type="text" v-model="keyword" @keypress.enter="doSearch">
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'MySearch',
  data() {
    return {
      keyword: '',
    };
  },
  methods: {
    doSearch() {
      this.$bus.$emit('getUsers', { users: [], errorMsg: '', isLoading: true });

      axios.get(`https://api.github.com/search/users?q=${this.keyword}`)
        .then((response) => {
          const { items: users } = response.data;
          this.$bus.$emit('getUsers', { users, errorMsg: '', isLoading: false });
        })
        .catch((e) => {
          this.$bus.$emit('getUsers', { users: [], errorMsg: e.message, isLoading: false });
        });
    },
  },
};
</script>

<style lang="less" scoped>
.search {
  text-transform: capitalize;

  input {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);

    &:focus {
      outline: none;
      border-color: #409eff;
    }
  }
}

</style>
