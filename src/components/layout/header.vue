<template>
  <nav
    :class="{
      'bg-renk items-center flex shadow-xl ease-in-out transition': true,
      'h-0': !active,
      'h-24	': active,
    }"
  >
    <div
      :class="{
        'container text-center md:text-right': true,
        hidden: !active,
      }"
    >
      <router-link
        v-for="(item, index) in navItems"
        :key="index"
        :to="{ path: '/', hash: `#${item.urlHash}` }"
        :class="{
          'text-base font-normal uppercase': true,
          'mx-5 px-5': item.space,
        }"
        >{{ item.title }}</router-link
      >
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LayoutHeader',
  data() {
    return {
      active: false,
    };
  },
  computed: {
    navItems() {
      return [
        {
          urlHash: 'about',
          title: 'About',
          space: false,
        },
        {
          urlHash: 'process',
          title: 'Process',
          space: true,
        },
        {
          urlHash: 'contact',
          title: 'Contact',
          space: false,
        },
      ];
    },
  },
  mounted() {
    window.document.onscroll = () => {
      if (window.scrollY > 100) this.active = true;
      else this.active = false;
    };
  },
});
</script>

<style scoped lang="scss">
nav {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 1;
  padding: 0;
  transition: 0.5s;
  a {
    color: #f5e4d7;
    &:nth-child(2) {
      border-right: 1px solid #f5e4d7;
      border-left: 1px solid #f5e4d7;
    }
  }
}
</style>
