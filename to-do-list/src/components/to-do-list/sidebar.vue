<template>
  <div class="sidebar">
    <new-todo class="new-todo-button" @show-add-task-dialog="onAddTaskDialogShown" :visible="onAddTaskDialogShown" />
    <add-task-dialog v-if="newAddTaskDialogVisible" @todoAdded="addTodo" @close="onClose" />
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
	private todos: Array<TodoItem> = new Array<TodoItem>();
	private newAddTaskDialogVisible = false;

	private onAddTaskDialogShown(): void {
	  this.newAddTaskDialogVisible = true;
	}

	private onClose(): void {
	  this.newAddTaskDialogVisible = false;
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
};

</script>
