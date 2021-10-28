<template>
  <div class="d-none">
    <div class="bg-primary border-bottom p-3 d-flex align-items-center">
      <a class="toggle togglew toggle-2" href="#"><span></span></a>
      <h4 class="font-weight-bold m-0 text-white">Đặt bàn</h4>
    </div>
  </div>
  <section class="py-4 osahan-main-body">
    <div class="container">
      <div class="row">
        <OrderTableProgress></OrderTableProgress>
      </div>
    </div>
  </section>
</template>

<script>
import OrderTableProgress from "@/features/OrderTable/OrderTableProgress.vue";

export default {
  components: { OrderTableProgress },
};
</script>

<style></style>
