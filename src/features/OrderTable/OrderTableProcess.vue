<template>
  <div class="col-md-3 mb-3">
    <ul
      class="
        nav nav-tabsa
        custom-tabsa
        border-0
        flex-column
        bg-white
        rounded
        overflow-hidden
        shadow-sm
        p-2
        c-t-order
      "
      role="tablist"
    >
      <li class="nav-item" role="presentation">
        <router-link
          :to="{ name: 'order_table.index', query: { type: 'done' } }"
          :class="{ active: $route.query?.type === 'done' }"
          class="nav-link border-0 text-dark py-3"
          data-toggle="tab"
          role="tab"
          aria-controls="completed"
          aria-selected="true"
        >
          <i class="feather-check mr-2 text-success mb-0"></i>
          Đã hoàn thành
        </router-link>
      </li>
      <li class="nav-item border-top" role="presentation">
        <router-link
          :to="{ name: 'order_table.index', query: { type: 'processing' } }"
          :class="{ active: $route.query?.type === 'processing' }"
          class="nav-link border-0 text-dark py-3"
          data-toggle="tab"
          role="tab"
          aria-controls="progress"
          aria-selected="false"
        >
          <i class="feather-clock mr-2 text-warning mb-0"></i>
          Đang đặt
        </router-link>
      </li>
      <li class="nav-item border-top" role="presentation">
        <router-link
          :to="{ name: 'order_table.index', query: { type: 'cancel' } }"
          :class="{ active: $route.query?.type === 'cancelorder_table' }"
          class="nav-link border-0 text-dark py-3"
          data-toggle="tab"
          role="tab"
          aria-controls="canceled"
          aria-selected="false"
        >
          <i class="feather-x-circle mr-2 text-danger mb-0"></i>
          Bị hủy
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>
