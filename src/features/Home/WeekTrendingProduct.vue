<template>
  <div class="container position-relative week-trending">
    <div class="pt-4 pb-2 title d-flex align-items-center">
      <h5 class="m-0">Trending this week</h5>
      <a class="font-weight-bold ml-auto" href="trending.html"
        >View all <i class="feather-chevrons-right"></i
      ></a>
    </div>
    <swiper v-bind="swiperOptions" class="trending-slider">
      <swiper-slide
        v-for="(product, index) in products"
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
              <a href="#"><i class="feather-heart"></i></a>
            </div>
            <div class="member-plan position-absolute">
              <span class="badge badge-dark">Promoted</span>
            </div>
            <a href="restaurant.html">
              <img
                alt="#"
                src="img/trending1.png"
                class="img-fluid item-img w-100"
              />
            </a>
          </div>
          <div class="p-3 position-relative">
            <div class="list-card-body">
              <h6 class="mb-1">
                <a href="restaurant.html" class="text-black"
                  >Famous Dave's Bar-B-Que
                </a>
              </h6>
              <p class="text-gray mb-3">Vegetarian • Indian • Pure veg</p>
              <p class="text-gray mb-3 time">
                <span class="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2"
                  ><i class="feather-clock"></i> 15–30 min</span
                >
                <span class="float-right text-black-50"> $350 FOR TWO</span>
              </p>
            </div>
            <div class="list-card-badge">
              <span class="badge badge-danger">OFFER</span>
              <small> Use Coupon OSAHAN50</small>
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
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use(Navigation);

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

    return { products, swiperOptions };
  },
};
</script>

<style></style>
