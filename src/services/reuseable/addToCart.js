import API from "@/services/api.js";

export default function (type, callback) {
  API.post("/cart")
    .then(function (res) {
      if (typeof callback === "function") {
        callback(res.data.data);
      }
    })
    .catch((err) => console.log(err));
}
