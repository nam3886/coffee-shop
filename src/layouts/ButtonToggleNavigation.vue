<script>
import { defineComponent, inject, ref, watch } from "vue";

export default defineComponent({
  setup() {
    const emitter = inject("emitter");
    const isShow = ref(false);
    watch(isShow, (val) => emitter.emit("toggle-navigation", val));

    emitter.on("toggle-navigation", (val) => (isShow.value = val));

    return { isShow };
  },
});
</script>

<template>
  <a
    :class="{ 'toggle-open': isShow }"
    class="toggle-navigation hc-nav-trigger hc-nav-1 d-block"
    href="#"
    role="button"
    aria-controls="hc-nav-1"
    @click.prevent="isShow = !isShow"
  >
    <span></span>
  </a>
</template>
