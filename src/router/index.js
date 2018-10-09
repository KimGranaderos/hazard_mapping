import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cluster from '@/components/Cluster'
import Organize from '@/components/Organize'
import DSS from '@/components/DSS'
import Hazardmap from '@/components/Hazardmap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/clustering-reports',
      name: 'Cluster',
      component: Cluster
    },
    {
      path: '/organize-and-dispatch',
      name: 'Organize',
      component: Organize
    },
    {
      path: '/decision-support-system',
      name: 'DSS',
      component: DSS
    },
    {
      path: '/hazard-mapping',
      name: 'Hazardmap',
      component: Hazardmap
    }
  ],
  mode: 'history'
})
