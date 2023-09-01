<template>
  <div
    v-if="productStore.state.loading"
    class="loader"
  >
    Пожалуйста подождите...
  </div>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";

import { useProductStore } from "./store/productStore";

const productStore = useProductStore();
onMounted(() => {
  productStore.getAllProducts();
  });
</script>

<style scoped lang="sass">
.loader
  position: absolute
  top:0
  left:0
  bottom:0
  right:0
  background-color: grey
  display: flex
  align-items: center
  justify-content: center
  color: white
  font-size: 20px
</style>
