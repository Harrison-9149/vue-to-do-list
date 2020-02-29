<template>
  <div class="todo-list">
    <ol id="list">
      <li v-for="todoItem in todos" :key="todoItem">
        {{ todoItem }}
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import newTodo from '@/components/to-do-list/new-todo.vue';

@Component({
  components: { newTodo },
})

export default class todoList extends Vue {}

</script>
