import { createRouter, createWebHistory } from "vue-router";

import ScreenHome from "../screen/ScreenHome.vue";
import ScreenTeste from "../screen/ScreenTeste.vue";

const routes = [
    { path: "/", name: "home", component: ScreenHome },
    { path: "/teste", name: "teste", component: ScreenTeste },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
