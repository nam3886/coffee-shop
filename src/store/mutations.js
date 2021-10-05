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
};
