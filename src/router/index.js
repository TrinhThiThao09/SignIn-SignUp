import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import Home from '../views/Home.vue'
import LoginSuccess from '../views/LoginSuccess.vue'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/LoginSuccess',
      name: 'LoginSuccess',
      component: LoginSuccess
    },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {path: '/',
  name: 'Home',
  component: Home
},
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
