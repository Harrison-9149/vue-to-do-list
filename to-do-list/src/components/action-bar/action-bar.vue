<template>
  <div class="button-bar">
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/2.5.94/css/materialdesignicons.min.css">
    <b-button
      class="add-item"
      rounded
      size="is-small"
      icon-left="plus"
      @click="addItem"
    >
      Add
    </b-button>
    <example-modal ref="modal"></example-modal>
  </div>
</template>

<style scoped>
.button-bar {
padding: 15px;
}

.add-item {
float: left;
}
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class actionBar extends Vue {
  private addItem(): void {
    this.$buefy.dialog.prompt({
      message: 'Add new item',
      inputAttrs: {
        maxLength: 100,
      },
      trapFocus: true,
      onConfirm: () => this.$buefy.toast.open('The item has been successfully added'),
    });
  }
}
</script>
