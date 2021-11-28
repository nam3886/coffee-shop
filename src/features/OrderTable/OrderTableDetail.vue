<template>
  <div class="col-md-9">
    <!-- body -->
    <section
      class="bg-white osahan-main-body rounded shadow-sm overflow-hidden"
    >
      <div class="container p-0">
        <div class="row">
          <div class="col-lg-12">
            <div class="osahan-status">
              <!-- status complete -->
              <div
                class="p-3 status-order bg-white border-bottom d-flex align-items-center"
              >
                <p class="m-0">
                  <i class="feather-calendar text-primary"></i>
                  {{ orderTableDetail.date_format }}
                </p>
              </div>
              <div class="p-3 border-bottom">
                <h6 class="font-weight-bold">
                  Bàn số {{ orderTableDetail.table_id }}
                </h6>
                <div class="tracking-wrap">
                  <div class="my-1 step active">
                    <span class="text small">
                      Số khách: {{ orderTableDetail.person_number }}
                    </span>
                  </div>
                  <div class="my-1 step active">
                    <span class="text small">
                      Ghi chú: {{ orderTableDetail.note }}
                    </span>
                  </div>
                  <div class="my-1 step active">
                    <span class="text small">
                      Xem bản đồ đặt bàn
                      <router-link
                        :to="{
                          name: 'booking_table',
                          query: {
                            ordered: true,
                            date: orderTableDetail.date,
                            table_id: orderTableDetail.table_id,
                          },
                        }"
                      >
                        chi tiết
                      </router-link>
                    </span>
                  </div>
                  <div class="my-1 step">
                    <span class="text small">
                      Vui lòng không đến sau
                      <b class="text-info">
                        {{ orderTableDetail.over_date_format }}
                      </b>
                    </span>
                  </div>
                  <!-- step.// -->
                </div>
              </div>
              <!-- Destination -->
              <div class="p-3 border-bottom bg-white">
                <h6 class="font-weight-bold">Điểm đến</h6>
                <p class="m-0 small">1 Võ Văn Ngân , Thành phố Thủ Đức</p>
              </div>
              <div class="p-3 border-bottom">
                <p class="font-weight-bold small mb-1"></p>
                <VImg
                  alt="#"
                  src="img/logo_web.png"
                  class="img-fluid sc-osahan-logo mr-2"
                />
                <span class="small text-primary font-weight-bold">
                  Nhà hàng Nam & Khánh
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import useTable from "@/services/reuseable/useTable.js";
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const { getOrderTableDetail, orderTableDetail, loading } = useTable();

    getOrderTableDetail(route.params.order_table_id);

    return { orderTableDetail, loading };
  },
};
</script>
