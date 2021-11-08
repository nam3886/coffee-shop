export default {
  setIsAuthenticated(state, payload) {
    state.isAuthenticated = payload;
  },

  setProfile(state, payload) {
    state.profile = { ...payload };
  },

  setCart(state, payload) {
    state.cart = { ...payload };
  },

  setTables(state, payload) {
    state.tables = [...payload];
  },

  setCategories(state, payload) {
    state.categories = [...payload];
  },
};
