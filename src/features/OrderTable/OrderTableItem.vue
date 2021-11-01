<template>
  <div class="col-md-9">
    <section
      class="bg-white osahan-main-body rounded shadow-sm overflow-hidden"
    >
      <div class="container p-0">
        <div class="row">
          <div class="col-lg-12">
            <div class="osahan-status">
              <!-- v-for here -->
              <div
                v-for="table in listOrderTable"
                :key="table.id"
                class="
                  p-3
                  status-order
                  bg-white
                  border-bottom
                  d-flex
                  align-items-center
                "
              >
                <p class="m-0">
                  <i class="feather-calendar text-primary"></i>
                  &nbsp;
                  {{ formatDate(table.date) }}
                </p>
                <router-link
                  :to="{
                    name: 'order_table.show',
                    params: { order_table_id: table.id },
                  }"
                  class="text-primary ml-auto text-decoration-none"
                >
                  chi tiết
                </router-link>
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
import { formatDate } from "@/helpers";

export default {
  setup() {
    const { getListOrderTable, listOrderTable, loading } = useTable();

    getListOrderTable();

    return { listOrderTable, loading, formatDate };
  },
};
</script>
