<template>
  <div class="pt-20">
    <div :class="containerElementClasses">
      <div class="md:w-2/4 md:mt-40">
        <h2 :class="titleClasses">About Me</h2>
        <p class="mt-5 text-sm md:text-base text-ana">
          My name is Bilge Bavli, I'm a front-end developer based in Istanbul,
          Turkey. I have developed many types of front-ends from well know
          Ecommerce platforms to Education applications.<br />
          I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces
          and intuitively implemented UX.
        </p>
        <a
          href="https://www.linkedin.com/in/bilge-bavli-210326170/"
          :class="linkClasses"
        >
          More about me
        </a>
      </div>
      <div class="pt-5 w-full md:w-2/5">
        <img
          src="@/assets/images/pexels-photo-2453489.jpeg"
          class="ml-11 mt-5"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SectionAbout',
  computed: {
    containerElementClasses() {
      return 'mx-6 lg:mx-52 p-5 border border-son pt-12 shadow-xl md:flex justify-content';
    },
    titleClasses() {
      return 'text-base md:text-2xl font-black border-l-4 border-oyy pl-3 text-ana mt-2 tracking-m';
    },
    linkClasses() {
      return 'underline text-sm md:text-base text-ana underline-offset-8 mt-5 block';
    },
  },
});
</script>
