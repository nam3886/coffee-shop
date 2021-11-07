<template>
  <div class="osahan-checkout mt-5 mt-sm-4 mt-lg-0">
    <div class="container position-relative">
      <div class="py-5 row">
        <div class="col-12 mb-5 mb-lg-0">
          <div
            class="accordion mb-3 rounded shadow-sm bg-white overflow-hidden"
          >
            <div class="osahan-card bg-white border-bottom overflow-hidden">
              <div class="osahan-card-header">
                <h2 class="mb-0">
                  <button
                    v-if="isOrdered"
                    class="d-flex p-3 align-items-center btn btn-link w-100"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <i class="feather-credit-card mr-3"></i>
                    Vui lòng đến đúng vị trí của đơn đặt bàn và quét mã
                    &nbsp;<b>QR</b>&nbsp;ở bàn để thông báo với nhân viên
                  </button>
                  <button
                    v-else
                    class="d-flex p-3 align-items-center btn btn-link w-100"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <i class="feather-credit-card mr-3"></i>
                    Đặt bàn (chọn thời gian đặt bàn và nhấn vào bàn bên dưới sơ
                    đồ để tiếp tục)
                    <a
                      href="#"
                      class="ml-auto"
                      @click.prevent="
                        $EMITTER.emit(EV_SHOW_ORDER_TABLE_TIME, true)
                      "
                    >
                      chọn lại thời gian
                    </a>
                  </button>
                </h2>
              </div>
              <div class="collapse show" aria-labelledby="headingOne">
                <div
                  class="
                    osahan-card-body
                    border-top
                    p-3
                    d-flex
                    align-items-center
                    justify-content-center
                  "
                >
                  <div id="map">
                    <VImg
                      src="/img/table5editremovebg.png"
                      alt="map"
                      class="img-fluid"
                    />
                    <template
                      v-for="(table, key) in $store.getters.getTables"
                      :key="key"
                    >
                      <div
                        class="table-item draggable ui-widget-content"
                        :class="{
                          here: orderedTableId == table.id,
                          'not-available':
                            table.isNotAvailable && orderedTableId != table.id,
                        }"
                        :style="`width: ${table.width}; height: ${table.height}; top: ${table.top}; left: ${table.left}`"
                        @click="selectTable(table)"
                      >
                        <Marker
                          v-if="orderedTableId == table.id"
                          class="maker"
                        />
                        <VImg
                          :src="table.image"
                          :alt="table.name"
                          class="w-100 h-100"
                          style="object-fit: cover"
                        />
                      </div>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <modal-order-table-time />
  <modal-order-table />
</template>

<script>
import { computed, inject, onMounted, watch } from "@vue/runtime-core";
import { EV_SHOW_ORDER_TABLE, EV_SHOW_ORDER_TABLE_TIME } from "@/constants";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { SET_TABLES } from "@/store/actionTypes";
import useTable from "@/services/reuseable/useTable";
import Marker from "@/components/Marker";
import ModalOrderTable from "@/components/ModalOrderTable.vue";
import ModalOrderTableTime from "@/components/ModalOrderTableTime.vue";

export default {
  components: { Marker, ModalOrderTable, ModalOrderTableTime },

  setup() {
    const route = useRoute();
    const store = useStore();
    const emitter = inject("emitter");
    const { list: tables, getList } = useTable();
    const isOrdered = computed(() => route.query.ordered);
    const orderedDate = computed(() => route.query.date);
    const orderedTableId = computed(() => route.query.table_id);
    getList(orderedDate.value).then(() => {
      store.dispatch(SET_TABLES, tables.value);
    });

    watch(isOrdered, triggerShowOrderTableTime);
    onMounted(() => triggerShowOrderTableTime(isOrdered.value));

    function triggerShowOrderTableTime(isOrdered) {
      isOrdered || emitter.emit(EV_SHOW_ORDER_TABLE_TIME, true);
    }

    function selectTable(table) {
      if (isOrdered.value) return;

      if (table.isNotAvailable)
        return alert(`Bàn ${table.id} hiện tại không còn trống`);

      emitter.emit(EV_SHOW_ORDER_TABLE, table.id);
    }

    return { selectTable, EV_SHOW_ORDER_TABLE_TIME, isOrdered, orderedTableId };
  },
};
</script>

<style scoped>
.table-item.not-available {
  opacity: 0.3;
  cursor: not-allowed !important;
}
.table-item.here .maker {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);
}
</style>
