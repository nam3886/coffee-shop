<template>
  <div class="osahan-checkout">
    <div class="container position-relative">
      <div class="py-5 row">
        <div class="col-12 mb-3">
          <div>
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
                      Đặt bàn (nhấn vào bàn bên dưới để tiếp tục)
                      <i class="feather-chevron-down ml-auto"></i>
                    </button>
                  </h2>
                </div>
                <div
                  class="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div class="osahan-card-body border-top p-3">
                    <div id="map">
                      <img
                        src="/img/table5editremovebg.png"
                        alt="map"
                        class="img-map"
                      />
                      <template v-for="(table, key) in tables" :key="key">
                        <div
                          class="table-item draggable ui-widget-content"
                          :class="{ disabled: table.unavailable }"
                          :style="`width: ${table.width}; height: ${table.height}; top: ${table.top}; left: ${table.left}`"
                          @click="selectTable(table.id)"
                        >
                          <img :src="table.image" :alt="table.name" />
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
  </div>
</template>

<script>
import { inject, ref } from "@vue/runtime-core";
import { getTableMap } from "@/services/reuseable/useTable";
import { EV_SHOW_ORDER_TABLE } from "@/constants";

export default {
  setup() {
    const emitter = inject("emitter");
    const tables = ref({});

    getTableMap().then(({ data }) => {
      tables.value = data.data;
    });

    function selectTable(table) {
      emitter.emit(EV_SHOW_ORDER_TABLE, table);
    }

    return { selectTable, tables };
  },
};
</script>

<style scoped>
#map {
  position: relative;
  width: 100%;
  min-height: 100vh;
}
#map .img-map {
  display: block;
  margin: 0 auto;
  width: 100%;
}
#map .draggable {
  cursor: grab;
  position: absolute;
  top: 0;
  left: 0;
}
</style>
