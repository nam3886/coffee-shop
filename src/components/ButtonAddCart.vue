<template>
  <button type="button" class="btn-cart" @click="addCart">
    <slot />
  </button>
</template>

<script>
import { storeCartItem, getCart } from "@/services/reuseable/useCart";
import { useStore } from "vuex";
import { SET_CART } from "@/store/actionTypes";

export default {
  props: {
    productId: {
      type: [Number, String],
      required: true,
    },
  },

  setup(props) {
    const store = useStore();

    async function addCart() {
      await storeCartItem({
        product_id: props.productId,
        quantity: 1,
      });

      const { data } = await getCart();
      store.dispatch(SET_CART, data.data);
    }

    return { addCart };
  },
};
</script>

<style>
.btn-cart {
  background: transparent;
  border: none;
  padding: 0;
}
</style>
