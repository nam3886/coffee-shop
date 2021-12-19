<template>
  <div class="container">
    <div class="py-3 title d-flex align-items-center">
      <h5 class="m-0">Phổ biến nhất</h5>
      <ButtonViewAll product-type="popular" />
    </div>
    <div class="most_popular">
      <div class="row">
        <div
          v-for="(product, index) in listProduct.data"
          :key="index"
          class="col-md-3 pb-3"
        >
          <div
            class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm"
          >
            <div class="list-card-image">
              <div class="star position-absolute">
                <span class="badge badge-success"
                  ><i class="feather-star"></i> 3.1 (300+)</span
                >
              </div>
              <div class="favourite-heart text-danger position-absolute">
                <button-add-cart :product-id="product.id">
                  <a href="#" @click.prevent="">
                    <i class="feather-shopping-cart"></i>
                  </a>
                </button-add-cart>
              </div>
              <div class="member-plan position-absolute">
                <span class="badge badge-dark">Đặc biệt</span>
              </div>
              <a href="#" @click.prevent="">
                <v-product-img
                  :product="product"
                  class="img-fluid item-img w-100"
                  style="height: 175px"
                />
              </a>
            </div>
            <div class="p-3 position-relative">
              <div class="list-card-body">
                <h6 class="mb-1">
                  <a href="#" class="text-black" @click.prevent=""
                    >{{ product.name }}
                  </a>
                </h6>
                <p class="text-gray mb-1 small">{{ product.price_format }}</p>
                <p class="text-gray mb-1 rating"></p>
                <ul class="rating-stars list-unstyled">
                  <li>
                    <i class="feather-star star_active"></i>
                    <i class="feather-star star_active"></i>
                    <i class="feather-star star_active"></i>
                    <i class="feather-star star_active"></i>
                    <i class="feather-star"></i>
                  </li>
                </ul>
                <p></p>
              </div>
              <!-- <div class="list-card-badge">
                <span class="badge badge-danger">Giảm giá</span>&nbsp;
                <small>65% </small>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useProduct from "@/services/reuseable/useProduct.js";
import ButtonAddCart from "@/components/buttons/ButtonAddCart";
import ButtonViewAll from "./ButtonViewAll.vue";

export default {
  components: { ButtonAddCart, ButtonViewAll },

  setup() {
    const { listProduct, loading, error, getListProduct } = useProduct();

    getListProduct({ "filter[feature]": "popular", paginate: 8 });

    return { listProduct, loading, error };
  },
};
</script>
