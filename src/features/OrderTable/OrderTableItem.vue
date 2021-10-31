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
                  16 Tháng 6, 11:30
                </p>
                <router-link
                  :to="{
                    name: 'order_table.show',
                    params: { order_table_id: 1 },
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
export default {};
</script>
