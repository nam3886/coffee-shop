<template>
  <div class="osahan-menu-fotter fixed-bottom bg-white text-center d-none">
    <div class="row">
      <div class="col selected">
        <router-link :to="{ name: 'home' }">
          <p class="h4 m-0"><i class="feather-home text-danger"></i></p>
          Trang chủ
        </router-link>
      </div>
      <div class="col">
        <router-link
          :to="{ name: 'product', query: { 'filter[feature]': 'popular' } }"
          class="text-dark small font-weight-bold text-decoration-none"
        >
          <p class="h4 m-0"><i class="feather-map-pin"></i></p>
          Nổi bật
        </router-link>
      </div>
      <div class="col bg-white rounded-circle mt-n4 px-3 py-2">
        <div class="bg-danger rounded-circle mt-n0 shadow">
          <router-link
            :to="{ name: 'cart' }"
            class="text-white small font-weight-bold text-decoration-none"
          >
            <i class="feather-shopping-cart"></i>
          </router-link>
        </div>
      </div>
      <div class="col">
        <router-link
          :to="{ name: 'booking_table' }"
          class="text-dark small font-weight-bold text-decoration-none"
        >
          <p class="h4 m-0"><i class="feather-award"></i></p>
          Đặt bàn
        </router-link>
      </div>
      <div class="col">
        <router-link
          :to="{ name: 'customer_order' }"
          class="text-dark small font-weight-bold text-decoration-none"
        >
          <p class="h4 m-0"><i class="feather-clipboard"></i></p>
          Đơn
        </router-link>
      </div>
    </div>
  </div>
</template>
