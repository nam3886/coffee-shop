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
                          disabled: table.unavailable,
                          'not-available': table.isNotAvailable,
                        }"
                        :style="`width: ${table.width}; height: ${table.height}; top: ${table.top}; left: ${table.left}`"
                        @click="selectTable(table)"
                      >
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
</template>

<script>
import { inject, onMounted } from "@vue/runtime-core";
import { EV_SHOW_ORDER_TABLE, EV_SHOW_ORDER_TABLE_TIME } from "@/constants";

export default {
  setup() {
    const emitter = inject("emitter");

    onMounted(() => emitter.emit(EV_SHOW_ORDER_TABLE_TIME, true));

    function selectTable(table) {
      if (table.isNotAvailable) return alert("table is not available");
      emitter.emit(EV_SHOW_ORDER_TABLE, table.id);
    }

    return { selectTable, EV_SHOW_ORDER_TABLE_TIME };
  },
};
</script>

<style scoped>
.not-available {
  opacity: 0.3;
  cursor: not-allowed !important;
}
</style>
