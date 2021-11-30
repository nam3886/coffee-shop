import API from "@/services/api";
import { handleCallApi } from "@/services/reuseable/handleCallApi";
import { ref } from "vue";

export default function () {
  const { response, errors, loading, action } = handleCallApi();
  const list = ref([]);

  async function getList(params) {
    await action("get", "/checkout", { params });
    list.value = response.value;
  }

  async function store(params) {
    const res = await API.post("/checkout", params);
    response.value = res;
  }

  async function calculateShippingFee(params) {
    return await API.post("/location/calculate-fee", params);
  }

  return {
    response,
    errors,
    loading,
    list,
    getList,
    store,
    calculateShippingFee,
  };
}
