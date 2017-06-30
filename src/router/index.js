import Vue from 'vue'
import Router from 'vue-router'
import App from '@/components/Home'
import Categorias from '@/components/Categorias'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/categorias',
      name: 'Categorias',
      component: Categorias
    }
  ]
})
