<template>
  <div class="Home">
    <div class="title">
      <h1>
        Todo List
      </h1>
    </div>
    <sidebar />
    <todo-list v-if="hasTodos" :todos="todos" />
  </div>
</template>

<script lang='ts'>
// @ is an alias to /src
import { Vue, Component } from 'vue-property-decorator';
import newTodo from '@/components/to-do-list/new-todo.vue';
import todoList from '@/components/to-do-list/todo-list.vue';
import addTaskDialog from '@/components/to-do-list/add-task-dialog.vue';
import sidebar from '@/components/to-do-list/sidebar.vue';
import { TodoItem } from '@/shared/todo-item';

@Component({
  components: {
    sidebar,
    newTodo,
    todoList,
    addTaskDialog,
  },
})

export default class Home extends Vue {
  private todos: Array<TodoItem> = new Array<TodoItem>();

  private get hasTodos(): boolean {
    return this.todos.length > 0;
  }
};
</script>
