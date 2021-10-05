<template>
  <div
    class="
      osahan-menu-fotter
      fixed-bottom
      bg-white
      px-3
      py-2
      text-center
      d-none
    "
  >
    <div class="row">
      <div class="col selected">
        <router-link :to="{ name: 'home' }">
          <p class="h4 m-0"><i class="feather-home text-danger"></i></p>
          Trang chủ
        </router-link>
      </div>
      <div class="col">
        <a
          href="most_popular.html"
          class="text-dark small font-weight-bold text-decoration-none"
        >
          <p class="h4 m-0"><i class="feather-map-pin"></i></p>
          Nổi bật
        </a>
      </div>
      <div class="col bg-white rounded-circle mt-n4 px-3 py-2">
        <div class="bg-danger rounded-circle mt-n0 shadow">
          <a
            href="checkout.html"
            class="text-white small font-weight-bold text-decoration-none"
          >
            <i class="feather-shopping-cart"></i>
          </a>
        </div>
      </div>
      <div class="col">
        <a
          href="favorites.html"
          class="text-dark small font-weight-bold text-decoration-none"
        >
          <p class="h4 m-0"><i class="feather-shopping-cart"></i></p>
          Yêu thích
        </a>
      </div>
      <div class="col">
        <a
          href="profile.html"
          class="text-dark small font-weight-bold text-decoration-none"
        >
          <p class="h4 m-0"><i class="feather-user"></i></p>
          Hồ sơ
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
