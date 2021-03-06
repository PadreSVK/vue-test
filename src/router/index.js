import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import page404 from '../views/404.vue'
import table from '../views/Table.vue'
import graph from '../views/Graph.vue'
import graph2 from '../views/Graph2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/404',
    name: '404',
    component: page404
  },

  {
    path: '/table',
    name: 'table',
    component: table
  },

  {
    path: '/graph',
    name: 'graph',
    component: graph
  },

  {
    path: '/graph2',
    name: 'graph2',
    component: graph2
  },


]

const router = new VueRouter({
  routes
})

export default router
