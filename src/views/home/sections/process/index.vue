<template>
  <div
    class="p-5 pt-5 bg-light-taupe contact shadow-xl shadow-light-taupe-500"
  ></div>

  <div class="deneme mx-0 lg:mx-20 md:grid md:grid-cols-3">
    <div :class="{ 'process-grid': true, active }">
      <div class="relative banner mt-20 md:mt-32">
        <img src="@/assets/images/1667915720876.png" class="absolute" />
      </div>
    </div>
    <div class="bg-alicia text-taupe mt-20 col-span-2">
      <div class="text-center">
        <h2 :class="titleClasses">Website Build Process</h2>
      </div>
      <div class="md:grid gap-4 grid-cols-2 grid-rows-2">
        <div :class="off" v-for="(item, index) of processItems" :key="index">
          <!-- <div class="h-5 border-l text-center w-3 inline-block my-5"></div> -->
          <img
            src="@/assets/images/ok.svg"
            class="mr-5"
            width="30"
            height="30"
          />
          <div>
            <h2 class="pb-1 text-base tracking-m">{{ item.title }}</h2>
            <p class="text-sm" v-html="item.text"></p>
          </div>
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
          mb-10
          text-taupe
          border-l-4 border-taupe
          font-normal
          pl-3 inline-block tracking-m`;
    },
    off() {
      return `mb-3
          p-5
          hover:scale-105
          ease-out
          duration-300 flex`;
    },
    processItems() {
      return [
        {
          title: 'Discovery',
          text: `The first step in designing a successful website is to gather information. you are first asked a lot of questions to help get a clear understanding of your business and your needs in a website.`,
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
.banner {
  background: url('@/assets/images/bg.jpeg');
  min-height: 452px;
  max-width: 300px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
  left: 7%;
  img {
    margin-top: 40px;
    margin-left: 40px;
  }
}
.process-grid {
  opacity: 0;
  &.active {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
    transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
  }
}
</style>
