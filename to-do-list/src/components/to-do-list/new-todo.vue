<template>
  <div class="new-todo">
    <b-input
      placeholder="What needs to be done?"
      rounded
      v-model="todoItem"
    >
    </b-input>
    <b-button
      rounded
      class="add-item-button"
      size="is-small"
      @click="addItem"
    >
      Submit
    </b-button>
    <div class="output">
      {{ todoItem }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component

export default class newTodo extends Vue {
  private todoItem: string | null = null;

  private addItem(): void {
  }
}

</script>
