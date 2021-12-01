import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Catogary  from "../views/Catogary";
import Signup from "../views/signup.vue";
import Navbar from "../views/Navbar.vue";
import SingleProduct from "../views/SingleProduct";
import Register from "../views/Register.vue";
import login from "../views/login";
import Footer from "../views/Footer";
import Profile from "../views/Profile";


Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/SingleProduct",
    name: "SingleProduct",
    component: SingleProduct,
  },
  {
    path: "/Catogary",
    name: "Catogary",
    component: Catogary,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/Navbar",
    name: "Navbar",
    component: Navbar,
  }
  ,
  {
    path: "/Register",
    name: "Register",
    component: Register,
  },
  {
    path: "/",
    name: "login",
    component: login,
  },
  {
    path: "/Footer",
    name: "Footer",
    component: Footer,
  },
  {
    path: "/Profile",
    name: "Profile",
    component: Profile,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
