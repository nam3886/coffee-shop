import { SET_IS_AUTHENTICATED, SET_PROFILE } from "@/store/actionTypes";

export default {
  setIsAuthenticated({ commit }, payload) {
    commit(SET_IS_AUTHENTICATED, payload);
  },

  setProfile({ commit }, payload) {
    commit(SET_PROFILE, payload);
  },
};
