import { createRouter, createWebHistory } from "vue-router";

import ProductPage from '../components/ProductPage.vue'
import ProductCart from '../components/ProductCart.vue'

const routes = [
  {
    path: "/",
    component: ProductPage,
  },
  {
    path: "/cart",
    component: ProductCart,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;