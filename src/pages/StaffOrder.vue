<template>
  <template
    v-if="$store.getters.getProfile.role && $store.getters.getIsNotCustomer"
  >
    <div class="d-none">
      <div class="bg-primary border-bottom p-3 d-flex align-items-center">
        <a class="toggle togglew toggle-2" href="#"><span></span></a>
        <h4 class="font-weight-bold m-0 text-white">Đơn hàng</h4>
      </div>
    </div>
    <section class="py-4 osahan-main-body">
      <div class="container">
        <div class="row">
          <OrderProgress v-model="status" />
          <div class="tab-content col-md-9 overflow-auto">
            <ListOrder :status="status" />
          </div>
        </div>
      </div>
    </section>
  </template>
</template>

<script>
import OrderProgress from "@/features/Staff/OrderProgress.vue";
import ListOrder from "@/features/Staff/ListOrder.vue";
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { watchEffect } from "@vue/runtime-core";
import { useRouter } from "vue-router";

export default {
  components: {
    OrderProgress,
    ListOrder,
  },

  setup() {
    const store = useStore();
    const router = useRouter();
    const status = ref("non_received");

    watchEffect(() => {
      const { getIsNotCustomer: isNotCustomer, getProfile: profile } =
        store.getters;
      // has profile and has role customer => redirect to home
      profile.role && !isNotCustomer && router.push({ name: "home" });
    });

    return { status };
  },
};
</script>
