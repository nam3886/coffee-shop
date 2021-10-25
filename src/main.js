import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import mitt from "mitt";
import Button from "@/components/Button.vue";
import Alert from "@/components/Alert.vue";
import ProductImage from "@/features/Home/ProductImage";

const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.$EMITTER = emitter;
app.use(store);
app.use(router);
app.component("VButton", Button);
app.component("VAlert", Alert);
app.component("VProductImg", ProductImage);
app.provide("emitter", emitter);
app.mount("#app");
