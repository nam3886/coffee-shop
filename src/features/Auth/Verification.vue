<template>
  <div
    class="d-flex align-items-center justify-content-center flex-column vh-100"
  >
    <div class="px-5 col-md-6 ml-auto">
      <div class="px-5 col-10 mx-auto mb-4">
        <h2 class="mb-3">Verify your phone number</h2>
        <h6 class="text-black-50">Enter your OTP code here</h6>
        <form @submit.prevent="">
          <InputCode v-model="code" :length="4" />
          <button class="btn btn-lg btn-primary btn-block">Verify Now</button>
        </form>
      </div>
      <div class="new-acc d-flex align-items-center justify-content-center">
        <router-link :to="{ name: 'login' }">
          <p class="text-center m-0">Quay lại đăng nhập?</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import InputCode from "@/features/Auth/components/InputCode.vue";
import { ref } from "@vue/reactivity";

export default {
  components: { InputCode },

  setup() {
    const code = ref("");

    return { code };
  },
};
</script>

<style></style>
