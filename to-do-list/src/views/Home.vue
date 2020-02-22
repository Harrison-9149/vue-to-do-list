<template>
  <div class="navbar">
    <navbar />
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from '@/components/navbar/navbar.vue';

export default {
  name: 'Home',
  components: {
    navbar,
  },
};
</script>
