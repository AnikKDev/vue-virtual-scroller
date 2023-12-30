import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import VueVirtualScroller from "vue-virtual-scroller";
import router from "./router";

const app = createApp(App);

app.use(router);
app.use(VueVirtualScroller);
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
app.mount("#app");
