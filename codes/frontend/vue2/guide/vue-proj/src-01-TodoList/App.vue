<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo" />
        <MyList :todos="todos" :toggleTodoDone="toggleTodoDone" :deleteTodo="deleteTodo" />
        <MyFooter
          :todos="todos"
          :setDoneOfAllTodos="setDoneOfAllTodos"
          :deleteTodosOfDone="deleteTodosOfDone"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyList from './components/MyList.vue';
import MyFooter from './components/MyFooter.vue';

const KEY = 'TODOS';

export default {
  name: 'App',
  components: {
    MyHeader,
    MyList,
    MyFooter,
  },
  created() {
    const todosStr = localStorage.getItem(KEY);
    const todos = JSON.parse(todosStr) || [];
    this.todos = todos;
  },
  data() {
    return {
      todos: [
        // { id: '001', title: '抽烟', done: true },
        // { id: '002', title: '喝酒', done: false },
        // { id: '003', title: '开车', done: true },
      ],
    };
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem(KEY, JSON.stringify(value));
      },
    },
  },
  methods: {
    addTodo(todo) {
      this.todos.unshift(todo);
    },
    toggleTodoDone(id) {
      const targetTodo = this.todos.find((todo) => todo.id === id);
      targetTodo.done = !targetTodo.done;
    },
    deleteTodo(id) {
      const targetTodoIndex = this.todos.findIndex((todo) => todo.id === id);

      if (targetTodoIndex !== -1) {
        this.todos.splice(targetTodoIndex, 1);
      }
    },
    setDoneOfAllTodos(done) {
      this.todos = this.todos.map((todo) => {
        // eslint-disable-next-line no-param-reassign
        todo.done = done;
        return todo;
      });
    },
    deleteTodosOfDone() {
      this.todos = this.todos.filter((todo) => !todo.done);
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
