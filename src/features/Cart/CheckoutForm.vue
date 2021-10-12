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
                <div class="col-md-12 form-group mb-0">
                  <span class="small pt-1">
                    Vui lòng đến đúng hoặc trễ hơn không quá 10 phút so với thời
                    gian đặt bàn.
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
                    class="
                      btn btn-success btn-block btn-lg
                      d-flex
                      align-items-center
                      justify-content-center
                    "
                    @click.prevent="handleSubmitCheckout"
                  >
                    Thanh toán {{ $store.getters.getCart.total_format }}
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
import { onMounted } from "@vue/runtime-core";
import { wait } from "@/helpers";
import checkoutValidate from "@/validate/checkoutValidate";
import { useRouter } from "vue-router";
import { storeOrder } from "@/services/reuseable/useOrder";
import FormGroup from "@/components/FormGroup";

export default {
  components: { FormGroup },

  setup() {
    const router = useRouter();
    const isVisible = ref(false);
    const loading = ref(false);
    const errors = ref([]);
    const { state: checkout, v$ } = checkoutValidate();
    const paymentMethods = reactive([
      { name: "Tại cửa hàng", id: "cash" },
      { name: "Thẻ ngân hàng", id: "vnpay" },
      { name: "Ví điện tử Mono", id: "momo" },
    ]);

    onMounted(() => wait().then((isVisible.value = true)));

    async function handleSubmitCheckout() {
      const result = await v$.value.$validate();
      if (!result) return;
      loading.value = true;

      try {
        await storeOrder(checkout);
        router.push({ name: "checkout_success" });
      } catch (error) {
        errors.value = error.response.data.errors;
      } finally {
        loading.value = false;
      }
    }

    return {
      paymentMethods,
      checkout,
      v$,
      handleSubmitCheckout,
      isVisible,
      loading,
      errors,
    };
  },
};
</script>
// todo check loi be khi empty cart
