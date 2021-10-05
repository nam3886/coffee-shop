<template>
  <button type="button" class="btn-cart" @click="addCart">
    <slot />
  </button>
</template>

<script>
import { storeCartItem } from "@/services/reuseable/useCart";

export default {
  props: {
    productId: {
      type: [Number, String],
      required: true,
    },
  },

  setup(props) {
    async function addCart() {
      await storeCartItem({
        product_id: props.productId,
        quantity: 1,
      });
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
