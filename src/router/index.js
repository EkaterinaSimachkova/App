// import { markRaw } from "vue";
// import { RouterView } from "vue-router";

import { Default, Plain, Welcome } from "@/layouts";
import { createRouter, createWebHistory } from "vue-router";
import {
  LOGIN_PAGE_PATH,
  LOGIN_PAGE_NAME,
  REGISTER_PAGE_PATH,
  REGISTER_PAGE_NAME,
  USER_PAGE_PATH,
  USER_PAGE_NAME,
  MAIN_PAGE_PATH,
  MAIN_PAGE_NAME,
  TRIP_PAGE_PATH,
  TRIP_PAGE_NAME,
  TRANSACTION_PAGE_PATH,
  TRANSACTION_PAGE_NAME,
  EXPENSES_PAGE_PATH,
  EXPENSES_PAGE_NAME,
  EDIT_TRIP_PAGE_PATH,
  EDIT_TRIP_PAGE_NAME,
  CHARTS_PAGE_PATH,
  CHARTS_PAGE_NAME
} from "./routes.json";

// export const RouterViewComponent = RouterView;

const routes = [
  {
    path: LOGIN_PAGE_PATH,
    name: LOGIN_PAGE_NAME,
    component: () => import("@/pages/LoginPage"),
    meta: { layout: { component: Welcome } },
  },
  {
    path: REGISTER_PAGE_PATH,
    name: REGISTER_PAGE_NAME,
    component: () => import("@/pages/RegisterPage"),
    meta: { layout: { component: Welcome } },
  },
  {
    path: MAIN_PAGE_PATH,
    name: MAIN_PAGE_NAME,
    component: () => import("@/pages/MainPage"),
    meta: { layout: { component: Default }, title: "Главная" },
  },
  {
    path: CHARTS_PAGE_PATH,
    name: CHARTS_PAGE_NAME,
    component: () => import("@/pages/ChartsPage"),
    meta: { layout: { component: Default }, title: "Аналитика" },
  },
  {
    path: USER_PAGE_PATH,
    name: USER_PAGE_NAME,
    component: () => import("@/pages/UserPage"),
    meta: { layout: { component: Default }, title: "Профиль" },
  },
  {
    path: EXPENSES_PAGE_PATH,
    name: EXPENSES_PAGE_NAME,
    component: () => import("@/pages/ExpensesPage"),
    meta: { layout: { component: Default }, title: "Расходы" },
  },
  {
    path: TRANSACTION_PAGE_PATH,
    name: TRANSACTION_PAGE_NAME,
    component: () => import("@/pages/TransactionPage"),
    meta: { layout: { component: Plain } },
  },
  {
    path: TRIP_PAGE_PATH,
    name: TRIP_PAGE_NAME,
    component: () => import("@/pages/TripPage"),
    meta: { layout: { component: Plain } },
  },
  {
    path: EDIT_TRIP_PAGE_PATH,
    name: EDIT_TRIP_PAGE_NAME,
    component: () => import("@/pages/EditTripPage"),
    meta: { layout: { component: Plain } },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
