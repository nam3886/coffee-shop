<template>
  <div class="container position-relative category">
    <swiper v-bind="swiperOptions" class="cat-slider">
      <swiper-slide
        v-for="(category, index) in categories"
        :key="index"
        class="cat-item px-1 py-3"
      >
        <a
          class="bg-white rounded d-block p-2 text-center shadow-sm"
          :href="category.url"
        >
          <img
            :alt="category.name"
            :src="category.image"
            class="img-fluid mb-2"
          />
          <p class="m-0 small">{{ category.name }}</p>
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
</template>

<script>
import { AUTOPLAY_TIME } from "@/constants";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation, Autoplay } from "swiper";
SwiperCore.use([Navigation, Autoplay]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    const categories = [
      { image: "img/icons/Pizza.png", name: "Pizza", url: "#" },
      { image: "img/icons/Pizza.png", name: "Fizza", url: "#" },
      { image: "img/icons/Pizza.png", name: "Pizza", url: "#" },
      { image: "img/icons/Pizza.png", name: "Fizza", url: "#" },
      { image: "img/icons/Pizza.png", name: "Pizza", url: "#" },
      { image: "img/icons/Pizza.png", name: "Fizza", url: "#" },
      { image: "img/icons/Pizza.png", name: "Pizza", url: "#" },
      { image: "img/icons/Pizza.png", name: "Fizza", url: "#" },
      { image: "img/icons/Pizza.png", name: "Pizza", url: "#" },
      { image: "img/icons/Pizza.png", name: "Fizza", url: "#" },
      { image: "img/icons/Pizza.png", name: "Pizza", url: "#" },
      { image: "img/icons/Pizza.png", name: "Fizza", url: "#" },
      { image: "img/icons/Pizza.png", name: "Pizza", url: "#" },
      { image: "img/icons/Pizza.png", name: "Fizza", url: "#" },
    ];

    const swiperOptions = {
      slidesPerView: 8,
      spaceBetween: 0,
      autoplay: {
        delay: AUTOPLAY_TIME,
      },
      breakpoints: {
        768: {
          slidesPerView: 8,
        },
        480: {
          slidesPerView: 4,
        },
        320: {
          slidesPerView: 4,
        },
      },
      navigation: {
        prevEl: ".category .slick-prev",
        nextEl: ".category .slick-next",
      },
    };

    return {
      categories,
      swiperOptions,
    };
  },
};
</script>

<style></style>
