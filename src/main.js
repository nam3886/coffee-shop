import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import mitt from "mitt";
import Button from "@/components/buttons/Button.vue";
import Alert from "@/components/Alert.vue";
import Loading from "@/components/Loading.vue";
import Image from "@/components/Image.vue";
import ProductImage from "@/features/Home/ProductImage";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

const emitter = mitt();
const app = createApp(App);
app.config.globalProperties.$EMITTER = emitter;
app.config.globalProperties.$BASE_URL = "http://localhost:8080";
app.use(store);
app.use(router);
app.component("VImg", Image);
app.component("VButton", Button);
app.component("VAlert", Alert);
app.component("VProductImg", ProductImage);
app.component("VLoading", Loading);
app.component("VSelect", vSelect);
app.provide("emitter", emitter);
app.mount("#app");
