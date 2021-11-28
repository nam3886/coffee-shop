<template>
  <div
    class="py-5 osahan-coming-soon d-flex justify-content-center align-items-center"
  >
    <div class="col-md-6">
      <div class="text-center pb-3">
        <h1 class="font-weight-bold">Bạn đã đặt thành công 😀!!</h1>
        <p>
          Kiểm tra hóa đơn của bạn tại
          <router-link
            :to="{ name: 'customer_order' }"
            class="font-weight-bold text-decoration-none text-primary"
          >
            Đây
          </router-link>
          để xem thông tin chi tiết
        </p>
      </div>
      <!-- continue -->
      <div class="bg-white rounded text-center p-4 shadow-sm">
        <h1 class="display-1 mb-4">🍽️</h1>
        <h6 class="font-weight-bold mb-2">Đang chuẩn bị...</h6>
        <p class="small text-muted">
          Yêu cầu của bạn đang được chúng tôi chuẩn bị
        </p>
        <router-link
          :to="{ name: 'customer_order' }"
          class="btn rounded btn-primary btn-lg btn-block"
        >
          Xem hóa đơn
        </router-link>
      </div>
    </div>
  </div>
</template>
