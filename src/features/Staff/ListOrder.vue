<template>
  <div
    id="progress"
    class="tab-pane fade show active"
    role="tabpanel"
    aria-labelledby="progress-tab"
  >
    <div class="order-body">
      <div v-for="item in listNotifications" :key="item.id" class="pb-3">
        <div class="p-3 rounded shadow-sm bg-white">
          <div class="d-flex border-bottom pb-3">
            <div class="text-muted mr-3">
              <VImg
                alt="#"
                :src="item.order.items[0].product.image"
                class="img-fluid order_img rounded"
              />
            </div>
            <div>
              <p class="mb-0 font-weight-bold">
                <router-link
                  :to="{
                    name: 'customer_order.show',
                    params: { order_code: item.order.order_code },
                  }"
                  class="text-dark"
                >
                  Đơn hàng
                </router-link>
              </p>
              <p v-if="item.order.is_paid" class="mb-0 badge badge-success">
                đã thanh toán
              </p>
              <p v-else class="mb-0 badge badge-danger">chưa thanh toán</p>
              <p class="mb-0 small">Mã: {{ item.order.order_code }}</p>
              <p class="mb-0 small">Khách hàng: {{ item.order.name }}</p>
              <p class="mb-0 small">
                SĐT khách hàng:
                <a :href="`tel:${item.order.phone}`">{{ item.order.phone }}</a>
              </p>
            </div>
            <div class="ml-auto">
              <p
                v-if="item.status === 'received'"
                class="
                  bg-success
                  text-white
                  py-1
                  px-2
                  rounded
                  small
                  mb-1
                  text-center
                "
              >
                Đã hoàn thành
              </p>
              <p
                v-else
                class="
                  bg-warning
                  text-white
                  py-1
                  px-2
                  rounded
                  small
                  mb-1
                  text-center
                "
              >
                Chưa hoàn thành
              </p>
              <p class="small font-weight-bold text-center">
                <i class="feather-clock"></i> {{ item.order.created_at }}
              </p>
            </div>
          </div>
          <div class="d-flex pt-3">
            <div class="small">
              <p
                v-for="(itemOrder, index) in item.order.items"
                :key="index"
                class="text- font-weight-bold mb-0"
              >
                {{ itemOrder.product.name }} x {{ itemOrder.quantity }}
              </p>
            </div>
            <div class="text-muted m-0 ml-auto mr-3 small">
              Tổng tiền<br />
              <span class="text-dark font-weight-bold">
                {{ item.order.total_format }}
              </span>
            </div>
          </div>
          <div class="text-right">
            <button
              v-if="!item.order.is_paid"
              class="btn btn-primary px-3"
              @click="handleShowModalPaid(item.order.id)"
            >
              Xác nhận đã thanh toán
            </button>
            &nbsp;
            <button
              v-if="item.status !== 'received'"
              class="btn btn-outline-primary px-3"
              @click="handleShowModalReceived(item.id)"
            >
              Xác nhận đã hoàn thành
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <modal-confirm v-model="isVisibleModal" @confirmed="handleConfirmed">
    <template #title>
      <template v-if="step === 'confirm_paid'">
        Xác nhận đã thanh toán
      </template>
      <template v-if="step === 'confirm_received'">
        Xác nhận đã hoàn thành đơn
      </template>
    </template>

    <template #default>
      <template v-if="step === 'confirm_paid'">
        <span class="text-danger">
          Bạn có chắc chắn xác nhận đơn hàng đã <b>thanh toán</b>?
        </span>
      </template>
      <template v-if="step === 'confirm_received'">
        <span class="text-danger">
          Bạn có chắc chắn xác nhận đơn hàng đã <b>hoàn thành</b>?
        </span>
      </template>
    </template>
  </modal-confirm>
</template>

<script>
import useStaff from "@/services/reuseable/useStaff";
import { inject, ref, watch, watchEffect } from "@vue/runtime-core";
import ModalConfirm from "@/components/modals/ModalConfirm.vue";
import { EV_OVERLAY_LOADING } from "@/constants";

export default {
  components: { ModalConfirm },

  props: {
    status: { type: String, required: true },
  },

  setup(props) {
    const {
      listOrderForStaff: listNotifications,
      loading,
      getListOrderForStaff,
      confirmReceived,
      confirmPaid,
    } = useStaff();
    const countNotifications = ref(0);
    const isVisibleModal = ref(false);
    const step = ref("");
    const tempId = ref("");
    const emitter = inject("emitter");

    getListOrderForStaff({ status: props.status });
    watchEffect(() => getListOrderForStaff({ status: props.status }));
    // recall api each 5s
    setInterval(() => getListOrderForStaff({ status: props.status }), 5000);

    watch(listNotifications, (val) => (countNotifications.value = val.length));
    watch(countNotifications, (val) => console.log(val, "toast"));

    function handleShowModalReceived(notificationId) {
      step.value = "confirm_received";
      tempId.value = notificationId;
      isVisibleModal.value = true;
    }

    function handleShowModalPaid(orderId) {
      step.value = "confirm_paid";
      tempId.value = orderId;
      isVisibleModal.value = true;
    }

    async function handleConfirmed() {
      const action =
        step.value === "confirm_paid" ? confirmPaid : confirmReceived;
      emitter.emit(EV_OVERLAY_LOADING, true);
      await action(tempId.value);
      emitter.emit(EV_OVERLAY_LOADING, false);
      isVisibleModal.value = false;
    }

    return {
      listNotifications,
      loading,
      handleShowModalReceived,
      handleShowModalPaid,
      isVisibleModal,
      step,
      handleConfirmed,
    };
  },
};
</script>
