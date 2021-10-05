import API from "@/services/api.js";

export function addToCart(params) {
  return API.post("/cart", { ...params });
}
