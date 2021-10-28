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
                  <i class="feather-calendar text-primary"></i> 16 Tháng 6,
                  11:30
                </p>
                <a
                  href="trang-chu"
                  class="text-primary ml-auto text-decoration-none"
                  >Chi tiết</a
                >
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
                <img
                  alt="#"
                  src="img/logo_web.png"
                  class="img-fluid sc-osahan-logo mr-2"
                />
                <span class="small text-primary font-weight-bold"
                  >Nhà hàng Nam & Khánh
                </span>
              </div>
              <!-- total price -->
              <!-- Destination -->
              <div class="p-3 bg-white">
                <div class="d-flex align-items-center mb-2">
                  <h6 class="font-weight-bold mb-1">Tổng tiền</h6>
                  <h6 class="font-weight-bold ml-auto mb-1">50.000đ</h6>
                </div>
                <p class="m-0 small text-muted">
                  Bạn có thể xem chi tiết ở đây,<br />Cảm ơn bạn đã ủng hộ !
                </p>
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

<style></style>
