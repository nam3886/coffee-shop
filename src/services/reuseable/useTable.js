import API from "@/services/api.js";

export function getTableMap() {
  return API.get("/table");
}
