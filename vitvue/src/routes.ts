const WelcomePage = () => import('./pages/Welcome.vue')
const AboutPage = () => import('./pages/About.vue')

const routes = [
  { path: '/', component: WelcomePage },
  { path: '/about', component: AboutPage },
]

export default routes