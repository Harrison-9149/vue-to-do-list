<template>
  <b-modal
    :active.sync="isComponentModalActive"
    has-modal-card
    trap-focus
    aria-role="dialog"
    aria-modal
    @close="$emit('close')"
  >
    <div class="modal-card">
      <ValidationObserver v-slot="{ handleSubmit }">
        <header class="modal-card-head">
          <p class="modal-card-title">Add New Task</p>
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
                      v-model="name"
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
                    v-model="description"
                  >
                  </b-input>
                </b-field>
                <b-switch
                  class="is-required"
                  v-model="required"
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
// @ts-ignore
import { messages } from 'vee-validate/dist/locale/en.json';

@Component({
  components: {
    ValidationProvider,
    ValidationObserver,
  },
})

export default class addTaskDialog extends Vue {
private isComponentModalActive: boolean = true;
private name: string | null = null;
private description: string | null = null;
private required: boolean = false;
private completed: boolean = false;

private addTask(): void {
  this.$emit('todo-added', this.name, this.description, this.required, this.completed);
  this.name = null;
  this.description = null;
  this.required = false;
  this.completed = false;
  this.isComponentModalActive = false;
}
private mounted(): void {
  extend('required', {
    ...required,
    message: messages['required'],
  });
}
}
</script>
