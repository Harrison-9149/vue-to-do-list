<template>
  <div class="new-todo">
    <b-input
      placeholder="What needs to be done?"
      rounded
      class="item-field"
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

<style scoped>
div {
    padding: 5px;
  }

  input.item-field, textarea {
    font-size: 16px;
    background: #BDE4A8;
  }

  .add-item-button {
    width: 50%;
    font-size: 16px;
    background-color: #BDE4A8;
  }
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component

export default class newTodo extends Vue {
  private todoItem: string | null = null;
}

</script>
