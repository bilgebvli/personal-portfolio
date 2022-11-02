<template>
  <Header />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/layout/header.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
  },
});
</script>
