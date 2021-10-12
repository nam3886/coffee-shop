<template>
  <button type="button" class="btn-cart" @click="deleteCart">
    <slot />
  </button>
</template>

<script>
import { deleteCartItem, getCart } from "@/services/reuseable/useCart";
import { useStore } from "vuex";
import { SET_CART } from "@/store/actionTypes";
import { inject } from "@vue/runtime-core";
import { EV_OVERLAY_LOADING } from "@/constants";

export default {
  props: {
    cartId: {
      type: [Number, String],
      required: true,
    },
  },

  setup(props) {
    const store = useStore();
    const emitter = inject("emitter");

    async function deleteCart() {
      emitter.emit(EV_OVERLAY_LOADING, true);

      try {
        await deleteCartItem(props.cartId);
        const { data } = await getCart();
        store.dispatch(SET_CART, data.data);
      } catch (error) {
        console.log([error]);
      } finally {
        emitter.emit(EV_OVERLAY_LOADING, false);
      }
    }

    return { deleteCart };
  },
};
</script>
