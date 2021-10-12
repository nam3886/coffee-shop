<template>
  <div v-if="isVisible" class="overlay"></div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { inject } from "@vue/runtime-core";
import { EV_OVERLAY_TRANSPARENT } from "@/constants";

export default {
  setup() {
    const isVisible = ref(false);
    const emitter = inject("emitter");
    emitter.on(EV_OVERLAY_TRANSPARENT, (isVis) => (isVisible.value = isVis));

    return { isVisible };
  },
};
</script>

<style scoped>
.overlay {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background: transparent;
  z-index: 999999999999;
}
</style>
