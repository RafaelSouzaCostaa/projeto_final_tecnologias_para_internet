import VueRouter from "vue-router";
import { createApp } from "vue";

import Home from "./src/screen/ScreenHome.vue";

const Home = { template: Home };

const routes = [{ path: "/", component: Home }];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

const app = createApp({});

app.use(router);

app.mount("#app");
