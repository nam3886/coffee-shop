<template>
  <div class="d-none">
    <div class="bg-primary border-bottom p-3 d-flex align-items-center">
      <a class="toggle togglew toggle-2" href="#"><span></span></a>
      <h4 class="font-weight-bold m-0 text-white">Đơn hàng</h4>
    </div>
  </div>
  <section class="py-4 osahan-main-body">
    <div class="container">
      <div class="row">
        <OrderProgress v-model="status" />
        <div class="tab-content col-md-9">
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
