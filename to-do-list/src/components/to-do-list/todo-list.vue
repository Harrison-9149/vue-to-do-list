<template>
  <div class="todo-list">
    <div class="columns is-centered">
      <div class="column is-half">
        <ul class="list">
          <li class="list-item" v-for="item in todos" :key="item.id">
            {{ item.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import newTodo from '@/components/to-do-list/new-todo.vue';
import { TodoItem } from '@/shared/todo-item';

@Component

export default class todoList extends Vue {
  @Prop({ required: true }) private todos!: Array<TodoItem>;
}

</script>
