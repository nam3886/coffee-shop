<template>
  <layout-desktop-header />
  <layout-mobile-header />
  <router-view />
  <layout-mobile-footer />
  <layout-desktop-footer />
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

export default {
  components: {
    LayoutDesktopHeader,
    LayoutMobileHeader,
    LayoutMobileFooter,
    LayoutDesktopFooter,
    Navigation,
    LayoutFilter,
  },
};
</script>
