<template>
  <nav
    role="navigation"
    class="hc-offcanvas-nav hc-nav-1 nav-levels-overlap nav-position-left disable-body"
    aria-hidden="false"
    aria-labelledby="hc-nav-1"
  >
    <div class="nav-container" style="width: 280px">
      <div class="nav-wrapper nav-wrapper-0" data-level="0" data-index="0">
        <div class="nav-content">
          <h2>Mở rộng</h2>
          <ul
            role="menu"
            aria-level="1"
            class="second-nav"
            aria-label="Mở rộng"
          >
            <template v-for="(item, index) in menuItems" :key="index">
              <li v-if="!item.condition || item.condition()">
                <div class="nav-item-wrapper">
                  <router-link
                    :to="{ name: item.route }"
                    class="nav-item"
                    :tabindex="index"
                    role="menuitem"
                  >
                    <i :class="`feather-${item.icon} mr-2`"></i>
                    {{ item.name }}
                  </router-link>
                </div>
              </li>
            </template>
          </ul>
          <ul role="menu" aria-level="1" class="bottom-nav">
            <li class="email">
              <div class="nav-item-wrapper">
                <router-link
                  :to="{ name: 'home' }"
                  class="text-danger nav-item"
                  tabindex="0"
                  role="menuitem"
                  ><p class="h5 m-0">
                    <i class="feather-home text-danger"></i>
                  </p>
                  Trang chủ
                </router-link>
              </div>
            </li>
            <li class="github">
              <div class="nav-item-wrapper">
                <router-link
                  to="/"
                  class="router-link-active nav-item"
                  tabindex="0"
                  role="menuitem"
                  ><p class="h5 m-0"><i class="feather-message-circle"></i></p>
                  FAQ
                </router-link>
              </div>
            </li>
            <li class="ko-fi">
              <div class="nav-item-wrapper">
                <router-link
                  to="/"
                  class="router-link-active nav-item"
                  tabindex="0"
                  role="menuitem"
                  ><p class="h5 m-0"><i class="feather-phone"></i></p>
                  Hỗ trợ
                </router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { inject, onMounted, ref } from "@vue/runtime-core";
import $ from "jquery";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const emitter = inject("emitter");
    const menuItems = ref([
      { name: "Trang chủ", route: "home", icon: "home" },
      { name: "Sản phẩm", route: "product", icon: "grid" },
      { name: "Đặt bàn", route: "booking_table", icon: "award" },
      { name: "Giỏ hàng", route: "cart", icon: "shopping-cart" },
      { name: "Hóa đơn", route: "customer_order", icon: "clipboard" },
      { name: "Danh sách đặt bàn", route: "order_table.index", icon: "server" },
      {
        name: "Đăng nhập",
        route: "login",
        condition: () => !store.getters.getIsAuthenticated,
        icon: "log-in",
      },
      {
        name: "Đăng ký",
        route: "register",
        condition: () => !store.getters.getIsAuthenticated,
        icon: "user-plus",
      },
      {
        name: "Quên mật khẩu",
        route: "forgot_password",
        condition: () => !store.getters.getIsAuthenticated,
        icon: "clipboard",
      },
      {
        name: "Danh sách hóa đơn (nhân viên)",
        route: "staff.order_list.index",
        condition: () => store.getters.getIsNotCustomer,
        icon: "home",
      },
      {
        name: "Danh sách check in (nhân viên)",
        route: "staff.order_table_list.index",
        condition: () => store.getters.getIsNotCustomer,
        icon: "server",
      },
    ]);

    onMounted(() => {
      $("nav.hc-offcanvas-nav").on("click", function (e) {
        if ($(e.target).closest(".nav-container").length) return;
        emitter.emit("toggle-navigation", false);
      });
    });

    emitter.on("toggle-navigation", handleToggleNav);

    function handleToggleNav(isShow) {
      $("nav.hc-offcanvas-nav").toggleClass("nav-open d-block", isShow);
      $("html").toggleClass("hc-nav-yscroll", isShow);
      $("body").toggleClass("hc-nav-open", isShow);
      $("nav.hc-offcanvas-nav").css(
        "visibility",
        isShow ? "visible" : "hidden"
      );
    }

    return { menuItems };
  },
};
</script>
