<template>
  <VLoading :loading="loading" class="h-100" />
  <div
    v-show="!loading"
    class="tab-pane fade show active"
    role="tabpanel"
    aria-labelledby="progress-tab"
  >
    <div class="order-body">
      <div
        v-if="!listNotifications.length"
        class="d-flex justify-content-center"
      >
        Danh sách trống.
      </div>
      <template v-else>
        <div v-for="item in listNotifications" :key="item.id" class="pb-3">
          <div class="p-3 rounded shadow-sm bg-white">
            <div
              class="d-flex pb-3"
              :class="{ 'border-bottom': item.status !== 'received' }"
            >
              <div>
                <p class="mb-0 font-weight-bold"></p>
                <p class="mb-0 small">Bàn số: {{ item.table.id }}</p>
                <p class="mb-0 small">Khách hàng: {{ item.user.name }}</p>
                <p class="mb-0 small">
                  SĐT khách hàng:
                  <a :href="`tel:${item.user.phone}`">{{ item.user.phone }}</a>
                </p>
                <p class="mb-0 small">
                  Số lượng khách: {{ item.table_user.person_number }}
                </p>
                <p class="mb-0 small">
                  Thời gian: {{ formatDate(item.table_user.date) }}
                </p>
                <p v-if="item.table_user.note" class="mb-0 small">
                  Ghi chú: {{ item.table_user.note }}
                </p>
              </div>
              <div class="ml-auto">
                <p class="small font-weight-bold text-center">
                  <i class="feather-clock"></i> {{ item.created_at }}
                </p>
              </div>
            </div>
            <div v-if="item.status !== 'received'" class="text-right mt-3">
              <button
                class="btn btn-outline-primary px-3"
                @click="handleShowModalCheckout(item.id)"
              >
                Xác nhận đã trả bàn
              </button>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>

  <modal-confirm v-model="isVisibleModal" @confirmed="handleConfirmed">
    <template #title> Xác nhận đã trả bàn </template>
    <template #default>
      <span class="text-danger">
        Bạn có chắc chắn xác nhận <b>trả bàn</b>?
      </span>
    </template>
  </modal-confirm>
</template>

<script>
import useStaff from "@/services/reuseable/useStaff";
import { inject, ref, watch } from "@vue/runtime-core";
import ModalConfirm from "@/components/modals/ModalConfirm.vue";
import { EV_TOAST } from "@/constants";
import { formatDate } from "@/helpers";

export default {
  components: { ModalConfirm },

  setup() {
    const {
      checkinListForStaff: listNotifications,
      loading,
      getListCheckinForStaff,
      confirmCheckout,
    } = useStaff();
    const isVisibleModal = ref(false);
    const tempId = ref("");
    const emitter = inject("emitter");
    const isCallingApi = ref(false);

    getListCheckinForStaff();
    // recall api each 5s
    setInterval(() => {
      if (isCallingApi.value) return;
      getListCheckinForStaff();
      // disable loading
      loading.value = false;
    }, 5000);

    watch(listNotifications, handleToastMessage);

    function handleShowModalCheckout(notificationId) {
      tempId.value = notificationId;
      isVisibleModal.value = true;
    }

    async function handleConfirmed() {
      isCallingApi.value = true;
      await confirmCheckout(tempId.value);
      await getListCheckinForStaff();
      isVisibleModal.value = false;
      isCallingApi.value = false;

      emitter.emit(EV_TOAST, {
        title: "Thành công",
        content: "Xác nhận trả bàn thành công.",
      });
    }

    function handleToastMessage(listNotifications) {
      listNotifications.forEach((notification) => {
        const now = new Date();
        const notificationTime = new Date(notification.check_in_time);
        // nếu now - checkin time <= 5s (5000) => toast message
        if (now.getTime() - notificationTime.getTime() > 5000) return;

        emitter.emit(EV_TOAST, {
          title: "Khách hàng nhận bàn",
          content: `Khách hàng: ${notification.user?.name}`,
        });
      });
    }

    return {
      listNotifications,
      loading,
      handleShowModalCheckout,
      isVisibleModal,
      handleConfirmed,
      formatDate,
    };
  },
};
</script>
