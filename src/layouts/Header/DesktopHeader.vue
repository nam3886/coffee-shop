<template>
  <header class="section-header">
    <section class="header-main shadow-sm bg-white">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-1">
            <router-link :to="{ name: 'home' }" class="brand-wrap mb-0">
              <img alt="#" class="img-fluid" src="img/logo_web.png" />
            </router-link>
            <!-- brand-wrap.// -->
          </div>
          <div class="col-3 d-flex align-items-center m-none">
            <div class="dropdown mr-3">
              <div
                class="dropdown-menu p-0 drop-loc"
                aria-labelledby="navbarDropdown"
              >
                <div class="osahan-country">
                  <div class="search_location bg-primary p-3 text-right">
                    <div class="input-group rounded shadow-sm overflow-hidden">
                      <div class="input-group-prepend">
                        <button
                          class="
                            border-0
                            btn btn-outline-secondary
                            text-dark
                            bg-white
                            btn-block
                          "
                        >
                          <i class="feather-search"></i>
                        </button>
                      </div>
                      <input
                        type="text"
                        class="shadow-none border-0 form-control"
                        placeholder="Enter Your Location"
                      />
                    </div>
                  </div>
                  <div class="p-3 border-bottom">
                    <a href="home.html" class="text-decoration-none">
                      <p class="font-weight-bold text-primary m-0">
                        <i class="feather-navigation"></i> New York, USA
                      </p>
                    </a>
                  </div>
                  <div class="filter">
                    <h6 class="px-3 py-3 bg-light pb-1 m-0 border-bottom">
                      Choose your country
                    </h6>
                    <div class="custom-control border-bottom px-0 custom-radio">
                      <input
                        id="customRadio1"
                        type="radio"
                        name="location"
                        class="custom-control-input"
                      />
                      <label
                        class="custom-control-label py-3 w-100 px-3"
                        for="customRadio1"
                        >Afghanistan</label
                      >
                    </div>
                    <div class="custom-control border-bottom px-0 custom-radio">
                      <input
                        id="customRadio2"
                        type="radio"
                        name="location"
                        class="custom-control-input"
                        checked=""
                      />
                      <label
                        class="custom-control-label py-3 w-100 px-3"
                        for="customRadio2"
                        >India</label
                      >
                    </div>
                    <div class="custom-control border-bottom px-0 custom-radio">
                      <input
                        id="customRadio3"
                        type="radio"
                        name="location"
                        class="custom-control-input"
                      />
                      <label
                        class="custom-control-label py-3 w-100 px-3"
                        for="customRadio3"
                        >USA</label
                      >
                    </div>
                    <div class="custom-control border-bottom px-0 custom-radio">
                      <input
                        id="customRadio4"
                        type="radio"
                        name="location"
                        class="custom-control-input"
                      />
                      <label
                        class="custom-control-label py-3 w-100 px-3"
                        for="customRadio4"
                        >Australia</label
                      >
                    </div>
                    <div class="custom-control border-bottom px-0 custom-radio">
                      <input
                        id="customRadio5"
                        type="radio"
                        name="location"
                        class="custom-control-input"
                      />
                      <label
                        class="custom-control-label py-3 w-100 px-3"
                        for="customRadio5"
                        >Japan</label
                      >
                    </div>
                    <div class="custom-control px-0 custom-radio">
                      <input
                        id="customRadio6"
                        type="radio"
                        name="location"
                        class="custom-control-input"
                      />
                      <label
                        class="custom-control-label py-3 w-100 px-3"
                        for="customRadio6"
                        >China</label
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- col.// -->
          <div class="col-8">
            <div class="d-flex align-items-center justify-content-end pr-5">
              <!-- search -->
              <a href="search.html" class="widget-header mr-4 text-dark">
                <div class="icon d-flex align-items-center">
                  <i class="feather-search h6 mr-2 mb-0"></i>
                  <span>Tìm kiếm</span>
                </div>
              </a>
              <router-link
                v-if="!$store.getters.getIsAuthenticated"
                :to="{ name: 'login' }"
                class="widget-header mr-4 text-dark m-none"
              >
                <!-- đây là thẻ thay thế thẻ <a></a> trong cú pháp của vue.js để load trang ko reload  -->
                <div class="icon d-flex align-items-center">
                  <i class="feather-user h6 mr-2 mb-0"></i>
                  <span>Đăng nhập</span>
                </div>
              </router-link>
              <!-- my account -->
              <div
                v-if="$store.getters.getIsAuthenticated"
                class="dropdown mr-4 m-none"
              >
                <a
                  id="dropdownMenuButton"
                  href="#"
                  class="dropdown-toggle text-dark py-3 d-block"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    alt="#"
                    :src="$store.getters.getProfile.avatar?.url"
                    class="
                      img-fluid
                      rounded-circle
                      header-user
                      mr-2
                      header-user
                    "
                  />
                  {{ $store.getters.getProfile.name }}
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right"
                  aria-labelledby="dropdownMenuButton"
                >
                  <a class="dropdown-item" href="profile.html">My account</a>
                  <a class="dropdown-item" href="faq.html">Delivery support</a>
                  <a class="dropdown-item" href="contact-us.html">Contant us</a>
                  <a class="dropdown-item" href="terms.html">Term of use</a>
                  <a class="dropdown-item" href="privacy.html"
                    >Privacy policy</a
                  >
                  <button-logout class="w-100 text-left">
                    <a class="dropdown-item" href="#" @click.prevent="">
                      Đăng xuất
                    </a>
                  </button-logout>
                </div>
              </div>
              <!-- signin -->
              <router-link
                :to="{ name: 'cart' }"
                class="widget-header mr-4 text-dark"
              >
                <div class="icon d-flex align-items-center">
                  <i class="feather-shopping-cart h6 mr-2 mb-0"></i>
                  <span>Giỏ hàng</span>
                </div>
              </router-link>
              <a class="toggle-navigation" href="#">
                <span></span>
              </a>
            </div>
            <!-- widgets-wrap.// -->
          </div>
          <!-- col.// -->
        </div>
        <!-- row.// -->
      </div>
      <!-- container.// -->
    </section>
    <!-- header-main .// -->
  </header>
</template>

<script>
import ButtonLogout from "@/components/ButtonLogout";

export default {
  components: { ButtonLogout },
};
</script>
