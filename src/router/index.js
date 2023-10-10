import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
  },

  {
    path: '/usuarios',
    name: 'Usuarios',
    component: () => import('../views/999-fundacao/Usuarios.vue'),
  },
  {
    path: '/usuarios/novo',
    name: 'Novo Usuário',
    component: () => import('../views/999-fundacao/UsuariosForm.vue'),
  },
  {
    path: '/usuarios/edit/:id',
    name: 'Editar Usuário',
    component: () => import('../views/999-fundacao/UsuariosForm.vue'),
    props: true,
  },

  {
    path: '/plan',
    name: 'Plan',
    component: () => import('../views/999-fundacao/Plan.vue'),
  },

  {
    path: '/group',
    name: 'Group',
    component: () => import('../views/999-fundacao/Group.vue'),
  },

  {
    path: '/program',
    name: 'Program',
    component: () => import('../views/999-fundacao/Program.vue'),
  },

  {
    path: '/form',
    name: 'Form',
    component: () => import('../views/999-fundacao/Form.vue'),
  },
  {
    path: '/form/novo',
    name: 'Novo Form',
    component: () => import('../views/999-fundacao/FormForm.vue'),
  },
  {
    path: '/form/edit/:id',
    name: 'Edit Form',
    component: () => import('../views/999-fundacao/FormForm.vue'),
    props: true,
  },
  {
    path: '/form/:idFather/field',
    name: 'Field',
    component: () => import('../views/999-fundacao/Field.vue'),
    props: true,
  },
  {
    path: '/form/:idFather/field/novo',
    name: 'Field Novo',
    component: () => import('../views/999-fundacao/FieldForm.vue'),
    props: true,
  },
  {
    path: '/form/:idFather/field/edit/:id',
    name: 'Field Edit',
    component: () => import('../views/999-fundacao/FieldForm.vue'),
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
