<template>
  <section class="py-4 osahan-main-body">
    <div class="container">
      <div class="row">
        <OrderTableProcess></OrderTableProcess>
        <OrderTableItem></OrderTableItem>
      </div>
    </div>
  </section>

  <modal-checkin
    v-if="isCheckin && tableId"
    v-model="isVisibleModal"
    :show-confirm="!errors"
    @comfirmed="!loading && $router.push({ name: 'home' })"
  >
    <template #title>
      <span v-if="errors">Có lỗi</span>
      <span v-else-if="loading">Đang tiến hành check-in</span>
      <span v-else>Check-in thành công</span>
    </template>

    <template #default>
      <template v-if="!loading">
        <template v-if="errors">
          <div class="text-danger">{{ errors }}</div>
          <div>Hãy liên hệ với nhân viên tại cửa hàng để được hỗ trợ</div>
        </template>
        <template v-else>
          <div class="my-1">
            Bạn đã đặt bàn số {{ response.table.table_id }}
          </div>
          <div class="my-1">Số khách: {{ response.table.person_number }}</div>
          <div class="my-1">Vào lúc: {{ formatDate(response.table.date) }}</div>
          <div class="text-primary text-small">
            <b>Nhân viên sẽ đến phục vụ bạn sau giây lát.</b>
          </div>
          <b class="text-small text-info">Tiếp tục với những món ngon khác</b>
        </template>
      </template>
    </template>
  </modal-checkin>
</template>

<script>
import OrderTableProcess from "@/features/OrderTable/OrderTableProcess.vue";
import OrderTableItem from "@/features/OrderTable/OrderTableItem.vue";
import ModalCheckin from "@/components/modals/ModalCheckin.vue";
import { useRoute, useRouter } from "vue-router";
import { computed, ref } from "@vue/reactivity";
import useTable from "@/services/reuseable/useTable";
import { formatDate } from "@/helpers";

export default {
  components: {
    OrderTableProcess,
    OrderTableItem,
    ModalCheckin,
  },

  setup() {
    const route = useRoute();
    const router = useRouter();
    const isVisibleModal = ref(true);

    const isCheckin = computed(
      () => router.currentRoute.value.name === "check_in"
    );
    const tableId = computed(() => route.query.table_id);
    const { response, errors, loading, checkin } = useTable();
    // nếu ko có tableId => 404
    if (isCheckin.value) {
      if (!tableId.value) router.push({ name: "home" });
      // call api check in
      else {
        checkin(tableId.value).then(() => {
          if (errors.value) {
            console.log(errors.value);
            return;
          }

          console.log(response.value);
        });
      }
    }

    return {
      errors,
      loading,
      isVisibleModal,
      response,
      isCheckin,
      formatDate,
      tableId,
    };
  },
};
</script>
