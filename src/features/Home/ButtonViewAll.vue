<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: { productType: { type: String, default: "" } },

  setup(props) {
    console.log(props.productType);

    return {};
  },
});
</script>

<template>
  <router-link
    class="font-weight-bold ml-auto"
    :to="{ name: 'product', query: { 'filter[feature]': productType } }"
  >
    Xem tất cả <i class="feather-chevrons-right"></i>
  </router-link>
</template>
