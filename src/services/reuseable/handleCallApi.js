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

export function handleCallApi() {
  const errors = ref(null);
  const response = ref(null);
  const loading = ref(false);

  async function action(method, url, params) {
    errors.value = null;
    loading.value = true;

    try {
      const res = await API[method](url, { ...params });
      response.value = res.data.data;
    } catch (error) {
      errors.value = error.response.data.errors || error.response.data.message;
    } finally {
      loading.value = false;
    }
  }

  return { response, errors, loading, action };
}
