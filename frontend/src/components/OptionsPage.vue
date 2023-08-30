<template>
  <div class="container">
    <h2>Размер устройства : {{ size }} </h2>
    <h2>Колличество напитков : {{ count }}</h2>
    <div class="image">
      <img v-if="size === 'Стандартный'" src="../../public/small.jpeg" alt="">
      <img v-if="size === 'Увеличенный'" src="../../public/big.jpg" alt="">
    </div>
    <div class="parent">
      <h3>Выберете размер устройства</h3>
      <div @click="toggleSize" class="select">
        {{size}}
      </div>
      <ul v-show="openSize" class="select-items">
        <li @click="selectSize">Увеличенный</li>
        <li @click="selectSize">Стандартный</li>
      </ul>
    </div>
    <div class="parent">
      <h3>Выберете колличество напитков</h3>
      <div @click="toggleCount" class="select">
        {{count}}
      </div>
      <ul v-show="openCount" class="select-items">
        <li @click="selectCount">6</li>
        <li @click="selectCount">8</li>
        <li @click="selectCount">12</li>
      </ul>
    </div>
    <div>
      <button class="add-button">Добавить в хранилище</button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  
  const size = ref("Стандартный");
  const count = ref(6);
  const openSize = ref(false);
  const openCount = ref(false);

  function selectSize(event) {
    size.value = event.target.textContent;
    openSize.value = !openSize.value
  }
  function selectCount(event) {
    count.value = event.target.textContent;
    openCount.value = !openCount.value
  }
  function toggleSize() {
    openSize.value = !openSize.value
  }
  function toggleCount() {
    openCount.value = !openCount.value
  }
</script>

<style scoped lang="sass">
*
  box-sizing: border-box

.container
  margin: 0 auto
  max-width: 900px
.parent
  position: relative

.image
  width: 500px
  height: 300px

.image > img
  width: 100%
  height: 100%
  object-fit: contain

.select
  border: 1px solid gray
  width: 200px
  height: 40px
  padding: 10px
  cursor: pointer
  background:  95% / 10% no-repeat url("../../public/arrow.png")
.select-items
  position: relative
  border: 1px solid gray
  width: 200px
  padding: 0
  margin: 0
  top: 0
  left: 0
  list-style: none
.select-items > li
  padding: 10px
  cursor: pointer
.select-items > li:hover, .select:hover, .add-button:hover
  background-color: #8695ff
  color: white
.select-items > li:not(.select-items > li:last-child)
  border-bottom: 1px solid gray
.add-button
  margin-top: 20px  
  border: 1px solid gray
  width: 200px
  height: 40px
  background-color: white

</style>
