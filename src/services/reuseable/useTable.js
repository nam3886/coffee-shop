import API from "@/services/api.js";
import { ref, reactive } from "vue";
import { formatDate } from "@/helpers";

export default function () {
  const list = ref([]);
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

  async function store() {
    loading.value = true;
    form.date = formatDate(form.date);
    await API.post("/order/table", form);
    loading.value = false;
  }

  async function checkTable() {
    loading.value = true;
    form.date = formatDate(form.date);
    await API.post("/order/check/table", form);
    loading.value = false;
  }

  return { list, loading, form, getList, checkTable, store };
}
