<template>
  <header class="section-header">
    <section class="header-main shadow-sm bg-white">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-1">
            <router-link :to="{ name: 'home' }" class="brand-wrap mb-0">
              <VImg alt="#" class="img-fluid" src="img/logo_web.png" />
            </router-link>
            <!-- brand-wrap.// -->
          </div>
          <div class="col-3 d-flex align-items-center m-none">
            <div class="dropdown mr-3">
              <a
                class="text-dark dropdown-toggle d-flex align-items-center py-3"
                href="#"
                @click.prevent="$EMITTER.emit(EV_SHOW_FILTER)"
              >
                <div>
                  <i
                    class="
                      feather-map-pin
                      mr-2
                      bg-light
                      rounded-pill
                      p-2
                      icofont-size
                    "
                  ></i>
                </div>
                <div>
                  <p class="text-muted mb-0 small">Lọc sản phẩm</p>
                  Bộ lọc (3)
                </div>
              </a>
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
                  <VImg
                    :is-url="true"
                    :src="$store.getters.getProfile.avatar"
                    alt="#"
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
                  <span>
                    Giỏ hàng
                    <span v-if="$store.getters.getCart.count">
                      x {{ $store.getters.getCart.count }}
                    </span>
                  </span>
                </div>
              </router-link>

              <router-link
                :to="{ name: 'booking_table' }"
                class="widget-header mr-4 text-dark"
              >
                <div class="icon d-flex align-items-center">
                  <i class="feather-award h6 mr-2 mb-0"></i>
                  <span>Đặt bàn</span>
                </div>
              </router-link>
              <ButtonToggleNavigation />
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
import ButtonLogout from "@/components/buttons/ButtonLogout";
import ButtonToggleNavigation from "@/layouts/ButtonToggleNavigation";
import { EV_SHOW_FILTER } from "@/constants";

export default {
  components: { ButtonLogout, ButtonToggleNavigation },

  setup() {
    return { EV_SHOW_FILTER };
  },
};
</script>
