<template>
  <div class="col-md-8 mb-3">
    <div>
      <div
        id="accordionExample"
        class="accordion mb-3 rounded shadow-sm bg-white overflow-hidden"
      >
        <div class="osahan-card bg-white border-bottom overflow-hidden">
          <div id="headingOne" class="osahan-card-header">
            <h2 class="mb-0">
              <button
                class="d-flex p-3 align-items-center btn btn-link w-100"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <i class="feather-credit-card mr-3"></i>
                Thông tin thanh toán
                <i class="feather-chevron-down ml-auto"></i>
              </button>
            </h2>
          </div>
          <div
            id="collapseOne"
            class="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div class="osahan-card-body border-top p-3">
              <form class="form-row" @submit.prevent="handleSubmitCheckout">
                <v-alert
                  v-for="(error, index) in errors"
                  :key="index"
                  :counter="true"
                  :message="error.join()"
                  type="danger"
                  class="col-md-12"
                />
                <form-group v-model="v$.name" class="col-md-12">
                  <label class="form-label font-weight-bold small">
                    Họ tên
                  </label>
                  <div class="input-group">
                    <input
                      v-model="v$.name.$model"
                      placeholder="Vd: Nguyễn Văn A"
                      type="text"
                      class="form-control"
                    />
                  </div>
                </form-group>
                <form-group v-model="v$.phone" class="col-md-12">
                  <label class="form-label font-weight-bold small">
                    Số điện thoại
                  </label>
                  <input
                    v-model="v$.phone.$model"
                    placeholder="Vd: 0987654321"
                    type="text"
                    class="form-control"
                  />
                </form-group>
                <form-group
                  v-show="v$.delivery_method.$model === 'ship'"
                  v-model="v$.address_api"
                  class="col-md-12"
                >
                  <input-address v-model="v$.address_api.$model" />
                </form-group>
                <form-group v-model="v$.payment_method" class="col-md-12">
                  <label class="form-label font-weight-bold small">
                    Phương thức thanh toán
                  </label>
                  <div
                    v-for="method in paymentMethods"
                    :key="method.id"
                    class="custom-control custom-checkbox"
                  >
                    <input
                      :id="method.id"
                      v-model="v$.payment_method.$model"
                      :value="method.id"
                      type="radio"
                      name="payment_method"
                      class="custom-control-input"
                    />
                    <label
                      type="checkbox"
                      :for="method.id"
                      class="custom-control-label small pt-1"
                    >
                      {{ method.name }}
                    </label>
                  </div>
                </form-group>
                <form-group v-model="v$.delivery_method" class="col-md-12">
                  <label class="form-label font-weight-bold small">
                    Phương thức nhận hàng
                  </label>
                  <div
                    v-for="method in deliveryMethods"
                    :key="method.id"
                    class="custom-control custom-checkbox"
                  >
                    <input
                      :id="method.id"
                      v-model="v$.delivery_method.$model"
                      :value="method.id"
                      type="radio"
                      name="delivery_method"
                      class="custom-control-input"
                    />
                    <label
                      type="checkbox"
                      :for="method.id"
                      class="custom-control-label small pt-1"
                    >
                      {{ method.name }}
                    </label>
                  </div>
                </form-group>

                <div
                  v-if="shippingInfo.expect_time"
                  class="col-md-12 form-group mb-0"
                >
                  <span class="small pt-1">
                    Thời gian dự kiến giao hàng
                    <b>{{ shippingInfo.expect_time_format }}</b>
                    ({{ shippingInfo.expect_time }})
                  </span>
                </div>
                <teleport v-if="isVisible" to="#customerNote">
                  <form-group v-model="v$.note" class="mb-0 input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"
                        ><i class="feather-message-square"></i
                      ></span>
                    </div>
                    <textarea
                      v-model="v$.note.$model"
                      placeholder="Ghi chú khách hàng..."
                      class="form-control"
                    ></textarea>
                  </form-group>
                </teleport>
                <teleport v-if="isVisible" to="#btnSubmitCheckout">
                  <v-button
                    :loading="loading"
                    type="submit"
                    class="btn btn-success btn-block btn-lg d-flex align-items-center justify-content-center"
                    @click.prevent="handleSubmitCheckout"
                  >
                    Thanh toán {{ $store.getters.getCart.grand_total_format }}
                    <i class="feather-arrow-right"></i>
                  </v-button>
                </teleport>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { inject, onMounted, watchEffect } from "@vue/runtime-core";
