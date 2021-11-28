<template>
  <div class="osahan-trending">
    <div class="container">
      <div class="most_popular py-5">
        <div class="d-flex align-items-center mb-4">
          <h3 class="font-weight-bold text-dark mb-0">
            {{ listProduct?.data?.length }} sản phẩm được tìm thấy
          </h3>
          <a
            href="#"
            data-toggle="modal"
            data-target="#filters"
            class="ml-auto btn btn-primary"
            @click.prevent="$EMITTER.emit(EV_SHOW_FILTER)"
          >
            Lọc
          </a>
        </div>
        <div class="row">
          <div
            v-for="(product, index) in listProduct.data"
            :key="index"
            class="col-lg-4 mb-3"
          >
            <div
              class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm grid-card"
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
                  />
                </a>
              </div>
              <div class="p-3 position-relative">
                <div class="list-card-body">
                  <h6 class="mb-1">
                    <a href="#" class="text-black" @click.prevent="">
                      {{ product.name }}
                    </a>
                  </h6>
                  <p class="text-gray mb-3"></p>
                  <p class="text-gray mb-3 time">
                    <span
                      class="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2"
                    >
                      {{ product.price_format }}
                    </span>
                  </p>
                </div>
                <div class="list-card-badge">
                  <span class="badge badge-danger">Giảm giá</span>&nbsp;
                  <small>65%</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import useProduct from "@/services/reuseable/useProduct.js";
import { watch } from "@vue/runtime-core";
import ButtonAddCart from "@/components/buttons/ButtonAddCart";
import { EV_SHOW_FILTER } from "@/constants";

export default {
  components: { ButtonAddCart },

  setup() {
    const route = useRoute();
    const { listProduct, loading, error, getListProduct } = useProduct();
    const fetchProduct = () => getListProduct(route.query);

    watch(route, fetchProduct);

    fetchProduct();

    return { listProduct, loading, error, EV_SHOW_FILTER };
  },
};
</script>
