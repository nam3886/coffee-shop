<template>
  <img
    :alt="product.image"
    :src="product.image"
    class="img-fluid item-img w-100"
  />
</template>

<script>
export default {
  props: {
    product: { type: Object, required: true },
  },
};
</script>
