<template>
  <layout-desktop-header v-if="!ignoreHeaderAndFooter" />
  <layout-mobile-header v-if="!ignoreHeaderAndFooter" />
  <router-view />
  <!-- là phần body , nội dung sẽ thay đổi , header và footer là cố định, đảm nhiệm nội dung của body -->
  <layout-mobile-footer v-if="!ignoreHeaderAndFooter" />
  <layout-desktop-footer v-if="!ignoreHeaderAndFooter" />
  <navigation />
  <layout-filter />
</template>

<script>
import "swiper/swiper-bundle.min.css";
import "@/assets/css/app.css";
import LayoutDesktopHeader from "@/layouts/Header/DesktopHeader.vue";
import LayoutMobileHeader from "@/layouts/Header/MobileHeader.vue";
import LayoutMobileFooter from "@/layouts/Footer/MobileFooter.vue";
import LayoutDesktopFooter from "@/layouts/Footer/DesktopFooter.vue";
import Navigation from "@/layouts/Navigation.vue";
import LayoutFilter from "@/layouts/Filter.vue";
import { useRouter } from "vue-router";
import { computed } from "@vue/reactivity";

export default {
  components: {
    LayoutDesktopHeader,
    LayoutMobileHeader,
    LayoutMobileFooter,
    LayoutDesktopFooter,
    Navigation,
    LayoutFilter,
  },

  setup() {
    const router = useRouter();
    const ignoreHeaderAndFooter = computed(() => {
      return ["login", "register", "forgot_password"].includes(
        router.currentRoute.value.name
      );
    });

    return { ignoreHeaderAndFooter };
  },
};
</script>
// todo Ẩn header,footer trang login và register
