import { onMounted, reactive } from "vue";
import { defineStore } from "pinia";

import api from "../api";
import { IOptions, IOptionsStoreState } from "../types/types";


export const useProductStore = defineStore("productStore", () => {
  const state = reactive<IOptionsStoreState>({
    optionsArr: [],
    loading: false,
    error: [],
  })

  const getAllProducts = async () => {
    try {
      state.loading = true;
      const { data } = await api.get('/product');
      state.optionsArr = data
    } catch (err: unknown) {
      state.error.push(err);
    } finally {
      setTimeout(()=> {
        state.error = [];
      }, 5000)
      state.loading = false;
    }
  };

  const addProduct = async (options: IOptions) => {
    try {
      state.loading = true;
      await api.post('/product/addProduct', options)
      getAllProducts();
    } catch (err: unknown) {
      state.error.push(err);
    } finally {
      setTimeout(()=> {
        state.error = [];
      }, 5000)
      state.loading = false;
    }
  }
  onMounted(() => {
    getAllProducts();
  });
  return {
    state,
    getAllProducts,
    addProduct,
  };
});