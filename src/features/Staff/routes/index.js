import { isAuth } from "@/middleware";
import StaffOrder from "@/pages/StaffOrder.vue";
import StaffCheckin from "@/pages/StaffCheckin.vue";

export default [
  {
    path: "nhan-vien/danh-sach-dat-hang",
    name: "staff.order_list.index",
    component: StaffOrder,
    beforeEnter: isAuth,
  },
  {
    path: "nhan-vien/danh-sach-dat-hang/:id",
    name: "staff.order_list.show",
    component: StaffOrder,
    beforeEnter: isAuth,
  },
  {
    path: "nhan-vien/danh-sach-check-in",
    name: "staff.order_table_list.index",
    component: StaffCheckin,
    beforeEnter: isAuth,
  },
  {
    path: "nhan-vien/danh-sach-check-in/:id",
    name: "staff.order_table_list.show",
    component: StaffCheckin,
    beforeEnter: isAuth,
  },
];
