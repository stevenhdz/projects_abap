import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PacienteListar from '../views/Paciente_listar.vue'
import PacienteEditar from '../components/PacienteEditar.vue'
import PacienteCrear from '../components/PacienteCrear.vue'
import RespuestaGlosa from '../components/RespuestaGlosa.vue'
import AgregarRespuestaGlosa from '../components/AgregarRespuestaGlosa.vue'
import Pacienteslistar from '../views/Pacienteslistar.vue'
import pacientes from '../views/Pacientes.vue'
import Objeciones from '../views/Objeciones.vue'

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
    path: '/PacienteListar',
    name: 'PacienteListar',
    component: PacienteListar
  },
  {
    path: '/PacienteEditar/:id',
    name: 'PacienteEditar',
    component: PacienteEditar
  },
  {
    path: '/PacienteCrear',
    name: 'PacienteCrear',
    component: PacienteCrear
  },
  {
    path: '/RespuestaGlosa',
    name: 'RespuestaGlosa',
    component: RespuestaGlosa
  },
  {
    path: '/AgregarRespuestaGlosa',
    name: 'AgregarRespuestaGlosa',
    component: AgregarRespuestaGlosa
  },
  {
    path: '/Pacienteslistar',
    name: 'Pacienteslistar',
    component: Pacienteslistar

  },
  {
    path: '/pacientes',
    name: 'pacientes',
    component: pacientes

  },
  {
    path: '/Objeciones',
    name: 'Objeciones',
    component: Objeciones

  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
