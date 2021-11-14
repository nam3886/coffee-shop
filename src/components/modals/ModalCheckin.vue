<script>
import { computed, defineComponent, watch } from "vue";

export default defineComponent({
  props: {
    modelValue: { type: Boolean, default: false },
    showConfirm: { type: Boolean, default: true },
  },

  emits: ["update:modelValue", "comfirmed"],

  setup(props, { emit }) {
    const show = computed({
      get: () => props.modelValue,
      set: (val) => emit("update:modelValue", val),
    });

    watch(show, (value) => {
      document.querySelector("body").classList.toggle("modal-open", value);
    });

    return { show };
  },
});
</script>

<template>
  <div
    :class="{ 'd-block show': show }"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            <slot name="title" />
          </h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="show = false"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <slot />
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="rounded btn btn-secondary"
            data-dismiss="modal"
            @click="show = false"
          >
            Đóng
          </button>
          <button
            v-if="showConfirm"
            type="button"
            class="rounded btn btn-primary"
            @click="$emit('comfirmed')"
          >
            Tiếp tục
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
