<template>
  <div class="new-todo">
    <b-input
      class="todo-item-input"
      placeholder="What needs to be done?"
      rounded
      v-model="todoItem"
    >
    </b-input>
    <b-button
      rounded
      class="add-item-button"
      size="is-small"
      @click="addTodo"
    >
      Submit
    </b-button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component

export default class newTodo extends Vue {
  private todoItem: string = '';
  private todos: Array<string> = [];

  private addTodo(): void {
    this.todos.push(this.todoItem);
  }
}

</script>
