import { createRouter, createWebHistory } from "vue-router";
import ComponentsExample from "@/example/ComponentsExample.vue";
import CardsExample from "@/example/CardsExample.vue";
import ItemsExample from "@/example/ItemsExample.vue";
import DialogsExample from "@/example/DialogsExample.vue";

import { Default, Plain, Welcome } from "@/layouts";
const routes = [
  {
    path: "/ComponentsExample",
    name: "ComponentsExample",
    component: ComponentsExample,
    meta: { layout: { component: Plain } },
  },
  {
    path: "/CardsExample",
    name: "CardsExample",
    component: CardsExample,
    meta: { layout: { component: Plain } },
  },
  {
    path: "/ItemsExample",
    name: "ItemsExample",
    component: ItemsExample,
    meta: { layout: { component: Plain } },
  },
  {
    path: "/DialogsExample",
    name: "DialogsExample",
    component: DialogsExample,
    meta: { layout: { component: Plain } },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
