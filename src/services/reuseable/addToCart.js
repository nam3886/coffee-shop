import API from "@/services/api.js";

export default function (product_id, quantity) {
  API.post("/cart", {
    product_id: product_id,
    quantity: quantity,
  }).catch((err) => console.log(err));
}
