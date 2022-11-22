<template>
  <div :class="{ 'pt-20 about': true, active }">
    <div :class="containerElementClasses">
      <div class="md:w-2/4 md:mt-40">
        <h2 :class="titleClasses">About Me</h2>
        <p class="mt-5 text-sm md:text-base text-taupe">
          My name is Bilge Bavli, I'm a front-end developer based in Istanbul,
          Turkey. I have developed many types of front-ends from well know
          Ecommerce platforms to Education applications.<br />
          I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces
          and intuitively implemented UX.
        </p>
        <ui-button
          title=" More about me"
          href="https://www.linkedin.com/in/bilge-bavli-210326170/"
          classes="underline text-sm md:text-base text-taupe underline-offset-8 mt-5 block"
        ></ui-button>
      </div>
      <div class="pt-5 w-full md:w-2/5">
        <img src="@/assets/images/1668710692922.jpeg" class="ml-11 mt-5" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SectionAbout',
  data() {
    return { active: false };
  },
  computed: {
    containerElementClasses() {
      return 'mx-6 lg:mx-52 p-5 border border-son pt-12 shadow-xl md:flex justify-content';
    },
    titleClasses() {
      return 'text-2xl font-black border-l-4 border-taupe pl-3 text-taupe mt-2 tracking-m';
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 400) this.active = true;
    },
  },
});
</script>
<style scoped lang="scss">
.about {
  opacity: 0;
  &.active {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
    transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
  }
}
</style>
