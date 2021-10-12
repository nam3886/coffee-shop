import API from "@/services/api";

export function storeOrder(params) {
  return API.post("/checkout", { ...params });
}
