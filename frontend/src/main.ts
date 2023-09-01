import { createApp } from "vue";
import { createPinia } from "pinia";

import components from "./components/UI";
import router from "./router";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

app.directive("focus", {
  mounted: (el: HTMLElement) => el.focus(),
});

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(pinia);
app.use(router);

app.mount("#app");
