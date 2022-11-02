<template>
  <div v-bind="sectionOptions">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UiSection',
  props: {
    bgColor: {
      type: String,
      default: 'midnight',
    },
    id: {
      type: String,
    },
  },
  computed: {
    sectionOptions() {
      return {
        class: { [`${this.bgColor}`]: true },
        id: this.id,
      };
    },
  },
});
</script>
