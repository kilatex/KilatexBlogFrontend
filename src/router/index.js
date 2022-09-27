import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import Home from '../views/Home.vue';
import MyProfile from '../views/MyProfile.vue';
import Config from '../views/Config.vue';
import LatestUsers from '../views/LatestUsers.vue';
import Profile from '../views/Profile.vue';
import PostsByCategory from '../views/PostsByCategory'
import UsersSearched from '../views/UsersSearched'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'Register',
    component : RegisterView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'MyProfile',
    component: MyProfile
  },
  {
    path: '/config',
    name: 'Config',
    component: Config
  },
  {
    path: '/latest-users',
    name: 'LatestUsers',
    component: LatestUsers
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: Profile
  },
  {
    path:'/category/:category',
    name: 'PostsByCategory',
    component: PostsByCategory
  },
  {
    path:'/user/search/:text',
    name: 'UsersSearched',
    component: UsersSearched
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});
export default router;
