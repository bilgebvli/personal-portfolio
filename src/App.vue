<template>
  <transition name="fade" mode="out-in">
    <div v-if="!isLoading">
      <Header />
      <router-view />
    </div>
    <ui-loading v-else></ui-loading>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/layout/header.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  },
});
</script>
