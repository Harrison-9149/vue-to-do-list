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
          <p class="modal-card-title"><b-icon icon="map-marker-outline"></b-icon>&nbsp;Add New Task</p>
        </header>
        <section class="modal-card-body">
          <div class="columns is-centered">
            <div class="column">
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

private addTask(): void {
  this.$emit('todoAdded', this.name, this.description, this.required);
  this.name = null;
  this.description = null;
  this.required = false;
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
