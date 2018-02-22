import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import { createRouter } from './router';
import { createStore } from './store';

import * as filters from './filters'; // global filter

import './icons';

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

Vue.use(Element);

const router = createRouter();
/* eslint-disable no-new */
new Vue({
  el: '#app',

  store: createStore(),

  router,

  render: h => h(App),
});
