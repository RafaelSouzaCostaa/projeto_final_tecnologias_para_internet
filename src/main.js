import { createApp } from "vue";
import App from "./App.vue";

import router from "../src/routes/router";

createApp(App).use(router).mount("#app");
