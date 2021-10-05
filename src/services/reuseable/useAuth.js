import API from "@/services/api";
import { SET_IS_AUTHENTICATED, SET_PROFILE } from "@/store/actionTypes";
import { useStore } from "vuex";

export function signIn(user) {
  return API.post("/auth/login", { ...user });
}

export function signUp(user) {
  return API.post("/auth", { ...user });
}

export function logout() {
  return API.post("/auth/logout");
}

export async function getProfile() {
  const store = useStore();

  try {
    const { data: profile } = await API.get("auth/user/profile");
    store.dispatch(SET_IS_AUTHENTICATED, true);
    store.dispatch(SET_PROFILE, profile.data);
  } catch (error) {
    console.log([error]);
  }
}
