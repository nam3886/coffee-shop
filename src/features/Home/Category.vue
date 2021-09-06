<template>
  <div class="container">
    <swiper :slides-per-view="8" class="cat-slider">
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
    const categories = [
      { image: "img/icons/Pizza.png", name: "Pizza", url: "#" },
      { image: "img/icons/Pizza.png", name: "Pizza", url: "#" },
      { image: "img/icons/Pizza.png", name: "Pizza", url: "#" },
      { image: "img/icons/Pizza.png", name: "Pizza", url: "#" },
      { image: "img/icons/Pizza.png", name: "Pizza", url: "#" },
      { image: "img/icons/Pizza.png", name: "Pizza", url: "#" },
      { image: "img/icons/Pizza.png", name: "Pizza", url: "#" },
      { image: "img/icons/Pizza.png", name: "Pizza", url: "#" },
      { image: "img/icons/Pizza.png", name: "Pizza", url: "#" },
      { image: "img/icons/Pizza.png", name: "Pizza", url: "#" },
      { image: "img/icons/Pizza.png", name: "Pizza", url: "#" },
      { image: "img/icons/Pizza.png", name: "Pizza", url: "#" },
      { image: "img/icons/Pizza.png", name: "Pizza", url: "#" },
      { image: "img/icons/Pizza.png", name: "Pizza", url: "#" },
    ];

    return { categories };
  },
};
</script>

<style></style>
