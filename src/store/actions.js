import * as ACTION from "@/store/actionTypes";

export default {
  setIsAuthenticated({ commit }, payload) {
    commit(ACTION.SET_IS_AUTHENTICATED, payload);
  },

  setProfile({ commit }, payload) {
    commit(ACTION.SET_PROFILE, payload);
  },

  setCart({ commit }, payload) {
    commit(ACTION.SET_CART, payload);
  },

  setTables({ commit }, payload) {
    commit(ACTION.SET_TABLES, payload);
  },
};
