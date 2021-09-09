import axios from "axios";
import { localGetItem } from "@/helpers/local_storage.js";
import { TOKEN, USER_SERVICE_URL } from "@/constants/index.js";

const API = axios.create({
  baseURL: USER_SERVICE_URL,
  params: {}, // do not remove this, its added to add params later in the config
});

API.interceptors.request.use(
  (config) => {
    const token = localGetItem(TOKEN);
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

export default API;
