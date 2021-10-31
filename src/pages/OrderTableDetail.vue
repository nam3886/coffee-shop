<template>
  <section class="py-4 osahan-main-body">
    <div class="container">
      <div class="row">
        <OrderTableProcess></OrderTableProcess>
        <OrderTableDetail></OrderTableDetail>
      </div>
    </div>
  </section>
</template>

<script>
import OrderTableProcess from "@/features/OrderTable/OrderTableProcess.vue";
import OrderTableDetail from "@/features/OrderTable/OrderTableDetail.vue";

export default {
  components: {
    OrderTableProcess,
    OrderTableDetail,
  },
};
</script>
