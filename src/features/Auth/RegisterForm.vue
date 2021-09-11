<template>
  <div
    class="d-flex align-items-center justify-content-center flex-column vh-100"
  >
    <div class="px-5 col-md-6 ml-auto">
      <div class="px-5 col-10 mx-auto">
        <h2 class="text-dark my-0">Xin chào bạn</h2>
        <p class="text-50">Đăng kí để tiếp tục</p>
        <form class="mt-5 mb-4" action="verification.html">
          <div class="form-group">
            <label for="exampleInputName1" class="text-dark">Họ tên</label>
            <input
              id="exampleInputName1"
              type="text"
              placeholder="Nhập họ tên của bạn"
              class="form-control"
              aria-describedby="nameHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputNumber1" class="text-dark"
              >Số điện thoại</label
            >
            <input
              id="exampleInputNumber1"
              type="number"
              placeholder="Nhập số điện thoại của bạn"
              class="form-control"
              aria-describedby="numberHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1" class="text-dark"
              >Mật khẩu</label
            >
            <input
              id="exampleInputPassword1"
              type="password"
              placeholder="Nhập mật khẩu"
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1" class="text-dark"
              >Nhập lại mật khẩu</label
            >
            <input
              id="exampleInputPassword1"
              type="password"
              placeholder="Nhập lại"
              class="form-control"
            />
          </div>
          <button class="btn btn-primary btn-lg btn-block">Đăng kí</button>
          <div class="py-2">
            <button class="btn btn-facebook btn-lg btn-block">
              <i class="feather-facebook"></i> Đăng nhập bằng Facebook
            </button>
          </div>
        </form>
      </div>
      <div class="new-acc d-flex align-items-center justify-content-center">
        <router-link :to="{ name: 'login' }">
          <p class="text-center m-0">Đã có tài khoản? Đăng nhập</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
