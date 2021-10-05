<template>
  <div class="osahan-home-page table-page">
    <form class="container py-5" @submit.prevent="hanldeSaveTableMap">
      <div class="row">
        <div id="map" class="col-12">
          <img src="/img/table5editremovebg.png" alt="map" class="img-map" />
          <component
            :is="table.type"
            v-for="(table, key) in tables"
            :key="table.id"
            :data-index="key"
            :data-type="table.type"
            class="draggable ui-widget-content"
            :style="`width: ${table.width}; height: ${table.height}; top: ${table.top}; left: ${table.left}`"
            @click="selectTable"
          ></component>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-12 text-right">
          <button type="submit" class="btn btn-danger">Lưu</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { inject, onUpdated, ref } from "@vue/runtime-core";
import $ from "jquery";
import "jquery-ui/ui/widgets/draggable";
import "@/assets/vendor/jquery/jquery.ui.touch-punch.min.js";
import Table68 from "@/components/Table/table_68.vue";
import Table4 from "@/components/Table/table_4.vue";
import Table7 from "@/components/Table/table_7.vue";
import Table9 from "@/components/Table/table_9.vue";
import Table12 from "@/components/Table/table_12.vue";
import Table35 from "@/components/Table/table_35.vue";
import Table2122 from "@/components/Table/table_2122.vue";
import Table23 from "@/components/Table/table_23.vue";
import Table24 from "@/components/Table/table_24.vue";
import Table25 from "@/components/Table/table_25.vue";
import { saveTableMap, getTableMap } from "@/services/reuseable/useTable";
// import { useStore } from "vuex";

export default {
  components: {
    Table68,
    Table4,
    Table7,
    Table9,
    Table12,
    Table35,
    Table2122,
    Table23,
    Table24,
    Table25,
  },
  setup() {
    const emitter = inject("emitter");
    const tables = ref({});
    // const store = useStore();

    getTableMap().then(({ data }) => {
      tables.value = data.data;
    });

    function selectTable(table) {
      emitter.emit("show-order-table", table);
    }

    function hanldeSaveTableMap() {
      saveTableMap({ map: tables.value });
    }

    function initialMap() {
      const mapElement = $("#map .draggable");
      mapElement.data("ui-draggable") && mapElement.draggable("destroy");

      mapElement.draggable({
        containment: "parent",
        cursor: "grabbing",
        stop: updateUserAction,
      });
    }

    function updateUserAction(event, ui) {
      const mapHeight = $("#map").height();
      const mapWidth = $("#map").width();
      const top = ui.position.top;
      const left = ui.position.left;
      const topPercent = (top / mapHeight) * 100;
      const leftPercent = (left / mapWidth) * 100;
      const heightPercent = ($(event.target).height() / mapHeight) * 100;
      const widthPercent = ($(event.target).width() / mapWidth) * 100;
      $(event.target).css({
        top: `${topPercent}%`,
        left: `${leftPercent}%`,
      });

      const newTables = { ...tables.value };
      newTables[event.target.dataset.index] = {
        name: event.target.dataset.type,
        type: event.target.dataset.type,
        image:
          "http://localhost:8080" + $(event.target).find("img").attr("src"),
        top: `${topPercent}%`,
        left: `${leftPercent}%`,
        width: `${widthPercent}%`,
        height: `${heightPercent}%`,
        price: 50000,
      };
      tables.value = newTables;
      console.log("update table");
    }

    onUpdated(() => {
      // store.getters.getProfile.type === "ROOT" && initialMap();
      initialMap();
    });

    return { selectTable, tables, hanldeSaveTableMap };
  },
};
</script>

<style scoped>
#map {
  display: inline;
  position: relative;
  width: 100%;
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
