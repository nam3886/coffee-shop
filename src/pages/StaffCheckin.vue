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
          <CheckinProgress v-model="status" />
          <div class="tab-content col-md-9 overflow-auto">
            <ListCheckin />
          </div>
        </div>
      </div>
    </section>
  </template>
</template>

<script>
import CheckinProgress from "@/features/Staff/CheckinProgress.vue";
import ListCheckin from "@/features/Staff/ListCheckin.vue";
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { watchEffect } from "@vue/runtime-core";
import { useRouter } from "vue-router";

export default {
  components: {
    CheckinProgress,
    ListCheckin,
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
