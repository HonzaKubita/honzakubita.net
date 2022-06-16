import { createRouter, createWebHistory } from 'vue-router'


// Main website imports
import home from '../vue/pages/mainPage.vue'
import about from '../vue/pages/about.vue'
import contact from '../vue/pages/contact.vue'
import projects from '../vue/pages/projects.vue'

// 404
import notFound from '../vue/pages/notFound.vue'

// Projects hosted on website
import countdown from '../vue/pages/countdown.vue'
import JSRandomenator from '../vue/pages/JSRandomenator.vue'

// Labs imports
import labs from '../vue/pages/labs/labs.vue'
import winXP from '../vue/pages/labs/winXP.vue'

import secret from '../vue/pages/secret.vue'


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
    path: '/randomenator',
    name: 'randomenator',
    component: JSRandomenator
  },

  // Labs routes
  {
    path: '/labs',
    name: 'labs',
    component: labs
  },
  {
    path: '/labs/winXP',
    name: 'winXP',
    component: winXP
  },


  {
    path: '/supersecretlocationonmywebsite',
    name: 'secret',
    component: secret
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: notFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
