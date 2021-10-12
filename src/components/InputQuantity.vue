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
import { updateCartQuantity } from "@/services/reuseable/useCart";
import { inject } from "@vue/runtime-core";
import { EV_OVERLAY_LOADING, EV_GET_CART } from "@/constants";

export default {
  props: {
    cart: {
      type: Object,
      required: true,
    },
  },

  emits: ["update:modelValue"],

  setup(props) {
    const emitter = inject("emitter");

    function increase() {
      updateQuantity(props.cart.quantity + 1);
    }

    function decrease() {
      updateQuantity(props.cart.quantity - 1);
    }

    async function updateQuantity(quantity) {
      emitter.emit(EV_OVERLAY_LOADING, true);
      try {
        await updateCartQuantity(props.cart.id, {
          product_id: props.cart.product.id,
          quantity,
        });
        emitter.emit(EV_GET_CART);
      } catch (error) {
        console.log([error]);
      } finally {
        emitter.emit(EV_OVERLAY_LOADING, false);
      }
    }

    return { increase, decrease };
  },
};
</script>
