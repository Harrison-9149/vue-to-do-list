<template>
  <div class="home">
    <div class="title">
      <h1>
        My Todo List
      </h1>
    </div>
    <new-todo />
  </div>
</template>

<style scoped>

  .title {
    padding: 15px;
    font-family: 'Courier New', Courier, monospace;
  }

  .new-todo {
    margin: auto;
    display: block;
    width: 50%;
  }

  .home {
    background-color: #79B4A9;
  }

</style>

<script>
// @ is an alias to /src
import newTodo from '@/components/to-do-list/new-todo.vue';

export default {
  name: 'Home',
  components: {
    newTodo,
  },
};
</script>
