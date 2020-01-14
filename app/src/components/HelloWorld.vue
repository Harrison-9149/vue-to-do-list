<template>
  <div class="hello">
    Some text: {{ msg }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop({ required: true }) private msg!: string;
  
}
</script>