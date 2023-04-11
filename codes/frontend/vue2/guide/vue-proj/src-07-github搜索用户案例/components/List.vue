<template>
  <div class="list">
    <div
      v-show="model.users.length > 0"
      v-for="user in model.users"
      :key="user.login"
      class="item"
    >
      <a :href="user.html_url" target="_blank">
        <img :src="user.avatar_url" alt="">
      </a>
      <span>{{ user.login }}</span>
    </div>

    <!-- first -->
    <div v-show="model.isFirst"><h2>欢迎使用</h2></div>

    <!-- loading -->
    <div v-show="model.isLoading"><img src="https://www.icegif.com/wp-content/uploads/loading-icegif-1.gif" alt=""></div>

    <!-- error -->
    <div v-show="model.errorMsg"><h2>{{ model.errorMsg }}</h2></div>
  </div>
</template>

<script>
export default {
  name: 'MyList',

  mounted() {
    this.$bus.$on('getUsers', (data = { users: [], errorMsg: '', isLoading: false }) => {
      this.model = {
        ...this.model,
        ...data,
        isFirst: false,
      };
    });
  },

  data() {
    return {
      model: {
        isFirst: true,
        isLoading: false,
        errorMsg: '',
        users: [],
      },
    };
  },
};
</script>

<style lang="less" scoped >
  .list {
    display: flex;
    flex-wrap: wrap;
    padding: 1px 0 0 1px;
    margin-top: 16px;
  }

  .item {
    display: flex;
    flex-direction: column;

    align-items: center;

    margin: -1px 0 0 -1px;

    width: 200px;
    height: 200px;

    border: solid 1px #ddd;
    box-sizing: border-box;

    a {
      margin-top: 32px;
      height: 100px;
    }

    img {
      display: block;
      height: 100%;;
    }

    span {
      margin-top: 16px;
      height: 40px;
      text-align: center;
      word-break: break-all;
    }
  }
</style>
