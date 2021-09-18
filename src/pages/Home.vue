<template>
  <div class="osahan-home-page">
    <category />
    <offer-product />
    <week-trending-product />
    <most-popular-product />
    <most-sale-product />
    <div class="row bg-danger">
      <div class="col">hi im Nam</div>
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

<style scoped></style>

// todo sửa label offer ở trang home
