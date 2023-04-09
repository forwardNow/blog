<template>
  <li>
    <label>
      <input type="checkbox" :checked="todo.done" @change="handleChange()"/>
      <span v-if="!todo.isEdit">{{ todo.title }}</span>
      <input v-else type="text" :value="todo.title" @blur="handleBlur" ref="input">
    </label>
    <button class="btn btn-danger" @click="handleClickDeleteButton(todo.id)">删除</button>
    <button class="btn btn-primary" @click="handleClickEditButton()">编辑</button>
  </li>
</template>

<script>
export default {
  name: 'MyItem',
  props: ['todo'],
  methods: {
    handleChange() {
      this.$bus.$emit('updateTodo', {
        ...this.todo,
        done: !this.todo.done,
      });
    },
    handleClickDeleteButton(id) {
      this.$bus.$emit('deleteTodo', id);
    },
    handleClickEditButton() {
      this.$bus.$emit('updateTodo', {
        ...this.todo,
        isEdit: true,
      });

      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    handleBlur(e) {
      const title = e.target.value;

      if (!title.trim()) {
        this.$bus.$emit('updateTodo', {
          ...this.todo,
          isEdit: false,
        });
        return;
      }

      this.$bus.$emit('updateTodo', {
        ...this.todo,
        isEdit: false,
        title,
      });
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover{
  background-color: #ddd;
}

li:hover button{
  display: block;
}
</style>
