<template>
  <div
    class="p-5 pt-5 bg-light-taupe contact shadow-xl shadow-light-taupe-500"
  ></div>
  <!-- <img src="@/assets/images/photo-1619996940898-6d8f68ccccc6.jpeg" /> -->
  <div class="deneme mx-0 lg:mx-20 md:grid md:grid-cols-2">
    <div :class="kk">
      <div class="text-center md:text-left mt-10">
        <h2 :class="titleClasses">Website Build Process</h2>
      </div>
      <div class="md:grid grid-cols-1 grid-rows-1">
        <div :class="off" v-for="(item, index) of processItems" :key="index">
          <!-- <div class="h-5 border-l text-center w-3 inline-block my-5"></div> -->
          <img
            src="@/assets/images/ok.svg"
            class="mr-5"
            width="20"
            height="20"
          />
          <div>
            <h2 class="pb-1 text-base tracking-m">{{ item.title }}</h2>
            <p class="text-sm" v-html="item.text"></p>
          </div>
        </div>
      </div>
      <a
        href="mailto:bilgebvli@gmail.com"
        class="border border-light-taupe p-3 text-light-taupe w-72 mt-5 md:block hidden text-center"
      >
        Get Started
      </a>
    </div>
    <div class="relative xx mt-20">
      <img src="@/assets/images/1667915720876.png" />
      <a
        href="mailto:bilgebvli@gmail.com"
        class="border border-light-taupe p-3 text-light-taupe w-2/4 absolute md:hidden block text-center"
      >
        Get Started
      </a>
    </div>

    <!-- <div :class="{ 'process-grid col-span-1': true, active }">
      <div class="banner mt-20 md:mt-32">
  
        <button class="border border-light-taupe p-3 text-light-taupe w-2/4">
          Get Started
        </button>
      </div>
    </div> -->
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
          font-black
          pl-3 inline-block tracking-m`;
    },
    off() {
      return `px-5 md:px-0 md-px-0 py-3 flex`;
    },
    kk() {
      return `bg-alicia
        text-taupe
        mt-20
        md:mt-10
        border
        md:border-0
        border-son
        mx-5
        md:mx-0
        shadow-xl
        md:shadow-none
        order-last pb-10`;
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
  background: url('@/assets/images/1667915720876.png');
  min-height: 452px;
  // max-width: 300px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
  // left: 7%;
  // img {
  //   margin-top: 40px;
  //   margin-left: 40px;
  // }
}
.process-grid {
  opacity: 0;
  &.active {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
    transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
  }
}
.xx {
  a {
    top: 120px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
