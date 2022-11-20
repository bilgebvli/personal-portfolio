<template>
  <transition name="fade" mode="out-in">
    <div>
      <Header />
      <router-view />
    </div>
  </transition>
  <transition name="fade" mode="out-in"
    ><ui-loading v-if="isLoaded"></ui-loading
  ></transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/layout/header.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
  },
  computed: {
    isLoaded() {
      return this.$store.getters.getIsLoading;
    },
  },
});
</script>
