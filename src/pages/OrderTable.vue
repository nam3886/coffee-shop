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
import { useRoute, useRouter } from "vue-router";
import { computed } from "@vue/reactivity";
import useTable from "@/services/reuseable/useTable";

export default {
  components: {
    OrderTableProcess,
    OrderTableItem,
  },

  setup() {
    const route = useRoute();
    const router = useRouter();
    const tableId = computed(() => route.query.table_id);
    const { response, errors, loading, checkin } = useTable();

    // nếu ko có tableId => 404
    if (!tableId.value) return router.push({ name: "not_found" });

    // call api check in
    checkin(tableId.value).then(() => {
      if (errors.value) {
        console.log(errors.value);
        return;
      }

      console.log(response);
    });

    return { errors, loading };
  },
};
</script>
