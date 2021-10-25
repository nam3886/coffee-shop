import Auth from "@/pages/Auth.vue";
import { fromLogin } from "@/middleware";
import { isGuest } from "@/middleware";

const authRoutes = [
  {
    path: "/dang-nhap",
    name: "login",
    component: Auth,
    beforeEnter: isGuest,
  },
  {
    path: "/dang-ky",
    name: "register",
    component: Auth,
    beforeEnter: isGuest,
  },
  {
    path: "/quen-mat-khau",
    name: "forgot_password",
    component: Auth,
    beforeEnter: isGuest,
  },
  {
    path: "/xac-nhan-dang-nhap",
    name: "verification",
    component: Auth,
    beforeEnter: fromLogin,
  },
];

export default authRoutes;
