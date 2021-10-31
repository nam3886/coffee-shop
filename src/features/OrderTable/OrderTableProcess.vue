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
          :to="{ name: 'order_table.index' }"
          :class="{ active: $route.name === 'order_table.index' }"
          class="nav-link border-0 text-dark py-3"
          data-toggle="tab"
          role="tab"
          aria-controls="completed"
          aria-selected="true"
        >
          <i class="feather-check mr-2 text-success mb-0"></i>
          Danh sách đặt bàn
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>
