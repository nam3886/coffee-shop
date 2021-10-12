import API from "@/services/api";
import { handleCallApi } from "@/services/reuseable/handleCallApi";

export function signIn(user) {
  return handleCallApi("post", "/auth/login", { ...user }, false);
}

export function signUp(user) {
  return handleCallApi("post", "/auth", { ...user }, false);
}

export function logout() {
  return API.post("/auth/logout");
}

export function getProfile() {
  return API.get("auth/user/profile");
}
