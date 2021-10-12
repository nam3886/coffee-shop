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
        <!-- @update:status="status = $event"  -->
        <OrderProgress v-model="status" />
        <div id="myTabContent" class="tab-content col-md-9">
          <StatusCompleted v-if="status == 'completed'" />
          <StatusProgress v-if="status == 'progress'" />
          <StatusCancelled v-if="status == 'cancelled'" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import OrderProgress from "@/features/CustomerOrder/OrderProgress.vue";
import StatusCompleted from "@/features/CustomerOrder/StatusCompleted.vue";
import StatusProgress from "@/features/CustomerOrder/StatusProgress.vue";
import StatusCancelled from "@/features/CustomerOrder/StatusCancelled.vue";
import { ref } from "@vue/reactivity";
export default {
  components: {
    OrderProgress,
    StatusCompleted,
    StatusProgress,
    StatusCancelled,
  },
  setup() {
    let status = ref("cancelled");
    console.log(status);
    return { status };
  },
};
</script>

<style></style>
