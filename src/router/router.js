import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "@/pages/LoginPage.vue";
import RegisterPage from "@/pages/RegisterPage.vue";
import MainPage from "@/pages/MainPage.vue";
import UserPage from "@/pages/UserPage.vue";
import ExpensesPage from "@/pages/ExpensesPage.vue";
import ComponentsExample from "@/example/ComponentsExample.vue";
import CardsExample from "@/example/CardsExample.vue";
import ItemsExample from "@/example/ItemsExample.vue";
import DialogsExample from "@/example/DialogsExample.vue";
import TripPage from "@/pages/TripPage.vue";
import EditTripPage from "@/pages/EditTripPage.vue";
import TransactionPage from "@/pages/TransactionPage.vue";

const routes = [
  {
    path: "/ComponentsExample",
    name: "ComponentsExample",
    component: ComponentsExample,
  },
  {
    path: "/CardsExample",
    name: "CardsExample",
    component: CardsExample,
  },
  {
    path: "/ItemsExample",
    name: "ItemsExample",
    component: ItemsExample,
  },
  {
    path: "/DialogsExample",
    name: "DialogsExample",
    component: DialogsExample,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterPage,
  },
  {
    path: "/main",
    name: "main",
    component: MainPage,
  },
  {
    path: "/expenses",
    name: "expenses",
    component: ExpensesPage,
  },
  {
    path: "/user",
    name: "user",
    component: UserPage,
  },
  {
    path: "/trip",
    name: "trip",
    component: TripPage,
  },
  {
    path: "/edit-trip",
    name: "edit-trip",
    component: EditTripPage,
  },
  {
    path: "/transaction",
    name: "transaction",
    component: TransactionPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
