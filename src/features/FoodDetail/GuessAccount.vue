<template>
  <div class="col-md-8 mb-3">
    <div class="rounded shadow-sm p-4 bg-white">
      <h5 class="mb-4">Tải khoản chính</h5>
      <div id="edit_profile">
        <div>
          <form action="my_account.html">
            <div class="form-group">
              <label for="exampleInputName1">Họ</label>
              <input
                id="exampleInputName1d"
                type="text"
                class="form-control"
                value="Nhập vào họ của bạn..."
              />
            </div>
            <div class="form-group">
              <label for="exampleInputName1">Tên</label>
              <input
                id="exampleInputName1"
                type="text"
                class="form-control"
                value="Nhập vào tên của bạn ..."
              />
            </div>
            <div class="form-group">
              <label for="exampleInputNumber1">Số điện thoại</label>
              <input
                id="exampleInputNumber1"
                type="text"
                class="form-control"
                value="Nhập vào số điện thoại của bạn..."
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email</label>
              <input
                id="exampleInputEmail1"
                type="email"
                class="form-control"
                value="Nhập vào Email của bạn..."
              />
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary btn-block">
                Lưu
              </button>
            </div>
          </form>
        </div>
        <div class="additional">
          <div class="change_password my-3">
            <a
              href="forgot_password.html"
              class="p-3 border rounded bg-white btn d-flex align-items-center"
              >Đổi mật khẩu <i class="feather-arrow-right ml-auto"></i
            ></a>
          </div>
          <div class="deactivate_account">
            <a
              href="forgot_password.html"
              class="p-3 border rounded bg-white btn d-flex align-items-center"
              >Hủy tài khoản <i class="feather-arrow-right ml-auto"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
