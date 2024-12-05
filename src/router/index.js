import { createRouter, createWebHistory } from "vue-router";
import AuthLogin from "../components/Auth/AuthLogin.vue";
import AuthRegister from "../components/Auth/AuthRegister.vue";
import Dashboard from "../views/MainDashboard.vue";
import ShareMarket from "../views/ShareMarket.vue";
import WeatherForecast from "../views/WeatherForecast.vue";
import CurrencyExchange from "../views/CurrencyExchange.vue";
import CryptoMarket from "../views/CryptoMarket.vue";

const routes = [
  { path: "/", component: AuthLogin },
  { path: "/register", component: AuthRegister },
  { path: "/dashboard", component: Dashboard, meta: { requiresAuth: true } },
  { path: "/share-market", component: ShareMarket , meta: { requiresAuth: true } },
  { path: "/weather-forecast", component: WeatherForecast, meta: { requiresAuth: true } },
  { path: "/currency-exchange", component: CurrencyExchange , meta: { requiresAuth: true } },
  { path: "/crypto-market", component: CryptoMarket , meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("token");
  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/");
  } else {
    next();
  }
});

export default router;
