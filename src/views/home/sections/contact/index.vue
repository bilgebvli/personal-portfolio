<template>
  <div class="contact">
    <div class="contact__banner relative mt-12 shadow-2xl shadow-white">
      <a href="mailto:bilgebvli@gmail.com" class="banner p-3 md:w-5/12">
        <span class="block text-3xl pb-3 font-black">Ask</span>
        <span class="border-b-4 text-4xl font-black">me</span>
        <span class="block text-3xl pt-5 font-black">anything</span>
      </a>
    </div>
    <div :class="containerClasses">
      <div
        class="absolute p-5 contact__back-to-top cursor-pointer"
        @click="scrollToTop()"
      >
        <vue-feather type="chevron-up"></vue-feather>
      </div>
      <h3 class="mt-14 text-mouth">INTERESTED IN WORKİNG TOGETHER?</h3>
      <a
        href="mailto:bilgebvli@gmail.com"
        class="text-sm underline underline-offset-4 mt-4 text-mouth"
      >
        Get Started!
      </a>
      <div class="mt-14 text-mouth text-sm">
        <a
          v-for="(item, index) of socialMediaItems"
          :key="index"
          :href="item.url"
          target="_blank"
          :class="{ 'px-6': index === 1 }"
        >
          <vue-feather :type="item.icon" class="w-5"></vue-feather
        ></a>
      </div>
      <p class="text-sm text-mouth mt-10">©2022 Bilge</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SectionContact',
  computed: {
    containerClasses() {
      return 'py-14 px-5 bg-renk text-center text-lg shadow-2xl shadow-renk relative';
    },
    socialMediaItems() {
      return [
        {
          url: 'https://www.linkedin.com/in/bilge-bavli-210326170/',
          icon: 'linkedin',
        },
        {
          url: 'https://github.com/bilgebvli',
          icon: 'github',
        },
        {
          url: 'https://www.instagram.com/zeotrope/',
          icon: 'instagram',
        },
      ];
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
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
});
</script>
