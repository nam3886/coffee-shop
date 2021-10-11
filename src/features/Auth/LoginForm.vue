<template>
  <div class="d-flex align-items-center justify-content-center vh-100">
    <div class="px-5 col-md-6 ml-auto">
      <div class="px-5 col-10 mx-auto">
        <h2 class="text-dark my-0">Đăng nhập</h2>
        <router-link :to="{ name: 'home' }" class="text-50">
          Trở về trang chủ
        </router-link>
        <form class="mt-5 mb-4" @submit.prevent="handleLogin">
          <v-alert
            v-for="(error, index) in errors"
            :key="index"
            :counter="true"
            :message="error.join()"
            type="danger"
          />
          <form-group v-model="v$.email">
            <label for="exampleInputEmail1" class="text-dark">Email</label>
            <input
              id="exampleInputEmail1"
              v-model="v$.email.$model"
              type="email"
              placeholder="Nhập Email của bạn"
              class="form-control"
              aria-describedby="emailHelp"
            />
          </form-group>
          <form-group v-model="v$.password">
            <label for="exampleInputPassword1" class="text-dark">
              Mật khẩu
            </label>
            <input
              id="exampleInputPassword1"
              v-model="v$.password.$model"
              type="password"
              placeholder="Nhập mật khẩu"
              class="form-control"
            />
          </form-group>
          <v-button
            :loading="loading"
            type="submit"
            class="
              btn btn-primary btn-lg btn-block
              d-flex
              align-items-center
              justify-content-center
            "
          >
            ĐĂNG NHẬP
          </v-button>
          <div class="py-2">
            <button class="btn btn-lg btn-facebook btn-block">
              <i class="feather-facebook"></i> Đăng nhập bằng Facebook
            </button>
          </div>
        </form>
        <router-link
          :to="{ name: 'forgot_password' }"
          class="text-decoration-none"
        >
          <p class="text-center">Quên mật khẩu?</p>
        </router-link>
        <div class="d-flex align-items-center justify-content-center">
          <router-link :to="{ name: 'register' }">
            <p class="text-center m-0">Chưa có tài khoản? Đăng ký</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { signIn } from "@/services/reuseable/useAuth";
import signInValidate from "@/validate/signInValidate";
import { localSetItem } from "@/helpers/local_storage";
import { TOKEN } from "@/constants";
import { useRouter } from "vue-router";
import FormGroup from "@/components/FormGroup";
import { useStore } from "vuex";
import { SET_IS_AUTHENTICATED } from "@/store/actionTypes";
import { ref } from "@vue/reactivity";

export default {
  components: { FormGroup },

  setup() {
    const { state: user, v$ } = signInValidate();
    const router = useRouter();
    const store = useStore();
    const loading = ref(false);
    const errors = ref([]);

    async function handleLogin() {
      const result = await v$.value.$validate();
      if (!result) return;
      loading.value = true;

      try {
        const { data: token } = await signIn(user);
        localSetItem(TOKEN, token.data.access_token);
        await store.dispatch(SET_IS_AUTHENTICATED, true);
        router.push({ name: "home" });
      } catch (error) {
        errors.value = error.response.data.errors;
      } finally {
        loading.value = false;
      }
    }

    return { user, v$, handleLogin, loading, errors };
  },
};
</script>
