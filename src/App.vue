<template>
  <router-view />
</template>

<script>
import { getProfile } from "@/services/reuseable/useAuth";
import useCategory from "@/services/reuseable/useCategory.js";
import { useStore } from "vuex";
import {
  SET_IS_AUTHENTICATED,
  SET_PROFILE,
  SET_CATEGORIES,
} from "@/store/actionTypes";
import { inject, watchEffect } from "@vue/runtime-core";
import { localRemoveItem } from "@/helpers/local_storage";
import { TOKEN, EV_GET_CART } from "@/constants";

export default {
  setup() {
    const store = useStore();
    const emitter = inject("emitter");

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
        store.dispatch(SET_PROFILE, profile.data);
        emitter.emit(EV_GET_CART);
      } catch (error) {
        store.dispatch(SET_IS_AUTHENTICATED, false);
        store.dispatch(SET_PROFILE, {});
        localRemoveItem(TOKEN);
      }
    }

    const { listCategory, getListCategory } = useCategory();

    getListCategory().then(() =>
      store.dispatch(SET_CATEGORIES, listCategory.value)
    );
  },
};
</script>
