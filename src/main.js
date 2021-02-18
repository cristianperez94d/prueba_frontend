import Vue from 'vue'
import App from './App.vue'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt, faEdit, faEye ,faInfo, faFilter, faCalendarPlus, faBars, faBell, faPlusCircle, faArrowUp, faArrowRight, faArrowDown, faThList, faIdBadge, faDungeon} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAvianex, faStudiovinari } from '@fortawesome/free-brands-svg-icons'
library.add(faTrashAlt, faEdit, faEye, faInfo, faCalendarPlus, faFilter, faBars, faBell, faAvianex, faPlusCircle, faArrowUp, faArrowRight, faArrowDown, faThList, faIdBadge, faInfo, faStudiovinari,faDungeon);

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
