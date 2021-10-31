import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layouts/Layout.vue";
import Home from "@/pages/Home.vue";
import authRoutes from "@/features/Auth/routes/index.js";
import productRoutes from "@/router/productRoutes.js";
import Cart from "@/pages/Cart.vue";
import CustomerOrder from "@/pages/CustomerOrder.vue";
import Table from "@/pages/Table.vue";
import OrderSuccess from "@/pages/OrderSuccess.vue";
import { isAuth } from "@/middleware";
import OrderTable from "@/pages/OrderTable.vue";

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
        path: "/dat-ban",
        name: "booking_table",
        component: Table,
        beforeEnter: isAuth,
      },
      {
        path: "/gio-hang",
        name: "cart",
        component: Cart,
        beforeEnter: isAuth,
      },
      {
        path: "/dat-hang-thanh-cong/:order_code",
        name: "order_success",
        component: OrderSuccess,
      },
      {
        path: "/hoa-don",
        name: "customer_order",
        component: CustomerOrder,
      },
      {
        path: "/hoa-don/:order_code",
        name: "customer_order.show",
        component: CustomerOrder,
      },
      {
        path: "/danh-sach-dat-ban",
        name: "order_table",
        component: OrderTable,
        beforeEnter: isAuth,
      },
      ...authRoutes,
      ...productRoutes,
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
