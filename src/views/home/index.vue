<template>
  <ui-section
    v-for="(item, index) of sectionItems"
    :key="index"
    :bg-color="item.bgColor"
    :id="item.componentName"
  >
    <component :is="item.componentName"></component>
  </ui-section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import about from './sections/about/index.vue';
import home from './sections/home/index.vue';
import projects from './sections/projects/index.vue';
import contact from './sections/contact/index.vue';

export default defineComponent({
  name: 'home-view',
  components: {
    about,
    home,
    projects,
    contact,
  },
  computed: {
    sectionItems() {
      return [
        {
          bgColor: 'bg-puff',
          componentName: 'home',
        },
        {
          bgColor: 'bg-alicia',
          componentName: 'about',
        },
        {
          bgColor: 'bg-alicia',
          componentName: 'projects',
        },
        {
          bgColor: 'bg-alicia',
          componentName: 'contact',
        },
      ];
    },
  },
});
</script>
