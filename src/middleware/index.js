import { localGetItem } from "@/helpers/local_storage";
import { TOKEN } from "@/constants";

export function fromLogin(to, from, next) {
  if (from.name === "login") next();
  else next({ name: "login" });
}

export function isAuth(to, from, next) {
  const token = localGetItem(TOKEN);
  token ? next() : next({ name: "login" });
}

export function isGuest(to, from, next) {
  const token = localGetItem(TOKEN);
  token ? next({ name: "home" }) : next();
}
