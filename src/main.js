import Vue from 'vue';
import App from './App'

import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import './utils/flexible.js'

import '@/styles/main.scss' // global css
import '@/styles/index.css' // global css



router.beforeEach((to, from, next) => {

  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next()
})


new Vue({
  router,
  render: h => h(App),
  mounted() {
    // document.dispatchEvent(new Event('render-event'))
    document.dispatchEvent(new Event('custom-render-trigger')) // 预渲染
  },
}).$mount('#app')