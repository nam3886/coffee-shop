import API from "@/services/api.js";

export function storeCartItem(params) {
  return API.post("/cart", { ...params });
}

export function updateCartQuantity(cartId, params) {
  return API.put(`/cart/${cartId}`, params);
}

export function deleteCartItem(cartId) {
  return API.delete(`/cart/${cartId}`);
}

export async function getCart() {
  return await API.get("/cart");
}

export function getCartDetail(cartId) {
  return API.get(`/cart/${cartId}`);
}
