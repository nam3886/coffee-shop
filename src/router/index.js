import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layouts/Layout.vue";
import Home from "@/pages/Home.vue";
import Auth from "@/pages/Auth.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: { name: "home" },
    children: [
      {
        path: "/trang-chu",
        name: "home",
        component: Home,
      },
      {
        path: "/dang-nhap",
        name: "login",
        component: Auth,
      },
      {
        path: "/dang-ky",
        name: "register",
        component: Auth,
      },
      {
        path: "/quen-mat-khau",
        name: "forgot_password",
        component: Auth,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
