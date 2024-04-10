import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
// import router from './router/router'
import { Quasar } from "quasar";
import quasarUserOptions from "./quasar-user-options";
import { createPinia } from "pinia";
import router from "@/router/index";
createApp(App)
  .use(Quasar, quasarUserOptions)
  .use(router)
  .use(createPinia())
  .mount("#app");
