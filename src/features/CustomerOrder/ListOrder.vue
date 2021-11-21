<template>
  <div
    id="progress"
    class="tab-pane fade show active"
    role="tabpanel"
    aria-labelledby="progress-tab"
  >
    <div class="order-body">
      <div v-for="order in orders" :key="order.id" class="pb-3">
        <div class="p-3 rounded shadow-sm bg-white">
          <div class="d-flex border-bottom pb-3">
            <div class="text-muted mr-3">
              <VImg
                alt="#"
                :src="order.items[0].product.image"
                class="img-fluid order_img rounded"
              />
            </div>
            <div>
              <p class="mb-0 font-weight-bold">
                <router-link
                  :to="{
                    name: 'customer_order.show',
                    params: { order_code: order.order_code },
                  }"
                  class="text-dark"
                >
                  Đơn hàng
                </router-link>
              </p>
              <p class="mb-0">
                {{ order.is_paid ? "đã thanh toán" : "chưa thanh toán" }}
              </p>
              <p>Mã: {{ order.order_code }}</p>
              <p class="mb-0 small">
                <router-link
                  :to="{
                    name: 'customer_order.show',
                    params: { order_code: order.order_code },
                  }"
                >
                  Xem chi tiết
                </router-link>
              </p>
            </div>
            <div class="ml-auto">
              <p
                v-if="order.received"
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
                Đã xong
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
                Đang làm
              </p>
              <p class="small font-weight-bold text-center">
                <i class="feather-clock"></i> {{ order.created_at }}
              </p>
            </div>
          </div>
          <div class="d-flex pt-3">
            <div class="small">
              <p
                v-for="(item, index) in order.items"
                :key="index"
                class="text- font-weight-bold mb-0"
              >
                {{ item.product.name }} x {{ item.quantity }}
              </p>
            </div>
            <div class="text-muted m-0 ml-auto mr-3 small">
              Tổng tiền<br />
              <span class="text-dark font-weight-bold">
                {{ order.total_format }}
              </span>
            </div>
            <!-- <div class="text-right">
              <a href="#" class="btn btn-primary px-3"> Theo dõi </a>
              &nbsp;
              <a href="#" class="btn btn-outline-primary px-3"> Trợ giúp </a>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useOrder from "@/services/reuseable/useOrder";
import { computed, watchEffect } from "@vue/runtime-core";

export default {
  props: {
    status: { type: String, required: true },
  },

  setup(props) {
    const { list: orders, loading, getList } = useOrder();
    const status = computed(() => props.status === "completed");

    getList({ status: status.value });

    watchEffect(() => getList({ status: status.value }));

    return { orders, loading };
  },
};
</script>
