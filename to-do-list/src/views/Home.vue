<template>
  <div class="Home">
    <div class="title">
      <h1>
        Todo List
      </h1>
    </div>
    <div class="new-todo">
      <new-todo />
    </div>
    <div class="todo-list">
      <todo-list />
    </div>
  </div>
</template>

<style scoped>

  .title {
    padding: 15px;
    font-family: 'Courier New', Courier, monospace;
    background-color: #79B4A9;
  }

  .new-todo {
    margin: auto;
    display: block;
    width: 50%;
  }

</style>

<script>
// @ is an alias to /src
import newTodo from '@/components/to-do-list/new-todo.vue';
import todoList from '@/components/to-do-list/todo-list.vue';

export default {
  name: 'Home',
  components: {
    newTodo,
    todoList,
  },
};
</script>
