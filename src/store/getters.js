export default {
  getIsAuthenticated: (state) => state.isAuthenticated,

  getProfile: (state) => state.profile,

  getIsNotCustomer: (state) =>
    [("staff", "manager")].includes(state.profile.role),

  getCart: (state) => state.cart,

  getTables: (state) => state.tables,

  getCategories: (state) => state.categories,
};
