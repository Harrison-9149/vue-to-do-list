<template>
  <div class="new-todo">
    <div class="task-details">
      <b-field label="Name" :message="isValid() ? null : 'Name is required'" :type="{ 'is-danger': !isValid() }">
        <b-input
          class="detail-input todo-name-input"
          placeholder="Enter a name for the task"
          rounded
          v-model="name"
        >
        </b-input>
      </b-field>
      <b-input
        class="detail-input todo-description-input"
        placeholder="Enter a description for the task"
        rounded
        v-model="description"
      >
      </b-input>
      <b-switch
        class="is-required"
        v-model="required"
      >
        Is this a required task? {{ required }}
      </b-switch>
    </div>
    <b-button
      rounded
      class="submit"
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
  private name: string | null = null;
  private description: string | null = null;
  private required: boolean = false;

  private isValid(): boolean {
    if (this.name === '' || null) {
      return false;
    };
    return true;
  }

  private addTodo(): void {
    if (this.isValid()) return;
    this.$emit('todoAdded', this.name, this.description, this.required);
    this.name = null;
    this.description = null;
    this.required = false;
  }
}

</script>
