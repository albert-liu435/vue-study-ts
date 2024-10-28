// import "./assets/main.css";

import "./index.css";
import { createApp } from "vue";

import { createPinia } from "pinia";

import App from "./AppRefs.vue";

const app = createApp(App);
const pinia = createPinia();

// 将pinia实例挂载到app对象中
app.use(pinia);
app.mount("#app");
