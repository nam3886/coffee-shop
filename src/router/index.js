import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layouts/Layout.vue";
import Home from "@/pages/Home.vue";
import authRoutes from "@/features/Auth/routes/index.js";

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
      ...authRoutes,
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
