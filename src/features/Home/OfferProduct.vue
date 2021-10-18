<template>
  <div class="bg-white">
    <div class="container position-relative offer">
      <swiper v-bind="swiperOptions" class="offer-slider">
        <swiper-slide
          v-for="(product, index) in products"
          :key="index"
          class="cat-item px-1 py-3"
        >
          <a class="d-block text-center shadow-sm" :href="product.url">
            <v-product-img :product="product" class="img-fluid rounded" />
          </a>
        </swiper-slide>
      </swiper>
      <button
        class="slick-prev slick-arrow"
        aria-label="Previous"
        type="button"
        style=""
      >
        Previous
      </button>
      <button
        class="slick-next slick-arrow"
        aria-label="Next"
        type="button"
        style=""
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation } from "swiper";
import { ref } from "@vue/reactivity";
import getListProduct from "@/services/reuseable/getListProduct.js";
SwiperCore.use(Navigation);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    const products = ref([]);
    getListProduct("", function (listProduct) {
      products.value = listProduct;
    });

    const swiperOptions = {
      slidesPerView: 4,
      spaceBetween: 0,
      breakpoints: {
        768: {
          slidesPerView: 4,
        },
        480: {
          slidesPerView: 2,
        },
        320: {
          slidesPerView: 2,
        },
      },
      navigation: {
        prevEl: ".offer .slick-prev",
        nextEl: ".offer .slick-next",
      },
    };

    return { products, swiperOptions };
  },
};
</script>

<style></style>
