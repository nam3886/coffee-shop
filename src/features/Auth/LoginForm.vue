<template>
  <div class="d-flex align-items-center justify-content-center vh-100">
    <div class="px-5 col-md-6 ml-auto">
      <div class="px-5 col-10 mx-auto">
        <h2 class="text-dark my-0">Đăng nhập</h2>
        <p class="text-50">Hãy đăng nhập để tiếp tục</p>
        <form class="mt-5 mb-4" @submit.prevent="handleLogin">
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
          <button type="submit" class="btn btn-primary btn-lg btn-block">
            ĐĂNG NHẬP
          </button>
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
import { signIn, getProfile } from "@/services/reuseable/useAuth";
import signInValidate from "@/features/Auth/validate/signInValidate";
import { localSetItem } from "@/helpers/local_storage";
import { TOKEN } from "@/constants";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { SET_IS_AUTHENTICATED, SET_PROFILE } from "@/store/actionTypes";
import FormGroup from "@/components/FormGroup";

export default {
  components: { FormGroup },

  setup() {
    const { state: user, v$ } = signInValidate();
    const store = useStore();
    const router = useRouter();

    async function handleLogin() {
      const result = await v$.value.$validate();
      if (!result) return;

      try {
        const { data: token } = await signIn(user);
        localSetItem(TOKEN, token.data.access_token);
        const { data: profile } = await getProfile();
        store.dispatch(SET_IS_AUTHENTICATED, true);
        store.dispatch(SET_PROFILE, profile.data);
        router.push({ name: "home" });
      } catch (error) {
        console.log([error]);
      }
    }

    return { user, v$, handleLogin };
  },
};
</script>
