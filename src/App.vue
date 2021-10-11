<template>
  <router-view />
</template>

<script>
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
  setup() {
    const store = useStore();

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
  },
};
</script>
