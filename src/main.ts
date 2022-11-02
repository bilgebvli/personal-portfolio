import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/scss/main.scss';
import componentsUI from '@/utils/global-component';
import VueFeather from 'vue-feather';

const app = createApp(App);

app.component(VueFeather.name, VueFeather);
// global registration
componentsUI.forEach((component) => {
  app.component(component.name, component);
});

app.use(store).use(router).mount('#app');
