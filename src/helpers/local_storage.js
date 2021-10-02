export const localGetItem = function (key) {
  return localStorage.getItem(key) || null;
};

export const localSetItem = function (key, value) {
  localStorage.setItem(key, value);
};

export const localRemoveItem = function (key) {
  localStorage.removeItem(key);
};
