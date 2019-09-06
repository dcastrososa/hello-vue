import Home from '@/components/Home.vue';
import Login from '@/screen/login/Login.vue';


const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/login', component: Login, name: 'login' }
]

export default routes