import { wait } from "@/helpers";
import checkoutValidate from "@/validate/checkoutValidate";
import { useRouter } from "vue-router";
import useOrder from "@/services/reuseable/useOrder";
import FormGroup from "@/components/FormGroup";
import {
  EV_OVERLAY_TRANSPARENT,
  EV_GET_CART,
  EV_OVERLAY_LOADING,
} from "@/constants";
import InputAddress from "@/features/Cart/InputAddress.vue";
import { useStore } from "vuex";
import { SET_CART } from "@/store/actionTypes";
import { getCart } from "@/services/reuseable/useCart";
import { debounce } from "lodash";

export default {
  components: { FormGroup, InputAddress },

  setup() {
    const router = useRouter();
    const isVisible = ref(false);
    const emitter = inject("emitter");
    const { state: checkout, v$ } = checkoutValidate();
    const appStore = useStore();

    const paymentMethods = reactive([
      { name: "Thanh toán khi nhận hàng", id: "cash" },
      { name: "Thẻ ngân hàng", id: "vnpay" },
    ]);
    const deliveryMethods = reactive([
      { name: "Tại cửa hàng", id: "shop" },
      { name: "Giao hàng tận nhà", id: "ship" },
    ]);
    const {
      response,
      errors,
      loading,
      store,
      calculateShippingFee,
      clearUserSession,
    } = useOrder();

    onMounted(() => wait().then((isVisible.value = true)));

    async function handleSubmitCheckout() {
      const result = await v$.value.$validate();
      if (!result) return;
      emitter.emit(EV_OVERLAY_TRANSPARENT, true);

      await store(checkout);
      if (!errors.value) {
        checkoutMethods[checkout.payment_method] &&
          checkoutMethods[checkout.payment_method](response.value);
      }

      emitter.emit(EV_OVERLAY_TRANSPARENT, false);
    }

    const checkoutMethods = {
      cash: cashMethod,
      vnpay: vnpayMethod,
    };

    function cashMethod(res) {
      emitter.emit(EV_GET_CART);
      router.push({
        name: "order_success",
        params: { order_code: res.data.order_code },
      });
    }

    function vnpayMethod(res) {
      window.location.href = res.data.url;
    }

    /**HANDLE SHIPPING */
    const shippingInfo = ref({});

    watchEffect(() => {
      if (checkout.delivery_method !== "ship") return;
      if (!checkout.address_api.district || !checkout.address_api.ward) return;

      typeof handleCalculateShippingFee === "function" &&
        handleCalculateShippingFee();
    });

    watchEffect(() => {
      if (checkout.delivery_method === "ship") return;

      clearUserSession().then(async () => {
        const { data: cart } = await getCart();
        appStore.dispatch(SET_CART, cart.data);
      });
    });

    const handleCalculateShippingFee = debounce(() => {
      if (checkout.delivery_method !== "ship") return;
      emitter.emit(EV_OVERLAY_LOADING, true);
      // call api calculate shiping fee
      calculateShippingFee({
        district: checkout.address_api.district.id,
        ward: checkout.address_api.ward.id,
      })
        .then(async () => {
          const { data: cart } = await getCart();
          appStore.dispatch(SET_CART, cart.data);
        })
        .catch((e) => console.log({ e }))
        .finally(() => emitter.emit(EV_OVERLAY_LOADING, false));
    }, 1000);

    return {
      paymentMethods,
      deliveryMethods,
      checkout,
      v$,
      handleSubmitCheckout,
      isVisible,
      loading,
      errors,
      shippingInfo,
    };
  },
};
</script>
