import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Empresa from '../views/empresa/index.vue'
import EmpresaForm from '../views/empresa/form.vue'
import EmpresaFormEdit from '../views/empresa/edit.vue'

import Cliente from '../views/cliente/index.vue'
import ClienteForm from '../views/cliente/form.vue'
import ClienteFormEdit from '../views/cliente/edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/empresa',
    name: 'empresa',
    component: Empresa
  },
  {
    path: '/empresa/new',
    name: 'empresa/new',
    component: EmpresaForm,
    meta: {mode: 'create'}
  },
  {
    path: '/empresa/:id/edit',
    name: 'empresa/edit',
    component: EmpresaFormEdit,
    meta: {mode: 'edit'}
  },
  {
    path: '/cliente',
    name: 'cliente',
    component: Cliente
  },
  {
    path: '/cliente/new',
    name: 'cliente/new',
    component: ClienteForm,
    meta: {mode: 'create'}
  },
  {
    path: '/cliente/:id/edit',
    name: 'cliente/edit',
    component: ClienteFormEdit,
    meta: {mode: 'edit'}
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
