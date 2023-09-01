<template>
  <div class="container">
    <button
      class="button-back"
      @click="router.push('/')"
    >
      Вернуться на главную страницу
    </button>
    <div
      v-if="!productStore.bigSizeProductArr.length
        && !productStore.smallSizeProductArr.length"
      class="empty-message"
    >
      В вашей корзине ничего нет
    </div>
    <div class="columns">
      <div
        v-show="productStore.bigSizeProductArr.length"
        class="columns-item"
      >
        <h4>Увеличенный размер</h4>
        <product-item
          v-for="product in productStore.bigSizeProductArr"
          :key="product.id"
          :product="product"
        />
      </div>
      <div
        v-show="productStore.smallSizeProductArr.length"
        class="columns-item"
      >
        <h4>Стандартный размер</h4>
        <product-item
          v-for="product in productStore.smallSizeProductArr"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

import ProductItem from "../components/ProductItem.vue";
import { useProductStore } from "../store/productStore";

const router = useRouter();
const productStore = useProductStore();

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
  .columns
    display: flex
    .columns-item
      padding: 20px

.button-back
  @include item-main
  margin-left: 20px

.button-back:hover
  @include hover-item

.empty-message
  margin: 20px
</style>
