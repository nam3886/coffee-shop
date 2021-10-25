import { ref } from "vue";
import API from "@/services/api.js";

export default function () {
  const listCategory = ref([]);
  const loading = ref(false);
  const error = ref("");

  async function getListCategory() {
    loading.value = true;

    try {
      const res = await API.get("/category/");
      listCategory.value = res.data.data;
    } catch (e) {
      error.value = e.response.data.message;
    } finally {
      loading.value = false;
    }
  }

  return { listCategory, loading, error, getListCategory };
}
