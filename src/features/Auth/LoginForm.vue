<template>
  <div class="d-flex align-items-center justify-content-center vh-100">
    <div class="px-5 col-md-6 ml-auto">
      <div class="px-5 col-10 mx-auto">
        <h2 class="text-dark my-0">Đăng nhập</h2>
        <p class="text-50">Hãy đăng nhập để tiếp tục</p>
        <form class="mt-5 mb-4" action="verification.html">
          <div class="form-group">
            <label for="exampleInputEmail1" class="text-dark">Email</label>
            <input
              id="exampleInputEmail1"
              type="email"
              placeholder="Nhập Email của bạn"
              class="form-control"
              aria-describedby="emailHelp"
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
          <button class="btn btn-primary btn-lg btn-block">ĐĂNG NHẬP</button>
          <div class="py-2">
            <button class="btn btn-lg btn-facebook btn-block">
              <i class="feather-facebook"></i> Đăng nhập bằng Facebook
            </button>
          </div>
        </form>
        <router-link
          :to="{ name: 'forgot_password' }"
          class="text-decoration-none"
        >
          <p class="text-center">Quên mật khẩu?</p>
        </router-link>
        <div class="d-flex align-items-center justify-content-center">
          <router-link :to="{ name: 'register' }">
            <p class="text-center m-0">Chưa có tài khoản? Đăng ký</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
