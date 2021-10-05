<template>
  <layout-desktop-header v-if="!ignoreHeaderAndFooter" />
  <layout-mobile-header v-if="!ignoreHeaderAndFooter" />
  <router-view />
  <!-- là phần body , nội dung sẽ thay đổi , header và footer là cố định, đảm nhiệm nội dung của body -->
  <layout-mobile-footer v-if="!ignoreHeaderAndFooter" />
  <layout-desktop-footer v-if="!ignoreHeaderAndFooter" />
  <ModalOrderTable />
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
import ModalOrderTable from "@/components/ModalOrderTable.vue";
import Navigation from "@/layouts/Navigation.vue";
import LayoutFilter from "@/layouts/Filter.vue";
import { useRouter } from "vue-router";
import { computed } from "@vue/reactivity";
import { getProfile } from "@/services/reuseable/useAuth";
import { getCart } from "@/services/reuseable/useCart";
import { useStore } from "vuex";
import {
  SET_CART,
  SET_IS_AUTHENTICATED,
  SET_PROFILE,
} from "@/store/actionTypes";
import { watchEffect } from "@vue/runtime-core";
import { localRemoveItem } from "@/helpers/local_storage";
import { TOKEN } from "@/constants";

export default {
  components: {
    LayoutDesktopHeader,
    LayoutMobileHeader,
    LayoutMobileFooter,
    LayoutDesktopFooter,
    Navigation,
    LayoutFilter,
    ModalOrderTable,
  },

  setup() {
    const router = useRouter();
    const store = useStore();

    const ignoreHeaderAndFooter = computed(() => {
      return ["login", "register", "forgot_password", "verification"].includes(
        router.currentRoute.value.name
      );
    });

    getUserProfile();

    watchEffect(() => {
      const isAuthenticated = store.getters.getIsAuthenticated;
      isAuthenticated && getUserProfile();
    });

    async function getUserProfile() {
      console.log("run get user profile");
      if (!store.getters.getIsAuthenticated) return;

      try {
        const { data: profile } = await getProfile();
        const { data: cart } = await getCart();
        store.dispatch(SET_PROFILE, profile.data);
        store.dispatch(SET_CART, cart.data);
      } catch (error) {
        store.dispatch(SET_IS_AUTHENTICATED, false);
        store.dispatch(SET_PROFILE, {});
        localRemoveItem(TOKEN);
      }
    }

    return { ignoreHeaderAndFooter };
  },
};
</script>
