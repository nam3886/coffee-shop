<template>
  <div class="container position-relative week-trending">
    <div class="pt-4 pb-2 title d-flex align-items-center">
      <h5 class="m-0">Tiêu biểu nhất tuần</h5>
      <a class="font-weight-bold ml-auto" href="trending.html"
        >Xem tất cả <i class="feather-chevrons-right"></i
      ></a>
    </div>
    <swiper v-bind="swiperOptions" class="trending-slider">
      <swiper-slide
        v-for="(product, index) in listProduct.data"
        :key="index"
        class="osahan-slider-item"
      >
        <div
          class="
            list-card
            bg-white
            h-100
            rounded
            overflow-hidden
            position-relative
            shadow-sm
          "
        >
          <div class="list-card-image">
            <div class="star position-absolute">
              <span class="badge badge-success"
                ><i class="feather-star"></i> 3.1 (300+)</span
              >
            </div>
            <div class="favourite-heart text-danger position-absolute">
              <button-add-cart :product-id="product.id">
                <a href="#" @click.prevent="">
                  <i class="feather-shopping-cart"></i>
                </a>
              </button-add-cart>
            </div>
            <div class="member-plan position-absolute">
              <span class="badge badge-dark">Đặc biệt</span>
            </div>
            <a href="#">
              <v-product-img
                :product="product"
                class="img-fluid item-img w-100"
              />
            </a>
          </div>
          <div class="p-3 position-relative">
            <div class="list-card-body">
              <h6 class="mb-1">
                <a href="restaurant.html" class="text-black"
                  >{{ product.name }}
                </a>
              </h6>
              <p class="text-gray mb-3">{{ product.price_format }}</p>
              <p class="text-gray mb-3 time">
                <span class="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2"
                  ><i class="feather-clock"></i> 15–30 phút</span
                >
                <span class="float-right text-black-50">
                  50.000đ cho 2 người</span
                >
              </p>
            </div>
            <div class="list-card-badge">
              <span class="badge badge-danger">OFFER</span>&nbsp;
              <small> Sử dụng mã giảm giá A01</small>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <button
      class="slick-prev slick-arrow"
      aria-label="Previous"
      type="button"
      style=""
    >
      Trước
    </button>
    <button
      class="slick-next slick-arrow"
      aria-label="Next"
      type="button"
      style=""
    >
      Tiếp
    </button>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation } from "swiper";
import useProduct from "@/services/reuseable/useProduct.js";
import ButtonAddCart from "@/components/ButtonAddCart";
SwiperCore.use(Navigation);

export default {
  components: {
    Swiper,
    SwiperSlide,
    ButtonAddCart,
  },

  setup() {
    const { listProduct, loading, error, getListProduct } = useProduct();

    getListProduct({ "filter[feature]": "week-trending" });

    const swiperOptions = {
      slidesPerView: 3,
      spaceBetween: 15,
      breakpoints: {
        768: {
          slidesPerView: 3,
        },
        480: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 1,
        },
      },
      navigation: {
        prevEl: ".week-trending .slick-prev",
        nextEl: ".week-trending .slick-next",
      },
    };

    return { listProduct, loading, error, swiperOptions };
  },
};
</script>
