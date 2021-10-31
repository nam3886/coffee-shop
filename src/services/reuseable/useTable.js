import API from "@/services/api.js";
import { ref, reactive } from "vue";

export default function () {
  const list = ref([]);
  const form = reactive({ table_id: null, start: null, end: null });
  const loading = ref(false);

  async function getList() {
    loading.value = true;
    const res = await API.get("/table");
    list.value = res.data.data;
    loading.value = false;
  }

  async function store() {
    loading.value = true;
    await API.post("/table", form);
    loading.value = false;
  }

  return { list, loading, form, getList, store };
}
