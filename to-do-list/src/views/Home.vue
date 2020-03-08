<template>
  <div class="Home">
    <div class="title">
      <h1>
        Todo List
      </h1>
    </div>
    <sidebar @show-add-task-dialog="onAddTaskDialogShown" />
    <add-task-dialog v-if="newAddTaskDialogVisible" @todo-added="addTodo" @close="onClose" />
    <amend-task-dialog v-if="newAmendTaskDialogVisible" @close="onClose" :item="selectedTask" />
    <todo-list v-if="hasTodos" :todos="todos" @show-amend-task-dialog="onAmendTaskDialogShown" />
  </div>
</template>

<script lang='ts'>
// @ is an alias to /src
import { Vue, Component } from 'vue-property-decorator';
import newTodo from '@/components/to-do-list/new-todo.vue';
import todoList from '@/components/to-do-list/todo-list.vue';
import addTaskDialog from '@/components/to-do-list/add-task-dialog.vue';
import amendTaskDialog from '@/components/to-do-list/amend-task-dialog.vue';
import sidebar from '@/components/to-do-list/sidebar.vue';
import { TodoItem } from '@/shared/todo-item';

@Component({
  components: {
    sidebar,
    newTodo,
    todoList,
    addTaskDialog,
    amendTaskDialog,
  },
})

export default class Home extends Vue {
  private todos: Array<TodoItem> = new Array<TodoItem>();
  private newAddTaskDialogVisible = false;
  private newAmendTaskDialogVisible = false;
  private selectedTask: TodoItem | null = null;

  private get hasTodos(): boolean {
    return this.todos.length > 0;
  }

  private onClose(): void {
    this.newAddTaskDialogVisible = false;
    this.newAmendTaskDialogVisible = false;
    this.selectedTask = null;
  }

  private addTodo(name: string, description: string | null, required: boolean): void {
    this.newAddTaskDialogVisible = false;
    const item = {
      id: '1',
      name: name,
      completed: false,
      description: description,
      required: required,
    } as TodoItem;

    this.todos.push(item);
  }

  private onAddTaskDialogShown(): void {
    this.newAddTaskDialogVisible = true;
  }

  private onAmendTaskDialogShown(item: TodoItem): void {
    this.selectedTask = item;
    this.newAmendTaskDialogVisible = true;
  }
};
</script>
