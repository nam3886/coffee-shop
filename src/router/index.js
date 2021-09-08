import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layouts/Layout.vue";
import Home from "@/pages/Home.vue";
import authRoutes from "@/features/Auth/routes/index.js";
import Cart from "@/pages/Cart.vue";
import CustomerOrder from "@/pages/CustomerOrder.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: { name: "home" },
    children: [
      {
        path: "/gio-hang",
        name: "cart",
        component: Cart,
      },
      {
        path: "/trang-chu",
        name: "home",
        component: Home,
      },
      {
        path: "/hoa-don",
        name: "customer_order",
        component: CustomerOrder,
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
