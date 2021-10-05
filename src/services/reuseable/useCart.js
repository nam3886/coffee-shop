import API from "@/services/api.js";

export function storeCartItem(params) {
  return API.post("/cart", { ...params });
}

export function updateCartQuantity(quantity) {
  return API.put("/cart", { quantity });
}

export function deleteCartItem(cartId) {
  return API.delete(`/cart/${cartId}`);
}

export function getCart() {
  return API.get("/cart");
}

export function getCartDetail(cartId) {
  return API.get(`/cart/${cartId}`);
}
