import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layouts/Layout.vue";
import Home from "@/pages/Home.vue";
import authRoutes from "@/features/Auth/routes/index.js";
import Cart from "@/pages/Cart.vue";
import CustomerOrder from "@/pages/CustomerOrder.vue";
import Table from "@/pages/Table.vue";
import FoodDetail from "@/pages/FoodDetail.vue";
import OrderSuccess from "@/pages/OrderSuccess.vue";
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
      {
        path: "/hoa-don/:order_code",
        name: "customer_order.show",
        component: CustomerOrder,
      },
      {
        path: "/dat-ban",
        name: "booking_table",
        component: Table,
      },
      {
        path: "/chi-tiet-san-pham",
        name: "food_detail",
        component: FoodDetail,
      },
      {
        path: "/dat-hang-thanh-cong/:order_code",
        name: "order_success",
        component: OrderSuccess,
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
