<template>
  <button type="button" class="btn-logout" @click="handleLogout">
    <slot />
  </button>
</template>

<script>
import { logout } from "@/services/reuseable/useAuth";
import { localRemoveItem } from "@/helpers/local_storage";
import { TOKEN } from "@/constants";
import {
  SET_IS_AUTHENTICATED,
  SET_PROFILE,
  SET_CART,
} from "@/store/actionTypes";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    async function handleLogout() {
      await logout();
      localRemoveItem(TOKEN);
      await store.dispatch(SET_IS_AUTHENTICATED, false);
      await store.dispatch(SET_PROFILE, {});
      await store.dispatch(SET_CART, {});
      router.push({ name: "login" });
    }

    return { handleLogout };
  },
};
</script>
