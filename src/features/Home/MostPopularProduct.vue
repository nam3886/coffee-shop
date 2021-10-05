<template>
  <div class="container">
    <div class="py-3 title d-flex align-items-center">
      <h5 class="m-0">Most popular</h5>
      <a class="font-weight-bold ml-auto" href="most_popular.html"
        >26 places <i class="feather-chevrons-right"></i
      ></a>
    </div>
    <div class="most_popular">
      <div class="row">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="col-md-3 pb-3"
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
                  :alt="product.image"
                  :src="product.image"
                  class="img-fluid item-img w-100"
                />
              </a>
            </div>
            <div class="p-3 position-relative">
              <div class="list-card-body">
                <h6 class="mb-1">
                  <a href="restaurant.html" class="text-black"
                    >{{ product.name }}
                  </a>
                </h6>
                <p class="text-gray mb-1 small">{{ product.price }}</p>
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
              <div class="list-card-badge">
                <span class="badge badge-danger">OFFER</span>
                <small>65% OSAHAN50</small>
              </div>
            </div>
          </div>
        </div>
        <div
          v-for="(product, index) in products"
          :key="index"
          class="col-md-3 pb-3"
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
                  :alt="product.image"
                  :src="product.image"
                  class="img-fluid item-img w-100"
                />
              </a>
            </div>
            <div class="p-3 position-relative">
              <div class="list-card-body">
                <h6 class="mb-1">
                  <a href="restaurant.html" class="text-black">{{
                    product.name
                  }}</a>
                </h6>
                <p class="text-gray mb-1 small">{{ product.price }}</p>
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
              <div class="list-card-badge">
                <span class="badge badge-success">OFFER</span>
                <small>65% off</small>
              </div>
            </div>
          </div>
        </div>
        <div
          v-for="(product, index) in products"
          :key="index"
          class="col-md-3 pb-3"
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
                  :alt="product.image"
                  :src="product.image"
                  class="img-fluid item-img w-100"
                />
              </a>
            </div>
            <div class="p-3 position-relative">
              <div class="list-card-body">
                <h6 class="mb-1">
                  <a href="restaurant.html" class="text-black"
                    >{{ product.name }}
                  </a>
                </h6>
                <p class="text-gray mb-1 small">{{ product.price }}</p>
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
              <div class="list-card-badge">
                <span class="badge badge-danger">OFFER</span>
                <small>65% OSAHAN50</small>
              </div>
            </div>
          </div>
        </div>
        <div
          v-for="(product, index) in products"
          :key="index"
          class="col-md-3 pb-3"
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
                  :alt="product.image"
                  :src="product.image"
                  class="img-fluid item-img w-100"
                />
              </a>
            </div>
            <div class="p-3 position-relative">
              <div class="list-card-body">
                <h6 class="mb-1">
                  <a href="restaurant.html" class="text-black">{{
                    product.name
                  }}</a>
                </h6>
                <p class="text-gray mb-1 small">{{ product.price }}</p>
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
              <div class="list-card-badge">
                <span class="badge badge-success">OFFER</span>
                <small>65% off</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="col-md-3 pb-3"
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
                  :alt="product.image"
                  :src="product.image"
                  class="img-fluid item-img w-100"
                />
              </a>
            </div>
            <div class="p-3 position-relative">
              <div class="list-card-body">
                <h6 class="mb-1">
                  <a href="restaurant.html" class="text-black"
                    >{{ product.name }}
                  </a>
                </h6>
                <p class="text-gray mb-1 small">{{ product.price }}</p>
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
              <div class="list-card-badge">
                <span class="badge badge-danger">OFFER</span>
                <small>65% OSAHAN50</small>
              </div>
            </div>
          </div>
        </div>
        <div
          v-for="(product, index) in products"
          :key="index"
          class="col-md-3 pb-3"
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
                  :alt="product.image"
                  :src="product.image"
                  class="img-fluid item-img w-100"
                />
              </a>
            </div>
            <div class="p-3 position-relative">
              <div class="list-card-body">
                <h6 class="mb-1">
                  <a href="restaurant.html" class="text-black">{{
                    product.name
                  }}</a>
                </h6>
                <p class="text-gray mb-1 small">{{ product.price }}</p>
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
              <div class="list-card-badge">
                <span class="badge badge-success">OFFER</span>
                <small>65% off</small>
              </div>
            </div>
          </div>
        </div>
        <div
          v-for="(product, index) in products"
          :key="index"
          class="col-md-3 pb-3"
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
                  :alt="product.image"
                  :src="product.image"
                  class="img-fluid item-img w-100"
                />
              </a>
            </div>
            <div class="p-3 position-relative">
              <div class="list-card-body">
                <h6 class="mb-1">
                  <a href="restaurant.html" class="text-black"
                    >{{ product.name }}
                  </a>
                </h6>
                <p class="text-gray mb-1 small">{{ product.price }}</p>
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
              <div class="list-card-badge">
                <span class="badge badge-danger">OFFER</span>
                <small>65% OSAHAN50</small>
              </div>
            </div>
          </div>
        </div>
        <div
          v-for="(product, index) in products"
          :key="index"
          class="col-md-3 pb-3"
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
                  :alt="product.image"
                  :src="product.image"
                  class="img-fluid item-img w-100"
                />
              </a>
            </div>
            <div class="p-3 position-relative">
              <div class="list-card-body">
                <h6 class="mb-1">
                  <a href="restaurant.html" class="text-black">{{
                    product.name
                  }}</a>
                </h6>
                <p class="text-gray mb-1 small">{{ product.price }}</p>
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
              <div class="list-card-badge">
                <span class="badge badge-success">OFFER</span>
                <small>65% off</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import getListProduct from "@/services/reuseable/getListProduct.js";
export default {
  setup() {
    const products = ref([]);
    getListProduct("", function (listProduct) {
      products.value = listProduct;
    });
    return { products };
  },
};
</script>

<style></style>
