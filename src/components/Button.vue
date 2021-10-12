<template>
  <component :is="as">
    <slot />
    <div
      v-if="loading"
      class="ml-2 spinner-border text-light spinner-border-sm"
      role="status"
    ></div>
  </component>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    as: {
      type: String,
      default: "button",
      validator: (val) => ["button", "a"].includes(val),
    },
  },
};
</script>
