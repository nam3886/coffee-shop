import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { reactive } from "vue";

const rules = {
  name: { required },
  phone: { required },
  payment_method: { required },
  delivery_method: { required },
  note: {},
  address_api: {},
};

const state = reactive({
  name: "",
  phone: "",
  payment_method: "cash",
  delivery_method: "shop",
  note: "",
  address_api: {},
});

export default function () {
  return {
    v$: useVuelidate(rules, state, { $lazy: true }),
    state,
  };
}
