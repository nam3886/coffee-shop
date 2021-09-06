<template>
  <div class="bg-white">
    <div class="container">
      <swiper :slides-per-view="4" class="offer-slider">
        <swiper-slide
          v-for="(product, index) in products"
          :key="index"
          class="cat-item px-1 py-3"
        >
          <a class="d-block text-center shadow-sm" :href="product.url">
            <img
              :alt="product.image"
              :src="product.image"
              class="img-fluid rounded"
            />
          </a>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    const products = [
      { image: "img/pro1.jpg", url: "#" },
      { image: "img/pro1.jpg", url: "#" },
      { image: "img/pro1.jpg", url: "#" },
      { image: "img/pro1.jpg", url: "#" },
      { image: "img/pro1.jpg", url: "#" },
      { image: "img/pro1.jpg", url: "#" },
      { image: "img/pro1.jpg", url: "#" },
      { image: "img/pro1.jpg", url: "#" },
      { image: "img/pro1.jpg", url: "#" },
      { image: "img/pro1.jpg", url: "#" },
      { image: "img/pro1.jpg", url: "#" },
      { image: "img/pro1.jpg", url: "#" },
      { image: "img/pro1.jpg", url: "#" },
      { image: "img/pro1.jpg", url: "#" },
    ];

    return { products };
  },
};
</script>

<style></style>
