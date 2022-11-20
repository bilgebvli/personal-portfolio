<template>
  <div
    class="p-5 pt-5 bg-light-taupe contact shadow-xl shadow-light-taupe-500"
  ></div>
  <div :class="{ 'mx-6 lg:mx-80 process-grid': true, active }">
    <div class="text-center mt-20">
      <h2 :class="titleClasses1">Projects</h2>
    </div>
    <div class="text-center md:text-left">
      <img
        src="@/assets/images/a075499e1e472efa5a72692ea44e5cd1.jpeg"
        class="w-52 h-48 object-cover md:h-auto md:w-72 img mx-auto md:mx-0 block"
      />
      <h2 class="text-taupe">Furniture e-commerce website</h2>
      <p class="text-taupe text-sm">UI development</p>
    </div>
    <div class="text-center md:text-right md:-mt-36">
      <img
        src="@/assets/images/a9be68f1fc60c7c4697fd503d86147b9.jpeg"
        class="w-52 h-48 md:h-auto object-cover md:w-72 img mx-auto md:ml-auto md:mr-0 block ml-auto"
      />
      <h2 class="text-taupe">Car e-commerce website</h2>
      <p class="text-taupe text-sm">UI development</p>
    </div>
  </div>
  <div class="mx-0 lg:mx-20 md:grid md:grid-cols-2">
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
    <div class="relative get-started mt-20">
      <img src="@/assets/images/1667915720876.png" />
      <a
        href="mailto:bilgebvli@gmail.com"
        class="p-3 w-2/4 absolute md:hidden block text-center bg-mouth text-opal-beach"
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
    titleClasses1() {
      return 'text-2xl font-black border-l-4 border-taupe pl-3 text-taupe mt-2 tracking-m inline-block';
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
      if (window.scrollY > 1300) this.active = true;
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
.get-started {
  a {
    top: 120px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.img {
  filter: grayscale(100%);
  margin-bottom: 30px;
  margin-top: 30px;
}
</style>
