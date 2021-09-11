<template>
  <div class="osahan-home-page">
    <category />
    <offer-product />
    <week-trending-product />
    <most-popular-product />
    <most-sale-product />
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

// todo sửa label offer ở trang home
