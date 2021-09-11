<template>
  <nav id="main-nav">
    <ul class="second-nav">
      <li>
        <a href="home.html"><i class="feather-home mr-2"></i> Trang chủ</a>
      </li>
      <li>
        <a href="my_order.html"><i class="feather-list mr-2"></i> Đơn hàng</a>
      </li>
      <li>
        <a href="#"><i class="feather-edit-2 mr-2"></i> Xác thực</a>
        <ul>
          <li><a href="login.html">Đăng nhập</a></li>
          <li><a href="signup.html">Đăng kí</a></li>
          <li><a href="forgot_password.html">Quên mật khẩu</a></li>
          <li><a href="verification.html">Xác nhận</a></li>
          <li><a href="location.html">Địa chỉ</a></li>
        </ul>
      </li>
      <li>
        <a href="favorites.html"
          ><i class="feather-heart mr-2"></i> Yêu thích</a
        >
      </li>
      <li>
        <a href="trending.html"
          ><i class="feather-trending-up mr-2"></i> Nổi bật</a
        >
      </li>
      <li>
        <a href="most_popular.html"
          ><i class="feather-award mr-2"></i> Phổ biến nhất</a
        >
      </li>
      <li>
        <a href="restaurant.html"
          ><i class="feather-paperclip mr-2"></i> Chi tiết nhà hàng</a
        >
      </li>
      <li>
        <a href="checkout.html"><i class="feather-list mr-2"></i> Kiểm tra</a>
      </li>
      <li>
        <a href="successful.html"
          ><i class="feather-check-circle mr-2"></i> Đặt thành công</a
        >
      </li>
      <li>
        <a href="map.html"><i class="feather-map-pin mr-2"></i> Bản đồ</a>
      </li>
      <li>
        <a href="#"><i class="feather-user mr-2"></i> Profile</a>
        <ul>
          <li><a href="profile.html">Hồ sơ</a></li>
          <li><a href="favorites.html">Hỗ trợ giao hàng</a></li>
          <li><a href="contact-us.html">Liên hệ chúng tôi</a></li>
          <li><a href="terms.html">Thời hạn sử dụng</a></li>
          <li><a href="privacy.html">Bảo mật & Chính sách</a></li>
        </ul>
      </li>
      <li>
        <a href="#"><i class="feather-alert-triangle mr-2"></i> Error</a>
        <ul>
          <li><a href="not-found.html">Không tìm thấy</a></li>
          <li><a href="maintence.html"> Bảo trì</a></li>
          <li><a href="coming-soon.html">Quay lại sau</a></li>
        </ul>
      </li>
      <li>
        <a href="#"
          ><i class="feather-link mr-2"></i> Navigation Link Example</a
        >
        <ul>
          <li>
            <a href="#">Link Example 1</a>
            <ul>
              <li>
                <a href="#">Link Example 1.1</a>
                <ul>
                  <li><a href="#">Link</a></li>
                  <li><a href="#">Link</a></li>
                  <li><a href="#">Link</a></li>
                  <li><a href="#">Link</a></li>
                  <li><a href="#">Link</a></li>
                </ul>
              </li>
              <li>
                <a href="#">Link Example 1.2</a>
                <ul>
                  <li><a href="#">Link</a></li>
                  <li><a href="#">Link</a></li>
                  <li><a href="#">Link</a></li>
                  <li><a href="#">Link</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="#">Link Example 2</a></li>
          <li><a href="#">Link Example 3</a></li>
          <li><a href="#">Link Example 4</a></li>
          <li data-nav-custom-content>
            <div class="custom-message">
              You can add any custom content to your navigation items. This text
              is just an example.
            </div>
          </li>
        </ul>
      </li>
    </ul>
    <ul class="bottom-nav">
      <li class="email">
        <a class="text-danger" href="home.html">
          <p class="h5 m-0"><i class="feather-home text-danger"></i></p>
          Trang chủ
        </a>
      </li>
      <li class="github">
        <a href="faq.html">
          <p class="h5 m-0"><i class="feather-message-circle"></i></p>
          FAQ
        </a>
      </li>
      <li class="ko-fi">
        <a href="contact-us.html">
          <p class="h5 m-0"><i class="feather-phone"></i></p>
          Hỗ trợ
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import $ from "jquery";
import "@/assets/vendor/sidebar/hc-offcanvas-nav.js";

export default {
  mounted() {
    // init menu navigation
    $("#main-nav").hcOffcanvasNav({
      disableAt: false,
      customToggle: $(".toggle-navigation"),
      levelSpacing: 40,
      navTitle: "Mở rộng",
      levelTitles: true,
      levelTitleAsBack: true,
      pushContent: "#container",
      insertClose: 2,
    });
  },
};
</script>

<style></style>
