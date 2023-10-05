import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/usuarios',
    name: 'Usuarios',
    component: () => import(/* webpackChunkName: "about" */ '../views/Usuarios.vue'),
  },
  {
    path: '/usuarios/novo',
    name: 'Novo Usuário',
    component: () => import(/* webpackChunkName: "about" */ '../views/UsuariosForm.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  },
  {
    path: '/plan',
    name: 'Plan',
    component: () => import(/* webpackChunkName: "about" */ '../views/Plan.vue'),
  },
  {
    path: '/group',
    name: 'Group',
    component: () => import(/* webpackChunkName: "about" */ '../views/Group.vue'),
  },
  {
    path: '/program',
    name: 'Program',
    component: () => import(/* webpackChunkName: "about" */ '../views/Program.vue'),
  },
  {
    path: '/form',
    name: 'Form',
    component: () => import(/* webpackChunkName: "about" */ '../views/Form.vue'),
  },
  {
    path: '/form/novo',
    name: 'Novo Form',
    component: () => import(/* webpackChunkName: "about" */ '../views/FormForm.vue'),
  },
  {
    path: '/form/edit/:id',
    name: 'Update Form',
    component: () => import(/* webpackChunkName: "about" */ '../views/FormForm.vue'),
    props: true,
  },
  {
    path: '/form/:idFather/fields',
    name: 'Field',
    component: () => import(/* webpackChunkName: "about" */ '../views/Field.vue'),
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
