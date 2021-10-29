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
                    <i class="feather-chevron-down ml-auto"></i>
                  </button>
                  <ModalTime></ModalTime>
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
                    <img
                      src="/img/table5editremovebg.png"
                      alt="map"
                      class="img-fluid"
                    />
                    <template v-for="(table, key) in tables" :key="key">
                      <div
                        class="table-item draggable ui-widget-content"
                        :class="{ disabled: table.unavailable }"
                        :style="`width: ${table.width}; height: ${table.height}; top: ${table.top}; left: ${table.left}`"
                        @click="selectTable(table.id)"
                      >
                        <img
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
import { inject, ref } from "@vue/runtime-core";
import { getTableMap } from "@/services/reuseable/useTable";
import { EV_SHOW_ORDER_TABLE } from "@/constants";
import ModalTime from "@/components/ModalTime.vue";

export default {
  components: {
    ModalTime,
  },
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
