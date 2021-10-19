<template>
  <div class="d-flex align-items-center justify-content-center vh-100">
    <img src="/img/bg3.svg.png" class="rounded float-start" alt="..." />
    <div class="px-5 col-md-6 ml-auto">
      <div class="px-5 col-10 mx-auto">
        <h2>Quên mật khẩu?</h2>
        <p>
          Nhập địa chỉ Email của bạn ở phía dưới và chúng tôi sẽ gửi bạn Email
          hướng dẫn cách thay đổi mật khẩu.
          <router-link :to="{ name: 'home' }" class="text-50">
            Trở về trang chủ
          </router-link>
        </p>
        <form action="login.html" class="mt-5 mb-4">
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input
              id="exampleInputEmail1"
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <button class="btn btn-primary btn-lg btn-block">Gửi</button>
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
