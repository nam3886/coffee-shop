<template>
  <div class="container">
    <div class="pt-2 pb-3 title d-flex align-items-center">
      <h5 class="m-0">Bán chạy nhất</h5>
      <a class="font-weight-bold ml-auto" href="#"
        >Xem tất cả <i class="feather-chevrons-right"></i
      ></a>
    </div>
    <div class="most_sale">
      <div class="row mb-3">
        <div
          v-for="(product, index) in listProduct"
          :key="index"
          class="col-md-4 mb-3"
        >
          <div
            class="
              d-flex
              align-items-center
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
                <button-add-cart :product-id="product.id">
                  <a href="#" @click.prevent="">
                    <i class="feather-shopping-cart"></i>
                  </a>
                </button-add-cart>
              </div>
              <div class="member-plan position-absolute">
                <span class="badge badge-dark">Đặc biệt</span>
              </div>
              <a href="#">
                <v-product-img
                  :product="product"
                  class="img-fluid item-img w-100"
                />
              </a>
            </div>
            <div class="p-3 position-relative">
              <div class="list-card-body">
                <h6 class="mb-1">
                  <a href="#" class="text-black">
                    {{ product.name }}
                  </a>
                </h6>
                <p class="text-gray mb-3">{{ product.price_format }}</p>
                <p class="text-gray mb-3 time">
                  <span
                    class="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2"
                    ><i class="feather-clock"></i> 15–25 phút</span
                  >
                  <span class="float-right text-black-50">
                    50.000đ cho 2 người</span
                  >
                </p>
              </div>
              <div class="list-card-badge">
                <span class="badge badge-danger">Giảm giá</span>&nbsp;
                <small>65% </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useProduct from "@/services/reuseable/useProduct.js";
import ButtonAddCart from "@/components/ButtonAddCart";

export default {
  components: { ButtonAddCart },

  setup() {
    const { listProduct, loading, error, getListProduct } = useProduct();

    getListProduct();

    return { listProduct, loading, error };
  },
};
</script>

// todo : price cần format
