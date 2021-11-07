import FoodDetail from "@/pages/FoodDetail.vue";
import Product from "@/pages/Product.vue";

export default [
  {
    path: "/chi-tiet-san-pham",
    name: "food_detail",
    component: FoodDetail,
  },
  {
    path: "/san-pham",
    name: "product",
    component: Product,
  },
];
