<template>
  <div
    class="d-flex align-items-center justify-content-center flex-column vh-100"
  >
    <div class="px-5 col-md-6 ml-auto">
      <div class="px-5 col-10 mx-auto">
        <h2>Forgot password</h2>
        <p>
          Enter your email address below and we'll send you an email with
          instructions on how to change your password
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
          <button class="btn btn-primary btn-lg btn-block">Send</button>
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
