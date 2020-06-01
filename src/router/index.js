import Vue from "vue";
import VueRouter from "vue-router";
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";
import Home from "../components/Home.vue";
import LoginSuccess from "../components/LoginSuccess.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/LoginSuccess",
    name: "LoginSuccess",
    component: LoginSuccess,
  },
  {
    path: "/SignIn",
    name: "SignIn",
    component: SignIn,
  },
  {
    path:"/Home",
    name:"Home",
    component:Home,
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: SignUp,
  },
  { path: "/", name: "Home", component: Home },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
