import Vue from 'vue'
import VueRouter from 'vue-router'
import MeuInicio from '../views/MeuInicio.vue'
import BlocosCarnaval from '../views/BlocosCarnaval.vue'
import LivesCarnaval from '../views/LivesCarnaval.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'meuinicio',
    component: MeuInicio
  },
  {
    path: '/blocos',
    name: 'blocoscarnaval',
    component: BlocosCarnaval
  },
  {
    path: '/lives',
    name: 'LivesCarnaval',
    component: LivesCarnaval
  }
]

const router = new VueRouter({
  routes
})

export default router
