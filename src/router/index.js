import { createRouter, createWebHistory } from 'vue-router'

import home from '../vue/pages/mainPage.vue'
import about from '../vue/pages/about.vue'
import contact from '../vue/pages/contact.vue'
import projects from '../vue/pages/projects.vue'

import notFound from '../vue/pages/notFound.vue'

import countdown from '../vue/pages/countdown.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/projects',
    name: 'projects',
    component: projects
  },
  {
    path: '/countdown',
    name: 'countdown',
    component: countdown
  },
  {
    path: '*',
    name: 'Not Found',
    component: notFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
