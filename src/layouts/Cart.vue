<script>
import { inject } from "@vue/runtime-core";
import { EV_GET_CART } from "@/constants";
import { useStore } from "vuex";
import { SET_CART } from "@/store/actionTypes";
import { getCart } from "@/services/reuseable/useCart";

export default {
  setup() {
    const store = useStore();
    const emitter = inject("emitter");

    emitter.on(EV_GET_CART, async () => {
      const { data: cart } = await getCart();
      store.dispatch(SET_CART, cart.data);
    });
  },
};
</script>

<template>
  <i class="d-none"></i>
</template>
