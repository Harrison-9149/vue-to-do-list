<template>
  <div class="new-todo">
    <div class="task-details">
      <button
        class="button is-primary add-new-task"
        @click="showAddTaskDialog"
      >
        Add New Task
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import { Vue, Component, Prop } from 'vue-property-decorator';
// @ts-ignore
import { messages } from 'vee-validate/dist/locale/en.json';

@Component({
  components: {
    ValidationProvider,
    ValidationObserver,
  },
})

export default class newTodo extends Vue {
  private showAddTaskDialog(): void {
    this.$emit('show-add-task-dialog');
  }

  private mounted(): void {
    extend('required', {
      ...required,
      message: messages['required'],
    });
  }
}

</script>
