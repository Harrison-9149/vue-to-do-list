<template>
  <div class="home">
    <div class="navbar">
      <navbar />
    </div>
    <div class="action-bar">
      <action-bar />
    </div>
    <br>
    <div class="todo">
      <todo />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from '@/components/navbar/navbar.vue';
import todo from '@/components/to-do-list/to-do-list.vue';
import actionBar from '@/components/action-bar/action-bar.vue';

export default {
  name: 'Home',
  components: {
    navbar,
    todo,
    actionBar,
  },
};
</script>
