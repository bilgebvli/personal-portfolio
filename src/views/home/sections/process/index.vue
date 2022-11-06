<template>
  <div class="p-5 pt-5 bg-renk contact shadow-xl shadow-renk-500"></div>

  <div class="deneme mx-0 lg:mx-52">
    <div class="bg-puff text-ana mt-20 text-center">
      <div>
        <h2 :class="titleClasses">Process</h2>
      </div>
      <div
        :class="{
          'md:grid gap-4 grid-cols-2 grid-rows-2 process-grid': true,
          active,
        }"
      >
        <div :class="off" v-for="(item, index) of processItems" :key="index">
          <div class="h-5 border-l text-center w-3 inline-block my-5"></div>
          <h2 class="pb-1 text-base tracking-m">{{ item.title }}</h2>
          <p class="text-sm" v-html="item.text"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SectionProcess',
  data() {
    return { active: false };
  },
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
    off() {
      return `mb-3
          text-center
          shadow-2xl shadow-white
          p-5
          hover:scale-105
          ease-out
          duration-300`;
    },
    processItems() {
      return [
        {
          title: 'Discovery',
          text: `The first step in designing a successful website is to gather information. you are first asked a lot of questions to help get a clear understanding of your business and your needs in a website. Certain things to consider are: <br/><br/> <strong>Purpose, Goals, Target Audience,
Content</strong> <br/><br/> The above questions need to be considered when designing the look and feel of your website.`,
        },
        {
          title: 'Planning',
          text: 'Using the information gathered from phase one, we first put together a plan.',
        },
        {
          title: 'Design',
          text: 'Drawing from the information gathered to this point, we determine the look and feel of the site.',
        },
        {
          title: 'Development',
          text: 'Final appearance of the product. After your approvement it goes to development.',
        },
        {
          title: 'Delivery',
          text: 'At this point, we attend to the final details and test your website.',
        },
      ];
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
      if (window.scrollY > 1500) this.active = true;
    },
  },
});
</script>
<style scoped lang="scss">
.process-grid {
  opacity: 0;
  &.active {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
    transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
  }
}
</style>
