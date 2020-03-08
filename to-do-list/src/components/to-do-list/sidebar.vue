<template>
  <div class="sidebar">
    <p class="sidebar-title">
      Actions
    </p>
    <new-todo class="new-todo-button" @show-add-task-dialog="onAddTaskDialogShown" :visible="onAddTaskDialogShown" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import newTodo from '@/components/to-do-list/new-todo.vue';
import todoList from '@/components/to-do-list/todo-list.vue';
import addTaskDialog from '@/components/to-do-list/add-task-dialog.vue';
import { TodoItem } from '@/shared/todo-item';

@Component({
  components: {
    newTodo,
    addTaskDialog,
    todoList,
  },
})

export default class sidebar extends Vue {
private newAddTaskDialogVisible = false;

private onAddTaskDialogShown(): void {
  this.$emit('show-add-task-dialog');
}
};
</script>
