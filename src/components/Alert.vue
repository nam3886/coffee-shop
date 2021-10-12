<template>
  <div v-if="message" :class="`alert alert-${type}`" role="alert">
    {{ message }}
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "info",
      validator: (val) =>
        ["info", "success", "danger", "warning"].includes(val),
    },
  },
};
</script>
