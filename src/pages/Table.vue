<template>
  <div class="osahan-home-page table-page">
    <div class="container py-5">
      <div class="row">
        <div class="col-12 position-relative">
          <img
            src="/img/tablemap5removebg.png"
            alt="waiting..."
            class="img-map"
          />
          <div
            v-for="table in tables"
            :key="table.id"
            :class="['child' + table.id]"
            class="table pointer position-absolute"
            @click="selectTable(table)"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "@vue/runtime-core";

export default {
  setup() {
    const emitter = inject("emitter");
    const tables = [
      { id: 1, name: "table1" },
      { id: 2, name: "table2" },
      { id: 3, name: "table3" },
      { id: 4, name: "table4" },
      { id: 5, name: "table5" },
      { id: 6, name: "table6" },
      { id: 7, name: "table7" },
      { id: 8, name: "table8" },
      { id: 9, name: "table9" },
      { id: 21, name: "table21" },
      { id: 22, name: "table22" },
      { id: 23, name: "table23" },
      { id: 24, name: "table24" },
      { id: 25, name: "table25" },
    ];

    function selectTable(table) {
      emitter.emit("show-order-table", table);
    }

    return { tables, selectTable };
  },
};
</script>

<style scoped>
.table-page .table.pointer {
  cursor: pointer;
  top: 50%;
  left: 10%;
  margin-bottom: 0;
}
.table-page .table.pointer.child1 {
  top: 65%;
  width: 13%;
  height: 19%;
  transform: translate(10%, -5%);
}
.table-page .table.pointer.child2 {
  top: 65%;
  width: 13%;
  height: 19%;
  transform: translate(140%, -5%);
}
.table-page .table.pointer.child3 {
  top: 85%;
  left: 5%;
  width: 11%;
  height: 15%;
}
.table-page .table.pointer.child4 {
  top: 85%;
  left: 20%;
  width: 12%;
  height: 15%;
}
.table-page .table.pointer.child5 {
  top: 85%;
  left: 36%;
  width: 12%;
  height: 15%;
}
.table-page .table.pointer.child6 {
  top: 78%;
  left: 50%;
  width: 20%;
  height: 20%;
}
.table-page .table.pointer.child7 {
  top: 78%;
  left: 73%;
  width: 19%;
  height: 20%;
}
.table-page .table.pointer.child8 {
  top: 37%;
  left: 50%;
  width: 20%;
  height: 20%;
}
.table-page .table.pointer.child9 {
  top: 37%;
  left: 72%;
  width: 19%;
  height: 20%;
}
.table-page .table.pointer.child21 {
  top: 10%;
  left: 51%;
  width: 10%;
  height: 15%;
}
.table-page .table.pointer.child22 {
  top: 5%;
  left: 70%;
  width: 10%;
  height: 15%;
}
.table-page .table.pointer.child23 {
  top: 23%;
  left: 62%;
  width: 9%;
  height: 10%;
}
.table-page .table.pointer.child24 {
  top: 23%;
  left: 75%;
  width: 13%;
  height: 10%;
}
.table-page .table.pointer.child25 {
  top: 15%;
  left: 90%;
  width: 10%;
  height: 18%;
}

.img-map {
  width: 100%;
  height: 100%;
  /* background-image: url("/img/tablemap5removebg.png"); */
}
</style>
