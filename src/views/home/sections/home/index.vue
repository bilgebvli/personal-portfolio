<template>
  <div class="grid grid-cols-2 about">
    <div :class="leftMenuClasses">
      <div class="w-11/12 md:w-96 mb-10 md:mb-0">
        <h2 class="text-3xl md:text-6xl leading-snug ml12">
          Welcome. <br />
          A freelance<br />
          front end developer
        </h2>

        <p class="pt-8 md:pt-14 text-xs md:text-base tracking-wide">
          Turning ideas into real life products is my calling.
        </p>
      </div>
    </div>
    <div class="relative shadow">
      <p :class="rightTitleClasses">FREELANCECURRENTLY</p>
      <img
        src="@/assets/images/banner.jpeg"
        class="w-full h-screen object-cover opacity-90"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SectionHome',
  computed: {
    rightTitleClasses() {
      return 'absolute w-4/5	md:w-auto h-5 inset-y-1/2 left-5 md:inset-x-1/4 tracking-x md:text-xs text-ellipsis overflow-hidden ...';
    },
    leftMenuClasses() {
      return 'bg-renk text-mouth flex items-center justify-center h-screen shadow';
    },
  },
  mounted() {
    var textWrapper = this.$el.querySelector('.ml12');
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    (window as any).anime
      .timeline({ loop: true })
      .add({
        targets: '.ml12 .letter',
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 3000,
        delay: (el: any, i: any) => 500 + 30 * i,
      })
      .add({
        targets: '.ml12 .letter',
        translateX: [0, -30],
        opacity: [1, 0],
        easing: 'easeInExpo',
        duration: 3000,
        delay: (el: any, i: any) => 100 + 30 * i,
      });
  },
});
</script>
