<template>
  <div class="col-md-3 mb-3">
    <ul
      id="myTab"
      class="
        nav nav-tabsa
        custom-tabsa
        border-0
        flex-column
        bg-white
        rounded
        overflow-hidden
        shadow-sm
        p-2
        c-t-order
      "
      role="tablist"
    >
      <li class="nav-item" role="presentation">
        <a
          id="completed-tab"
          class="nav-link border-0 text-dark py-3"
          data-toggle="tab"
          href="#completed"
          role="tab"
          aria-controls="completed"
          aria-selected="true"
          :class="{ active: status == 'completed' }"
          @click.prevent="status = 'completed'"
        >
          <i class="feather-check mr-2 text-success mb-0"></i> Đã xong</a
        >
      </li>
      <li class="nav-item border-top" role="presentation">
        <a
          id="progress-tab"
          class="nav-link border-0 text-dark py-3"
          data-toggle="tab"
          href="#progress"
          role="tab"
          aria-controls="progress"
          aria-selected="false"
          :class="{ active: status == 'progress' }"
          @click.prevent="status = 'progress'"
        >
          <i class="feather-clock mr-2 text-warning mb-0"></i> Đang làm</a
        >
      </li>
      <!-- <li class="nav-item border-top" role="presentation">
        <a
          id="canceled-tab"
          class="nav-link border-0 text-dark py-3"
          data-toggle="tab"
          href="#canceled"
          role="tab"
          aria-controls="canceled"
          aria-selected="false"
          :class="{ active: status == 'cancelled' }"
          @click.prevent="status = 'cancelled'"
        >
          <i class="feather-x-circle mr-2 text-danger mb-0"></i> Bị hủy</a
        >
      </li> -->
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
