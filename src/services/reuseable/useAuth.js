import API from "@/services/api";

export function signIn(user) {
  return API.post("/auth/login", { ...user });
}

export function signUp(user) {
  return API.post("/auth", { ...user });
}

export function logout() {
  return API.post("/auth/logout");
}

export function getProfile() {
  return API.get("auth/user/profile");
}
