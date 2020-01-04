import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRedo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Toasted from 'vue-toasted';

library.add(faRedo)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Toasted)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
