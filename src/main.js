import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import mitt from "mitt";
import Button from "@/components/Button.vue";
import Alert from "@/components/Alert.vue";

const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.$EMITTER = emitter;
app.use(store);
app.use(router);
app.component("v-button", Button);
app.component("v-alert", Alert);
app.provide("emitter", emitter);
app.mount("#app");
