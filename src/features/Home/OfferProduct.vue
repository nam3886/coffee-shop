<template>
  <div class="bg-white">
    <div class="container position-relative offer">
      <swiper v-bind="swiperOptions" class="offer-slider">
        <swiper-slide
          v-for="(product, index) in listProduct.data"
          :key="index"
          class="cat-item px-1 py-3"
        >
          <a class="d-block text-center shadow-sm" :href="product.url">
            <v-product-img
              :product="product"
              class="img-fluid rounded"
              style="height: 180px"
            />
          </a>
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
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation } from "swiper";
import useProduct from "@/services/reuseable/useProduct.js";
SwiperCore.use(Navigation);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    const { listProduct, loading, error, getListProduct } = useProduct();

    getListProduct({ "filter[feature]": "offer", paginate: 6 });

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

    return { listProduct, loading, error, swiperOptions };
  },
};
</script>
