<template>
  <div class="Home">
    <div class="title">
      <h1>
        Todo List
      </h1>
    </div>
    <new-todo @todoAdded="addTodo" />
    <todo-list v-if="hasTodos" :todos="todos" />
  </div>
</template>

<script lang='ts'>
// @ is an alias to /src
import { Vue, Component } from 'vue-property-decorator';
import newTodo from '@/components/to-do-list/new-todo.vue';
import todoList from '@/components/to-do-list/todo-list.vue';
import { TodoItem } from '@/shared/todo-item';

@Component({
  components: {
    newTodo,
    todoList,
  },
})

export default class Home extends Vue {
  private todos: Array<TodoItem> = new Array<TodoItem>();

  private addTodo(name: string, description: string | null, required: boolean): void {
    const item = {
      id: '1',
      name: name,
      completed: false,
      description: description,
      required: required,
    } as TodoItem;

    this.todos.push(item);
  }

  private get hasTodos(): boolean {
    return this.todos.length > 0;
  }
};
</script>
