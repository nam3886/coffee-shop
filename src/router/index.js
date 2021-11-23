import qs from "qs";
import { createRouter, createWebHistory } from "vue-router";
import authRoutes from "@/features/Auth/routes/index.js";
import staffRoutes from "@/features/Staff/routes/index.js";
import productRoutes from "@/router/productRoutes.js";
import { isAuth } from "@/middleware";
import Layout from "@/layouts/Layout.vue";
import Home from "@/pages/Home.vue";
import Cart from "@/pages/Cart.vue";
import CustomerOrder from "@/pages/CustomerOrder.vue";
import Table from "@/pages/Table.vue";
import OrderSuccess from "@/pages/OrderSuccess.vue";
import OrderTable from "@/pages/OrderTable.vue";
import OrderTableDetail from "@/pages/OrderTableDetail.vue";
import NotFound from "@/pages/NotFound.vue";

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
        path: "/khong-tim-thay-trang",
        name: "not_found",
        component: NotFound,
      },
      {
        path: "/hoa-don/:order_code",
        name: "customer_order.show",
        component: CustomerOrder,
      },
      {
        path: "/danh-sach-dat-ban",
        name: "order_table.index",
        component: OrderTable,
        beforeEnter: isAuth,
      },
      {
        path: "/danh-sach-dat-ban/:order_table_id",
        name: "order_table.show",
        component: OrderTableDetail,
        beforeEnter: isAuth,
      },
      {
        path: "/check-in",
        name: "check_in",
        component: OrderTable,
        beforeEnter: isAuth,
      },
      ...authRoutes,
      ...productRoutes,
      ...staffRoutes,
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // set custom query resolver
  parseQuery(query) {
    return qs.parse(query);
  },
  stringifyQuery(query) {
    var result = qs.stringify(query);

    return result || "";
  },
});

export default router;
