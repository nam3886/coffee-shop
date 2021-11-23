<template>
  <section class="py-4 osahan-main-body">
    <div class="container">
      <div class="row">
        <OrderProgress v-model="status" />
        <div class="tab-content col-md-9 overflow-auto">
          <ListOrder :status="status" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import OrderProgress from "@/features/CustomerOrder/OrderProgress.vue";
import ListOrder from "@/features/CustomerOrder/ListOrder.vue";
import { ref } from "@vue/reactivity";

export default {
  components: {
    OrderProgress,
    ListOrder,
  },

  setup() {
    const status = ref("progress");

    return { status };
  },
};
</script>
