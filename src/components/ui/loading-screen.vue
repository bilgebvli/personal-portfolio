<template>
  <div id="loading" class="flex justify-center items-center bg-alicia">
    <img class="img" src="@/assets/images/loading.jpg" alt="loading..." />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UiLoadingScreen',
});
</script>

<style lang="scss" scoped>
#loading {
  height: 100vh;
  .img {
    border-radius: 100%;
    height: 50px;
    width: 50px;
  }
}
</style>
