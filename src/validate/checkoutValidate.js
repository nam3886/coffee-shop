import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { reactive } from "vue";

const rules = {
  name: { required },
  phone: { required },
  payment_method: { required },
  note: {},
};

const state = reactive({
  name: "",
  phone: "",
  payment_method: "",
  note: "",
});

export default function () {
  return {
    v$: useVuelidate(rules, state, { $lazy: true }),
    state,
  };
}
