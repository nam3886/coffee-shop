<template>
  <div class="form-group">
    <slot />
    <p v-if="modelValue?.$error" class="is-invalid">
      {{ modelValue.$errors[0].$message }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: { type: Object, required: true },
  },
};
</script>

<style scoped>
.is-invalid {
  color: #d80c1e;
}
</style>
