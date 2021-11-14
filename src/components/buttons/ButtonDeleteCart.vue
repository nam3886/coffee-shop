<template>
  <button type="button" class="btn-cart" @click="deleteCart">
    <slot />
  </button>
</template>

<script>
import { deleteCartItem } from "@/services/reuseable/useCart";
import { inject } from "@vue/runtime-core";
import { EV_OVERLAY_LOADING, EV_GET_CART } from "@/constants";

export default {
  props: {
    cartId: {
      type: [Number, String],
      required: true,
    },
  },

  setup(props) {
    const emitter = inject("emitter");

    async function deleteCart() {
      emitter.emit(EV_OVERLAY_LOADING, true);

      try {
        await deleteCartItem(props.cartId);
        emitter.emit(EV_GET_CART);
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
