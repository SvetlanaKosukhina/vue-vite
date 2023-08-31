<template>
  <div class="container">
    <div>
      <product-item v-for="product in productStore.state.optionsArr" :product="product" :key="product.id"/>  
    </div>
    <button @click="router.push('/')" class="button-back">Вернуться на главную страницу</button>
  </div>
</template>

<script setup lang="ts">
  import { useRouter } from "vue-router";
  import ProductItem from '../components/ProductItem.vue'
  import { useProductStore } from "../store/productStore";

  
  const router = useRouter();
  const productStore = useProductStore()
  


 
</script>
<style scoped lang="sass">
@mixin item-main
  border: 1px solid gray
  background-color: white
  
@mixin hover-item
  background-color: #8695ff
  color: white

@mixin item-main
  border: 1px solid gray
  width: 400px
  height: 40px
  background-color: white

*
  box-sizing: border-box
  padding: 0
  margin: 0

.container
  margin: 0 auto
  max-width: 900px

.button-back
  @include item-main
.button-back:hover
  @include hover-item
</style>