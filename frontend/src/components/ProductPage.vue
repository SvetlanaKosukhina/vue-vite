<template>
  <div class="container">
    <h2>Размер устройства : {{ options.size }}</h2>
    <h2>Колличество напитков : {{ options.count }}</h2>
    <div class="image">
      <img :src="imgPath" alt="product" />
    </div>
    <div class="parent">
      <h3>Выберете размер устройства</h3>
      <div @click="toggleSize" class="select">
        {{ options.size }}
      </div>
      <ul v-show="openSize" class="select-items">
        <li @click="selectSize">Увеличенный</li>
        <li @click="selectSize">Стандартный</li>
      </ul>
    </div>
    <div class="parent">
      <h3>Выберете колличество напитков</h3>
      <div @click="toggleCount" class="select">
        {{ options.count }}
      </div>
      <ul v-show="openCount" class="select-items" v-for="count in countArr">
        <li @click="selectCount">{{ count }}</li>
      </ul>
    </div>
    <div class="actions-button">
      <button class="add-button" @click="productStore.addProduct(options)">
        Добавить в хранилище
      </button>
      <button @click="router.push('/cart')" class="cart">
        Корзина
        {{ productStore.state.optionsArr.length }}
      </button>
    </div>
    <div v-show="productStore.state.error" class="error-content">
      <my-alert v-for="err in productStore.state.error">
        {{ err }}
      </my-alert>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import { useRouter } from "vue-router";

import { useProductStore } from "../store/productStore";

const productStore = useProductStore();
const router = useRouter();

const countArr = [6, 8, 12];
const options = reactive({
  size: "Стандартный",
  count: "6",
});

const openSize = ref(false);
const openCount = ref(false);

const imgPath = computed(() =>
  options.size === "Стандартный"
    ? "../../public/images/small.jpeg"
    : "../../public/images/big.jpg"
);

const selectSize = (event: Event) => {
  const el = event.target as HTMLFormElement;
  options.size = el.textContent;
  openSize.value = !openSize.value;
};
const selectCount = (event: Event) => {
  const el = event.target as HTMLFormElement;
  options.count = el.textContent;
  openCount.value = !openCount.value;
};

const toggleSize = () => {
  openSize.value = !openSize.value;
};

const toggleCount = () => {
  openCount.value = !openCount.value;
};
</script>

<style scoped lang="sass">
@mixin hover-item
  background-color: #8695ff
  color: white

@mixin item-main
  border: 1px solid gray
  width: 200px
  background-color: white

*
  box-sizing: border-box
  padding: 0
  margin: 0

.container
  margin: 0 auto
  max-width: 900px
.parent
  position: relative
  margin-top: 40px
h3, h2
  margin-bottom: 20px

.image
  width: 500px
  height: 300px
  img
    width: 100%
    height: 100%
    object-fit: contain

.added-success
  display: flex
  align-items: center
  margin-top: 20px
  img
    width: 30px
.select
  @include item-main
  height: 40px
  padding: 10px
  cursor: pointer
  background:  95% / 10% no-repeat url("../../public/images/arrow.png")
.select-items
  position: relative
  @include item-main
  top: 0
  left: 0
  list-style: none
  li
    padding: 10px
    cursor: pointer
  li:hover
    @include hover-item
  li:not(.select-items > li:last-child)
    border-bottom: 1px solid gray

.select:hover,
.add-button:hover,
.cart:hover
  @include hover-item
  border: 1px solid #8695ff

.add-button, .cart
  @include item-main
  height: 40px

.modal-message
  margin-top: 20px
  height: 40px
  display: flex
  justify-content: center
  align-items: center
  border-radius: 10px
  width: 200px
  background-color: #89b0eb

.actions-button
  max-width: 500px
  display: flex
  justify-content: space-between
  margin-top: 20px

.cart
  padding: 0 20px
  text-align: left
  background:  97% / 15% no-repeat url("../../public/images/cart.png"), white

.error-content
  top: 20px
  right: 20px
  position: fixed
</style>
