<template>
  <div class="login-page vh-100">
    <Banner></Banner>
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import Banner from "@/features/Login/Banner.vue";
import LoginForm from "@/features/Login/LoginForm.vue";

// link file LoginForm và Banner.vue vào file lớn Login.vue

export default {
  components: {
    Banner,
    LoginForm,
    //cú pháp khai báo component ở trên của vue.js
  },
};
</script>

<style></style>
