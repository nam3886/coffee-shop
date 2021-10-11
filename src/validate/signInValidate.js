import useVuelidate from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";
import { reactive } from "vue";

const rules = {
  email: { required, email },
  password: { required },
};

const state = reactive({
  email: "",
  password: "",
  password_confirmation: "",
});

export default function () {
  return {
    v$: useVuelidate(rules, state, { $lazy: true }),
    state,
  };
}
