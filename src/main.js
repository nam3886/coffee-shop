import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import mitt from "mitt";

const emitter = mitt();
console.log(emitter);
const app = createApp(App);
app.config.globalProperties.$EMITTER = emitter;
app.use(store);
app.use(router);
app.provide("emitter", emitter);
app.mount("#app");
