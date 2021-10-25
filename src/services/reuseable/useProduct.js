import { ref } from "vue";
import API from "@/services/api.js";

export default function () {
  const listProduct = ref([]);
  const productDetail = ref({});
  const loading = ref(false);
  const error = ref("");

  async function getListProduct(params) {
    loading.value = true;

    try {
      const res = await API.get("/product", { ...params });
      listProduct.value = res.data.data;
    } catch (e) {
      error.value = e.response.data.message;
    } finally {
      loading.value = false;
    }
  }

  async function getProductDetail(id) {
    loading.value = true;

    try {
      const res = await API.get(`/product/${id}`);
      productDetail.value = res.data.data;
    } catch (e) {
      error.value = e.response.data.message;
    } finally {
      loading.value = false;
    }
  }

  return {
    listProduct,
    productDetail,
    loading,
    error,
    getListProduct,
    getProductDetail,
  };
}
