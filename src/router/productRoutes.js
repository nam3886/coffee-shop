import FoodDetail from "@/pages/FoodDetail.vue";
import Trending from "@/pages/Trending.vue";

export default [
  {
    path: "/chi-tiet-san-pham",
    name: "food_detail",
    component: FoodDetail,
  },
  {
    path: "/san-pham",
    name: "product",
    component: Trending,
  },
];
