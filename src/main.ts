import { createApp } from "vue";
// import 'element-plus/dist/index.css'
import "virtual:svg-icons-register";
import "./style/style.css";
import "./style/index.css";
import "virtual:uno.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.mount("#app");
