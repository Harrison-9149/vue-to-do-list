<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <i class="material-icons">
          playlist_add_check
        </i>
        To Do List
      </a>
    </div>
  </nav>
</template>

<style scoped>
  .navbar-item {
    font-size: 20px;
  }

  .navbar {
    background-color: lightseagreen;
    width: 100%;
  }
</style>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class navbar extends Vue {
}
</script>
