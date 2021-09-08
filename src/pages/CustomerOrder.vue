<template>
  <div class="d-none">
    <div class="bg-primary border-bottom p-3 d-flex align-items-center">
      <a class="toggle togglew toggle-2" href="#"><span></span></a>
      <h4 class="font-weight-bold m-0 text-white">My Order</h4>
    </div>
  </div>
  <section class="py-4 osahan-main-body">
    <div class="container">
      <div class="row"><Progress></Progress><OrderStatus></OrderStatus></div>
    </div>
  </section>
</template>

<script>
import Progress from "@/features/CustomerOrder/Progress.vue";
import OrderStatus from "@/features/CustomerOrder/OrderStatus.vue";
export default {
  components: {
    Progress,
    OrderStatus,
  },
};
</script>

<style></style>
