<template>
  <div class="d-flex align-items-center justify-content-center vh-100">
    <div class="px-5 col-md-6 ml-auto">
      <div class="px-5 col-10 mx-auto">
        <h2 class="text-dark my-0">Xin chào bạn</h2>
        <router-link :to="{ name: 'home' }" class="text-50">
          Trở về trang chủ
        </router-link>
        <form class="mt-5 mb-4" @submit.prevent="handleRegister">
          <v-alert
            v-for="(error, index) in errors"
            :key="index"
            :counter="true"
            :message="error.join()"
            type="danger"
          />
          <form-group v-model="v$.email">
            <label for="exampleInputNumber1" class="text-dark">
              <!-- Số điện thoại -->
              Email
            </label>
            <input
              id="exampleInputNumber1"
              v-model="v$.email.$model"
              placeholder="Nhập email của bạn"
              class="form-control"
              aria-describedby="numberHelp"
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
          <form-group v-model="v$.password_confirmation">
            <label for="exampleInputPassword2" class="text-dark">
              Nhập lại mật khẩu
            </label>
            <input
              id="exampleInputPassword2"
              v-model="v$.password_confirmation.$model"
              type="password"
              placeholder="Nhập lại"
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
            Đăng kí
          </v-button>
          <div class="py-2">
            <button class="btn btn-facebook btn-lg btn-block">
              <i class="feather-facebook"></i> Đăng nhập bằng Facebook
            </button>
          </div>
        </form>
      </div>
      <div class="new-acc d-flex align-items-center justify-content-center">
        <router-link :to="{ name: 'login' }">
          <p class="text-center m-0">Đã có tài khoản? Đăng nhập</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { signUp } from "@/services/reuseable/useAuth";
import signUpValidate from "@/validate/signUpValidate";
import FormGroup from "@/components/FormGroup";
import { localSetItem } from "@/helpers/local_storage";
import { TOKEN } from "@/constants";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { SET_IS_AUTHENTICATED } from "@/store/actionTypes";

export default {
  components: { FormGroup },

  setup() {
    const router = useRouter();
    const store = useStore();
    const { state: user, v$ } = signUpValidate();
    const { data: token, loading, errors, reCallApi } = signUp(user);

    async function handleRegister() {
      const result = await v$.value.$validate();
      if (!result) return;
      loading.value = true;

      await reCallApi(user);
      localSetItem(TOKEN, token.value.access_token);
      await store.dispatch(SET_IS_AUTHENTICATED, true);
      router.push({ name: "home" });
    }

    return { user, v$, handleRegister, loading, errors };
  },
};
</script>
