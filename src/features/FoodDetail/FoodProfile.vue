<template>
  <div class="col-md-4 mb-3">
    <div class="bg-white rounded shadow-sm sticky_sidebar overflow-hidden">
      <a href="profile.html" class="">
        <div class="d-flex align-items-center p-3">
          <div class="left mr-3">
            <VImg alt="#" src="img/user1.jpg" class="rounded-circle" />
          </div>
          <div class="right">
            <h6 class="mb-1 font-weight-bold">
              Tên sản phẩm
              <i class="feather-check-circle text-success"></i>
            </h6>
            <p class="text-muted m-0 small">Chi tiết...</p>
          </div>
        </div>
      </a>
      <div class="osahan-credits d-flex align-items-center p-3 bg-light">
        <p class="m-0">Giá tiền</p>
        <h5 class="m-0 ml-auto text-primary">15.000đ</h5>
      </div>
      <!-- profile-details -->
      <div class="bg-white profile-details">
        <a
          data-toggle="modal"
          data-target="#paycard"
          class="d-flex w-100 align-items-center border-bottom p-3"
        >
          <div class="left mr-3">
            <h6 class="font-weight-bold mb-1 text-dark">Thanh toán thẻ</h6>
            <p class="small text-muted m-0">Thêm mã thẻ ...</p>
          </div>
          <div class="right ml-auto">
            <h6 class="font-weight-bold m-0">
              <i class="feather-chevron-right"></i>
            </h6>
          </div>
        </a>
        <a
          data-toggle="modal"
          data-target="#exampleModal"
          class="d-flex w-100 align-items-center border-bottom p-3"
        >
          <div class="left mr-3">
            <h6 class="font-weight-bold mb-1 text-dark">Chức năng khác...</h6>
            <p class="small text-muted m-0">Chức năng khác...</p>
          </div>
          <div class="right ml-auto">
            <h6 class="font-weight-bold m-0">
              <i class="feather-chevron-right"></i>
            </h6>
          </div>
        </a>
        <a
          class="d-flex align-items-center border-bottom p-3"
          data-toggle="modal"
          data-target="#inviteModal"
        >
          <div class="left mr-3">
            <h6 class="font-weight-bold mb-1">Giới thiệu bạn</h6>
            <p class="small text-primary m-0">Giảm 5.000đ</p>
          </div>
          <div class="right ml-auto">
            <h6 class="font-weight-bold m-0">
              <i class="feather-chevron-right"></i>
            </h6>
          </div>
        </a>
        <a
          href="faq.html"
          class="d-flex w-100 align-items-center border-bottom px-3 py-4"
        >
          <div class="left mr-3">
            <h6 class="font-weight-bold m-0 text-dark">
              <i
                class="feather-truck bg-danger text-white p-2 rounded-circle mr-2"
              ></i>
              Vận chuyển
            </h6>
          </div>
          <div class="right ml-auto">
            <h6 class="font-weight-bold m-0">
              <i class="feather-chevron-right"></i>
            </h6>
          </div>
        </a>
        <a
          href="contact-us.html"
          class="d-flex w-100 align-items-center border-bottom px-3 py-4"
        >
          <div class="left mr-3">
            <h6 class="font-weight-bold m-0 text-dark">
              <i
                class="feather-phone bg-primary text-white p-2 rounded-circle mr-2"
              ></i>
              Liên hệ
            </h6>
          </div>
          <div class="right ml-auto">
            <h6 class="font-weight-bold m-0">
              <i class="feather-chevron-right"></i>
            </h6>
          </div>
        </a>
        <a
          href="terms.html"
          class="d-flex w-100 align-items-center border-bottom px-3 py-4"
        >
          <div class="left mr-3">
            <h6 class="font-weight-bold m-0 text-dark">
              <i
                class="feather-info bg-success text-white p-2 rounded-circle mr-2"
              ></i>
              Hạn dùng Voucher
            </h6>
          </div>
          <div class="right ml-auto">
            <h6 class="font-weight-bold m-0">
              <i class="feather-chevron-right"></i>
            </h6>
          </div>
        </a>
        <a
          href="privacy.html"
          class="d-flex w-100 align-items-center px-3 py-4"
        >
          <div class="left mr-3">
            <h6 class="font-weight-bold m-0 text-dark">
              <i
                class="feather-lock bg-warning text-white p-2 rounded-circle mr-2"
              ></i>
              Chính sách bảo mật
            </h6>
          </div>
          <div class="right ml-auto">
            <h6 class="font-weight-bold m-0">
              <i class="feather-chevron-right"></i>
            </h6>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
