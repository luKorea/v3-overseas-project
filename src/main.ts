import { createApp } from "vue";

import "lib-flexible/flexible";
import "normalize.css";
import "animate.css";
import "./assets/style/index.less";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import globalRegister from "@/global";
import registerI18n from "./language/register-i18n";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(registerI18n);
app.use(globalRegister);
app.mount("#app");
