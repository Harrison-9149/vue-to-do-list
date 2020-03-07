<template>
  <div class="todo-list">
    <div class="columns is-centered">
      <div class="column is-half">
        <ul class="list">
          <li class="list-item" v-for="item in todos" :key="item.id" @dblclick="edit" :class="[item.completed ? 'completed' : '']">
            <div class="view">
              <b-checkbox class="checkbox" v-model="item.completed"></b-checkbox>
              Name: {{ item.name }}
              Description: {{ item.description }}
              Required: {{ item.required }}
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { TodoItem } from '@/shared/todo-item';

@Component

export default class todoList extends Vue {
  @Prop({ required: true }) private todos!: Array<TodoItem>;

  private edit(): void {
    this.$emit('show-amend-task-dialog');
  }
}

</script>
