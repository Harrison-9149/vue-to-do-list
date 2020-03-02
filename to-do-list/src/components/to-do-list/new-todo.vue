<template>
  <div class="new-todo">
    <div class="task-details">
      <ValidationObserver v-slot="{ handleSubmit }">
        <form>
          <validationProvider name="name" rules="required" v-slot="{ errors }">
            <b-field
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
            Is this a required task?
          </b-switch>
        </form>
        <b-button
          rounded
          class="submit"
          size="is-small"
          @click="handleSubmit(addTodo)"
        >
          Submit
        </b-button>
      </ValidationObserver>
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
  private name: string | null = null;
  private description: string | null = null;
  private required: boolean = false;

  private addTodo(): void {
    this.$emit('todoAdded', this.name, this.description, this.required);
    this.name = null;
    this.description = null;
    this.required = false;
  }

  private mounted(): void {
    extend('required', {
      ...required,
      message: messages['required'],
    });
  }
}

</script>
