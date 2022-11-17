<template>
  <transition name="fade" mode="out-in">
    <div v-if="!isLoading">
      <Header />
      <router-view />
    </div>
    <ui-loading-screen v-else></ui-loading-screen>
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
    }, 1000);
  },
});
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
</style>
