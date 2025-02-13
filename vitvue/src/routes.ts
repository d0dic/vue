// import WelcomePage from './pages/Welcome.vue'
import AboutPage from './pages/About.vue'

import { defineAsyncComponent } from 'vue'

const WelcomePage = defineAsyncComponent(() =>
  import('./pages/Welcome.vue')
)

const routes = [
  { path: '/', component: WelcomePage },
  { path: '/about', component: AboutPage },
]

export default routes