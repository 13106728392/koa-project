import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false


 
Vue.use(VueLazyload, {
    preLoad: 1.3,
    attempt: 1, // 加载图片数量
    listenEvents: ['scroll', 'wheel', 'mousewheel', 'resize', 'animationend', 'transitionend', 'touchmove']
})

Vue.use(elementui)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
