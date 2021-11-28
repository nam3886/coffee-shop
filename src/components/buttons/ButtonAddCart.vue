<template>
  <button type="button" class="btn-cart" @click="addCart">
    <slot />
  </button>
</template>

<script>
import { storeCartItem } from "@/services/reuseable/useCart";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { inject } from "@vue/runtime-core";
import { EV_OVERLAY_LOADING, EV_TOAST, EV_GET_CART } from "@/constants";

export default {
  props: {
    productId: {
      type: [Number, String],
      required: true,
    },
  },

  setup(props) {
    const store = useStore();
    const router = useRouter();
    const emitter = inject("emitter");

    async function addCart() {
      if (!store.getters.getIsAuthenticated) {
        return router.push({ name: "login" });
      }
      emitter.emit(EV_OVERLAY_LOADING, true);

      try {
        const { data: product } = await storeCartItem({
          product_id: props.productId,
          quantity: 1,
        });
        emitter.emit(EV_GET_CART);
        emitter.emit(EV_TOAST, {
          title: "Thêm thành công",
          content: `Tên: ${product.data.product.name}\n1 x ${product.data.product.price_format}`,
        });
      } catch (error) {
        console.log([error]);
        alert(error.response.data.message);
      } finally {
        emitter.emit(EV_OVERLAY_LOADING, false);
      }
    }

    return { addCart };
  },
};
</script>
