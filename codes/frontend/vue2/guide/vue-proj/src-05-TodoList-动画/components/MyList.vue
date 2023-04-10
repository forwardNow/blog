<template>
  <ul class="todo-main">
    <transition-group name="todo">
      <MyItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
      />
    </transition-group>
  </ul>
</template>

<script>
import MyItem from './MyItem.vue';

export default {
  name: 'MyList',
  props: ['todos'],
  components: {
    MyItem,
  },
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

/* 进入就激活 */
.todo-enter-active {
  animation: my-animation 1s;
}

/* 离开就激活 */
.todo-leave-active {
  animation: my-animation 1s reverse; /* 倒着播放 */
}

@keyframes my-animation {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
