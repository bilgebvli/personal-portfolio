<template>
  <a :href="link" :class="classes" :target="target">
    <span v-if="title"> {{ title }}</span>
    <slot v-else></slot>
  </a>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UiButton',
  props: {
    link: {
      type: String,
    },
    classes: {
      type: [String, Array, Object],
    },
    title: {
      type: String,
    },
    target: {
      type: String,
      default: '_self',
    },
  },
});
</script>
