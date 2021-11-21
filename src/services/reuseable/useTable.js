import { ref, reactive } from "vue";
import { formatDate } from "@/helpers";
import { handleCallApi } from "@/services/reuseable/handleCallApi.js";

export default function () {
  const { response, errors, loading, action } = handleCallApi();
  const list = ref([]);
  const listOrderTable = ref([]);
  const orderTableDetail = ref({});
  const form = reactive({
    table_id: null,
    date: new Date(),
    note: null,
    person_number: null,
  });

  async function getList(date) {
    await action("get", "/table", { params: { date: formatDate(date) } });
    list.value = response.value;
  }

  async function getListOrderTable() {
    await action("get", "/order/table");
    listOrderTable.value = response.value;
  }

  async function getOrderTableDetail(id) {
    await action("get", `/order/table/${id}`);
    orderTableDetail.value = response.value;
  }

  async function store(date) {
    form.date = formatDate(date);
    await action("post", "/order/table", form);
  }

  async function checkin(tableId) {
    const params = { table_id: tableId };

    await action("get", "/checkin", { params });
  }

  async function getMap() {
    await action("get", "/image-map");
  }

  return {
    list,
    loading,
    form,
    errors,
    getList,
    store,
    getListOrderTable,
    listOrderTable,
    getOrderTableDetail,
    orderTableDetail,
    checkin,
    response,
    getMap,
  };
}
