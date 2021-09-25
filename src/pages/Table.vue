<template>
  <div class="osahan-home-page table-page">
    <div class="container py-5">
      <div class="row">
        <div id="map" class="col-12">
          <img src="/img/tablemap5removebg.png" alt="map" class="img-map" />
          <table-68 class="draggable ui-widget-content" />
          <table-2122 class="draggable ui-widget-content" />
          <table-4 class="draggable ui-widget-content" />
          <table-7 class="draggable ui-widget-content" />
          <table-9 class="draggable ui-widget-content" />
          <table-12 class="draggable ui-widget-content" />
          <table-23 class="draggable ui-widget-content" />
          <table-24 class="draggable ui-widget-content" />
          <table-35 class="draggable ui-widget-content" />
        </div>
      </div>
      <!-- <table-12></table-12>
      <table-2122></table-2122>
      <table-35></table-35>
      <table-4></table-4>
      <table-7></table-7>
      <table-9></table-9>
      <table-23></table-23>
      <table-24></table-24> -->
    </div>
  </div>
</template>

<script>
import { inject } from "@vue/runtime-core";
import $ from "jquery";
import "jquery-ui/ui/widgets/draggable";
import "@/assets/vendor/jquery/jquery.ui.touch-punch.min.js";
import Table68 from "@/components/Table/Table68.vue";
import Table4 from "@/components/Table/Table4.vue";
import Table7 from "@/components/Table/Table7.vue";
import Table9 from "@/components/Table/Table9.vue";
import Table12 from "@/components/Table/Table12.vue";
import Table35 from "@/components/Table/Table35.vue";
import Table2122 from "@/components/Table/Table2122.vue";
import Table23 from "@/components/Table/Table23.vue";
import Table24 from "@/components/Table/Table24.vue";

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
  },
  setup() {
    const emitter = inject("emitter");

    function selectTable(table) {
      emitter.emit("show-order-table", table);
    }

    return { selectTable };
  },

  mounted() {
    $(function () {
      $("#map .draggable").draggable({
        containment: "parent",
        cursor: "grabbing",
      });

      $("#map .draggable").on("dragstop", function (event, ui) {
        const height = $("#map").height();
        const width = $("#map").width();

        const top = ui.position.top;
        const left = ui.position.left;

        const topPercent = (top / height) * 100;
        const leftPercent = (left / width) * 100;
        console.log(topPercent, leftPercent);

        $(event.target).css({ top: `${topPercent}%`, left: `${leftPercent}%` });
      });
    });
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
