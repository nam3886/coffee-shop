import API from "@/services/api.js";

export function saveTableMap(params) {
  return API.post("/table", { ...params });
}

export function getTableMap() {
  return API.get("/table");
}
