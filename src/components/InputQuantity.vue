<template>
  <button
    type="button"
    class="btn-sm left dec btn btn-outline-secondary"
    @click="decrease"
  >
    <i class="feather-minus"></i>
  </button>
  <input
    :value="cart.quantity"
    class="count-number-input"
    type="text"
    readonly=""
  />
  <button
    type="button"
    class="btn-sm right inc btn btn-outline-secondary"
    @click="increase"
  >
    <i class="feather-plus"></i>
  </button>
</template>

<script>
import { updateCartQuantity, getCart } from "@/services/reuseable/useCart";
import { useStore } from "vuex";
import { SET_CART } from "@/store/actionTypes";

export default {
  props: {
    cart: {
      type: Object,
      required: true,
    },
  },

  emits: ["update:modelValue"],

  setup(props) {
    const store = useStore();

    function increase() {
      updateQuantity(props.cart.quantity + 1);
    }

    function decrease() {
      updateQuantity(props.cart.quantity - 1);
    }

    async function updateQuantity(quantity) {
      await updateCartQuantity(props.cart.id, {
        product_id: props.cart.product.id,
        quantity,
      });

      const { data } = await getCart();
      store.dispatch(SET_CART, data.data);
    }

    return { increase, decrease };
  },
};
</script>
