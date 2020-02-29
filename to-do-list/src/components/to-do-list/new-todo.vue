<template>
  <div class="new-todo">
    <b-input
      class="todo-item-input"
      placeholder="What needs to be done?"
      rounded
      v-model="name"
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
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component

export default class newTodo extends Vue {
  private name: string = '';

  private addTodo(): void {
    this.$emit('todoAdded', this.name);
    this.name = '';
  }
}

</script>
