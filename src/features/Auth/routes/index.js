import Auth from "@/pages/Auth.vue";

const authRoutes = [
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
  {
    path: "/xac-nhan-dang-nhap",
    name: "verification",
    component: Auth,
    beforeEnter: fromLogin,
  },
];

export default authRoutes;

function fromLogin(to, from, next) {
  if (from.name === "login") next();
  else next({ name: "login" });
}
