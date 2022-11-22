<template>
  <div class="contact">
    <div :class="containerClasses">
      <div
        class="absolute p-5 contact__back-to-top cursor-pointer"
        @click="scrollToTop()"
      >
        <vue-feather type="chevron-up"></vue-feather>
      </div>
      <h3 class="mt-14 text-opal-beach">INTERESTED IN WORKING TOGETHER?</h3>
      <ui-button
        title="Get Started!"
        href="mailto:bilgebvli@gmail.com"
        classes="text-sm underline underline-offset-4 mt-4 text-opal-beach"
      ></ui-button>
      <div class="mt-14 text-opal-beach text-sm">
        <ui-button
          v-for="(item, index) of socialMediaItems"
          :key="index"
          :href="item.url"
          :classes="{ 'px-6': index === 1 }"
          target="_blank"
        >
          <vue-feather :type="item.icon" class="w-5"></vue-feather
        ></ui-button>
      </div>
      <p class="text-sm text-opal-beach mt-10">©2022 Bilge</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SectionContact',
  computed: {
    containerClasses() {
      return 'py-14 px-5 bg-light-taupe text-center text-lg shadow-2xl shadow-light-taupe relative';
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
      this.$router.push('/');
    },
  },
});
</script>
