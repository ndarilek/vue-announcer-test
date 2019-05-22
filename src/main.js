import Vue from 'vue'
import VueAnnouncer from 'vue-announcer'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(VueAnnouncer, {}, router)

Vue.use(VueMeta)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
