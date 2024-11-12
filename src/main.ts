// import "./assets/main.css";

import "./index.css";
import { createApp } from "vue";

//全局 引入
import dayjs from "dayjs";

import App from "./App.vue";

const app = createApp(App);

app.config.globalProperties.$dayjs = dayjs;

app.mount("#app");
