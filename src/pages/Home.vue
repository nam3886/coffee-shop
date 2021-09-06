<template>
  <div class="osahan-home-page">
    <category />
    <offer-product />

    <div class="container">
      <week-trending-product />
      <most-popular-product />
      <most-sale-product />
    </div>
  </div>
</template>

<script>
import Category from "@/features/Home/Category.vue";
import OfferProduct from "@/features/Home/OfferProduct.vue";
import WeekTrendingProduct from "@/features/Home/WeekTrendingProduct.vue";
import MostPopularProduct from "@/features/Home/MostPopularProduct.vue";
import MostSaleProduct from "@/features/Home/MostSaleProduct.vue";

export default {
  components: {
    Category,
    OfferProduct,
    MostPopularProduct,
    WeekTrendingProduct,
    MostSaleProduct,
  },
};
</script>
