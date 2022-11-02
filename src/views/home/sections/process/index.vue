<template>
  <div class="p-5 pt-5 bg-renk contact shadow-xl shadow-renk-500"></div>

  <div class="deneme mx-0 lg:mx-52">
    <div class="bg-puff text-ana mt-20 text-center">
      <h2 :class="titleClasses">Process</h2>
      <div
        class="mb-3 text-center shadow-2xl shadow-white p-5"
        v-for="(item, index) of processItems"
        :key="index"
      >
        <div class="h-5 border-l text-center w-3 inline-block my-5"></div>
        <h2 class="pb-1 text-base tracking-m">{{ item.title }}</h2>
        <p class="text-sm">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SectionProcess',
  computed: {
    titleClasses() {
      return `text-2xl
          my-10
          ml-3
          text-ana
          border-l-4 border-ana
          font-normal
          pl-3 inline-block`;
    },
    processItems() {
      return [
        {
          title: 'BRIEF',
          text: 'Fill in the brief as detailed as posible. And the result ill amaze you',
        },
        {
          title: 'RESEARCH',
          text: 'A lot of work to be done: competitive and visual analysis, target audience and market research',
        },
        {
          title: 'PROTOTYPE',
          text: 'Designing the logical structure of the website',
        },
        {
          title: 'VISUAL CONCEPT',
          text: 'Designing the layout of the future website',
        },
        {
          title: 'DEVELOPMENT',
          text: 'Final appearance of the product. After your approvement it goes to development.',
        },
      ];
    },
  },
});
</script>
