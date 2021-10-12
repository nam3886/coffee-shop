import API from "@/services/api";
import handleCallApi from "@/services/reuseable/handleCallApi";

export function storeOrder(params) {
  return API.post("/checkout", { ...params });
}

export function getListOrder(params) {
  return handleCallApi("get", "/checkout", { ...params }, true);
}
