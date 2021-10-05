<template>
  <button type="button" class="btn-cart" @click="deleteCart">
    <slot />
  </button>
</template>

<script>
import { deleteCartItem, getCart } from "@/services/reuseable/useCart";
import { useStore } from "vuex";
import { SET_CART } from "@/store/actionTypes";

export default {
  props: {
    cartId: {
      type: [Number, String],
      required: true,
    },
  },

  setup(props) {
    const store = useStore();

    async function deleteCart() {
      await deleteCartItem(props.cartId);

      const { data } = await getCart();
      store.dispatch(SET_CART, data.data);
    }

    return { deleteCart };
  },
};
</script>
