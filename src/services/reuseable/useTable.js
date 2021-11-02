import API from "@/services/api.js";
import { ref, reactive } from "vue";
import { formatDate } from "@/helpers";

export default function () {
  const list = ref([]);
  const listOrderTable = ref([]);
  const orderTableDetail = ref({});
  const errors = ref(null);
  const form = reactive({
    table_id: null,
    date: new Date(),
    note: null,
    person_number: null,
  });
  const loading = ref(false);

  async function getList() {
    loading.value = true;
    const res = await API.get("/table");
    list.value = res.data.data;
    loading.value = false;
  }

  async function getListOrderTable() {
    loading.value = true;
    const res = await API.get("/order/table");
    listOrderTable.value = res.data.data;
    loading.value = false;
  }

  async function getOrderTableDetail(id) {
    loading.value = true;
    const res = await API.get(`/order/table/${id}`);
    orderTableDetail.value = res.data.data;
    loading.value = false;
  }

  async function store(date) {
    loading.value = true;
    errors.value = null;
    form.date = formatDate(date);

    try {
      await API.post("/order/table", form);
    } catch (e) {
      errors.value =
        e.response.status === 422
          ? e.response.data.errors
          : [e.response.data.message];
    } finally {
      loading.value = false;
    }
  }

  async function checkTable(date) {
    loading.value = true;
    errors.value = null;
    form.date = formatDate(date);

    try {
      await API.post("/order/check/table", form);
    } catch (e) {
      errors.value =
        e.response.status === 422
          ? e.response.data.errors
          : [e.response.data.message];
    } finally {
      loading.value = false;
    }
  }

  return {
    list,
    loading,
    form,
    errors,
    getList,
    checkTable,
    store,
    getListOrderTable,
    listOrderTable,
    getOrderTableDetail,
    orderTableDetail,
  };
}
