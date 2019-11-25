import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/Home.vue";
import Register from "../views/register/Register.vue";
import Login from "../views/login/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/login",
    name: "login",
    component: Login
  }
];

const router = new VueRouter({
  routes
});

export default router;
