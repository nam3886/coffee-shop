<template>
  <div class="col-md-3 mb-3">
    <ul
      id="myTab"
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
        <a
          id="completed-tab"
          class="nav-link border-0 text-dark py-3 active"
          data-toggle="tab"
          href="order-dat-ban"
          role="tab"
          aria-controls="completed"
          aria-selected="true"
        >
          <i class="feather-check mr-2 text-success mb-0"></i> Đã hoàn thành</a
        >
      </li>
      <li class="nav-item border-top" role="presentation">
        <a
          id="progress-tab"
          class="nav-link border-0 text-dark py-3"
          data-toggle="tab"
          href="order-dang-dat-ban"
          role="tab"
          aria-controls="progress"
          aria-selected="false"
        >
          <i class="feather-clock mr-2 text-warning mb-0"></i> Đang đặt</a
        >
      </li>
      <li class="nav-item border-top" role="presentation">
        <a
          id="canceled-tab"
          class="nav-link border-0 text-dark py-3"
          data-toggle="tab"
          href="order-huy-ban"
          role="tab"
          aria-controls="canceled"
          aria-selected="false"
        >
          <i class="feather-x-circle mr-2 text-danger mb-0"></i> Bị hủy</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
