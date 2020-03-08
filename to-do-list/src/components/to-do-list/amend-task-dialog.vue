<template>
  <b-modal
    :active.sync="isComponentModalActive"
    has-modal-card
    trap-focus
    aria-role="dialog"
    aria-modal
    @close="$emit('close')"
  >
    <div class="modal-card" v-if="newTodoItem !== null">
      <ValidationObserver v-slot="{ handleSubmit }">
        <header class="modal-card-head">
          <p class="modal-card-title">Amend Task</p>
        </header>
        <section class="modal-card-body">
          <div class="columns is-centered">
            <div class="column">
              <form>
                <validationProvider name="name" rules="required" v-slot="{ errors }">
                  <b-field
                    label="Task name"
                    :type="{ 'is-danger': errors[0] }"
                    :message="errors"
                  >
                    <b-input
                      class="detail-input todo-name-input"
                      placeholder="Enter a name for the task"
                      rounded
                      v-model="newTodoItem.name"
                    >
                    </b-input>
                  </b-field>
                </validationProvider>
                <b-field label="Task description">
                  <b-input
                    class="detail-input todo-description-input"
                    placeholder="Enter a description for the task"
                    rounded
                    type="textarea"
                    v-model="newTodoItem.description"
                  >
                  </b-input>
                </b-field>
                <b-switch
                  class="is-required"
                  v-model="newTodoItem.required"
                >
                  Is this a required task?
                </b-switch>
              </form>
            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button has-margin-left-auto" type="button" @click="$emit('close')">Close</button>
          <button class="button is-primary" @click="handleSubmit(addTask)">Add Task</button>
        </footer>
      </ValidationObserver>
    </div>
  </b-modal>
</template>

<script lang="ts">
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import { Vue, Component, Prop } from 'vue-property-decorator';
import todoList from '@/components/to-do-list/todo-list.vue';
import { TodoItem } from '@/shared/todo-item';
// @ts-ignore
import { messages } from 'vee-validate/dist/locale/en.json';

@Component({
  components: {
    ValidationProvider,
    ValidationObserver,
  },
})

export default class amendTaskDialog extends Vue {
  @Prop({ required: true }) item!: TodoItem;
  private newTodoItem: TodoItem | null = null;
  private isComponentModalActive: boolean = true;

  private mounted(): void {
    /* this.newTodoItem = {
      id: this.item.id,
      name: this.item.name,
      completed: this.item.completed,
      required: this.item.required,
      description: this.item.description,
    } as TodoItem; */

    this.newTodoItem = { ...this.item };

    extend('required', {
      ...required,
      message: messages['required'],
    });
  }
}
</script>
