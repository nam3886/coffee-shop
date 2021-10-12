<template>
  <div v-if="isVisible" class="overlay">
    <div class="overlay__inner">
      <div class="overlay__content"><span class="overlay-spinner"></span></div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { inject, onMounted } from "@vue/runtime-core";

export default {
  setup() {
    const isVisible = ref(false);
    const emitter = inject("emitter");

    onMounted(() => {
      emitter.on("overlay-loading", (isVis) => (isVisible.value = isVis));
    });

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
  background: #000;
  opacity: 0.8;
  z-index: 999999999999;
}

.overlay__inner {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
}

.overlay__content {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

.overlay-spinner {
  width: 50px;
  height: 50px;
  display: inline-block;
  border-width: 2px;
  border-color: rgba(255, 255, 255, 0.05);
  border-top-color: #fff;
  animation: spin 1s infinite linear;
  border-radius: 100%;
  border-style: solid;
  background: transparent;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
