import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Chartkick from "vue-chartkick";
import "chartkick/chart.js";

const app = createApp(App);
//using chartkick
app.use(Chartkick); 
app.use(router);
app.mount("#app");
