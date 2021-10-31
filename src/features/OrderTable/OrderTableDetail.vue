<template>
  <div class="col-md-9">
    <!-- body -->
    <section
      class="bg-white osahan-main-body rounded shadow-sm overflow-hidden"
    >
      <div class="container p-0">
        <div class="row">
          <div class="col-lg-12">
            <div class="osahan-status">
              <!-- status complete -->
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
              </div>
              <div class="p-3 border-bottom">
                <h6 class="font-weight-bold">Trạng thái đặt bàn</h6>
                <div class="tracking-wrap">
                  <div class="my-1 step active">
                    <span class="icon text-success"
                      ><i class="feather-check"></i
                    ></span>
                    <span class="text small">Đang chuẩn bị bàn</span>
                  </div>
                  <!-- step.// -->
                  <div class="my-1 step active">
                    <span class="icon text-success"
                      ><i class="feather-check"></i
                    ></span>
                    <span class="text small"> Sẵn sàng đón khách</span>
                  </div>
                  <!-- step.// -->
                  <div class="my-1 step">
                    <span class="icon text-success"
                      ><i class="feather-check"></i
                    ></span>
                    <span class="text small"> Đang chờ khách </span>
                  </div>
                  <!-- step.// -->
                  <div class="my-1 step">
                    <span class="icon text-success"
                      ><i class="feather-check"></i
                    ></span>
                    <span class="text small">Có vận chuyển</span>
                  </div>
                  <!-- step.// -->
                </div>
              </div>
              <!-- Destination -->
              <div class="p-3 border-bottom bg-white">
                <h6 class="font-weight-bold">Điểm đến</h6>
                <p class="m-0 small">1 Võ Văn Ngân , Thành phố Thủ Đức</p>
              </div>
              <div class="p-3 border-bottom">
                <p class="font-weight-bold small mb-1"></p>
                <VImg
                  alt="#"
                  src="img/logo_web.png"
                  class="img-fluid sc-osahan-logo mr-2"
                />
                <span class="small text-primary font-weight-bold">
                  Nhà hàng Nam & Khánh
                </span>
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
