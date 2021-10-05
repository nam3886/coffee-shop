import { createStore } from "vuex";
import actions from "@/store/actions";
import mutations from "@/store/mutations";
import getters from "@/store/getters";

export default createStore({
  state: {
    isAuthenticated: false,
    profile: {},
  },
  getters,
  actions,
  mutations,
});
