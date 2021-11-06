import { createStore } from "vuex";
import actions from "@/store/actions";
import mutations from "@/store/mutations";
import getters from "@/store/getters";
import { localGetItem } from "@/helpers/local_storage.js";
import { TOKEN } from "@/constants/index.js";

const token = localGetItem(TOKEN);
const isAuthenticated = token !== null && token !== "" && token !== undefined;

export default createStore({
  state: {
    isAuthenticated,
    profile: {},
    cart: {},
    tables: [],
  },
  getters,
  actions,
  mutations,
});
