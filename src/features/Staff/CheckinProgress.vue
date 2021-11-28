<template>
  <div class="col-md-3 mb-3">
    <ul
      id="myTab"
      class="nav nav-tabsa custom-tabsa border-0 flex-column bg-white rounded overflow-hidden shadow-sm p-2 c-t-order"
      role="tablist"
    >
      <li class="nav-item border-top" role="presentation">
        <a
          id="progress-tab"
          class="nav-link border-0 text-dark py-3"
          data-toggle="tab"
          href="#progress"
          role="tab"
          aria-controls="progress"
          aria-selected="false"
          :class="{ active: status == 'non_received' }"
          @click.prevent="status = 'non_received'"
        >
          <i class="feather-clock mr-2 text-warning mb-0"></i>Khách check in</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";

export default {
  props: {
    modelValue: {
      type: String,
      required: true,
    },
  },

  emits: ["update:modelValue"],

  setup(props, { emit }) {
    const status = computed({
      get: () => props.modelValue,
      set: (status) => emit("update:modelValue", status),
    });

    return { status };
  },
};
</script>
