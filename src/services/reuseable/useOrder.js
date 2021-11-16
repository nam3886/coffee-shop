import API from "@/services/api";
import { handleCallApi } from "@/services/reuseable/handleCallApi";
import { ref } from "vue";

export default function () {
  const { response, errors, loading, action } = handleCallApi();
  const list = ref([]);
  const listOrderForStaff = ref([]);

  async function getList(params) {
    await action("get", "/checkout", { params });
    list.value = response.value;
  }

  async function store(params) {
    const res = await API.post("/checkout", params);
    response.value = res;
  }

  async function getListOrderForStaff(params) {
    await action("get", "/list-order", { params });
    listOrderForStaff.value = response.value;
  }

  return {
    response,
    errors,
    loading,
    list,
    getList,
    store,
    listOrderForStaff,
    getListOrderForStaff,
  };
}
