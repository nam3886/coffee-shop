<template>
  <section class="py-4 osahan-main-body">
    <div class="container">
      <div class="row">
        <OrderTableProcess></OrderTableProcess>
        <OrderTableItem></OrderTableItem>
      </div>
    </div>
  </section>
</template>

<script>
import OrderTableProcess from "@/features/OrderTable/OrderTableProcess.vue";
import OrderTableItem from "@/features/OrderTable/OrderTableItem.vue";

export default {
  components: {
    OrderTableProcess,
    OrderTableItem,
  },
};
</script>
