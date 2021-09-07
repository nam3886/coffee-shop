<template>
  <div class="login-page vh-100">
    <Banner />
    <LoginForm v-if="currentRouteName === 'login'" />
    <RegisterForm v-if="currentRouteName === 'register'" />
    <ForgotPasswordForm v-if="currentRouteName === 'forgot_password'" />
  </div>
</template>

<script>
import Banner from "@/features/Auth/Banner.vue";
import LoginForm from "@/features/Auth/LoginForm.vue";
import RegisterForm from "@/features/Auth/RegisterForm.vue";
import ForgotPasswordForm from "@/features/Auth/ForgotPasswordForm.vue";
import { computed } from "@vue/reactivity";
import { useRouter } from "vue-router";
// link file LoginForm và Banner.vue vào file lớn Login.vue

export default {
  components: {
    Banner,
    LoginForm,
    RegisterForm,
    ForgotPasswordForm,
    //cú pháp khai báo component ở trên của vue.js
  },

  setup() {
    const router = useRouter();
    const currentRouteName = computed(() => router.currentRoute.value.name);

    return { currentRouteName };
  },
};
</script>

<style></style>
