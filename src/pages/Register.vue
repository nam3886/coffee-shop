<template>
  <div class="login-page vh-100">
    <Banner></Banner>
    <RegisterForm></RegisterForm>
  </div>
</template>

<script>
import Banner from "@/features/Register/Banner.vue";
import RegisterForm from "@/features/Register/RegisterForm.vue";

export default {
  components: {
    Banner,
    RegisterForm,
    //cú pháp khai báo component ở trên của vue.js
  },
};
</script>

<style></style>
