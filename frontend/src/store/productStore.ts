import { computed, reactive } from "vue";
import { defineStore } from "pinia";

import api from "../api";
import { IOptions, IOptionsStoreState } from "../types/types";

export const useProductStore = defineStore("productStore", () => {
  const state = reactive<IOptionsStoreState>({
    optionsArr: [],
    loading: false,
    error: [],
  });

  const getAllProducts = async () => {
    try {
      state.loading = true;
      const { data } = await api.get("/product");
      state.optionsArr = data;
    } catch (err: unknown) {
      state.error.push(err);
      setTimeout(() => {
        state.error = [];
      }, 5000);
    } finally {
      state.loading = false;
    }
  };

  const addProduct = async (options: IOptions) => {
    try {
      state.loading = true;
      await api.post("/product/addProduct", options);
      getAllProducts();
    } catch (err: unknown) {
      state.error.push(err);
      setTimeout(() => {
        state.error = [];
      }, 5000);
    } finally {
      state.loading = false;
    }
  };

  const bigSizeProductArr = computed(() => {
    return state.optionsArr.filter((item: IOptions) => item.size === "Увеличенный")
  });
  const smallSizeProductArr = computed(() => {
    return state.optionsArr.filter((item: IOptions) => item.size === "Стандартный")
  });
  return {
    state,
    getAllProducts,
    addProduct,
    bigSizeProductArr,
    smallSizeProductArr,
  };
});
