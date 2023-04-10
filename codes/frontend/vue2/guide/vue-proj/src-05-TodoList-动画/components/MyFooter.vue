<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllDone" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="handleClickClearButton">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: 'MyFooter',
  props: ['todos'],
  data() {
    return {
    };
  },
  computed: {
    total() {
      return this.todos.length;
    },
    doneTotal() {
      return this.todos.reduce((preReturnRes, todo) => preReturnRes + Number(todo.done), 0);
    },
    isAllDone: {
      get() {
        if (this.total <= 0) {
          return false;
        }
        return this.total === this.doneTotal;
      },
      set(value) {
        this.$emit('setDoneOfAllTodos', value);
      },
    },
  },
  methods: {
    handleClickClearButton() {
      this.$emit('deleteTodosOfDone');
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
