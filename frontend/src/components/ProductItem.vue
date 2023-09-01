<template>
  <div class="product">
    <img :src="imgPath" alt="product" />
    <div class="product-text">
      <span>Размер устройства : {{ product.size }} </span>
      <span>Колличество напитков : {{ product.count }}</span>
    </div>
    <div class="counter">
      <button @click="decrement">-</button>
      <p @click="selectCount" v-show="!openInput">{{ counter }}</p>
      <input
        v-focus
        @blur="saveCount"
        type="number"
        v-if="openInput"
        :value="counter"
        v-on:keyup.enter="saveCount"
      />
      <button @click="increment">+</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType, ref } from "vue";

import { IOptions } from "../types/types";

const props = defineProps({
  product: {
    type: Object as PropType<IOptions>,
    required: true,
    default: () => ({}),
  },
});
const counter = ref(1);
const openInput = ref(false);

const increment = () => {
  counter.value++;
};

const decrement = () => {
  if (counter.value > 1) counter.value--;
};

const selectCount = () => {
  openInput.value = true;
};

const saveCount = (event: Event) => {
  const el = event.target as HTMLFormElement;
  if (el.value > 0) {
    counter.value = el.value.replace(/^0+/, "");
    openInput.value = false;
  }
};

const imgPath = computed(() =>
  props.product.size === "Стандартный"
    ? "../../public/images/small.jpeg"
    : "../../public/images/big.jpg"
);

</script>
<style scoped lang="sass">
@mixin item-main
  border: 1px solid gray
  background-color: white

@mixin hover-item
  background-color: #8695ff
  color: white

*
  box-sizing: border-box
  padding: 0
  margin: 0

.counter
  display: flex
  align-items: center
  gap: 10px
  padding: 10px 24px 10px 0
  button
    width: 15px
  input
    width: 30px

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button
    display: none
    -webkit-appearance: none
    margin: 0

.product
  padding: 10px
  display: flex
  align-items: center
  margin-bottom: 20px
  @include item-main
  justify-content: space-between
  flex-wrap: wrap
  img
    width: 70px
    height: 70px
    object-fit: contain
    margin-right: 10px
  .product-text
    display: flex
    flex-direction: column
    padding: 10px 24px 10px 0
</style>
