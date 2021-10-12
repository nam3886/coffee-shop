<template>
  <layout-desktop-header v-if="!ignoreHeaderAndFooter" />
  <layout-mobile-header v-if="!ignoreHeaderAndFooter" />
  <router-view />
  <!-- là phần body , nội dung sẽ thay đổi , header và footer là cố định, đảm nhiệm nội dung của body -->
  <layout-mobile-footer v-if="!ignoreHeaderAndFooter" />
  <layout-desktop-footer v-if="!ignoreHeaderAndFooter" />
  <navigation />
  <layout-filter />
  <modal-order-table />
  <overlay-loading />
  <overlay-transparent />
  <toast />
</template>

<script>
import "swiper/swiper-bundle.min.css";
import "@/assets/css/app.css";
import { useRouter } from "vue-router";
import { computed } from "@vue/reactivity";
import LayoutDesktopHeader from "@/layouts/Header/DesktopHeader.vue";
import LayoutMobileHeader from "@/layouts/Header/MobileHeader.vue";
import LayoutMobileFooter from "@/layouts/Footer/MobileFooter.vue";
import LayoutDesktopFooter from "@/layouts/Footer/DesktopFooter.vue";
import ModalOrderTable from "@/components/ModalOrderTable.vue";
import Navigation from "@/layouts/Navigation.vue";
import LayoutFilter from "@/layouts/Filter.vue";
import OverlayLoading from "@/layouts/OverlayLoading.vue";
import OverlayTransparent from "@/layouts/OverlayTransparent.vue";
import Toast from "@/layouts/Toast.vue";

export default {
  components: {
    LayoutDesktopHeader,
    LayoutMobileHeader,
    LayoutMobileFooter,
    LayoutDesktopFooter,
    Navigation,
    LayoutFilter,
    ModalOrderTable,
    OverlayLoading,
    OverlayTransparent,
    Toast,
  },

  setup() {
    const router = useRouter();

    const ignoreHeaderAndFooter = computed(() => {
      return ["login", "register", "forgot_password", "verification"].includes(
        router.currentRoute.value.name
      );
    });

    return { ignoreHeaderAndFooter };
  },
};
</script>
