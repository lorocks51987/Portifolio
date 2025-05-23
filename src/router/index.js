import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory('/Portifolio/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sobre',
      name: 'about',
      component: AboutView
    },
    {
      path: '/projetos',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/projects',
      redirect: '/projetos'
    },
    {
      path: '/contato',
      name: 'contact',
      component: ContactView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router 