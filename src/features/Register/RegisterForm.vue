<template>
  <div
    class="d-flex align-items-center justify-content-center flex-column vh-100"
  >
    <div class="px-5 col-md-6 ml-auto">
      <div class="px-5 col-10 mx-auto">
        <h2 class="text-dark my-0">Hello There.</h2>
        <p class="text-50">Sign up to continue</p>
        <form class="mt-5 mb-4" action="verification.html">
          <div class="form-group">
            <label for="exampleInputName1" class="text-dark">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              class="form-control"
              id="exampleInputName1"
              aria-describedby="nameHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputNumber1" class="text-dark"
              >Mobile Number</label
            >
            <input
              type="number"
              placeholder="Enter Mobile"
              class="form-control"
              id="exampleInputNumber1"
              aria-describedby="numberHelp"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1" class="text-dark"
              >Password</label
            >
            <input
              type="password"
              placeholder="Enter Password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button class="btn btn-primary btn-lg btn-block">SIGN UP</button>
          <div class="py-2">
            <button class="btn btn-facebook btn-lg btn-block">
              <i class="feather-facebook"></i> Connect with Facebook
            </button>
          </div>
        </form>
      </div>
      <div class="new-acc d-flex align-items-center justify-content-center">
        <a href="login.html">
          <p class="text-center m-0">Already an account? Sign in</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
