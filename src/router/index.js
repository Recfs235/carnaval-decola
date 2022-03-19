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
    path: '/noticias',
    name: 'noticias',
    // component: NoticiasCarnaval
  },
  {
    path: '/lives',
    name: 'lives',
    // component: LivesCarnaval
  },
  {
    path: '/cidades',
    name: 'cidades',
    // component: CidadesCarnaval
  },
  {
    path: '/reservas',
    name: 'reservas',
    // component: ReservasCarnaval
  },
  {
    path: '/compraabada',
    name: 'compraAbada',
    // component: CompraAbada
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
