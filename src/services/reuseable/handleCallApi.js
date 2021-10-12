import API from "@/services/api";
import { ref } from "vue-demi";

export default function (method, url, params, callOnInitialization) {
  const loading = ref(false);
  const errors = ref(null);
  const data = ref(null);

  async function reCallApi(params) {
    loading.value = true;
    errors.value = null;

    try {
      const res = await API[method](url, params);
      data.value = res.data.data;
      return new Promise((resolve) => resolve(data.value));
    } catch (error) {
      errors.value = error.response.data.errors;
      return new Promise((_, reject) => reject(error));
    } finally {
      loading.value = false;
    }
  }

  callOnInitialization && reCallApi(params);

  return { data, loading, errors, reCallApi };
}
