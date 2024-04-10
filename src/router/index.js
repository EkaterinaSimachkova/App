// import { markRaw } from "vue";
// import { RouterView } from "vue-router";

import Welcome from "@/layouts/Welcome.vue";
import { createRouter, createWebHistory } from "vue-router";
import {
  LOGIN_PAGE_PATH,
  LOGIN_PAGE_NAME,
  REGISTER_PAGE_PATH,
  REGISTER_PAGE_NAME,
} from "./routes.json";

// export const RouterViewComponent = RouterView;

const routes = [
  {
    path: LOGIN_PAGE_PATH,
    name: LOGIN_PAGE_NAME,
    component: () => import("@/pages/LoginPage"),
    props: true,
    meta: { layout: { component: Welcome } },
  },
  {
    path: REGISTER_PAGE_PATH,
    name: REGISTER_PAGE_NAME,
    component: () => import("@/pages/RegisterPage"),
    meta: { layout: { component: Welcome } },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
