<template>
  <div class="todo-list">
    <ul v-for="item in listItems" :key="item.id">
      <li>Description: {{ item.description }}, DueDate: {{ item.dueDate }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { ToDoListItem } from '@/shared/todolist-item';

@Component
export default class List extends Vue {
    private listItems: Array<ToDoListItem> = new Array<ToDoListItem>();

    private mounted(): void {
        this.listItems = [
            { id: 1, description: 'test', dueDate: 'tomorrow' },
        ]
    };
};
</script>

<style>
  li {
    display: table;
    margin: 0 auto;
   font-family: Arial, Helvetica, sans-serif;
  };
</style>