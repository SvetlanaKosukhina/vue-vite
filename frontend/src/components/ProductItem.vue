<template>
 <div class="product">
    <img :src="imgPath" alt="product">
    <span>Размер устройства : {{ product.size }} </span>
    <span>Колличество напитков : {{ product.count }}</span>
    <div class="counter">
      <button @click="decrement">-</button>
      <p @click="selectCount" v-show="!openInput">{{ counter }}</p>
      <input @blur="saveCount" type="number" v-show="openInput" :value="counter">
      <button @click="increment">+</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type PropType, ref } from "vue";

import { IOptions } from "../types/types";
const counter = ref(0)
const openInput = ref(false)
const props = defineProps({
product: {
  type: Object as PropType<IOptions>,
  required: true,
  default: () => ({}),
},
});

const increment = () => {
  counter.value++
}
const decrement = () => {
  if(counter.value > 1) counter.value--
}
const selectCount = () => {
  openInput.value = true
}

const saveCount = (event :Event) => {
  const el = event.target as HTMLInputElement
  counter.value = el.value
  openInput.value = false
}
const imgPath = computed(() => (
    props.product.size === 'Стандартный' ? "../../public/small.jpeg" : "../../public/big.jpg"
  ))
 
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
  max-width: 600px
  justify-content: space-between
  img
    width: 70px
    height: 70px
    object-fit: contain
    margin-right: 10px
  span
    width: 200px
</style>


